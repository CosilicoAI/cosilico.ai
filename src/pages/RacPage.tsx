import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import * as styles from "../styles/rac.css";

const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.codeFilenameIcon}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.ctaLinkIcon}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const BackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.ctaLinkIcon}>
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

// Feature icons
const CitationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIconSvg}>
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    <path d="M8 7h8M8 11h8M8 15h4" />
  </svg>
);

const ParameterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIconSvg}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const FormulaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIconSvg}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const TestIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIconSvg}>
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

const ImportIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIconSvg}>
    <path d="M12 5v14M5 12l7 7 7-7" />
  </svg>
);

const VersionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIconSvg}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

type FormatTab = 'rac' | 'dmn' | 'openfisca' | 'catala';
type ExampleType = 'niit' | 'aca-ptc' | 'std-ded' | 'ny-eitc';

const examples: Record<ExampleType, { label: string; citation: string }> = {
  'niit': { label: 'NIIT', citation: '26 USC § 1411(a)' },
  'aca-ptc': { label: 'ACA Premium Tax Credit', citation: '26 USC § 36B(b)(3)(A)' },
  'std-ded': { label: 'Standard Deduction', citation: '26 USC § 63(c)(2)(A)' },
  'ny-eitc': { label: 'NY EITC', citation: 'NY Tax Law § 606(d)' },
};

const formatLabels: Record<FormatTab, string> = {
  rac: 'RAC',
  dmn: 'DMN',
  openfisca: 'OpenFisca/PE',
  catala: 'Catala',
};

const getFilename = (example: ExampleType, format: FormatTab): string[] => {
  const filenames: Record<ExampleType, Record<FormatTab, string[]>> = {
    'niit': {
      rac: ['statute/26/1411/a.rac'],
      dmn: ['niit.dmn'],
      openfisca: [],
      catala: ['niit.catala_en'],
    },
    'aca-ptc': {
      rac: ['statute/26/36B/b/3/A.rac'],
      dmn: ['aca_ptc.dmn'],
      openfisca: [],
      catala: ['aca_ptc.catala_en'],
    },
    'std-ded': {
      rac: ['statute/26/63/c/2/A.rac'],
      dmn: ['standard_deduction.dmn'],
      openfisca: [],
      catala: ['standard_deduction.catala_en'],
    },
    'ny-eitc': {
      rac: ['statute/ny/tax/606/d.rac'],
      dmn: ['ny_eitc.dmn'],
      openfisca: [],
      catala: ['ny_eitc.catala_en'],
    },
  };
  return filenames[example][format];
};

const getNote = (format: FormatTab): string => {
  const notes: Record<FormatTab, string> = {
    rac: 'Single file with everything',
    dmn: 'XML + FEEL expression language',
    openfisca: 'Python + YAML (3 files)',
    catala: 'Literate programming',
  };
  return notes[format];
};

