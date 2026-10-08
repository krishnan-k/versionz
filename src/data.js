const SITE = "https://www.versionzcorp.com";
const link = (name, path) => ({ name, href: `${SITE}${path}` });

export const serviceGroups = [
  {
    id: "apps",
    name: "Business applications",
    blurb:
      "ERP and CRM your finance, sales and service teams will actually open every morning, with reporting that comes from the same data they work in.",
    sets: [
      {
        label: "ERP",
        items: [
          link("Dynamics 365 Finance and Supply Chain Management", "/d365-finance-operations/"),
          link("Dynamics 365 Business Central", "/d365-business-central/"),
          link("Dynamics 365 Human Resources", "/d365-human-resources/"),
          link("AX to D365 upgrade", "/ax-to-d365-upgrade/"),
        ],
      },
      {
        label: "CRM",
        items: [
          link("Dynamics 365 Sales", "/d365-sales/"),
          link("Dynamics 365 Customer Service", "/d365-customer-service/"),
          link("Dynamics 365 Field Service", "/d365-field-service/"),
          link("Dynamics 365 Project Operations", "/d365-project-operations/"),
          link("Dynamics 365 Customer Insights", "/d365-customer-insights/"),
          link("Power Platform", "/power-platform/"),
        ],
      },
    ],
  },
  {
    id: "data",
    name: "Data, AI and analytics",
    blurb:
      "Analytics foundations, automation and copilots, each tied to a workflow you already run rather than a demo that never leaves the lab.",
    sets: [
      {
        label: "AI and automation",
        items: [
          link("AI and Copilot solutions", "/ai-copilot-solutions/"),
          link("D365 Sales Order Agent", "/products/d365-sales-order-agent/"),
          link("Intelligent automation", "/intelligent-automation/"),
          link("Predictive analytics", "/predictive-analytics/"),
          link("Process optimization", "/process-optimization/"),
        ],
      },
      {
        label: "Data and analytics",
        items: [
          link("Power BI and business intelligence", "/power-bi-business-intelligence/"),
          link("Data engineering and platforms", "/data-engineering-platforms/"),
          link("Data integration", "/data-integration/"),
        ],
      },
    ],
  },
  {
    id: "cloud",
    name: "Cloud services",
    blurb:
      "Azure architecture, integration, security and managed services, so the platform under your business apps can grow without surprises.",
    sets: [
      {
        label: "Azure",
        items: [
          link("Cloud architecture", "/cloud-architecture/"),
          link("Cloud migration", "/cloud-migration/"),
          link("Security and compliance", "/security-compliance/"),
          link("Deployment and DevOps", "/deployment-devops/"),
          link("Integration services", "/integration-services/"),
        ],
      },
    ],
  },
  {
    id: "e2e",
    name: "End-to-end services",
    blurb:
      "Delivery support from the first strategy conversation through to day-to-day operations, under one team.",
    sets: [
      {
        label: "Delivery",
        items: [
          link("Business consulting", "/business-consulting/"),
          link("Systems integration", "/systems-integration/"),
          link("Managed IT services", "/managed-it-services/"),
          link("Application services", "/application-services/"),
          link("Infrastructure services", "/infrastructure-services/"),
          link("Business process services", "/business-process-services/"),
        ],
      },
    ],
  },
];

export const delivered = [
  ["35+", "ERP and digital transformation projects delivered"],
  ["5,000+", "consulting and implementation hours across Microsoft platforms"],
  ["75+", "automation workflows, dashboards and business apps built"],
  ["2,500+", "enterprise users supported across ERP and business systems"],
];

export const changed = [
  ["20%", "faster operations through workflow automation"],
  ["25%", "better reporting and real-time visibility"],
  ["30%", "faster delivery using low-code and Power Platform"],
];

export const industries = [
  ["Banking", "Finance, controls and reporting that stand up to an audit."],
  ["Retail", "Orders, stock and customer records that agree with each other."],
  ["Healthcare", "Operations and people systems for teams with little time to spare."],
  ["Manufacturing", "Production, supply and sales orders visible from one ERP."],
  ["Energy", "Project, asset and finance processes across long-running work."],
];

export const stories = [
  {
    title: "ERP implementation",
    tags: "ERP, finance, inventory, procurement",
    text: "A connected Dynamics 365 ERP that pulled finance, inventory and procurement into one set of workflows, so decisions could be made from the data instead of from a pile of spreadsheets.",
  },
  {
    title: "CRM implementation",
    tags: "Sales, customer view, reporting",
    text: "Lead tracking, customer visibility and sales handoffs for a commercial team, with engagement reporting that was finally clean enough to trust.",
  },
  {
    title: "Unified reporting for leadership",
    tags: "Dashboards, KPIs, data model",
    text: "ERP, workflow and dashboard layers combined into one reporting model, giving leadership faster visibility into how work and performance were really going.",
  },
  {
    title: "Gen AI agents",
    tags: "AI agents, automation, knowledge search",
    text: "Practical agents that search company knowledge, summarize work and trigger actions, built for everyday processes rather than showpieces.",
  },
  {
    title: "Azure modernization",
    tags: "Landing zone, security, operations",
    text: "Cloud architecture, a secure migration, integration readiness, monitoring and infrastructure foundations that can scale.",
  },
];

export const orders = [
  {
    id: "SO-10482",
    customer: "Meridian Foods",
    ship: "Friday",
    status: "At risk",
    tone: "risk",
    lines: [
      ["Pump housing", 150, 150],
      ["Hydraulic seal kit", 400, 280],
      ["Mounting bracket", 90, 90],
    ],
    note: "Line 2 is 120 short. The production order finishes Monday, so a complete shipment is Tuesday. Lines 1 and 3 can leave Friday as a partial.",
  },
  {
    id: "SO-10455",
    customer: "Harbour Retail",
    ship: "Thursday",
    status: "Blocked",
    tone: "blocked",
    lines: [
      ["Bearing set", 200, 140],
      ["Shaft collar", 60, 60],
    ],
    note: "Bearing sets are 60 short. A purchase order is due Wednesday, one day before the ship date.",
  },
  {
    id: "SO-10471",
    customer: "Northgate Energy",
    ship: "Monday",
    status: "Ready",
    tone: "ready",
    lines: [
      ["Gasket pack", 200, 200],
      ["Flange set", 80, 80],
      ["Valve body", 18, 18],
    ],
    note: "Everything is picked and packed. Waiting on the carrier booking.",
  },
  {
    id: "SO-10490",
    customer: "Aster Healthcare",
    ship: "Tuesday",
    status: "At risk",
    tone: "risk",
    lines: [
      ["Control unit", 12, 9],
      ["Power cable", 24, 24],
    ],
    note: "Three control units are still in production, scheduled to finish Monday afternoon.",
  },
];

export const footerLinks = {
  work: [
    ["About us", "/about/"],
    ["Services", "/services/"],
    ["Careers", "/career/"],
    ["Contact us", "/contact/"],
  ],
  build: [
    ["Dynamics 365", "/d365-finance-operations/"],
    ["Power Platform", "/power-platform/"],
    ["Data and analytics", "/data-analytics/"],
    ["AI and automation", "/ai-automation/"],
  ],
  compareiq: [
    ["Product support", "/products/compareiq/support/"],
    ["Privacy policy", "/products/compareiq/privacy-policy/"],
    ["Terms and conditions", "/products/compareiq/terms/"],
  ],
};

export { SITE };