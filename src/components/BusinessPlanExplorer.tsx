import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { load as yamlLoad } from 'js-yaml';
import '../styles/Explorer.css';

type NodeType =
  | 'Customer'
  | 'UseCase'
  | 'Product'
  | 'Capability'
  | 'Resource'
  | 'Revenue'
  | 'Cost'
  | 'Risk'
  | 'Metric'
  | 'Partner'
  | 'Competitor';

type Node = {
  id: string;
  label: string;
  type: NodeType;
  tags?: string[];
  note?: string;
};

type Edge = { from: string; to: string };

type ResearchStatus = 'unresearched' | 'in_progress' | 'validated' | 'invalidated';

type Evidence = { title: string; url?: string; date?: string; kind?: string };

type ResearchMeta = {
  status: ResearchStatus;
  tam?: number;
  sam?: number;
  som?: number;
  notes?: string;
  evidence: Evidence[];
  // Competitor metadata (optional, used when type === 'Competitor')
  oss?: boolean;
  license?: string;
  website?: string;
  pricing?: string;
  strengths?: string;
  weaknesses?: string;
};

type ResearchStore = Record<string, ResearchMeta>;

type YamlNode = Node & { meta?: ResearchMeta };

const COLUMN_ORDER: NodeType[] = [
  'Customer',
  'UseCase',
  'Product',
  'Capability',
  'Resource',
  'Revenue',
  'Cost',
  'Risk',
  'Metric',
  'Partner',
  'Competitor',
];

const DEFAULT_NODES: Node[] = [
  // Customers
  { id: 'cust_policyengine', label: 'PolicyEngine Nonprofit', type: 'Customer', tags: ['flagship'] },
  { id: 'cust_gov', label: 'Government Agencies', type: 'Customer', tags: ['public'] },
  { id: 'cust_ai', label: 'AI Companies', type: 'Customer', tags: ['ai'] },
  { id: 'cust_research', label: 'Research Institutes', type: 'Customer', tags: ['academic'] },
  { id: 'cust_fintech', label: 'Fintech Apps', type: 'Customer', tags: ['consumer'] },

  // Use cases
  { id: 'uc_tax_calc', label: 'Tax Calculator', type: 'UseCase' },
  { id: 'uc_benefit', label: 'Benefit Eligibility', type: 'UseCase' },
  { id: 'uc_scoring', label: 'Policy Scoring', type: 'UseCase' },
  { id: 'uc_dist', label: 'Distributional Analysis', type: 'UseCase' },
  { id: 'uc_microdata', label: 'Microdata API', type: 'UseCase' },
  { id: 'uc_ge', label: 'GE Modeling', type: 'UseCase' },
  { id: 'uc_scenarios', label: 'Scenario Planning', type: 'UseCase' },
  { id: 'uc_audit', label: 'Audit Trails', type: 'UseCase' },

  // Product
  { id: 'prod_playground', label: 'Playground', type: 'Product' },
  { id: 'prod_python', label: 'Python SDK', type: 'Product' },
  { id: 'prod_rest', label: 'REST API', type: 'Product' },
  { id: 'prod_hosted', label: 'Hosted Platform', type: 'Product' },
  { id: 'prod_private', label: 'Private Deployment', type: 'Product' },
  { id: 'prod_data_packs', label: 'Data Packs', type: 'Product' },

  // Capability
  { id: 'cap_rules', label: 'Rules Engine', type: 'Capability' },
  { id: 'cap_data', label: 'Microdata Synthesizer', type: 'Capability' },
  { id: 'cap_behavior', label: 'Behavioral Models', type: 'Capability' },
  { id: 'cap_ge', label: 'GE Solver', type: 'Capability' },
  { id: 'cap_validation', label: 'Validation Suite', type: 'Capability' },
  { id: 'cap_versioning', label: 'Versioning', type: 'Capability' },

  // Resources
  { id: 'res_core_eng', label: 'Core Engineering', type: 'Resource' },
  { id: 'res_data_eng', label: 'Data Engineering', type: 'Resource' },
  { id: 'res_econ', label: 'Economists/Modelers', type: 'Resource' },
  { id: 'res_devrel', label: 'DevRel/Docs', type: 'Resource' },
  { id: 'res_sre', label: 'SRE/Ops', type: 'Resource' },
  { id: 'res_design', label: 'Design/UX', type: 'Resource' },

  // Revenue
  { id: 'rev_sla', label: 'Enterprise SLAs', type: 'Revenue' },
  { id: 'rev_custom', label: 'Custom Development', type: 'Revenue' },
  { id: 'rev_private', label: 'Private Extensions', type: 'Revenue' },
  { id: 'rev_training', label: 'Training & Workshops', type: 'Revenue' },

  // Cost
  { id: 'cost_compute', label: 'Compute', type: 'Cost' },
  { id: 'cost_storage', label: 'Storage', type: 'Cost' },
  { id: 'cost_support', label: 'Support', type: 'Cost' },
  { id: 'cost_compliance', label: 'Compliance', type: 'Cost' },

  // Risks
  { id: 'risk_migration', label: 'Migration Complexity', type: 'Risk' },
  { id: 'risk_brand', label: 'Brand Confusion', type: 'Risk' },
  { id: 'risk_quality', label: 'Data Quality', type: 'Risk' },
  { id: 'risk_adoption', label: 'Adoption', type: 'Risk' },

  // Metrics
  { id: 'met_maus', label: 'API MAUs', type: 'Metric' },
  { id: 'met_coverage', label: 'Jurisdiction Coverage', type: 'Metric' },
  { id: 'met_latency', label: 'Run Latency', type: 'Metric' },
  { id: 'met_success', label: 'Success Rate', type: 'Metric' },
  { id: 'met_contribs', label: 'Contributions', type: 'Metric' },

  // Partners
  { id: 'partner_universities', label: 'Universities', type: 'Partner' },
  { id: 'partner_agencies', label: 'Agencies', type: 'Partner' },
  { id: 'partner_foundations', label: 'Foundations', type: 'Partner' },

  // Competitors (high-level; fill details via research panel)
  { id: 'comp_openfisca', label: 'OpenFisca', type: 'Competitor', tags: ['oss'] },
  { id: 'comp_taxcalc', label: 'Tax-Calculator (PSL)', type: 'Competitor', tags: ['oss'] },
  { id: 'comp_taxsim', label: 'NBER TAXSIM', type: 'Competitor' },
  { id: 'comp_euromod', label: 'EUROMOD', type: 'Competitor' },
  { id: 'comp_taxben', label: 'OECD TaxBEN', type: 'Competitor' },
  { id: 'comp_spsdm', label: 'SPSD/M', type: 'Competitor' },
  { id: 'comp_openmpp', label: 'OpenM++', type: 'Competitor', tags: ['oss'] },
  { id: 'comp_liam2', label: 'LIAM2', type: 'Competitor', tags: ['oss'] },
  { id: 'comp_jasmine', label: 'JAS-MINE', type: 'Competitor', tags: ['oss'] },
];