// RAC code with syntax highlighting
const RacCode = ({ example }: { example: ExampleType }) => {
  if (example === 'niit') {
    return (
      <pre className={styles.codePre}>
{`# 26 USC § 1411(a) - Net Investment Income Tax

`}<span className="keyword">text:</span>{` |
  (a) In general.— There is hereby imposed a tax equal to 3.8 percent
  of the lesser of— (1) net investment income, or (2) modified AGI
  in excess of the threshold amount.

`}<span className="keyword">parameter</span>{` `}<span className="variable">niit_rate</span>{`:
  `}<span className="field">description:</span>{` `}<span className="string">"Tax rate on net investment income"</span>{`
  `}<span className="field">unit:</span>{` `}<span className="type">rate</span>{`
  `}<span className="field">values:</span>{`
    `}<span className="number">2013-01-01</span>{`: `}<span className="number">0.038</span>{`

`}<span className="keyword">variable</span>{` `}<span className="variable">net_investment_income_tax</span>{`:
  `}<span className="field">imports:</span>{`
    - `}<span className="string">26/1411/c#net_investment_income</span>{`
    - `}<span className="string">26/1411/b#threshold_amount</span>{`
  `}<span className="field">entity:</span>{` `}<span className="type">TaxUnit</span>{`
  `}<span className="field">period:</span>{` `}<span className="type">Year</span>{`
  `}<span className="field">dtype:</span>{` `}<span className="type">Money</span>{`
  `}<span className="field">formula:</span>{` |
    excess_magi = max(`}<span className="number">0</span>{`, modified_agi - threshold_amount)
    `}<span className="keyword">return</span>{` niit_rate * min(net_investment_income, excess_magi)
  `}<span className="field">tests:</span>{`
    - `}<span className="field">inputs:</span>{` {'{'}modified_agi: `}<span className="number">300000</span>{`, threshold_amount: `}<span className="number">250000</span>{`,
               net_investment_income: `}<span className="number">80000</span>{`{'}'}
      `}<span className="field">expect:</span>{` `}<span className="number">1900</span>{`  `}<span className="comment"># 3.8% × min(80k, 50k)</span>{`
`}
      </pre>
    );
  }
  if (example === 'aca-ptc') {
    return (
      <pre className={styles.codePre}>
{`# 26 USC § 36B(b)(3)(A) - ACA Premium Tax Credit

`}<span className="keyword">text:</span>{` |
  The applicable percentage for any taxpayer whose household
  income is within an income tier shall increase, on a
  sliding scale... from the initial percentage to the final
  percentage for such income tier.

`}<span className="keyword">parameter</span>{` `}<span className="variable">ptc_applicable_pct</span>{`:
  `}<span className="field">description:</span>{` `}<span className="string">"Premium contribution % by FPL tier"</span>{`
  `}<span className="field">values:</span>{`
    `}<span className="number">2021-01-01</span>{`:  `}<span className="comment"># ARPA temporary rates</span>{`
      `}<span className="number">150</span>{`: [`}<span className="number">0.00</span>{`, `}<span className="number">0.00</span>{`]  `}<span className="comment"># up to 150% FPL</span>{`
      `}<span className="number">200</span>{`: [`}<span className="number">0.00</span>{`, `}<span className="number">0.02</span>{`]  `}<span className="comment"># 150-200% FPL</span>{`
      `}<span className="number">250</span>{`: [`}<span className="number">0.02</span>{`, `}<span className="number">0.04</span>{`]
      `}<span className="number">300</span>{`: [`}<span className="number">0.04</span>{`, `}<span className="number">0.06</span>{`]
      `}<span className="number">400</span>{`: [`}<span className="number">0.06</span>{`, `}<span className="number">0.085</span>{`]

`}<span className="keyword">variable</span>{` `}<span className="variable">applicable_percentage</span>{`:
  `}<span className="field">imports:</span>{` [`}<span className="string">26/36B/d#household_income_pct_fpl</span>{`]
  `}<span className="field">entity:</span>{` `}<span className="type">TaxUnit</span>{`
  `}<span className="field">dtype:</span>{` `}<span className="type">Rate</span>{`
  `}<span className="field">formula:</span>{` |
    `}<span className="comment"># Linear interpolation within tier</span>{`
    `}<span className="keyword">return</span>{` interpolate(ptc_applicable_pct, household_income_pct_fpl)
`}
      </pre>
    );
  }
  if (example === 'std-ded') {
    return (
      <pre className={styles.codePre}>
{`# 26 USC § 63(c)(2)(A) - Standard deduction (joint)

`}<span className="keyword">text:</span>{` |
  (A) 200 percent of the dollar amount in effect under
  subparagraph (C) for the taxable year in the case of—
  (i) a joint return, or (ii) a surviving spouse

`}<span className="keyword">parameter</span>{` `}<span className="variable">joint_multiplier</span>{`:
  `}<span className="field">description:</span>{` `}<span className="string">"Multiplier for joint returns"</span>{`
  `}<span className="field">values:</span>{`
    `}<span className="number">1988-01-01</span>{`: `}<span className="number">2</span>{`  `}<span className="comment"># "200 percent"</span>{`

`}<span className="keyword">variable</span>{` `}<span className="variable">basic_std_ded_joint</span>{`:
  `}<span className="field">imports:</span>{` [`}<span className="string">26/63/c/2/C#basic_std_ded_other</span>{`]
  `}<span className="field">entity:</span>{` `}<span className="type">TaxUnit</span>{`
  `}<span className="field">dtype:</span>{` `}<span className="type">Money</span>{`
  `}<span className="field">formula:</span>{` |
    `}<span className="keyword">return</span>{` basic_std_ded_other * joint_multiplier
  `}<span className="field">tests:</span>{`
    - `}<span className="field">inputs:</span>{` {'{'}basic_std_ded_other: `}<span className="number">6350</span>{`{'}'}
      `}<span className="field">expect:</span>{` `}<span className="number">12700</span>{`  `}<span className="comment"># 200% × 6350</span>{`
`}
      </pre>
    );
  }
  // ny-eitc
  return (
    <pre className={styles.codePre}>
{`# NY Tax Law § 606(d) - NY Earned Income Credit

`}<span className="keyword">text:</span>{` |
  § 606(d) For taxable years beginning after 2002, a resident
  individual who is allowed the earned income credit under
  section 32 of the IRC shall be allowed a credit equal to
  thirty percent of such federal credit.

`}<span className="keyword">parameter</span>{` `}<span className="variable">ny_eitc_rate</span>{`:
  `}<span className="field">description:</span>{` `}<span className="string">"NY EITC as % of federal"</span>{`
  `}<span className="field">values:</span>{`
    `}<span className="number">2003-01-01</span>{`: `}<span className="number">0.30</span>{`  `}<span className="comment"># "thirty percent"</span>{`

`}<span className="keyword">variable</span>{` `}<span className="variable">ny_eitc</span>{`:
  `}<span className="field">imports:</span>{` [`}<span className="string">26/32#eitc</span>{` `}<span className="keyword">as</span>{` `}<span className="variable">federal_eitc</span>{`]
  `}<span className="field">entity:</span>{` `}<span className="type">TaxUnit</span>{`
  `}<span className="field">dtype:</span>{` `}<span className="type">Money</span>{`
  `}<span className="field">formula:</span>{` |
    `}<span className="keyword">return</span>{` federal_eitc * ny_eitc_rate
  `}<span className="field">tests:</span>{`
    - `}<span className="field">inputs:</span>{` {'{'}federal_eitc: `}<span className="number">5000</span>{`{'}'}
      `}<span className="field">expect:</span>{` `}<span className="number">1500</span>{`  `}<span className="comment"># 30% × 5000</span>{`
`}
    </pre>
  );
};

// DMN code with syntax highlighting
const DmnCode = ({ example }: { example: ExampleType }) => {
  if (example === 'niit') {
    return (
      <pre className={styles.codePre}>
<span className="comment">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span>{`
`}<span className="tag">&lt;definitions</span>{` `}<span className="field">name</span>{`=`}<span className="string">"NIIT"</span>{`&gt;
  `}<span className="tag">&lt;inputData</span>{` `}<span className="field">id</span>{`=`}<span className="string">"modified_agi"</span>{`/&gt;
  `}<span className="tag">&lt;inputData</span>{` `}<span className="field">id</span>{`=`}<span className="string">"net_investment_income"</span>{`/&gt;
  `}<span className="tag">&lt;inputData</span>{` `}<span className="field">id</span>{`=`}<span className="string">"threshold_amount"</span>{`/&gt;

  `}<span className="tag">&lt;decision</span>{` `}<span className="field">id</span>{`=`}<span className="string">"niit"</span>{` `}<span className="field">name</span>{`=`}<span className="string">"Net Investment Income Tax"</span>{`&gt;
    `}<span className="tag">&lt;literalExpression&gt;</span>{`
      `}<span className="tag">&lt;text&gt;</span>{`
        `}<span className="number">0.038</span>{` * min(net_investment_income,
                    max(`}<span className="number">0</span>{`, modified_agi - threshold_amount))
      `}<span className="tag">&lt;/text&gt;</span>{`
    `}<span className="tag">&lt;/literalExpression&gt;</span>{`
  `}<span className="tag">&lt;/decision&gt;</span>

  <span className="comment">&lt;!-- Where does 0.038 come from? When did it take effect?
       What's the legal citation? DMN doesn't say. --&gt;</span>
<span className="tag">&lt;/definitions&gt;</span>
      </pre>
    );
  }
  if (example === 'aca-ptc') {
    return (
      <pre className={styles.codePre}>
<span className="comment">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span>{`
`}<span className="tag">&lt;definitions</span>{` `}<span className="field">name</span>{`=`}<span className="string">"ACA_PTC"</span>{`&gt;
  `}<span className="tag">&lt;inputData</span>{` `}<span className="field">id</span>{`=`}<span className="string">"household_income_pct_fpl"</span>{`/&gt;

  `}<span className="tag">&lt;decision</span>{` `}<span className="field">id</span>{`=`}<span className="string">"applicable_pct"</span>{`&gt;
    `}<span className="tag">&lt;literalExpression&gt;</span>{`
      `}<span className="tag">&lt;text&gt;</span>{`
        `}<span className="comment">/* Linear interpolation within tier */</span>{`
        if fpl {'<='} `}<span className="number">150</span>{` then `}<span className="number">0.00</span>{`
        else if fpl {'<='} `}<span className="number">200</span>{` then
          `}<span className="number">0.00</span>{` + (`}<span className="number">0.02</span>{` - `}<span className="number">0.00</span>{`) * (fpl - `}<span className="number">150</span>{`) / `}<span className="number">50</span>{`
        else if fpl {'<='} `}<span className="number">250</span>{` then
          `}<span className="number">0.02</span>{` + (`}<span className="number">0.04</span>{` - `}<span className="number">0.02</span>{`) * (fpl - `}<span className="number">200</span>{`) / `}<span className="number">50</span>{`
        `}<span className="comment">/* ...more tiers */</span>{`
      `}<span className="tag">&lt;/text&gt;</span>{`
    `}<span className="tag">&lt;/literalExpression&gt;</span>{`
    `}<span className="comment">&lt;!-- Magic numbers everywhere. No temporal versioning. --&gt;</span>{`
  `}<span className="tag">&lt;/decision&gt;</span>
<span className="tag">&lt;/definitions&gt;</span>
      </pre>
    );
  }
  if (example === 'std-ded') {
    return (
      <pre className={styles.codePre}>
<span className="comment">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span>{`
`}<span className="tag">&lt;definitions</span>{` `}<span className="field">name</span>{`=`}<span className="string">"StandardDeduction"</span>{`&gt;
  `}<span className="tag">&lt;inputData</span>{` `}<span className="field">id</span>{`=`}<span className="string">"basic_std_ded_other"</span>{`/&gt;

  `}<span className="tag">&lt;decision</span>{` `}<span className="field">id</span>{`=`}<span className="string">"joint_deduction"</span>{`&gt;
    `}<span className="tag">&lt;literalExpression&gt;</span>{`
      `}<span className="tag">&lt;text&gt;</span>{`basic_std_ded_other * `}<span className="number">2</span><span className="tag">&lt;/text&gt;</span>{`
    `}<span className="tag">&lt;/literalExpression&gt;</span>{`
  `}<span className="tag">&lt;/decision&gt;</span>

  <span className="comment">&lt;!-- Where does 2 come from? "200 percent" from statute.
       DMN has no way to cite the source. --&gt;</span>
<span className="tag">&lt;/definitions&gt;</span>
      </pre>
    );
  }
  // ny-eitc
  return (
    <pre className={styles.codePre}>
<span className="comment">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span>{`
`}<span className="tag">&lt;definitions</span>{` `}<span className="field">name</span>{`=`}<span className="string">"NY_EITC"</span>{`&gt;
  `}<span className="tag">&lt;inputData</span>{` `}<span className="field">id</span>{`=`}<span className="string">"federal_eitc"</span>{`/&gt;

  `}<span className="tag">&lt;decision</span>{` `}<span className="field">id</span>{`=`}<span className="string">"ny_eitc"</span>{`&gt;
    `}<span className="tag">&lt;literalExpression&gt;</span>{`
      `}<span className="tag">&lt;text&gt;</span>{`federal_eitc * `}<span className="number">0.30</span><span className="tag">&lt;/text&gt;</span>{`
    `}<span className="tag">&lt;/literalExpression&gt;</span>{`
  `}<span className="tag">&lt;/decision&gt;</span>

  <span className="comment">&lt;!-- Magic number 0.30 with no citation.
       What if NY changes their rate? No history. --&gt;</span>
<span className="tag">&lt;/definitions&gt;</span>
    </pre>
  );
};

// OpenFisca/PolicyEngine code with syntax highlighting
const OpenFiscaCode = ({ example }: { example: ExampleType }) => {
  if (example === 'niit') {
    return (
      <div className={styles.multiFileCode}>
        <div className={styles.codeHeader}>
          <span className={styles.codeFilename}>
            <FileIcon />
            variables/gov/irs/tax/federal_income/net_investment_income_tax.py
          </span>
          <span className={styles.codeCitation}>Python + YAML (3 files)</span>
        </div>
        <pre className={styles.codePre}>
<span className="keyword">class</span>{` `}<span className="type">net_investment_income_tax</span>{`(`}<span className="type">Variable</span>{`):
    value_type = `}<span className="type">float</span>{`
    entity = `}<span className="type">TaxUnit</span>{`
    definition_period = `}<span className="type">YEAR</span>{`
    reference = `}<span className="string">"https://www.law.cornell.edu/uscode/text/26/1411"</span>{`
    unit = `}<span className="type">USD</span>{`

    `}<span className="keyword">def</span>{` `}<span className="variable">formula</span>{`(tax_unit, period, parameters):
        p = parameters(period).gov.irs.investment.net_investment_income_tax
        threshold = p.threshold[tax_unit(`}<span className="string">"filing_status"</span>{`, period)]
        excess_agi = max_(`}<span className="number">0</span>{`, tax_unit(`}<span className="string">"adjusted_gross_income"</span>{`, period) - threshold)
        base = min_(max_(`}<span className="number">0</span>{`, tax_unit(`}<span className="string">"net_investment_income"</span>{`, period)), excess_agi)
        `}<span className="keyword">return</span>{` p.rate * base`}
        </pre>
        <div className={styles.fileSection}>
          <span className={styles.codeFilename}>
            <FileIcon />
            parameters/gov/irs/investment/net_investment_income_tax/rate.yaml
          </span>
        </div>
        <pre className={styles.codePre}>
<span className="field">description:</span>{` `}<span className="string">"Net Investment Income Tax rate"</span>{`
`}<span className="field">metadata:</span>{`
  `}<span className="field">unit:</span>{` `}<span className="string">"currency-USD"</span>{`
`}<span className="field">values:</span>{`
  `}<span className="number">2013-01-01</span>{`: `}<span className="number">0.038</span>
        </pre>
        <div className={styles.fileSection}>
          <span className={styles.codeFilename}>
            <FileIcon />
            tests/gov/irs/tax/federal_income/net_investment_income_tax.yaml
          </span>
        </div>
        <pre className={styles.codePre}>
{`- `}<span className="field">name:</span>{` `}<span className="string">"Rental income just above threshold"</span>{`
  `}<span className="field">period:</span>{` `}<span className="number">2019</span>{`
  `}<span className="field">input:</span>{`
    `}<span className="field">adjusted_gross_income:</span>{` `}<span className="number">205_000</span>{`
    `}<span className="field">rental_income:</span>{` `}<span className="number">205_000</span>{`
    `}<span className="field">filing_status:</span>{` `}<span className="string">"SINGLE"</span>{`
  `}<span className="field">output:</span>{`
    `}<span className="field">net_investment_income_tax:</span>{` `}<span className="number">190</span>
        </pre>
      </div>
    );
  }
  if (example === 'aca-ptc') {
    return (
      <div className={styles.multiFileCode}>
        <div className={styles.codeHeader}>
          <span className={styles.codeFilename}>
            <FileIcon />
            variables/gov/aca/ptc/aca_required_contribution_percentage.py
          </span>
          <span className={styles.codeCitation}>Python + YAML (3 files)</span>
        </div>
        <pre className={styles.codePre}>
<span className="keyword">class</span>{` `}<span className="type">aca_required_contribution_percentage</span>{`(`}<span className="type">Variable</span>{`):
    value_type = `}<span className="type">float</span>{`
    entity = `}<span className="type">TaxUnit</span>{`
    definition_period = `}<span className="type">YEAR</span>{`
    reference = `}<span className="string">"https://law.cornell.edu/uscode/text/26/36B#b_3_A"</span>{`

    `}<span className="keyword">def</span>{` `}<span className="variable">formula</span>{`(tax_unit, period, parameters):
        magi_frac = tax_unit(`}<span className="string">"aca_magi_fraction"</span>{`, period)
        p = parameters(period).gov.aca.required_contribution_percentage
        `}<span className="keyword">return</span>{` np.interp(magi_frac, p.thresholds, p.amounts)`}
        </pre>
        <div className={styles.fileSection}>
          <span className={styles.codeFilename}>
            <FileIcon />
            parameters/gov/aca/required_contribution_percentage.yaml
          </span>
        </div>
        <pre className={styles.codePre}>
<span className="field">description:</span>{` `}<span className="string">"ACA PTC phase out rate by MAGI % FPL"</span>{`
`}<span className="field">brackets:</span>{`
  - `}<span className="field">threshold:</span>{`
      `}<span className="number">2021-01-01</span>{`: `}<span className="number">0</span>{`
    `}<span className="field">amount:</span>{`
      `}<span className="number">2021-01-01</span>{`: `}<span className="number">0</span>{`       `}<span className="comment"># ARPA: 0% at 0</span>{`
      `}<span className="number">2026-01-01</span>{`: `}<span className="number">0.021</span>{`   `}<span className="comment"># Revert</span>{`
  - `}<span className="field">threshold:</span>{`
      `}<span className="number">2021-01-01</span>{`: `}<span className="number">1.50</span>{`
    `}<span className="field">amount:</span>{`
      `}<span className="number">2021-01-01</span>{`: `}<span className="number">0.0</span>{`     `}<span className="comment"># ARPA: 0% at 150%</span>{`
      `}<span className="number">2026-01-01</span>{`: `}<span className="number">0.0419</span>{`  `}<span className="comment"># Revert</span>{`
  - `}<span className="field">threshold:</span>{`
      `}<span className="number">2021-01-01</span>{`: `}<span className="number">2.00</span>{`
    `}<span className="field">amount:</span>{`
      `}<span className="number">2021-01-01</span>{`: `}<span className="number">0.02</span>{`    `}<span className="comment"># ARPA</span>{`
      `}<span className="number">2026-01-01</span>{`: `}<span className="number">0.066</span>{`   `}<span className="comment"># Revert</span>
        </pre>
        <div className={styles.fileSection}>
          <span className={styles.codeFilename}>
            <FileIcon />
            tests/gov/aca/ptc/aca_required_contribution_percentage.yaml
          </span>
        </div>
        <pre className={styles.codePre}>
{`- `}<span className="field">name:</span>{` `}<span className="string">"Interpolation at 190% FPL"</span>{`
  `}<span className="field">period:</span>{` `}<span className="number">2022</span>{`
  `}<span className="field">absolute_error_margin:</span>{` `}<span className="number">0.00001</span>{`
  `}<span className="field">input:</span>{`
    `}<span className="field">aca_magi_fraction:</span>{` `}<span className="number">1.90</span>{`
  `}<span className="field">output:</span>{`
    `}<span className="field">aca_required_contribution_percentage:</span>{` `}<span className="number">0.0160</span>
        </pre>
      </div>
    );
  }
  if (example === 'std-ded') {
    return (
      <div className={styles.multiFileCode}>
        <div className={styles.codeHeader}>
          <span className={styles.codeFilename}>
            <FileIcon />
            variables/gov/irs/income/taxable_income/deductions/standard_deduction/basic_standard_deduction.py
          </span>
          <span className={styles.codeCitation}>Python + YAML (3 files)</span>
        </div>
        <pre className={styles.codePre}>
<span className="keyword">class</span>{` `}<span className="type">basic_standard_deduction</span>{`(`}<span className="type">Variable</span>{`):
    value_type = `}<span className="type">float</span>{`
    entity = `}<span className="type">TaxUnit</span>{`
    definition_period = `}<span className="type">YEAR</span>{`
    unit = `}<span className="type">USD</span>{`
    reference = `}<span className="string">"https://www.law.cornell.edu/uscode/text/26/63#c_2"</span>{`

    `}<span className="keyword">def</span>{` `}<span className="variable">formula</span>{`(tax_unit, period, parameters):
        p = parameters(period).gov.irs.deductions.standard
        filing_status = tax_unit(`}<span className="string">"filing_status"</span>{`, period)
        `}<span className="keyword">return</span>{` p.amount[filing_status]`}
        </pre>
        <div className={styles.fileSection}>
          <span className={styles.codeFilename}>
            <FileIcon />
            parameters/gov/irs/deductions/standard/amount.yaml
          </span>
        </div>
        <pre className={styles.codePre}>
<span className="field">description:</span>{` `}<span className="string">"Federal deduction from AGI if not itemizing"</span>{`
`}<span className="field">SINGLE:</span>{`
  `}<span className="number">2024-01-01</span>{`: `}<span className="number">14_600</span>{`
  `}<span className="number">2025-01-01</span>{`: `}<span className="number">15_750</span>{`
`}<span className="field">JOINT:</span>{`
  `}<span className="number">2024-01-01</span>{`: `}<span className="number">29_200</span>{`
  `}<span className="number">2025-01-01</span>{`: `}<span className="number">31_500</span>{`
`}<span className="field">metadata:</span>{`
  `}<span className="field">unit:</span>{` `}<span className="string">"currency-USD"</span>{`
  `}<span className="field">reference:</span>{`
    - `}<span className="field">title:</span>{` `}<span className="string">"26 U.S. Code § 63(c)"</span>{`
      `}<span className="field">href:</span>{` `}<span className="string">"https://www.law.cornell.edu/uscode/text/26/63#c"</span>
        </pre>
        <div className={styles.fileSection}>
          <span className={styles.codeFilename}>
            <FileIcon />
            tests/gov/irs/deductions/standard.yaml
          </span>
        </div>
        <pre className={styles.codePre}>
{`- `}<span className="field">name:</span>{` `}<span className="string">"Joint filer standard deduction"</span>{`
  `}<span className="field">period:</span>{` `}<span className="number">2024</span>{`
  `}<span className="field">input:</span>{`
    `}<span className="field">filing_status:</span>{` `}<span className="string">"JOINT"</span>{`
  `}<span className="field">output:</span>{`
    `}<span className="field">basic_standard_deduction:</span>{` `}<span className="number">29_200</span>
        </pre>
      </div>
    );
  }
  // ny-eitc
  return (
    <div className={styles.multiFileCode}>
      <div className={styles.codeHeader}>
        <span className={styles.codeFilename}>
          <FileIcon />
          variables/gov/states/ny/tax/income/credits/ny_eitc.py
        </span>
        <span className={styles.codeCitation}>Python + YAML (3 files)</span>
      </div>
      <pre className={styles.codePre}>
<span className="keyword">class</span>{` `}<span className="type">ny_eitc</span>{`(`}<span className="type">Variable</span>{`):
    value_type = `}<span className="type">float</span>{`
    entity = `}<span className="type">TaxUnit</span>{`
    unit = `}<span className="type">USD</span>{`
    definition_period = `}<span className="type">YEAR</span>{`
    reference = `}<span className="string">"https://www.nysenate.gov/legislation/laws/TAX/606"</span>{`
    defined_for = `}<span className="type">StateCode.NY</span>{`

    `}<span className="keyword">def</span>{` `}<span className="variable">formula</span>{`(tax_unit, period, parameters):
        federal_eitc = tax_unit(`}<span className="string">"eitc"</span>{`, period)
        p = parameters(period).gov.states.ny.tax.income.credits
        `}<span className="keyword">return</span>{` federal_eitc * p.eitc.match`}
      </pre>
      <div className={styles.fileSection}>
        <span className={styles.codeFilename}>
          <FileIcon />
          parameters/gov/states/ny/tax/income/credits/eitc/match.yaml
        </span>
      </div>
      <pre className={styles.codePre}>
<span className="field">description:</span>{` `}<span className="string">"NY matches this fraction of federal EITC"</span>{`
`}<span className="field">values:</span>{`
  `}<span className="number">1994-01-01</span>{`: `}<span className="number">0.075</span>{`
  `}<span className="number">1995-01-01</span>{`: `}<span className="number">0.1</span>{`
  `}<span className="number">1996-01-01</span>{`: `}<span className="number">0.2</span>{`
  `}<span className="number">2000-01-01</span>{`: `}<span className="number">0.225</span>{`
  `}<span className="number">2003-01-01</span>{`: `}<span className="number">0.3</span>{`
`}<span className="field">metadata:</span>{`
  `}<span className="field">reference:</span>{`
    - `}<span className="field">title:</span>{` `}<span className="string">"Section 606 Credits against tax (d)"</span>{`
      `}<span className="field">href:</span>{` `}<span className="string">"https://www.nysenate.gov/legislation/laws/TAX/606"</span>
      </pre>
      <div className={styles.fileSection}>
        <span className={styles.codeFilename}>
          <FileIcon />
          tests/gov/states/ny/tax/income/credits/ny_eitc.yaml
        </span>
      </div>
      <pre className={styles.codePre}>
{`- `}<span className="field">name:</span>{` `}<span className="string">"30% match of federal EITC"</span>{`
  `}<span className="field">period:</span>{` `}<span className="number">2024</span>{`
  `}<span className="field">input:</span>{`
    `}<span className="field">state_code:</span>{` `}<span className="string">"NY"</span>{`
    `}<span className="field">eitc:</span>{` `}<span className="number">5000</span>{`
  `}<span className="field">output:</span>{`
    `}<span className="field">ny_eitc:</span>{` `}<span className="number">1500</span>
      </pre>
    </div>
  );
};

// Catala code with syntax highlighting
const CatalaCode = ({ example }: { example: ExampleType }) => {
  if (example === 'niit') {
    return (
      <pre className={styles.codePre}>
<span className="comment">@@26 USC § 1411(a) - Net Investment Income Tax@@</span>{`

`}<span className="comment">/*
(a) In general.— There is hereby imposed a tax equal to
3.8 percent of the lesser of net investment income or
modified AGI in excess of the threshold amount.
*/</span>{`

`}<span className="keyword">declaration</span>{` `}<span className="keyword">scope</span>{` `}<span className="type">NIIT</span>{`:
  `}<span className="keyword">input</span>{` modified_agi `}<span className="keyword">content</span>{` `}<span className="type">money</span>{`
  `}<span className="keyword">input</span>{` net_investment_income `}<span className="keyword">content</span>{` `}<span className="type">money</span>{`
  `}<span className="keyword">input</span>{` threshold_amount `}<span className="keyword">content</span>{` `}<span className="type">money</span>{`
  `}<span className="keyword">internal</span>{` niit_rate `}<span className="keyword">content</span>{` `}<span className="type">decimal</span>{`
  `}<span className="keyword">output</span>{` tax `}<span className="keyword">content</span>{` `}<span className="type">money</span>{`

`}<span className="keyword">scope</span>{` `}<span className="type">NIIT</span>{`:
  `}<span className="keyword">definition</span>{` niit_rate `}<span className="keyword">equals</span>{` `}<span className="number">3.8%</span>{`
  `}<span className="keyword">definition</span>{` tax `}<span className="keyword">equals</span>{`
    `}<span className="keyword">let</span>{` excess = max(`}<span className="number">$0</span>{`, modified_agi - threshold_amount)
    `}<span className="keyword">in</span>{` niit_rate * min(net_investment_income, excess)

`}<span className="comment"># Literate style, but no temporal versioning:</span>{`
`}<span className="comment"># When did 3.8% take effect? What's the legal history?</span>
      </pre>
    );
  }
  if (example === 'aca-ptc') {
    return (
      <pre className={styles.codePre}>
<span className="comment">@@26 USC § 36B(b)(3)(A) - ACA Premium Tax Credit@@</span>{`

`}<span className="comment">/*
The applicable percentage... shall increase on a
sliding scale from the initial to final percentage.
*/</span>{`

`}<span className="keyword">declaration</span>{` `}<span className="keyword">scope</span>{` `}<span className="type">PremiumTaxCredit</span>{`:
  `}<span className="keyword">input</span>{` fpl `}<span className="keyword">content</span>{` `}<span className="type">decimal</span>{`
  `}<span className="keyword">output</span>{` applicable_pct `}<span className="keyword">content</span>{` `}<span className="type">decimal</span>{`

`}<span className="keyword">scope</span>{` `}<span className="type">PremiumTaxCredit</span>{`:
  `}<span className="comment"># Manual interpolation - no built-in support</span>{`
  `}<span className="keyword">definition</span>{` applicable_pct `}<span className="keyword">equals</span>{`
    `}<span className="keyword">if</span>{` fpl {'<='} `}<span className="number">150</span>{` `}<span className="keyword">then</span>{` `}<span className="number">0.00</span>{`
    `}<span className="keyword">else if</span>{` fpl {'<='} `}<span className="number">200</span>{` `}<span className="keyword">then</span>{`
      `}<span className="number">0.00</span>{` + (`}<span className="number">0.02</span>{` - `}<span className="number">0.00</span>{`) * (fpl - `}<span className="number">150</span>{`) / `}<span className="number">50</span>{`
    `}<span className="keyword">else if</span>{` fpl {'<='} `}<span className="number">250</span>{` `}<span className="keyword">then</span>{`
      `}<span className="number">0.02</span>{` + (`}<span className="number">0.04</span>{` - `}<span className="number">0.02</span>{`) * (fpl - `}<span className="number">200</span>{`) / `}<span className="number">50</span>{`
    `}<span className="comment"># ...more tiers</span>{`

`}<span className="comment"># No temporal versioning - which year's rates?</span>
      </pre>
    );
  }
  if (example === 'std-ded') {
    return (
      <pre className={styles.codePre}>
<span className="comment">@@26 USC § 63(c)(2)(A) - Standard Deduction (Joint)@@</span>{`

`}<span className="comment">/*
(A) 200 percent of the dollar amount in effect under
subparagraph (C) for joint returns or surviving spouses.
*/</span>{`

`}<span className="keyword">declaration</span>{` `}<span className="keyword">scope</span>{` `}<span className="type">StandardDeduction</span>{`:
  `}<span className="keyword">input</span>{` basic_std_ded_other `}<span className="keyword">content</span>{` `}<span className="type">money</span>{`
  `}<span className="keyword">internal</span>{` joint_multiplier `}<span className="keyword">content</span>{` `}<span className="type">decimal</span>{`
  `}<span className="keyword">output</span>{` joint_deduction `}<span className="keyword">content</span>{` `}<span className="type">money</span>{`

`}<span className="keyword">scope</span>{` `}<span className="type">StandardDeduction</span>{`:
  `}<span className="keyword">definition</span>{` joint_multiplier `}<span className="keyword">equals</span>{` `}<span className="number">2</span>{`  `}<span className="comment"># "200 percent"</span>{`
  `}<span className="keyword">definition</span>{` joint_deduction `}<span className="keyword">equals</span>{`
    basic_std_ded_other * joint_multiplier

`}<span className="comment"># Clean, but when did "200 percent" take effect?</span>{`
`}<span className="comment"># What was it before 1988? Catala doesn't track this.</span>
      </pre>
    );
  }
  // ny-eitc
  return (
    <pre className={styles.codePre}>
<span className="comment">@@NY Tax Law § 606(d) - NY Earned Income Credit@@</span>{`

`}<span className="comment">/*
§ 606(d) A resident individual allowed the federal EITC
shall be allowed a credit equal to thirty percent of
such federal credit.
*/</span>{`

`}<span className="keyword">declaration</span>{` `}<span className="keyword">scope</span>{` `}<span className="type">NYEITC</span>{`:
  `}<span className="keyword">input</span>{` federal_eitc `}<span className="keyword">content</span>{` `}<span className="type">money</span>{`
  `}<span className="keyword">internal</span>{` ny_eitc_rate `}<span className="keyword">content</span>{` `}<span className="type">decimal</span>{`
  `}<span className="keyword">output</span>{` ny_eitc `}<span className="keyword">content</span>{` `}<span className="type">money</span>{`

`}<span className="keyword">scope</span>{` `}<span className="type">NYEITC</span>{`:
  `}<span className="keyword">definition</span>{` ny_eitc_rate `}<span className="keyword">equals</span>{` `}<span className="number">30%</span>{`  `}<span className="comment"># "thirty percent"</span>{`
  `}<span className="keyword">definition</span>{` ny_eitc `}<span className="keyword">equals</span>{` federal_eitc * ny_eitc_rate

`}<span className="comment"># What if NY changes their rate? No temporal history.</span>{`
`}<span className="comment"># When did "thirty percent" start? Need external tracking.</span>
    </pre>
  );
};

export default function RacPage() {
  const [activeExample, setActiveExample] = useState<ExampleType>('niit');
  const [activeTab, setActiveTab] = useState<FormatTab>('rac');

  const filenames = getFilename(activeExample, activeTab);

  return (
    <PageLayout>
      <div className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>FILE FORMAT</div>
            <h1 className={styles.heroTitle}>.rac</h1>
            <p className={styles.heroSubtitle}>
              Self-contained statute encoding format. One file captures the law:
              text, parameters, formulas, and tests.
            </p>
          </div>
        </section>

        {/* Tabbed Code Example */}
        <section className={styles.codeSection}>
          <div className={`${styles.codeBlock} ${styles.delay1}`}>
            {/* Example selector */}
            <div className={styles.exampleBar}>
              {(Object.keys(examples) as ExampleType[]).map((ex) => (
                <button
                  key={ex}
                  className={`${styles.examplePill} ${activeExample === ex ? styles.examplePillActive : ''}`}
                  onClick={() => setActiveExample(ex)}
                >
                  {examples[ex].label}
                </button>
              ))}
            </div>
            {/* Format tabs */}
            <div className={styles.tabBar}>
              {(['rac', 'dmn', 'openfisca', 'catala'] as FormatTab[]).map((tab) => (
                <button
                  key={tab}
                  className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {formatLabels[tab]}
                </button>
              ))}
            </div>
            {activeTab !== 'openfisca' && (
              <div className={styles.codeHeader}>
                <div className={styles.codeFilenames}>
                  {filenames.map((filename, i) => (
                    <span key={i} className={styles.codeFilename}>
                      <FileIcon />
                      {filename}
                    </span>
                  ))}
                </div>
                <span className={styles.codeCitation}>{getNote(activeTab)}</span>
              </div>
            )}
            <div className={styles.codeContent}>
              {activeTab === 'rac' && <RacCode example={activeExample} />}
              {activeTab === 'dmn' && <DmnCode example={activeExample} />}
              {activeTab === 'openfisca' && <OpenFiscaCode example={activeExample} />}
              {activeTab === 'catala' && <CatalaCode example={activeExample} />}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className={styles.comparisonSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Format comparison</h2>
            <p className={styles.sectionSubtitle}>
              RAC is purpose-built for encoding law with auditability and temporal accuracy.
            </p>
          </div>

          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>Capability</th>
                <th>DMN</th>
                <th>OpenFisca/PE</th>
                <th>Catala</th>
                <th className={styles.racColumnHeader}>RAC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Legal citations</td>
                <td className={styles.noSupport}>Comments</td>
                <td className={styles.neutralSupport}>Metadata</td>
                <td className={styles.neutralSupport}>Literate</td>
                <td className={styles.hasSupport}>Filepath</td>
              </tr>
              <tr>
                <td>Temporal versioning</td>
                <td className={styles.noSupport}>External</td>
                <td className={styles.hasSupport}>Built-in</td>
                <td className={styles.noSupport}>Manual</td>
                <td className={styles.hasSupport}>Built-in</td>
              </tr>
              <tr>
                <td>Formula language</td>
                <td className={styles.neutralSupport}>FEEL</td>
                <td className={styles.hasSupport}>Python</td>
                <td className={styles.neutralSupport}>Custom</td>
                <td className={styles.hasSupport}>Python</td>
              </tr>
              <tr>
                <td>File format</td>
                <td className={styles.noSupport}>XML</td>
                <td className={styles.neutralSupport}>Py + YAML</td>
                <td className={styles.neutralSupport}>Custom</td>
                <td className={styles.hasSupport}>YAML</td>
              </tr>
              <tr>
                <td>Self-contained</td>
                <td className={styles.noSupport}>No</td>
                <td className={styles.noSupport}>3+ files</td>
                <td className={styles.hasSupport}>Yes</td>
                <td className={styles.hasSupport}>Yes</td>
              </tr>
              <tr>
                <td>Inline tests</td>
                <td className={styles.noSupport}>Separate</td>
                <td className={styles.noSupport}>Separate</td>
                <td className={styles.noSupport}>Separate</td>
                <td className={styles.hasSupport}>Co-located</td>
              </tr>
              <tr>
                <td>No magic numbers</td>
                <td className={styles.noSupport}>Allowed</td>
                <td className={styles.noSupport}>Allowed</td>
                <td className={styles.noSupport}>Allowed</td>
                <td className={styles.hasSupport}>Enforced</td>
              </tr>
              <tr>
                <td>LLM-friendly</td>
                <td className={styles.noSupport}>XML verbose</td>
                <td className={styles.neutralSupport}>Python</td>
                <td className={styles.neutralSupport}>Custom</td>
                <td className={styles.hasSupport}>YAML simple</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Features Grid */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Everything in one file</h2>
            <p className={styles.sectionSubtitle}>
              No separate parameter files. No external test suites. Self-contained and auditable.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={`${styles.featureCard} ${styles.delay1}`}>
              <div className={styles.featureIcon}><CitationIcon /></div>
              <h3 className={styles.featureTitle}>Legal citations</h3>
              <p className={styles.featureDescription}>
                Filepath mirrors statute citation. <code>26/24/d/1/B.rac</code> encodes
                26 USC &sect; 24(d)(1)(B).
              </p>
            </div>

            <div className={`${styles.featureCard} ${styles.delay2}`}>
              <div className={styles.featureIcon}><ParameterIcon /></div>
              <h3 className={styles.featureTitle}>Time-varying parameters</h3>
              <p className={styles.featureDescription}>
                Policy values change over time. Parameters track every historical value
                with effective dates.
              </p>
            </div>

            <div className={`${styles.featureCard} ${styles.delay3}`}>
              <div className={styles.featureIcon}><FormulaIcon /></div>
              <h3 className={styles.featureTitle}>No magic numbers</h3>
              <p className={styles.featureDescription}>
                Only small integers (-1 to 3) allowed in formulas. All policy values
                must come from parameters with citations.
              </p>
            </div>

            <div className={`${styles.featureCard} ${styles.delay4}`}>
              <div className={styles.featureIcon}><ImportIcon /></div>
              <h3 className={styles.featureTitle}>Cross-references</h3>
              <p className={styles.featureDescription}>
                Import variables from other statutes using <code>path#variable</code> syntax.
                Dependencies are explicit.
              </p>
            </div>

            <div className={`${styles.featureCard} ${styles.delay5}`}>
              <div className={styles.featureIcon}><TestIcon /></div>
              <h3 className={styles.featureTitle}>Inline tests</h3>
              <p className={styles.featureDescription}>
                Test cases live next to the code. Verify against official calculators
                and real-world examples.
              </p>
            </div>

            <div className={`${styles.featureCard} ${styles.delay6}`}>
              <div className={styles.featureIcon}><VersionIcon /></div>
              <h3 className={styles.featureTitle}>Temporal formulas</h3>
              <p className={styles.featureDescription}>
                When laws change, track different formula versions with effective dates
                and sunset provisions.
              </p>
            </div>
          </div>
        </section>

        {/* Structure Table */}
        <section className={styles.structureSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Declaration types</h2>
            <p className={styles.sectionSubtitle}>
              Each file can contain multiple named declarations
            </p>
          </div>

          <table className={styles.structureTable}>
            <thead>
              <tr>
                <th>Declaration</th>
                <th>Purpose</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>text:</code></td>
                <td>Statute text for reference and LLM context</td>
                <td><code>text: |</code> followed by quoted legal text</td>
              </tr>
              <tr>
                <td><code>parameter name:</code></td>
                <td>Time-varying policy value (thresholds, rates, amounts)</td>
                <td><code>parameter max_benefit:</code></td>
              </tr>
              <tr>
                <td><code>variable name:</code></td>
                <td>Computed value with formula</td>
                <td><code>variable eitc_amount:</code></td>
              </tr>
              <tr>
                <td><code>input name:</code></td>
                <td>User-provided input (wages, age, etc.)</td>
                <td><code>input earned_income:</code></td>
              </tr>
              <tr>
                <td><code>enum name:</code></td>
                <td>Enumeration type (filing status, etc.)</td>
                <td><code>enum FilingStatus:</code></td>
              </tr>
              <tr>
                <td><code>function name:</code></td>
                <td>Reusable helper function</td>
                <td><code>function bracket_tax:</code></td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Full specification</h2>
            <p className={styles.ctaText}>
              See the complete .rac format specification with all attributes,
              scoping rules, and migration guide.
            </p>
            <div className={styles.ctaLinks}>
              <a
                href="https://github.com/CosilicoAI/rac/blob/main/docs/RAC_SPEC.md"
                className={styles.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                RAC_SPEC.md
              </a>
              <Link
                to="/stack"
                className={`${styles.ctaLink} ${styles.ctaLinkSecondary}`}
              >
                <BackIcon />
                Back to Stack
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
