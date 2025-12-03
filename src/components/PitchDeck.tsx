import React from 'react';
import {
  Deck,
  Slide,
  Heading,
  Text,
  FlexBox,
  Box,
  CodePane,
  UnorderedList,
  ListItem,
  Grid,
  Notes,
} from 'spectacle';

const theme = {
  colors: {
    primary: '#1a1a1a',
    secondary: '#0066ff',
    tertiary: '#ffffff',
    quaternary: '#666666',
  },
  fonts: {
    header: '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif',
    text: '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif',
    monospace: '"SF Mono", "Fira Code", Monaco, monospace',
  },
  fontSizes: {
    h1: '72px',
    h2: '48px',
    h3: '36px',
    text: '24px',
    monospace: '18px',
  },
};

const SlideTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Heading fontSize="h2" color="secondary" margin="0 0 40px 0">
    {children}
  </Heading>
);

const Card: React.FC<{ title: string; children: React.ReactNode; color?: string; borderColor?: string }> = ({
  title,
  children,
  color = '#f8f9fa',
  borderColor = '#e5e5e5'
}) => (
  <Box
    backgroundColor={color}
    padding="24px"
    style={{ borderRadius: '12px', height: '100%', border: `1px solid ${borderColor}` }}
  >
    <Text fontWeight="bold" fontSize="20px" margin="0 0 12px 0" color="primary">
      {title}
    </Text>
    {children}
  </Box>
);

