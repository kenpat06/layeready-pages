import Section from "../../components/Section";
import Callout from "../../components/Callout";

export const metadata = {
  title: "About — Layeready",
  description: "Building infrastructure for tomorrow's AI. Led by proven entrepreneurs with deep expertise in technology transformation.",
};

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title={
          <>
            Building infrastructure
            <br />
            for tomorrow's AI.
          </>
        }
        lead="Led by proven entrepreneurs with deep expertise in technology transformation, financial systems, and enterprise-scale execution."
      >
        <div className="card">
          <h3 className="h3">Leadership</h3>
          
          <div style={{ marginTop: 32 }}>
            <h4 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 8 }}>Ken Patel</h4>
            <p className="muted" style={{ marginBottom: 16 }}>Founder & Chief Executive Officer</p>
            <a 
              href="https://www.linkedin.com/in/ken-patel-bb0968123" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#666', 
                fontSize: '0.9rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn Profile
            </a>
          </div>

          <div style={{ marginTop: 32 }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 16 }}>Serial Entrepreneur & Technology Visionary</h4>
            <p className="muted" style={{ marginBottom: 16, lineHeight: 1.7 }}>
              Ken Patel brings over 15 years of entrepreneurial leadership and technology transformation expertise to Layeready. As a serial entrepreneur with a proven track record of building, scaling, and successfully exiting ventures across multiple high-growth sectors, Ken embodies the operational excellence and strategic vision essential for institutional-grade infrastructure development.
            </p>
            <p className="muted" style={{ lineHeight: 1.7 }}>
              His entrepreneurial journey spans financial technology, enterprise systems, and global consulting, with demonstrated success in identifying market opportunities, building strategic partnerships with tier-one institutions, and executing complex technology initiatives at scale.
            </p>
          </div>

          <div style={{ marginTop: 40 }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '24px' 
            }}>
              <div style={{ borderTop: '1px solid #333', paddingTop: 16 }}>
                <h5 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>M&A Experience</h5>
                <p className="fineprint">
                  Instrumental in acquisition negotiations for a NYC-based travel and reservation startup, successfully acquired by a leading travel platform
                </p>
              </div>
              
              <div style={{ borderTop: '1px solid #333', paddingTop: 16 }}>
                <h5 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Global Banking Partnerships</h5>
                <p className="fineprint">
                  Built and nurtured partnerships with Standard Chartered, ANZ, ABN Amro, and Citibank in the competitive Mumbai financial services market
                </p>
              </div>
              
              <div style={{ borderTop: '1px solid #333', paddingTop: 16 }}>
                <h5 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Enterprise Transformation</h5>
                <p className="fineprint">
                  Led global transformation projects for Fortune 500 clients including Coca-Cola, PepsiCo, Textron, and M&S while representing IBM and Accenture
                </p>
              </div>
              
              <div style={{ borderTop: '1px solid #333', paddingTop: 16 }}>
                <h5 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Financial Services Expertise</h5>
                <p className="fineprint">
                  8 years developing a startup into a top-tier financial and loan servicing firm in the mortgage and home loan market
                </p>
              </div>
              
              <div style={{ borderTop: '1px solid #333', paddingTop: 16 }}>
                <h5 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Technical Depth</h5>
                <p className="fineprint">
                  Deep expertise in IT architecture, system design, and technology infrastructure with engineering degree from Mumbai University
                </p>
              </div>
              
              <div style={{ borderTop: '1px solid #333', paddingTop: 16 }}>
                <h5 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Strategic Operational Leadership</h5>
                <p className="fineprint">
                  Proven ability in vendor negotiations, change management, and financial/operational management at enterprise scale
                </p>
              </div>
            </div>
          </div>

          <div style={{ 
            marginTop: 48,
            paddingTop: 32,
            paddingBottom: 32,
            borderTop: '1px solid #333',
            borderBottom: '1px solid #333'
          }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
              gap: '32px',
              textAlign: 'center'
            }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: 8 }}>15+</div>
                <div className="fineprint">Years Technology Leadership</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: 8 }}>3+</div>
                <div className="fineprint">Successful Ventures Built</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: 8 }}>$B</div>
                <div className="fineprint">Value in Client Projects Delivered</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: 8 }}>Global</div>
                <div className="fineprint">Fortune 500 Client Base</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 40 }}>
            <h4 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 16 }}>Powering the AI Revolution</h4>
            <p className="muted" style={{ marginBottom: 16, lineHeight: 1.7 }}>
              The explosive growth of AI compute demands a fundamental rethinking of data center infrastructure. Layeready is positioned at the intersection of this unprecedented opportunity, leveraging proven entrepreneurial execution and deep technical expertise to retrofit and deploy AI-optimized data centers in the critical 10-25 MW power range.
            </p>
            <p className="muted" style={{ lineHeight: 1.7 }}>
              We're building the essential infrastructure backbone for the next generation of AI applications, combining strategic site selection, rapid deployment capability, and institutional-grade partnerships to capture this multi-billion dollar market opportunity.
            </p>
          </div>
        </div>

        <div className="card" style={{ marginTop: 32 }}>
          <h3 className="h3">Why Institutional Partners Choose Layeready</h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '24px',
            marginTop: 24
          }}>
            <div style={{ borderTop: '1px solid #333', paddingTop: 16 }}>
              <h5 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Proven Track Record</h5>
              <p className="fineprint">
                Leadership with demonstrated success in building and scaling ventures across multiple successful exits and M&A transactions
              </p>
            </div>
            
            <div style={{ borderTop: '1px solid #333', paddingTop: 16 }}>
              <h5 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Market Timing</h5>
              <p className="fineprint">
                Positioned in the exploding AI infrastructure market with global AI data center capacity projected to reach $300B+ by 2030
              </p>
            </div>
            
            <div style={{ borderTop: '1px solid #333', paddingTop: 16 }}>
              <h5 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Institutional Relationships</h5>
              <p className="fineprint">
                Deep network across global banking, technology, and infrastructure sectors with proven ability to secure enterprise partnerships
              </p>
            </div>
            
            <div style={{ borderTop: '1px solid #333', paddingTop: 16 }}>
              <h5 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Operational Excellence</h5>
              <p className="fineprint">
                Demonstrated capability executing complex, multi-stakeholder technology infrastructure projects at Fortune 500 scale
              </p>
            </div>
            
            <div style={{ borderTop: '1px solid #333', paddingTop: 16 }}>
              <h5 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Financial Acumen</h5>
              <p className="fineprint">
                Extensive experience in financial services, capital formation, and strategic negotiations with institutional investors
              </p>
            </div>
            
            <div style={{ borderTop: '1px solid #333', paddingTop: 16 }}>
              <h5 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Scalable Business Model</h5>
              <p className="fineprint">
                Focused on the critical 10-25 MW segment with clear path to rapid deployment and revenue generation
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Callout
        title="Build the Future with Us"
        subtitle="We're seeking strategic partners and institutional investors to accelerate AI infrastructure deployment."
        primary={{
          label: "Connect With Us",
          href: "mailto:info@layeready.com?subject=Strategic%20Partnership%20Inquiry",
        }}
        secondary={{ label: "View Partnerships", href: "/partners/" }}
      />
    </>
  );
}