const DEFAULT_EDGES: Edge[] = [
  // Customer -> UseCase
  { from: 'cust_policyengine', to: 'uc_tax_calc' },
  { from: 'cust_policyengine', to: 'uc_scoring' },
  { from: 'cust_policyengine', to: 'uc_dist' },
  { from: 'cust_gov', to: 'uc_scoring' },
  { from: 'cust_gov', to: 'uc_dist' },
  { from: 'cust_gov', to: 'uc_audit' },
  { from: 'cust_ai', to: 'uc_microdata' },
  { from: 'cust_ai', to: 'uc_scenarios' },
  { from: 'cust_research', to: 'uc_microdata' },
  { from: 'cust_research', to: 'uc_ge' },
  { from: 'cust_fintech', to: 'uc_tax_calc' },
  { from: 'cust_fintech', to: 'uc_benefit' },

  // UseCase -> Product
  { from: 'uc_tax_calc', to: 'prod_rest' },
  { from: 'uc_tax_calc', to: 'prod_python' },
  { from: 'uc_benefit', to: 'prod_rest' },
  { from: 'uc_scoring', to: 'prod_python' },
  { from: 'uc_scoring', to: 'prod_hosted' },
  { from: 'uc_dist', to: 'prod_python' },
  { from: 'uc_microdata', to: 'prod_rest' },
  { from: 'uc_ge', to: 'prod_python' },
  { from: 'uc_scenarios', to: 'prod_playground' },
  { from: 'uc_audit', to: 'prod_hosted' },

  // Product -> Capability
  { from: 'prod_rest', to: 'cap_rules' },
  { from: 'prod_rest', to: 'cap_data' },
  { from: 'prod_python', to: 'cap_rules' },
  { from: 'prod_python', to: 'cap_behavior' },
  { from: 'prod_playground', to: 'cap_rules' },
  { from: 'prod_hosted', to: 'cap_validation' },
  { from: 'prod_private', to: 'cap_versioning' },
  { from: 'prod_data_packs', to: 'cap_data' },
  { from: 'uc_ge', to: 'cap_ge' },

  // Capability -> Resource
  { from: 'cap_rules', to: 'res_core_eng' },
  { from: 'cap_data', to: 'res_data_eng' },
  { from: 'cap_behavior', to: 'res_econ' },
  { from: 'cap_ge', to: 'res_econ' },
  { from: 'cap_validation', to: 'res_core_eng' },
  { from: 'cap_versioning', to: 'res_core_eng' },
  { from: 'prod_hosted', to: 'res_sre' },
  { from: 'prod_playground', to: 'res_design' },
  { from: 'prod_python', to: 'res_devrel' },

  // Revenue from Products/Customers
  { from: 'prod_hosted', to: 'rev_sla' },
  { from: 'prod_private', to: 'rev_private' },
  { from: 'cust_gov', to: 'rev_custom' },
  { from: 'cust_ai', to: 'rev_custom' },
  { from: 'prod_playground', to: 'rev_training' },

  // Costs
  { from: 'prod_hosted', to: 'cost_compute' },
  { from: 'prod_hosted', to: 'cost_storage' },
  { from: 'rev_sla', to: 'cost_support' },
  { from: 'prod_private', to: 'cost_compliance' },

  // Risks
  { from: 'res_core_eng', to: 'risk_migration' },
  { from: 'cust_policyengine', to: 'risk_brand' },
  { from: 'cap_data', to: 'risk_quality' },
  { from: 'uc_scoring', to: 'risk_adoption' },

  // Metrics
  { from: 'prod_rest', to: 'met_maus' },
  { from: 'prod_python', to: 'met_maus' },
  { from: 'cap_rules', to: 'met_coverage' },
  { from: 'prod_hosted', to: 'met_latency' },
  { from: 'prod_rest', to: 'met_success' },
  { from: 'partner_universities', to: 'met_contribs' },

  // Partners
  { from: 'cust_research', to: 'partner_universities' },
  { from: 'cust_gov', to: 'partner_agencies' },
  { from: 'cust_policyengine', to: 'partner_foundations' },

  // Competitors -> UseCases (indicative; refine via research)
  { from: 'comp_openfisca', to: 'uc_tax_calc' },
  { from: 'comp_openfisca', to: 'uc_benefit' },
  { from: 'comp_taxcalc', to: 'uc_tax_calc' },
  { from: 'comp_taxsim', to: 'uc_tax_calc' },
  { from: 'comp_euromod', to: 'uc_dist' },
  { from: 'comp_euromod', to: 'uc_scoring' },
  { from: 'comp_taxben', to: 'uc_benefit' },
  { from: 'comp_spsdm', to: 'uc_scoring' },
  { from: 'comp_openmpp', to: 'uc_scenarios' },
  { from: 'comp_liam2', to: 'uc_scenarios' },
  { from: 'comp_jasmine', to: 'uc_ge' },
];