const PitchDeck: React.FC = () => {
  return (
    <Deck theme={theme} template={() => <></>}>
      {/* Slide 1: Title */}
      <Slide
        backgroundColor="#f5f7fa"
        backgroundImage="linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
      >
        <FlexBox height="100%" flexDirection="column" justifyContent="center" alignItems="center">
          <Text fontSize="14px" fontWeight="600" color="#0066ff" margin="0 0 16px 0" style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>
            Seed Round
          </Text>
          <Heading fontSize="84px" color="primary" margin="0" style={{ letterSpacing: '-0.03em' }}>
            Cosilico
          </Heading>
          <Text fontSize="h3" margin="16px 0 0 0" style={{ background: 'linear-gradient(135deg, #0066ff 0%, #00c9ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Simulate Society
          </Text>
          <Text fontSize="20px" color="quaternary" margin="48px 0 0 0" style={{ maxWidth: '600px', textAlign: 'center', lineHeight: 1.6 }}>
            Calculate taxes and benefits. Predict household attributes.<br />
            Model policy impacts. One API.
          </Text>
        </FlexBox>
        <Notes>
          Opening slide. Set the stage for the pitch.
        </Notes>
      </Slide>

      {/* Slide 2: The Problem */}
      <Slide backgroundColor="#ffffff">
        <SlideTitle>The Problem</SlideTitle>
        <Text fontSize="28px" color="primary" margin="0 0 30px 0">
          Every AI assistant will answer questions about money and government.
        </Text>
        <Grid gridTemplateColumns="1fr 1fr" gridGap="24px">
          <Card title="Today: AI Hallucinates" color="#fef2f2" borderColor="#fecaca">
            <UnorderedList fontSize="18px" margin="0">
              <ListItem>Guesses at tax brackets</ListItem>
              <ListItem>Makes up eligibility rules</ListItem>
              <ListItem>Can't cite sources</ListItem>
              <ListItem>"Based on my training data..."</ListItem>
            </UnorderedList>
          </Card>
          <Card title="Users Need" color="#f0fdf4" borderColor="#bbf7d0">
            <UnorderedList fontSize="18px" margin="0">
              <ListItem>Accurate calculations</ListItem>
              <ListItem>Auditable results</ListItem>
              <ListItem>Legal citations</ListItem>
              <ListItem>Confidence they can trust</ListItem>
            </UnorderedList>
          </Card>
        </Grid>
        <Notes>
          AI is increasingly answering financial questions, but it hallucinates.
          This is unacceptable for real financial decisions.
        </Notes>
      </Slide>

      {/* Slide 3: The Solution */}
      <Slide backgroundColor="#ffffff">
        <SlideTitle>The Solution</SlideTitle>
        <Text fontSize="28px" color="primary" margin="0 0 30px 0">
          <strong style={{ color: '#0066ff' }}>Cosilico</strong> is the infrastructure layer for policy-aware AI.
        </Text>
        <Grid gridTemplateColumns="1fr 1fr 1fr" gridGap="20px">
          <Card title="⚙️ Calculate" color="#eff6ff">
            <Text fontSize="18px" margin="0">
              Deterministic tax/benefit calculations from statute.
              Federal + 50 states. Full citations.
            </Text>
          </Card>
          <Card title="📊 Predict" color="#fef3c7">
            <Text fontSize="18px" margin="0">
              Statistical predictions for unobserved attributes.
              ML models on enhanced microdata.
            </Text>
          </Card>
          <Card title="🌐 Simulate" color="#f0fdf4">
            <Text fontSize="18px" margin="0">
              Population-scale microsimulation.
              100M+ households. Policy impact analysis.
            </Text>
          </Card>
        </Grid>
        <Notes>
          Three capabilities, one API. Users don't care if a value is calculated or predicted.
          We handle the complexity internally.
        </Notes>
      </Slide>

      {/* Slide 4: The API */}
      <Slide backgroundColor="#ffffff">
        <SlideTitle>One Simple API</SlideTitle>
        <CodePane language="python">
{`from cosilico import predict

result = predict(
    person={"age": 35, "income": 45000, "state": "CA"},
    variables=["eitc", "childcare_expense", "snap_eligible"]
)

# {
#   "eitc": {"value": 3200, "type": "calculated",
#            "citation": "26 USC § 32"},
#   "childcare_expense": {"value": 8500, "type": "predicted",
#                         "confidence": 0.82},
#   "snap_eligible": {"value": true, "type": "calculated",
#                     "citation": "7 USC § 2014"}
# }`}
        </CodePane>
        <Notes>
          Key insight: calculations come with citations, predictions come with confidence.
          The user gets both from one call.
        </Notes>
      </Slide>

      {/* Slide 5: Market */}
      <Slide backgroundColor="#ffffff">
        <SlideTitle>Market Opportunity</SlideTitle>
        <Grid gridTemplateColumns="1fr 1fr" gridGap="24px">
          <Box>
            <Text fontSize="20px" fontWeight="bold" margin="0 0 16px 0" color="secondary">TAM: $100B+ across verticals</Text>
            <UnorderedList fontSize="16px" margin="0">
              <ListItem>Tax Software: $90B → $215B by 2032</ListItem>
              <ListItem>Benefits Admin: $2.5B → $4B by 2032</ListItem>
              <ListItem>Data Enrichment: $2.4B → $4.6B by 2030</ListItem>
              <ListItem>AI Infrastructure: $46B → $356B by 2032</ListItem>
            </UnorderedList>
            <Text fontSize="14px" color="quaternary" margin="16px 0 0 0">
              Sources: Mordor Intelligence, Grand View Research, Fortune Business Insights
            </Text>
          </Box>
          <Box>
            <Text fontSize="20px" fontWeight="bold" margin="0 0 16px 0" color="secondary">Comparable Exits</Text>
            <UnorderedList fontSize="16px" margin="0">
              <ListItem><strong>Avalara:</strong> $8.4B (sales tax API)</ListItem>
              <ListItem><strong>Plaid:</strong> $6.1B ($390M ARR)</ListItem>
              <ListItem><strong>Gusto:</strong> $9.3B (payroll/benefits)</ListItem>
              <ListItem><strong>Rippling:</strong> $11.5B (HR platform)</ListItem>
            </UnorderedList>
            <Text fontSize="14px" color="quaternary" margin="16px 0 0 0">
              API infrastructure companies command 15-20x ARR multiples
            </Text>
          </Box>
        </Grid>
        <Notes>
          Real market data. Avalara proves tax APIs can be billion-dollar businesses.
          Plaid and Stripe prove API infrastructure works.
        </Notes>
      </Slide>

      {/* Slide 6: Business Model */}
      <Slide backgroundColor="#ffffff">
        <SlideTitle>Business Model</SlideTitle>
        <Text fontSize="24px" color="primary" margin="0 0 24px 0">
          Open source core. Paid services.
        </Text>
        <Grid gridTemplateColumns="1fr 1fr" gridGap="24px">
          <Card title="Free (Open Source)" color="#f0fdf4">
            <UnorderedList fontSize="20px" margin="0">
              <ListItem>Rules engine, DSL, compiler</ListItem>
              <ListItem>Imputation algorithms</ListItem>
              <ListItem>Public microdata (ECPS)</ListItem>
              <ListItem>Self-host everything</ListItem>
            </UnorderedList>
          </Card>
          <Card title="Paid" color="#eff6ff">
            <UnorderedList fontSize="20px" margin="0">
              <ListItem>Hosted API (we run it)</ListItem>
              <ListItem>Support + SLA</ListItem>
              <ListItem>Enterprise data enrichment</ListItem>
              <ListItem>Custom model training</ListItem>
            </UnorderedList>
          </Card>
        </Grid>
        <Text fontSize="20px" color="quaternary" margin="24px 0 0 0" textAlign="center">
          Revenue from convenience and service, not lock-in.
        </Text>
        <Notes>
          We don't gatekeep. Big companies can self-host for free.
          We monetize convenience, freshness, and support.
        </Notes>
      </Slide>

      {/* Slide 7: Revenue Streams */}
      <Slide backgroundColor="#ffffff">
        <SlideTitle>Revenue Streams</SlideTitle>
        <Grid gridTemplateColumns="1fr 1fr" gridGap="20px">
          <Card title="1. API Usage" color="#f8f9fa">
            <Text fontSize="18px" margin="0">
              Per-prediction pricing ($0.001-$0.01/call).
              Self-serve, usage-based billing.
            </Text>
          </Card>
          <Card title="2. Enterprise Enrichment" color="#f8f9fa">
            <Text fontSize="18px" margin="0">
              Predict 200+ attributes per customer record.
              $0.10-$1.00/record. <strong>$5M+ deals.</strong>
            </Text>
          </Card>
          <Card title="3. Platform Licenses" color="#f8f9fa">
            <Text fontSize="18px" margin="0">
              Unlimited API + SLA + support.
              $100K-$1M+/year per enterprise.
            </Text>
          </Card>
          <Card title="4. Microsim Compute" color="#f8f9fa">
            <Text fontSize="18px" margin="0">
              Population-scale policy modeling.
              $50K-$500K per engagement.
            </Text>
          </Card>
        </Grid>
        <Notes>
          Multiple revenue streams. Enterprise enrichment is the big money -
          a grocery chain with 10M customers = $5M deal.
        </Notes>
      </Slide>

      {/* Slide 8: Customers */}
      <Slide backgroundColor="#ffffff">
        <SlideTitle>Customer Segments</SlideTitle>
        <Box>
          <Text fontSize="22px" fontWeight="bold" color="secondary" margin="0 0 12px 0">
            Year 1: Design Partners
          </Text>
          <Text fontSize="20px" margin="0 0 20px 0">
            AI-native fintech, benefits platforms, financial planning AI
          </Text>

          <Text fontSize="22px" fontWeight="bold" color="secondary" margin="0 0 12px 0">
            Year 2-3: Growth
          </Text>
          <Text fontSize="20px" margin="0 0 20px 0">
            Neobanks, payroll companies, insurance, tax prep ($100K-$1M deals)
          </Text>

          <Text fontSize="22px" fontWeight="bold" color="secondary" margin="0 0 12px 0">
            Year 3+: Enterprise
          </Text>
          <Text fontSize="20px" margin="0 0 20px 0">
            Large retailers, major banks, HR platforms, government ($1M-$10M deals)
          </Text>

          <Text fontSize="22px" fontWeight="bold" color="secondary" margin="0 0 12px 0">
            Year 4+: Strategic
          </Text>
          <Text fontSize="20px" margin="0">
            AI labs (Anthropic, OpenAI), cloud providers (AWS, GCP)
          </Text>
        </Box>
        <Notes>
          Clear progression from design partners to enterprise to strategic partnerships.
        </Notes>
      </Slide>

      {/* Slide 9: Revenue Path */}
      <Slide backgroundColor="#ffffff">
        <SlideTitle>Path to $1B+</SlideTitle>
        <Box style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '12px',
          marginTop: '20px'
        }}>
          {[
            { year: 'Y1', arr: '$1M', milestone: 'PMF, 10 partners' },
            { year: 'Y2', arr: '$5M', milestone: 'Series A, first $1M deal' },
            { year: 'Y3', arr: '$20M', milestone: 'Series B, 10+ countries' },
            { year: 'Y4', arr: '$60M', milestone: 'AI lab integrations' },
            { year: 'Y5', arr: '$150M', milestone: '$1B+ valuation' },
          ].map((item) => (
            <Box
              key={item.year}
              backgroundColor="#f8f9fa"
              padding="20px"
              style={{ borderRadius: '12px', textAlign: 'center' }}
            >
              <Text fontSize="20px" fontWeight="bold" color="secondary" margin="0">
                {item.year}
              </Text>
              <Text fontSize="28px" fontWeight="bold" margin="8px 0">
                {item.arr}
              </Text>
              <Text fontSize="14px" color="quaternary" margin="0">
                {item.milestone}
              </Text>
            </Box>
          ))}
        </Box>
        <Text fontSize="24px" margin="40px 0 0 0" textAlign="center">
          $150M ARR × 7-10x multiple = <strong style={{ color: '#0066ff' }}>$1B+ valuation</strong>
        </Text>
        <Notes>
          Aggressive but achievable path. Comparable to Plaid, Stripe, Twilio trajectories.
        </Notes>
      </Slide>

      {/* Slide 10: Moats */}
      <Slide backgroundColor="#ffffff">
        <SlideTitle>Competitive Moats</SlideTitle>
        <Grid gridTemplateColumns="1fr 1fr" gridGap="20px">
          <Card title="🗄️ Microdata" color="#f8f9fa">
            <Text fontSize="18px" margin="0">
              Enhanced CPS, synthetic populations, calibrated surveys.
              Hard to recreate.
            </Text>
          </Card>
          <Card title="🗺️ Coverage" color="#f8f9fa">
            <Text fontSize="18px" margin="0">
              Federal + 50 states + benefits programs.
              Expensive to build, ongoing maintenance.
            </Text>
          </Card>
          <Card title="✅ Validation" color="#f8f9fa">
            <Text fontSize="18px" margin="0">
              Test suites against IRS examples, edge cases.
              Trust is earned over years.
            </Text>
          </Card>
          <Card title="🔄 Freshness" color="#f8f9fa">
            <Text fontSize="18px" margin="0">
              Parameters updated when law changes.
              Ongoing investment competitors won't make.
            </Text>
          </Card>
        </Grid>
        <Notes>
          These compound over time. The longer we run, the harder to catch up.
        </Notes>
      </Slide>

      {/* Slide 11: Traction */}
      <Slide backgroundColor="#ffffff">
        <SlideTitle>Traction: PolicyEngine Foundation</SlideTitle>
        <Grid gridTemplateColumns="1fr 1fr 1fr" gridGap="24px" margin="0 0 30px 0">
          <Box textAlign="center">
            <Text fontSize="48px" fontWeight="bold" color="secondary" margin="0">
              1M+
            </Text>
            <Text fontSize="20px" color="quaternary" margin="0">
              Simulations run
            </Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="48px" fontWeight="bold" color="secondary" margin="0">
              50+
            </Text>
            <Text fontSize="20px" color="quaternary" margin="0">
              Countries covered
            </Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="48px" fontWeight="bold" color="secondary" margin="0">
              50+
            </Text>
            <Text fontSize="20px" color="quaternary" margin="0">
              Contributors
            </Text>
          </Box>
        </Grid>
        <Text fontSize="24px" margin="0 0 16px 0">
          <strong>Used by:</strong> UK Government, US Congress (JCT), State Legislatures
        </Text>
        <Text fontSize="24px" margin="0">
          <strong>Coverage:</strong> US federal + 50 states, UK, Canada
        </Text>
        <Notes>
          We're not starting from zero. PolicyEngine is proven technology used by governments.
        </Notes>
      </Slide>

      {/* Slide 12: Team */}
      <Slide backgroundColor="#ffffff">
        <SlideTitle>Team</SlideTitle>
        <FlexBox justifyContent="center" alignItems="flex-start">
          <Box textAlign="center" maxWidth="500px">
            <Text fontSize="32px" fontWeight="bold" margin="0">
              Max Ghenis
            </Text>
            <Text fontSize="24px" color="secondary" margin="8px 0 20px 0">
              Founder & CEO
            </Text>
            <UnorderedList fontSize="22px" margin="0" textAlign="left">
              <ListItem>Founded PolicyEngine (2021)</ListItem>
              <ListItem>Built microsim models for US, UK, Canada</ListItem>
              <ListItem>Former: Google, Uber (data science)</ListItem>
              <ListItem>MIT Economics</ListItem>
            </UnorderedList>
          </Box>
        </FlexBox>
        <Text fontSize="24px" color="quaternary" margin="40px 0 0 0" textAlign="center">
          Hiring: Founding engineers (systems, ML), First sales hire
        </Text>
        <Notes>
          Proven ability to build and ship microsimulation at scale.
        </Notes>
      </Slide>

      {/* Slide 13: The Ask */}
      <Slide backgroundColor="#ffffff">
        <SlideTitle>The Ask</SlideTitle>
        <FlexBox justifyContent="center" margin="0 0 30px 0">
          <Box
            backgroundColor="#eff6ff"
            padding="32px 64px"
            style={{ borderRadius: '16px', textAlign: 'center' }}
          >
            <Text fontSize="24px" color="quaternary" margin="0">
              Seed Round
            </Text>
            <Text fontSize="56px" fontWeight="bold" color="secondary" margin="8px 0">
              $3-5M
            </Text>
          </Box>
        </FlexBox>
        <Grid gridTemplateColumns="1fr 1fr" gridGap="24px">
          <Card title="Use of Funds" color="#f8f9fa">
            <UnorderedList fontSize="20px" margin="0">
              <ListItem>50% Engineering (core platform)</ListItem>
              <ListItem>25% Data/ML (prediction models)</ListItem>
              <ListItem>15% Go-to-market</ListItem>
              <ListItem>10% Operations</ListItem>
            </UnorderedList>
          </Card>
          <Card title="Milestones to Series A" color="#f8f9fa">
            <UnorderedList fontSize="20px" margin="0">
              <ListItem>10+ paying customers</ListItem>
              <ListItem>$1M+ ARR</ListItem>
              <ListItem>1-2 enterprise deals ($500K+)</ListItem>
              <ListItem>Proven accuracy at scale</ListItem>
            </UnorderedList>
          </Card>
        </Grid>
        <Notes>
          Clear use of funds, clear milestones. Series A in 18-24 months.
        </Notes>
      </Slide>

      {/* Slide 14: Why This Wins */}
      <Slide backgroundColor="#ffffff">
        <SlideTitle>Why This Wins</SlideTitle>
        <Box margin="20px 0">
          {[
            { num: '1', text: 'Timing — AI adoption creates massive demand for reliable policy tools' },
            { num: '2', text: 'Team — Built the leading open source microsimulation platform' },
            { num: '3', text: 'Moat — Data + coverage + validation compound over time' },
            { num: '4', text: 'Model — Open source builds trust, paid services capture value' },
            { num: '5', text: 'Vision — Every AI agent needs Cosilico. We become the standard.' },
          ].map((item) => (
            <FlexBox key={item.num} alignItems="flex-start" margin="0 0 20px 0">
              <Box
                backgroundColor="#0066ff"
                padding="8px 16px"
                style={{ borderRadius: '50%', marginRight: '16px' }}
              >
                <Text fontSize="20px" color="tertiary" fontWeight="bold" margin="0">
                  {item.num}
                </Text>
              </Box>
              <Text fontSize="24px" margin="4px 0 0 0">{item.text}</Text>
            </FlexBox>
          ))}
        </Box>
        <Notes>
          Five reasons this is a fundable, winnable opportunity.
        </Notes>
      </Slide>

      {/* Slide 15: Closing */}
      <Slide backgroundImage="linear-gradient(135deg, #0066ff 0%, #0052cc 100%)">
        <FlexBox height="100%" flexDirection="column" justifyContent="center" alignItems="center">
          <Heading fontSize="72px" color="tertiary" margin="0" style={{ letterSpacing: '-0.03em' }}>
            Cosilico
          </Heading>
          <Text fontSize="h3" color="tertiary" margin="20px 0 0 0" style={{ opacity: 0.95 }}>
            The infrastructure for policy-aware AI
          </Text>
          <Text fontSize="20px" color="tertiary" margin="60px 0 0 0" style={{ opacity: 0.8 }}>
            max@cosilico.ai
          </Text>
        </FlexBox>
        <Notes>
          Thank you. Questions?
        </Notes>
      </Slide>
    </Deck>
  );
};

export default PitchDeck;
