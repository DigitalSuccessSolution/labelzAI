export interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string; description: string }[];
}

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Mission & Vision", href: "/mission-vision" },
  { name: "Why Choose Us", href: "/why-choose-us" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Permanent Recruitment", href: "/services/permanent-recruitment", description: "End-to-end recruitment solutions for key long-term corporate hiring needs." },
      { name: "Recruitment Process Outsourcing (RPO)", href: "/services/rpo", description: "Full recruitment lifecycle optimization and management for scalable growth." },
      { name: "Contract Staffing", href: "/services/contract-staffing", description: "Flexible, compliant staffing solutions for temporary or project-based talents." },
      { name: "Executive Search (Headhunting / Retained Search)", href: "/services/executive-search", description: "Exclusive, high-level leadership search for C-suite and executive roles." },
    ],
  },
];

export const INDUSTRIES = [
  { name: "Information Technology (IT)", href: "/industries/it-technology", description: "Software development, cloud, AI, cybersecurity, and data science talent." },
  { name: "Healthcare & Biotechnology", href: "/industries/healthcare-biotech", description: "Certified clinicians, lab researchers, biotech experts, and health administrators." },
  { name: "Pharma & Life Sciences", href: "/industries/pharma-life-sciences", description: "Clinical research, formulation, QA/QC, and regulatory affairs professionals." },
  { name: "Liquor & Beverages", href: "/industries/liquor-beverages", description: "Distillery operations, supply chain, brand management, and sales talent." },
  { name: "E-Commerce", href: "/industries/e-commerce", description: "Digital marketing, product management, logistics, and operations specialists." },
  { name: "Renewable Energy & ESG", href: "/industries/renewable-energy-esg", description: "Solar/wind engineers, sustainability consultants, and ESG compliance officers." },
  { name: "Semiconductor & Electronics Manufacturing", href: "/industries/semiconductor-electronics", description: "VLSI design, assembly, quality testing, and hardware engineering talent." },
  { name: "FinTech & BFSI", href: "/industries/fintech-bfsi", description: "Wealth management, banking operations, fintech development, and risk assessment." },
  { name: "FMCG & FMCD", href: "/industries/fmcg-fmcd", description: "Brand management, trade marketing, retail distribution, and product logistics." },
  { name: "Logistics", href: "/industries/logistics", description: "Warehouse management, cold-chain operations, freight forwarding, and logistics." },
  { name: "Manufacturing (Automobile and Ancillaries)", href: "/industries/manufacturing-automobile", description: "Plant operations, automobile design, quality control, and assembly engineers." },
];

export interface ContentBlock {
  type: "subtitle" | "tagline" | "paragraph" | "list" | "features";
  title?: string;
  text?: string;
  items?: string[] | { title: string; desc: string }[];
}

export interface IndustryDetails {
  subtitle: string;
  image: string;
  blocks: ContentBlock[];
}