type RectMap = Record<string, DOMRect | undefined>;

const BusinessPlanExplorer: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<string | null>(null);
  const [activeTypes, setActiveTypes] = useState<Record<NodeType, boolean>>(() => {
    const initial: Record<NodeType, boolean> = Object.create(null);
    COLUMN_ORDER.forEach(t => (initial[t] = true));
    return initial;
  });
  const [statusFilter, setStatusFilter] = useState<ResearchStatus | 'all'>('all');
  const [store, setStore] = useState<ResearchStore>({});
  const [nodes, setNodes] = useState<Node[]>(DEFAULT_NODES);
  const [edges, setEdges] = useState<Edge[]>(DEFAULT_EDGES);
  const [investorMode, setInvestorMode] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [rects, setRects] = useState<RectMap>({});

  const nodesByType = useMemo(() => {
    const map: Record<NodeType, Node[]> = Object.create(null);
    COLUMN_ORDER.forEach(t => (map[t] = []));
    nodes.forEach(n => map[n.type].push(n));
    return map;
  }, [nodes]);

  const filteredNodes = useMemo(() => {
    const lower = query.trim().toLowerCase();
    const list = lower
      ? nodes.filter(n => n.label.toLowerCase().includes(lower) || n.tags?.some(t => t.includes(lower)))
      : nodes;
    if (statusFilter === 'all') return list;
    return list.filter(n => (store[n.id]?.status || 'unresearched') === statusFilter);
  }, [query, statusFilter, store]);

  const visibleNodeIds = useMemo(() => new Set(filteredNodes.filter(n => activeTypes[n.type]).map(n => n.id)), [filteredNodes, activeTypes]);

  // Adjacency map for BFS highlighting
  const adjacency = useMemo(() => {
    const map = new Map<string, Set<string>>();
    edges.forEach(e => {
      if (!map.has(e.from)) map.set(e.from, new Set());
      if (!map.has(e.to)) map.set(e.to, new Set());
      map.get(e.from)!.add(e.to);
      map.get(e.to)!.add(e.from);
    });
    return map;
  }, [edges]);

  // Direct neighbors (for the side panel groups)
  const neighborIds = useMemo(() => {
    if (!selected) return new Set<string>();
    return new Set(adjacency.get(selected) ?? []);
  }, [selected, adjacency]);

  // Nodes to keep fully visible: selected node + direct neighbors only
  const highlightIds = useMemo(() => {
    const keep = new Set<string>();
    if (!selected) return keep;
    keep.add(selected);
    const nbrs = adjacency.get(selected);
    if (nbrs) nbrs.forEach(id => keep.add(id));
    return keep;
  }, [selected, adjacency]);

  useLayoutEffect(() => {
    const measure = () => {
      const newRects: RectMap = {};
      Object.entries(nodeRefs.current).forEach(([id, el]) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const containerR = containerRef.current?.getBoundingClientRect();
        if (containerR) {
          const rel = new DOMRect(
            r.left - containerR.left + (containerRef.current?.scrollLeft || 0),
            r.top - containerR.top + (containerRef.current?.scrollTop || 0),
            r.width,
            r.height
          );
          newRects[id] = rel;
        }
      });
      setRects(newRects);
    };
    const raf = requestAnimationFrame(measure);
    const onResize = () => requestAnimationFrame(measure);
    window.addEventListener('resize', onResize);
    const container = containerRef.current;
    container?.addEventListener('scroll', onResize, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      container?.removeEventListener('scroll', onResize as any);
    };
  }, [selected, query, statusFilter, visibleNodeIds.size]);

  // Load nodes/edges YAML and research defaults (from YAML meta)
  useEffect(() => {
    (async () => {
      try {
        const [nodesRes, edgesRes] = await Promise.all([
          fetch('/data/business/nodes.yaml', { cache: 'no-store' }),
          fetch('/data/business/edges.yaml', { cache: 'no-store' }),
        ]);
        if (nodesRes.ok) {
          const text = await nodesRes.text();
          const parsed = yamlLoad(text) as any;
          if (Array.isArray(parsed)) {
            const ns: Node[] = parsed.map((n: YamlNode) => ({ id: n.id, label: n.label, type: n.type as NodeType, tags: n.tags || [], note: n.note }));
            setNodes(ns);
            // seed research store from meta
            const metaSeed: ResearchStore = {};
            (parsed as YamlNode[]).forEach(n => { if (n.meta) metaSeed[n.id] = { ...n.meta, evidence: n.meta.evidence || [] }; });
            setStore(prev => ({ ...metaSeed, ...prev }));
          }
        }
        if (edgesRes.ok) {
          const text = await edgesRes.text();
          const parsed = yamlLoad(text) as any;
          if (Array.isArray(parsed)) {
            const es: Edge[] = parsed.map((e: any) => ({ from: e.from, to: e.to }));
            setEdges(es);
          }
        }
      } catch (e) {
        // fall back silently
      }
    })();
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('bp_research_meta', JSON.stringify(store));
    } catch (_) {
      // ignore quota
    }
  }, [store]);

  const toggleType = (t: NodeType) => setActiveTypes(s => ({ ...s, [t]: !s[t] }));

  const selectedNode = selected ? nodes.find(n => n.id === selected) || null : null;
  const neighbors = useMemo(() => {
    if (!selectedNode) return [] as Node[];
    const ids = neighborIds;
    return nodes.filter(n => ids.has(n.id));
  }, [selectedNode, neighborIds, nodes]);

  const visibleEdges = useMemo(() => {
    if (!selected) return [] as Edge[];
    return edges.filter(e => e.from === selected || e.to === selected).filter(e => visibleNodeIds.has(e.from) && visibleNodeIds.has(e.to));
  }, [selected, visibleNodeIds, edges]);

  // Aggregates for investor snapshot
  const customerNodes = useMemo(() => nodes.filter(n => n.type === 'Customer'), [nodes]);
  const investorSummary = useMemo(() => {
    const ids = customerNodes.map(c => c.id);
    const sum = (key: 'tam'|'sam'|'som') => ids.reduce((acc, id) => {
      const v = (store[id] as any)?.[key];
      return acc + (typeof v === 'number' && isFinite(v) ? v : 0);
    }, 0);
    const statusCount = (s: ResearchStatus) => ids.filter(id => (store[id]?.status || 'unresearched') === s).length;
    const tagCount = (tag: string) => customerNodes.filter(c => (c.tags || []).includes(tag)).length;
    const apiLeads = customerNodes
      .filter(c => (c.tags || []).includes('api'))
      .filter(c => ['validated', 'in_progress'].includes(store[c.id]?.status || 'unresearched'))
      .map(c => ({ id: c.id, label: c.label, tam: (store[c.id] as any)?.tam || 0, status: store[c.id]?.status || 'unresearched' }))
      .sort((a, b) => (b.tam || 0) - (a.tam || 0))
      .slice(0, 5);
    return {
      totals: { tam: sum('tam'), sam: sum('sam'), som: sum('som') },
      counts: {
        customers: customerNodes.length,
        validated: statusCount('validated'),
        inProgress: statusCount('in_progress'),
        segments: customerNodes.filter(c => (c.tags || []).includes('segment')).length,
        api: tagCount('api'),
        us: tagCount('us'), uk: tagCount('uk'), ca: tagCount('ca'),
      },
      leads: apiLeads,
    };
  }, [customerNodes, store]);

  const svgSize = useMemo(() => {
    const c = containerRef.current;
    if (!c) return { w: 0, h: 0 };
    return { w: c.scrollWidth, h: c.scrollHeight };
  }, [rects]);

  const ensureMeta = (id: string): ResearchMeta => {
    return store[id] || { status: 'unresearched', evidence: [] };
  };

  const fieldEvidence = (id: string, kind: string) => ensureMeta(id).evidence.filter(e => (e.kind || '').toLowerCase() === kind.toLowerCase());

  const canSetValidated = (id: string) => {
    const meta = ensureMeta(id);
    if (!meta.evidence || meta.evidence.length === 0) return false;
    const node = nodes.find(n => n.id === id);
    if (node?.type === 'Customer') {
      // If numeric fields are present, require evidence per field
      const needTam = typeof meta.tam === 'number';
      const needSam = typeof meta.sam === 'number';
      const needSom = typeof meta.som === 'number';
      if (needTam && fieldEvidence(id, 'tam').length === 0) return false;
      if (needSam && fieldEvidence(id, 'sam').length === 0) return false;
      if (needSom && fieldEvidence(id, 'som').length === 0) return false;
    }
    if (node?.type === 'Competitor') {
      // If OSS/license/pricing set, require evidence for each
      if (typeof meta.oss !== 'undefined' && fieldEvidence(id, 'oss').length === 0) return false;
      if ((meta.license && meta.license.trim() !== '') && fieldEvidence(id, 'license').length === 0) return false;
      if ((meta.pricing && meta.pricing.trim() !== '') && fieldEvidence(id, 'pricing').length === 0) return false;
    }
    return true;
  };

  // No updates in read-only mode

  // Read-only: editing is removed; evidence and meta come from YAML.

  // Helper to format dates that may be strings or Date objects (from YAML parser)
  const formatDate = (d: any): string => {
    if (!d) return '';
    if (typeof d === 'string') return d;
    try { return (d as Date).toISOString().slice(0, 10); } catch { return String(d); }
  };

  return (
    <div className="explorer">
      <div className="explorer-toolbar">
        <input
          className="explorer-search"
          placeholder="Search nodes (e.g., PolicyEngine, SLAs, Rules)"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <div className="explorer-filters">
          {COLUMN_ORDER.map(t => (
            <button
              key={t}
              className={`chip ${activeTypes[t] ? 'active' : ''}`}
              onClick={() => toggleType(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="explorer-status">
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value as any)}>
            <option value="all">All statuses</option>
            <option value="unresearched">Unresearched</option>
            <option value="in_progress">In Progress</option>
            <option value="validated">Validated</option>
            <option value="invalidated">Invalidated</option>
          </select>
        </div>
        <button className={`chip ${investorMode ? 'active' : ''}`} onClick={() => setInvestorMode(v => !v)}>Investor mode</button>
        {investorMode && (
          <button
            className="chip"
            onClick={() => {
              const customers = customerNodes.map(c => ({
                id: c.id,
                label: c.label,
                tags: c.tags || [],
                status: store[c.id]?.status || 'unresearched',
                tam: (store[c.id] as any)?.tam,
                sam: (store[c.id] as any)?.sam,
                som: (store[c.id] as any)?.som,
              }));
              const payload = {
                generatedAt: new Date().toISOString(),
                totals: investorSummary.totals,
                counts: investorSummary.counts,
                leads: investorSummary.leads,
                customers,
              };
              const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'cosilico_investor_snapshot.json';
              a.click();
              URL.revokeObjectURL(url);
            }}
          >
            Export JSON
          </button>
        )}
        {/* Read-only view: no import/export or editing */}
      </div>

      <div className="explorer-body">
        <div className="explorer-columns" ref={containerRef}>
          {/* SVG overlay for connection lines */}
          <svg className="explorer-lines" width={svgSize.w} height={svgSize.h}>
            {visibleEdges.map((e, i) => {
              const a = rects[e.from];
              const b = rects[e.to];
              if (!a || !b) return null;
              const x1 = a.left + a.width / 2;
              const y1 = a.top + a.height / 2;
              const x2 = b.left + b.width / 2;
              const y2 = b.top + b.height / 2;
              const midX = (x1 + x2) / 2;
              return (
                <path
                  key={i}
                  d={`M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`}
                  className="explorer-edge"
                />
              );
            })}
          </svg>

          {/* Columns */}
          {COLUMN_ORDER.map(type => (
            <div key={type} className="explorer-column">
              <div className="explorer-column-title">{type}</div>
              {nodesByType[type]
                .filter(n => visibleNodeIds.has(n.id))
                .map(n => (
                  <div
                    key={n.id}
                    className={`explorer-node status-${(store[n.id]?.status || 'unresearched')} ${selected === n.id ? 'selected' : ''} ${neighborIds.has(n.id) ? 'neighbor' : ''} ${(selected && !highlightIds.has(n.id)) ? 'dimmed' : ''}`}
                    onClick={() => setSelected(prev => (prev === n.id ? null : n.id))}
                    ref={el => { nodeRefs.current[n.id] = el; }}
                    title={n.note || n.label}
                  >
                    <div className="explorer-node-label">{n.label}</div>
                    <div className="explorer-node-tags">
                      {(n.tags || []).map(t => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                      <span className="tag" title="Research status">{(store[n.id]?.status || 'unresearched').replace('_',' ')}</span>
                      {n.type === 'Competitor' && (
                        <span className="tag" title="Open source status">{store[n.id]?.oss === true ? 'oss' : store[n.id]?.oss === false ? 'proprietary' : 'unknown'}</span>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>

        <aside className="explorer-aside">
          {investorMode ? (
            <div className="investor-snapshot">
              <div className="explorer-aside-header">
                <div className="explorer-aside-type">Investor</div>
                <h3>Investor Snapshot</h3>
              </div>
              <div className="investor-grid">
                <div className="investor-card">
                  <div className="investor-label">Customers</div>
                  <div className="investor-value">{investorSummary.counts.customers}</div>
                  <div className="investor-sub">{investorSummary.counts.validated} validated · {investorSummary.counts.inProgress} in progress</div>
                </div>
                <div className="investor-card">
                  <div className="investor-label">API Customers</div>
                  <div className="investor-value">{investorSummary.counts.api}</div>
                  <div className="investor-sub">Segments: {investorSummary.counts.segments}</div>
                </div>
                <div className="investor-card">
                  <div className="investor-label">Regions</div>
                  <div className="investor-value">US {investorSummary.counts.us} · UK {investorSummary.counts.uk} · CA {investorSummary.counts.ca}</div>
                </div>
              </div>
              {(investorSummary.totals.tam + investorSummary.totals.sam + investorSummary.totals.som) > 0 && (
                <div className="investor-metrics">
                  <div className="investor-metric"><span>TAM</span><strong>{Number(investorSummary.totals.tam).toLocaleString()}</strong></div>
                  <div className="investor-metric"><span>SAM</span><strong>{Number(investorSummary.totals.sam).toLocaleString()}</strong></div>
                  <div className="investor-metric"><span>SOM</span><strong>{Number(investorSummary.totals.som).toLocaleString()}</strong></div>
                </div>
              )}
              {investorSummary.leads.length > 0 && (
                <div className="explorer-neighbor-group" style={{ marginTop: 12 }}>
                  <div className="explorer-neighbor-title">Top API leads</div>
                  <div className="explorer-neighbor-list">
                    {investorSummary.leads.map(l => (
                      <button key={l.id} className="linklike" onClick={() => setSelected(l.id)}>
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="explorer-actions">
                <button className="btn btn-secondary" onClick={() => setInvestorMode(false)}>Close investor mode</button>
              </div>
            </div>
          ) : selectedNode ? (
            <div>
              <div className="explorer-aside-header">
                <div className="explorer-aside-type">{selectedNode.type}</div>
                <h3>{selectedNode.label}</h3>
              </div>
              {selectedNode.note && <p className="explorer-note">{selectedNode.note}</p>}

              {/* Research (read-only) */}
              <div className="research-form">
                <div className="row">
                  <label>Status</label>
                  <div><span className="badge">{(store[selectedNode.id]?.status || 'unresearched').replace('_',' ')}</span></div>
                </div>
                {selectedNode.type === 'Customer' && (
                  <div className="grid">
                    {typeof store[selectedNode.id]?.tam === 'number' && (
                      <div className="col">
                        <label>TAM</label>
                        <div>{store[selectedNode.id]?.tam?.toLocaleString?.() ?? store[selectedNode.id]?.tam}
                          {fieldEvidence(selectedNode.id, 'tam').length === 0 && <span className="tag warn" style={{ marginLeft: 6 }}>needs source</span>}
                        </div>
                        <EvidenceEditor items={fieldEvidence(selectedNode.id, 'tam')} onAdd={() => {}} onRemove={() => {}} compact readonly />
                      </div>
                    )}
                    {typeof store[selectedNode.id]?.sam === 'number' && (
                      <div className="col">
                        <label>SAM</label>
                        <div>{store[selectedNode.id]?.sam?.toLocaleString?.() ?? store[selectedNode.id]?.sam}
                          {fieldEvidence(selectedNode.id, 'sam').length === 0 && <span className="tag warn" style={{ marginLeft: 6 }}>needs source</span>}
                        </div>
                        <EvidenceEditor items={fieldEvidence(selectedNode.id, 'sam')} onAdd={() => {}} onRemove={() => {}} compact readonly />
                      </div>
                    )}
                    {typeof store[selectedNode.id]?.som === 'number' && (
                      <div className="col">
                        <label>SOM</label>
                        <div>{store[selectedNode.id]?.som?.toLocaleString?.() ?? store[selectedNode.id]?.som}
                          {fieldEvidence(selectedNode.id, 'som').length === 0 && <span className="tag warn" style={{ marginLeft: 6 }}>needs source</span>}
                        </div>
                        <EvidenceEditor items={fieldEvidence(selectedNode.id, 'som')} onAdd={() => {}} onRemove={() => {}} compact readonly />
                      </div>
                    )}
                  </div>
                )}
                {selectedNode.type === 'Competitor' && (
                  <div className="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                    <div className="col">
                      <label>Open Source</label>
                      <div>{store[selectedNode.id]?.oss === true ? 'Yes' : store[selectedNode.id]?.oss === false ? 'No' : 'Unknown'}
                        {typeof store[selectedNode.id]?.oss !== 'undefined' && fieldEvidence(selectedNode.id, 'oss').length === 0 && <span className="tag warn" style={{ marginLeft: 6 }}>needs source</span>}
                      </div>
                      <EvidenceEditor items={fieldEvidence(selectedNode.id, 'oss')} onAdd={() => {}} onRemove={() => {}} compact readonly />
                    </div>
                    {((store[selectedNode.id]?.license || '').trim() !== '') && (
                      <div className="col">
                        <label>License</label>
                        <div>{store[selectedNode.id]?.license}
                          {fieldEvidence(selectedNode.id, 'license').length === 0 && <span className="tag warn" style={{ marginLeft: 6 }}>needs source</span>}
                        </div>
                        <EvidenceEditor items={fieldEvidence(selectedNode.id, 'license')} onAdd={() => {}} onRemove={() => {}} compact readonly />
                      </div>
                    )}
                    {((store[selectedNode.id]?.website || '').trim() !== '') && (
                      <div className="col">
                        <label>Website</label>
                        <div><a className="evidence-link" href={store[selectedNode.id]?.website} target="_blank" rel="noreferrer">{store[selectedNode.id]?.website}</a></div>
                      </div>
                    )}
                    {((store[selectedNode.id]?.pricing || '').trim() !== '') && (
                      <div className="col" style={{ gridColumn: 'span 3' }}>
                        <label>Pricing</label>
                        <div>{store[selectedNode.id]?.pricing}
                          {fieldEvidence(selectedNode.id, 'pricing').length === 0 && <span className="tag warn" style={{ marginLeft: 6 }}>needs source</span>}
                        </div>
                        <EvidenceEditor items={fieldEvidence(selectedNode.id, 'pricing')} onAdd={() => {}} onRemove={() => {}} compact readonly />
                      </div>
                    )}
                    {((store[selectedNode.id]?.strengths || '').trim() !== '') && (
                      <div className="col" style={{ gridColumn: 'span 3' }}>
                        <label>Strengths</label>
                        <div className="explorer-note">{store[selectedNode.id]?.strengths}</div>
                      </div>
                    )}
                    {((store[selectedNode.id]?.weaknesses || '').trim() !== '') && (
                      <div className="col" style={{ gridColumn: 'span 3' }}>
                        <label>Weaknesses</label>
                        <div className="explorer-note">{store[selectedNode.id]?.weaknesses}</div>
                      </div>
                    )}
                  </div>
                )}
                {((store[selectedNode.id]?.notes || '').trim() !== '') && (
                  <div className="row">
                    <label>Notes</label>
                    <div className="explorer-note">{store[selectedNode.id]?.notes}</div>
                  </div>
                )}
                <div className="row">
                  <label>Evidence</label>
                  <EvidenceEditor items={ensureMeta(selectedNode.id).evidence} onAdd={() => {}} onRemove={() => {}} readonly />
                </div>
              </div>
              <div className="explorer-neighbors">
                {COLUMN_ORDER.map(t => {
                  const list = neighbors.filter(n => n.type === t);
                  if (!list.length) return null;
                  return (
                    <div key={t} className="explorer-neighbor-group">
                      <div className="explorer-neighbor-title">{t}</div>
                      <div className="explorer-neighbor-list">
                        {list.map(n => (
                          <button key={n.id} className="linklike" onClick={() => setSelected(n.id)}>
                            {n.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="explorer-actions">
                <button className="btn btn-secondary" onClick={() => setSelected(null)}>Clear selection</button>
              </div>
            </div>
          ) : (
            <div className="explorer-aside-empty">
              <h4>Explore the business</h4>
              <p>Filter by type, search, or click any node to see relationships.</p>
              <ul>
                <li>PolicyEngine is the flagship client initially.</li>
                <li>Follow connections to see products, capabilities, and resources.</li>
                <li>Switch focus by clicking another node or clear selection.</li>
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

const EvidenceEditor: React.FC<{
  items: Evidence[];
  onAdd: (e: Evidence) => void;
  onRemove: (idx: number) => void;
  compact?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}> = ({ items, onAdd, onRemove, compact = false, disabled = false, readonly = false }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [date, setDate] = useState<string>('');
  const [kind, setKind] = useState<string>('');
  const formatDate = (d: any): string => {
    if (!d) return '';
    if (typeof d === 'string') return d;
    try { return (d as Date).toISOString().slice(0, 10); } catch { return String(d); }
  };
  return (
    <div className="evidence">
      <div className="evidence-list">
        {items.length === 0 && <div className="muted">No evidence yet.</div>}
        {items.map((e, i) => (
          <div key={i} className="evidence-item">
            <div className="evidence-main">
              <div className="evidence-title">{e.title}</div>
              {e.url && (
                <a href={e.url} target="_blank" rel="noreferrer" className="evidence-link">link</a>
              )}
            </div>
            <div className="evidence-meta">{e.kind ? `[${e.kind}] ` : ''}{formatDate(e.date)}</div>
            {!readonly && (
              <button className="linklike" onClick={() => onRemove(i)} disabled={disabled}>remove</button>
            )}
          </div>
        ))}
      </div>
      {!readonly && (
      <div className="evidence-add" style={{ gridTemplateColumns: compact ? '1.4fr 1.2fr 0.8fr auto' : undefined }}>
        {!compact && (
          <input placeholder="Kind (e.g., tam, sam, som, oss, license, pricing)" value={kind} onChange={e => setKind(e.target.value)} disabled={disabled} />
        )}
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} disabled={disabled} />
        <input placeholder="URL (optional)" value={url} onChange={e => setUrl(e.target.value)} disabled={disabled} />
        <input type="date" placeholder="Date" value={date} onChange={e => setDate(e.target.value)} disabled={disabled} />
        <button
          className="chip"
          onClick={() => {
            if (!title.trim()) return;
            onAdd({ title: title.trim(), url: url.trim() || undefined, date: date || undefined, kind: kind || undefined });
            setTitle(''); setUrl(''); setDate(''); if (!compact) setKind('');
          }}
          disabled={disabled}
        >
          Add
        </button>
      </div>
      )}
    </div>
  );
};

export default BusinessPlanExplorer;