export const INDUSTRY_DETAILS: Record<string, IndustryDetails> = {
  "Information Technology (IT)": {
    subtitle: "IT Recruitment Services | PAN India",
    image: "/images/it-meeting.png",
    blocks: [
      {
        type: "paragraph",
        text: "LabelzAI HR Management & Recruitment Consultancy delivers specialized IT recruitment services across India, connecting technology companies with pre-vetted talent across the entire experience spectrum — junior developers to executive leadership."
      },
      {
        type: "tagline",
        text: "Full-Spectrum IT Staffing Solutions"
      },
      {
        type: "paragraph",
        text: "We provide end-to-end IT recruitment and staffing solutions covering permanent placement, contract staffing, and executive search — tailored to your hiring velocity and technical requirements."
      },
      {
        type: "list",
        title: "Domains We Specialize In:",
        items: [
          "Software Development (Full-Stack, Backend, Frontend)",
          "Cloud & DevOps Engineering (AWS, Azure, GCP)",
          "Data Science, AI/ML & Analytics",
          "Cybersecurity & Information Security",
          "QA & Test Automation",
          "IT Infrastructure & Network Administration",
          "Product Management & Technical Program Management",
          "IT Leadership (CTOs, VPs of Engineering, Technical Directors)"
        ]
      },
      {
        type: "paragraph",
        text: "Our technical recruitment specialists use structured candidate screening and skill-mapping frameworks to evaluate coding proficiency, system design capability, and cultural fit — reducing mismatched hires and shortening your time-to-fill."
      },
      {
        type: "features",
        title: "What Sets Us Apart:",
        items: [
          { title: "Pan-India Reach", desc: "Sourcing talent across Tier 1, Tier 2, and Tier 3 cities" },
          { title: "Role-Level Precision", desc: "Structured pipelines for junior, mid-level, senior, and executive IT roles" },
          { title: "Faster TAT", desc: "Optimized sourcing-to-offer turnaround for urgent tech hiring needs" },
          { title: "Contract-to-Hire Flexibility", desc: "Scalable staffing models for project-based and long-term engagements" },
          { title: "Compliance-First Approach", desc: "Adherence to labor law and HR compliance" }
        ]
      }
    ]
  },
  "Healthcare & Biotechnology": {
    subtitle: "Healthcare & Biotechnology Recruitment Services | PAN India",
    image: "/images/healthcare-biotech.png",
    blocks: [
      {
        type: "tagline",
        text: "Precision Talent Acquisition for India's Healthcare & Life Sciences Ecosystem"
      },
      {
        type: "paragraph",
        text: "LabelzAI Techservices delivers specialized recruitment solutions for the healthcare, pharmaceutical, and biotechnology sectors across India. As a trusted healthcare staffing agency in India, we bridge the critical talent gap between high-growth life sciences organizations and India's evolving skilled workforce — from junior associates to CXO-level leadership."
      },
      {
        type: "list",
        title: "Our Domain Expertise",
        text: "We recruit across the full healthcare and biotech value chain, including:",
        items: [
          "Clinical Operations & Research — Clinical Research Associates, Clinical Data Managers, Biostatisticians, Regulatory Affairs Specialists",
          "Pharmaceutical & Biotech Manufacturing — Production Chemists, QA/QC Officers, Formulation Scientists, Process Engineers",
          "Healthcare Delivery — Hospital Administrators, Nursing Staff, Paramedical Professionals, Healthcare IT Specialists",
          "Medical Devices & Diagnostics — R&D Engineers, Product Managers, Regulatory Compliance Officers",
          "Executive Search — CMOs, VP Operations, Heads of R&D, Country Managers for pharma and biotech enterprises"
        ]
      },
      {
        type: "features",
        title: "Why Choose LabelzAI for Healthcare Talent Acquisition",
        items: [
          { title: "Compliance-First Sourcing", desc: "Every candidate is vetted against India's regulatory frameworks — CDSCO, GMP, GCP, and NABH standards — ensuring audit-ready hiring." },
          { title: "PAN-India Talent Network", desc: "Our sourcing infrastructure spans Tier 1 pharma hubs (Hyderabad, Mumbai, Ahmedabad) to emerging biotech clusters, giving clients access to both metro-concentrated specialists and cost-efficient regional talent pools." },
          { title: "Role-Level Flexibility", desc: "Whether scaling entry-level clinical support teams or filling a critical Director of Regulatory Affairs mandate, our recruitment methodology adapts to headcount velocity and specialization depth." },
          { title: "Reduced Time-to-Hire", desc: "Structured screening pipelines and pre-vetted candidate databases cut average hiring cycles significantly compared to generalist staffing firms." }
        ]
      },
      {
        type: "paragraph",
        text: "For pharmaceutical companies, biotech startups, hospital networks, and diagnostic firms seeking dependable healthcare staffing solutions, LabelzAI offers contract staffing, permanent placement, and executive search — engineered for India's regulatory and operational realities. Get in touch for a tailored hiring roadmap."
      }
    ]
  },
  "Pharma & Life Sciences": {
    subtitle: "Specialized Pharmaceutical Recruitment Across All Functions & Seniority Levels PAN India",
    image: "/images/pharma-life-sciences.png",
    blocks: [
      {
        type: "paragraph",
        text: "LabelzAI Techservices LLP is a dedicated Pharmaceutical industry recruitment partner for drug manufacturers, API producers, formulation companies, contract research organizations, contract manufacturing organizations, branded generic firms, OTC product companies, nutraceutical brands, and pharmaceutical distribution enterprises across PAN India — delivering background-verified, compliance-aware professionals across every function and seniority level within India's world-leading pharmaceutical sector."
      },
      {
        type: "tagline",
        text: "Why Pharma Companies Choose LabelzAI"
      },
      {
        type: "paragraph",
        text: "India's pharmaceutical sector demands recruitment partners who understand regulatory complexity, GMP compliance, and the technical rigor of drug development lifecycles. Our dedicated pharma vertical combines domain expertise with a PAN India sourcing network spanning key manufacturing and R&D hubs — Hyderabad, Ahmedabad, Mumbai, Baddi, Sikkim, and Vizag."
      },
      {
        type: "paragraph",
        text: "LabelzAI delivers specialized Pharmaceutical Recruitment Solutions for API manufacturing, formulations, biotechnology, vaccines, medical devices, nutraceuticals, and healthcare manufacturing organizations across India. We support pharmaceutical companies in hiring qualified professionals for manufacturing plants, quality functions, engineering, production, regulatory affairs, supply chain, warehouse, and corporate operations. Our recruitment expertise spans Junior, Mid, Senior, and Executive-level positions, ensuring organizations secure skilled talent that meets GMP, GLP, WHO, USFDA, MHRA, and regulatory compliance standards."
      },
      {
        type: "list",
        title: "Roles We Recruit For",
        items: [
          "Production & Manufacturing: Production Officers, Shift Executives, Plant Managers, GMP Compliance Specialists",
          "Quality Assurance & Quality Control: QA/QC Executives, Validation Engineers, Regulatory Affairs Managers",
          "R&D & Clinical: Formulation Scientists, Clinical Research Associates, Pharmacovigilance Specialists",
          "Sales & Marketing: Medical Representatives, Product Managers, Zonal/National Sales Heads",
          "Leadership: Plant Heads, VP Operations, CQA, CEO/Country Managers"
        ]
      },
      {
        type: "tagline",
        text: "Our Recruitment Methodology"
      },
      {
        type: "paragraph",
        text: "LabelzAI applies structured screening protocols validating technical qualifications, regulatory knowledge (CDSCO, USFDA, WHO-GMP), and industry-specific competencies before candidate submission — reducing time-to-hire and minimizing mismatched placements. Our consultants maintain active pharma talent pipelines, enabling rapid turnaround on urgent mandates."
      }
    ]
  },
  "Liquor & Beverages": {
    subtitle: "Liquor & Beverage Including Plant & Manufacturing",
    image: "/images/liquor-beverages.png",
    blocks: [
      {
        type: "tagline",
        text: "Specialized Staffing Solutions for India's Liquor & Beverage Industry"
      },
      {
        type: "paragraph",
        text: "LabelzAI Techservices LLP delivers end-to-end recruitment and manpower solutions for the Liquor, Beverage, and FMCG sector across India. As a dedicated HR consultancy for liquor and beverage companies, we bridge the talent gap for distilleries, breweries, bottling plants, distribution houses, and beverage manufacturing units — sourcing candidates from junior operational roles to senior management and executive leadership."
      },
      {
        type: "list",
        title: "Roles We Recruit For",
        text: "Junior to Mid-Level:",
        items: [
          "Sales Executives & Territory Sales Officers",
          "Depot & Warehouse Supervisors",
          "Production & Quality Control Executives",
          "Merchandisers & Distribution Coordinators",
          "Excise & Compliance Officers"
        ]
      },
      {
        type: "list",
        text: "Mid to Senior Level:",
        items: [
          "Area Sales Managers & Regional Sales Managers",
          "Brand Managers & Trade Marketing Managers",
          "Plant/Production Managers",
          "Supply Chain & Logistics Heads",
          "State Excise & Regulatory Affairs Heads"
        ]
      },
      {
        type: "list",
        text: "Executive Level:",
        items: [
          "General Manager – Sales & Marketing",
          "VP/Director – Operations",
          "Chief Distribution Officer",
          "National Sales Head"
        ]
      },
      {
        type: "features",
        title: "Why Choose LabelzAI for Liquor & Beverage Hiring",
        items: [
          { title: "Industry-Specific Talent Mapping", desc: "We understand the nuances of India's state-wise excise regulations, IMFL (Indian Made Foreign Liquor) distribution networks, and beverage supply chain complexities — enabling precise candidate-role matching." },
          { title: "Pan-India Reach", desc: "Active sourcing networks across key liquor markets including Maharashtra, Karnataka, Delhi NCR, Punjab, UP, Telangana, and West Bengal." },
          { title: "Compliance-Aware Screening", desc: "Candidates vetted for regulatory knowledge, license handling experience, and sector-specific certifications." },
          { title: "Rapid Turnaround", desc: "Structured recruitment pipelines reduce time-to-hire for high-attrition sales and distribution roles." },
          { title: "Confidential Executive Search", desc: "Discreet leadership hiring for senior and CXO-level mandates." }
        ]
      }
    ]
  },
  "E-Commerce": {
    subtitle: "Powering India's E-commerce Workforce, End to End",
    image: "/images/ecommerce-fulfillment.png",
    blocks: [
      {
        type: "paragraph",
        text: "As India's e-commerce sector scales past $150 billion in market value, the demand for specialized talent across the supply chain has never been higher. LabelzAI HR delivers PAN India recruitment solutions for e-commerce companies, sourcing candidates from entry-level operations to CXO leadership, tailored to the fast-paced, high-volume hiring needs of online retail, marketplaces, D2C brands, and quick-commerce platforms."
      },
      {
        type: "tagline",
        text: "Why E-commerce Companies Choose LabelzAI HR"
      },
      {
        type: "paragraph",
        text: "Our recruitment consultants understand the operational nuances of e-commerce hiring — from warehouse and logistics staffing to digital marketing, category management, and technology roles. We combine sector-specific talent mapping with structured screening to deliver candidates who are productive from day one."
      },
      {
        type: "list",
        title: "Our E-commerce Hiring Verticals Include:",
        items: [
          "Supply Chain & Logistics – Warehouse Executives, Inventory Analysts, Last-Mile Delivery Managers, Fulfillment Center Heads",
          "Category Management & Buying – Category Managers, Sourcing Executives, Vendor Relationship Managers",
          "Digital Marketing & Growth – Performance Marketing Managers, SEO Specialists, Marketplace Growth Leads, E-commerce Analysts",
          "Technology & Platform – Backend Developers, DevOps Engineers, Product Managers, Data Analysts",
          "Customer Experience – Customer Support Executives, CX Managers, Trust & Safety Leads",
          "Leadership & Executive Search – COOs, CMOs, Heads of Operations, Business Unit Heads"
        ]
      },
      {
        type: "tagline",
        text: "Recruitment That Scales With You"
      },
      {
        type: "paragraph",
        text: "Whether you're a growing D2C startup hiring your first 10 employees or an established marketplace scaling operations across metro and Tier 2/3 cities, our contract staffing, permanent placement, and executive search services adapt to your hiring velocity — with pan-India sourcing capability and sector-mapped candidate databases."
      }
    ]
  },
  "Renewable Energy & ESG": {
    subtitle: "Renewable Energy & ESG Recruitment Services | PAN India",
    image: "/images/renewable-energy.png",
    blocks: [
      {
        type: "tagline",
        text: "Powering India's Clean Energy Transition with Precision Talent Solutions"
      },
      {
        type: "paragraph",
        text: "LabelzAI Techservices LLP delivers specialized recruitment solutions for the Renewable Energy and ESG (Environmental, Social & Governance) sector across India. As the nation accelerates toward its 500 GW non-fossil fuel capacity target by 2030, organizations in solar, wind, green hydrogen, energy storage, and sustainability consulting require talent partners who understand both technical complexity and regulatory frameworks."
      },
      {
        type: "paragraph",
        text: "Our recruitment consultancy combines domain expertise with a PAN India sourcing network, connecting employers with pre-vetted professionals across the clean energy value chain — from junior engineers to CXO-level leadership."
      },
      {
        type: "list",
        title: "Sectors We Serve:",
        items: [
          "Solar & Wind Energy (EPC, O&M, Project Development)",
          "Green Hydrogen & Energy Storage",
          "ESG Consulting & Sustainability Reporting",
          "Carbon Markets & Climate Risk Advisory",
          "Power Purchase Agreements (PPA) & Regulatory Compliance",
          "Grid Integration & Smart Energy Systems"
        ]
      },
      {
        type: "list",
        title: "Roles We Recruit For:",
        items: [
          "Junior to Mid-Level: Site Engineers, ESG Analysts, Sustainability Coordinators, Renewable Energy Technicians, Compliance Associates",
          "Senior to Executive: Project Directors, Head of Sustainability, VP–Renewable Energy, Chief Sustainability Officer (CSO), Business Heads"
        ]
      },
      {
        type: "tagline",
        text: "Our Recruitment Methodology"
      },
      {
        type: "paragraph",
        text: "LabelzAI applies a structured, quality-driven hiring process — rigorous technical screening, credential verification, and cultural-fit assessment — ensuring every placement aligns with your organization's operational and ESG compliance requirements. We understand BRSR reporting mandates, SEBI ESG disclosure norms, and international frameworks (GRI, TCFD, SASB), enabling us to identify candidates who meet both technical and governance benchmarks."
      }
    ]
  },
  "Semiconductor & Electronics Manufacturing": {
    subtitle: "Semiconductor & Electronics Manufacturing Recruitment | PAN India",
    image: "/images/semiconductor-electronics.png",
    blocks: [
      {
        type: "tagline",
        text: "Precision Talent Acquisition for India's Semiconductor Revolution"
      },
      {
        type: "paragraph",
        text: "As India accelerates toward becoming a global semiconductor and electronics manufacturing hub, LabelzAI Techservices LLP delivers specialized recruitment solutions engineered for the sector's unique technical demands. From fabrication facilities to PCB assembly lines, we connect manufacturers with talent that meets exacting quality and compliance standards."
      },
      {
        type: "list",
        title: "Our Recruitment Expertise Spans:",
        items: [
          "Semiconductor Manufacturing — Wafer fabrication engineers, process technicians, cleanroom operators, yield engineers, equipment maintenance specialists, and quality assurance personnel for fab and OSAT facilities.",
          "Electronics Manufacturing Services (EMS) — SMT operators, PCB design engineers, test engineers, production supervisors, and NPI (New Product Introduction) specialists supporting PAN India manufacturing plants.",
          "Engineering & Technical Roles — VLSI design engineers, embedded systems engineers, RF engineers, reliability engineers, and R&D talent for chip design and product development teams.",
          "Leadership & Executive Search — Plant heads, operations directors, VP-Manufacturing, and CXO-level placements for greenfield and brownfield semiconductor and electronics projects."
        ]
      },
      {
        type: "tagline",
        text: "Why Manufacturers Choose LabelzAI"
      },
      {
        type: "paragraph",
        text: "We recruit across the complete talent pyramid — from junior technicians and shift-floor engineers to senior executives and plant leadership — with domain-specific screening that evaluates technical competency, not just resumes. Our sourcing network covers established electronics manufacturing clusters and emerging semiconductor investment zones nationwide, supporting both permanent placement and contract staffing models."
      },
      {
        type: "paragraph",
        text: "With India's PLI (Production Linked Incentive) scheme driving unprecedented investment in chip manufacturing, assembly, and testing facilities, demand for skilled talent is outpacing supply. LabelzAI bridges this gap with rapid turnaround, rigorous technical vetting, and deep understanding of ISO, IATF, and cleanroom compliance requirements specific to semiconductor and electronics environments."
      }
    ]
  },
  "FinTech & BFSI": {
    subtitle: "Powering India's Financial Innovation Through Precision Talent Acquisition",
    image: "/images/fintech-bfsi.png",
    blocks: [
      {
        type: "paragraph",
        text: "LabelzAI delivers specialized recruitment solutions for the FinTech and BFSI (Banking, Financial Services & Insurance) sector across India, connecting high-growth financial institutions with pre-vetted talent spanning junior analysts to CXO-level executives."
      },
      {
        type: "tagline",
        text: "Why LabelzAI for FinTech & BFSI Hiring"
      },
      {
        type: "paragraph",
        text: "The financial services landscape demands recruitment partners who understand regulatory frameworks, domain-specific skill sets, and the velocity at which FinTech scales. Our specialized talent acquisition model addresses hiring across:"
      },
      {
        type: "list",
        title: "Key Sourcing Verticals",
        items: [
          "Digital Banking & Payments – UPI/payments infrastructure, core banking systems, digital lending platforms",
          "Risk & Compliance – RBI/SEBI regulatory compliance, AML/KYC specialists, credit risk analysts",
          "Wealth & Asset Management – Investment advisors, portfolio managers, relationship managers",
          "Insurance Technology – InsurTech product roles, underwriting, claims automation specialists",
          "Financial Analytics – Quantitative analysts, fraud detection, financial modeling experts",
          "Technology & Product – Full-stack developers, blockchain engineers, product managers for financial platforms"
        ]
      },
      {
        type: "list",
        title: "End-to-End Recruitment Across Career Levels",
        items: [
          "Junior/Entry-Level – Analysts, associates, relationship executives (0-3 years)",
          "Mid-Management – Team leads, senior analysts, product owners (3-8 years)",
          "Senior & Leadership – VPs, department heads, CXO placements (8+ years)"
        ]
      },
      {
        type: "tagline",
        text: "Our Recruitment Methodology"
      },
      {
        type: "paragraph",
        text: "LabelzAI applies structured screening protocols, domain-competency assessments, and background verification tailored to financial services compliance standards. Our PAN India network spans key financial hubs — Mumbai, Bengaluru, Gurugram, Hyderabad, and Pune — ensuring rapid turnaround on time-sensitive mandates."
      },
      {
        type: "paragraph",
        text: "Whether you're a FinTech startup scaling engineering teams, an NBFC building compliance functions, or a banking institution seeking leadership talent, LabelzAI delivers precision-matched candidates aligned to your business objectives and regulatory requirements."
      }
    ]
  },
  "FMCG & FMCD": {
    subtitle: "Strategic Talent Acquisition for India's Fastest-Growing Consumer Sectors",
    image: "/images/fmcg-fmcd.png",
    blocks: [
      {
        type: "paragraph",
        text: "LabelzAI Techservices LLP delivers specialized recruitment services for the FMCG (Fast-Moving Consumer Goods) and FMCD (Fast-Moving Consumer Durables) sectors, connecting organizations with high-performing talent across PAN India operations. As consumer demand accelerates across Tier 1, Tier 2, and Tier 3 markets, we provide the recruitment infrastructure businesses need to scale efficiently."
      },
      {
        type: "tagline",
        text: "Industry-Focused Recruitment Expertise"
      },
      {
        type: "paragraph",
        text: "Our recruitment consultants possess deep sector knowledge across FMCG and FMCD verticals, including food & beverages, personal care, home care, consumer electronics, and durable goods manufacturing. We understand the operational nuances of sales & distribution networks, trade marketing, supply chain management, and retail execution that define hiring success in this industry."
      },
      {
        type: "list",
        title: "Talent Solutions Across the Career Spectrum:",
        items: [
          "Junior/Entry-Level: Sales Officers, Territory Sales Executives, Merchandisers, Trainee Management staff",
          "Mid-Level: Area Sales Managers, Key Account Managers, Category Managers, Supply Chain Executives",
          "Senior/Executive-Level: Regional Sales Heads, National Sales Managers, Business Unit Heads, VP–Sales & Marketing"
        ]
      },
      {
        type: "paragraph",
        text: "With a distributed sourcing network covering metro cities, emerging urban centers, and rural distribution hubs, LabelzAI enables rapid, scalable hiring for FMCG and FMCD companies expanding their PAN India footprint — from Tier 1 corporate offices to last-mile distribution teams."
      },
      {
        type: "list",
        title: "Why Partner With LabelzAI",
        items: [
          "Structured candidate screening aligned to industry-specific KPIs",
          "Reduced time-to-hire through pre-vetted talent pipelines",
          "Deep understanding of FMCG/FMCD compensation benchmarks and role hierarchies",
          "Confidential executive search for leadership mandates"
        ]
      }
    ]
  },
  "Logistics": {
    subtitle: "Logistics & Supply Chain Recruitment Services – PAN India",
    image: "/images/logistics-warehouse.png",
    blocks: [
      {
        type: "tagline",
        text: "Precision Staffing for India's Logistics & Supply Chain Sector"
      },
      {
        type: "paragraph",
        text: "LabelzAI Techservices delivers specialized recruitment solutions for the logistics, warehousing, and supply chain management industry across India. As e-commerce, manufacturing, and 3PL/4PL operations scale nationally, we connect organizations with qualified talent capable of driving operational efficiency, cost optimization, and supply chain resilience."
      },
      {
        type: "list",
        title: "Our Recruitment Coverage",
        text: "We provide end-to-end manpower staffing solutions spanning the complete talent pyramid — from entry-level warehouse operations to CXO-level supply chain leadership:",
        items: [
          "Junior & Mid-Level Roles: Warehouse Executives, Inventory Control Officers, Logistics Coordinators, Fleet Supervisors, Dispatch Executives, Store Managers, Procurement Executives, and Last-Mile Delivery Managers.",
          "Senior & Executive Roles: Supply Chain Managers, Logistics Heads, Procurement Directors, VP – Operations, Chief Supply Chain Officers (CSCO), and General Managers – Warehousing & Distribution."
        ]
      },
      {
        type: "list",
        title: "Industry Verticals Served",
        items: [
          "E-commerce fulfillment",
          "Cold chain & pharma logistics",
          "FMCG distribution",
          "Automotive supply chains",
          "Freight forwarding",
          "Third-party logistics (3PL)",
          "Manufacturing supply networks"
        ]
      },
      {
        type: "features",
        title: "Why Partner With LabelzAI for Logistics Recruitment?",
        items: [
          { title: "PAN India Reach", desc: "Talent sourcing across metro, tier-2, and tier-3 logistics hubs" },
          { title: "Domain-Specific Screening", desc: "Candidates evaluated on WMS/ERP proficiency, inventory management, route optimization, and compliance knowledge" },
          { title: "Rapid Turnaround", desc: "Structured sourcing pipelines reduce time-to-hire for bulk and lateral hiring" },
          { title: "Compliance-Ready Staffing", desc: "Contract, permanent, and temporary staffing aligned with labour law and statutory requirements" }
        ]
      }
    ]
  },
  "Manufacturing (Automobile and Ancillaries)": {
    subtitle: "Automobile & Ancillary Manufacturing Recruitment — PAN India",
    image: "/images/automobile-manufacturing.png",
    blocks: [
      {
        type: "tagline",
        text: "Precision Talent Solutions for India's Automotive Manufacturing Ecosystem"
      },
      {
        type: "paragraph",
        text: "LabelzAI Techservices delivers specialized recruitment services for the automobile and ancillary manufacturing sector across India, connecting OEMs, Tier-1/Tier-2/Tier-3 suppliers, and auto-component manufacturers with qualified talent across all organizational levels."
      },
      {
        type: "tagline",
        text: "Industry Expertise"
      },
      {
        type: "paragraph",
        text: "Our recruitment consultants possess deep domain knowledge of automotive manufacturing operations — production planning, quality assurance (IATF 16949), supply chain management, plant operations, and process engineering. We serve passenger vehicle, commercial vehicle, two-wheeler, and auto-ancillary manufacturers, sourcing candidates for shop-floor, engineering, and corporate functions."
      },
      {
        type: "list",
        title: "Positions We Fulfill",
        text: "Junior to Mid-Level:",
        items: [
          "Production supervisors, quality engineers, maintenance technicians, CNC/VMC operators, tool & die makers, assembly line engineers, procurement executives, logistics coordinators, and QA/QC inspectors."
        ]
      },
      {
        type: "list",
        text: "Senior to Executive Level:",
        items: [
          "Plant heads, production managers, manufacturing excellence leads, supply chain directors, VP-Operations, and CXO-level manufacturing leadership."
        ]
      },
      {
        type: "features",
        title: "Why Manufacturers Choose LabelzAI",
        items: [
          { title: "PAN India Reach", desc: "Sourcing capability across automotive manufacturing clusters including Chennai, Pune, Gurgaon-Manesar, Ahmedabad, and Aurangabad" },
          { title: "QDAC-Driven Screening", desc: "Our Quality, Depth, Accuracy, and Consistency framework ensures technically vetted, role-ready candidates, reducing mis-hire risk" },
          { title: "Reduced Time-to-Hire", desc: "Pre-qualified talent pipelines aligned to production cycles and seasonal demand" },
          { title: "Compliance-Ready Placements", desc: "Candidates vetted for statutory and safety compliance standards relevant to manufacturing environments" },
          { title: "Contract, Permanent & Bulk Hiring", desc: "Flexible engagement models for shop-floor staffing surges, contract-to-hire, and leadership search" }
        ]
      }
    ]
  }
};

export const COMPANY_INFO = {
  name: "LabelzAI Techservices LLP",
  tagline: "Empowering Businesses with Intelligence-Driven Recruitment Solutions",
  address: "Level 4, Dynasty Business Park, Andheri-Kurla Road, Andheri East, Mumbai, Maharashtra 400059",
  phone: "+91 22 6845 9000",
  email: "info@labelzai.com",
  socials: {
    linkedin: "https://linkedin.com/company/labelzai",
    twitter: "https://twitter.com/labelzai",
    facebook: "https://facebook.com/labelzai",
  },
};

export const CONTACT_INFO = {
  regdAddress: "Baghbahara Road, Kutchhari Chowk, Opp. Hanuman Mandir, Mahasamund, Chhattisgarh – 493445",
  email: "info@labelzai.in",
  website: "www.labelzai.in"
};
