// Edit this file to change what shows up on the site.
// `html` is rendered as-is (via dangerouslySetInnerHTML) so the span
// classes (kw/str/fn/prop/num/type/cm/pu) can control syntax colors —
// see src/index.css for what each class maps to.

export const sidebarTree = [
  { type: 'file', key: 'about', label: 'about.md', color: '#519aba', indent: 1 },
  { type: 'file', key: 'skills', label: 'skills.json', color: '#cbcb41', indent: 1 },
  { type: 'file', key: 'experience', label: 'experience.js', color: '#cbcb41', indent: 1 },
  { type: 'folder', label: 'projects' },
  { type: 'file', key: 'network', label: 'network-agent.js', color: '#cbcb41', indent: 2 },
  { type: 'file', key: 'vegas', label: 'vegas-platform.js', color: '#cbcb41', indent: 2 },
  { type: 'file', key: 'clinical', label: 'clinical-data.js', color: '#cbcb41', indent: 2 },
  { type: 'file', key: 'education', label: 'education.md', color: '#519aba', indent: 1 },
  { type: 'file', key: 'contact', label: 'contact.js', color: '#cbcb41', indent: 1 }
]

export const files = {
  about: {
    label: 'about.md',
    color: '#519aba',
    html: `<span class="cm"># about.md</span>

<span class="file-name">Aasif Ali</span>
<span class="file-role">Software Engineer — AI &amp; GenAI</span>

<span class="pu">Hyderabad, India</span>

AI Engineer with <span class="num">1.7+</span> years of experience designing and deploying
production GenAI platforms, agentic workflows, and RAG architectures on
AWS and Kubernetes. Specialized in building stateful LLM systems using
<span class="type">LangChain</span> and <span class="type">LangGraph</span>, high-throughput <span class="type">FastAPI</span> microservices, and
vector retrieval systems (<span class="type">Pinecone</span>).

Shipped enterprise AI tools to <span class="num">40,000+</span> users at Verizon — cutting
diagnostic query latency under <span class="num">6</span> seconds while driving <span class="num">35%+</span>
operational efficiency gains.`
  },

  skills: {
    label: 'skills.json',
    color: '#cbcb41',
    html: `<span class="pu">{</span>
  <span class="prop">"languages"</span><span class="pu">:</span> [<span class="str">"Python"</span>, <span class="str">"JavaScript"</span>, <span class="str">"TypeScript"</span>, <span class="str">"C++"</span>],
  <span class="prop">"ai_engineering"</span><span class="pu">:</span> [
    <span class="str">"LangChain"</span>, <span class="str">"LangGraph"</span>, <span class="str">"RAG Pipelines"</span>,
    <span class="str">"Prompt Engineering"</span>, <span class="str">"Agentic Workflows"</span>,
    <span class="str">"Function Calling / Tool Use"</span>, <span class="str">"Vector DBs (Pinecone)"</span>,
    <span class="str">"Semantic Search"</span>, <span class="str">"LLM Observability"</span>
  ],
  <span class="prop">"backend"</span><span class="pu">:</span> [<span class="str">"Node.js"</span>, <span class="str">"Express.js"</span>, <span class="str">"FastAPI"</span>, <span class="str">"REST APIs"</span>, <span class="str">"Microservices"</span>],
  <span class="prop">"databases"</span><span class="pu">:</span> [<span class="str">"PostgreSQL"</span>, <span class="str">"MongoDB"</span>, <span class="str">"Redis"</span>, <span class="str">"Prisma ORM"</span>],
  <span class="prop">"cloud_devops"</span><span class="pu">:</span> [
    <span class="str">"Docker"</span>, <span class="str">"Kubernetes"</span>, <span class="str">"AWS (EC2, S3, EKS, Aurora, Glue)"</span>,
    <span class="str">"Prometheus"</span>, <span class="str">"OpenTelemetry"</span>, <span class="str">"Grafana"</span>, <span class="str">"CI/CD"</span>
  ],
  <span class="prop">"frontend"</span><span class="pu">:</span> [<span class="str">"React.js"</span>, <span class="str">"Next.js"</span>, <span class="str">"Redux"</span>, <span class="str">"TypeScript"</span>]
<span class="pu">}</span>`
  },

  experience: {
    label: 'experience.js',
    color: '#cbcb41',
    html: `<span class="kw">const</span> <span class="prop">experience</span> <span class="pu">=</span> [
  <span class="pu">{</span>
    <span class="prop">role</span><span class="pu">:</span> <span class="str">"Software Engineer"</span>,
    <span class="prop">company</span><span class="pu">:</span> <span class="str">"Incedo Inc."</span>, <span class="prop">client</span><span class="pu">:</span> <span class="str">"Verizon"</span>,
    <span class="prop">duration</span><span class="pu">:</span> <span class="str">"Jan 2025 – Present"</span>, <span class="prop">location</span><span class="pu">:</span> <span class="str">"Hyderabad, India"</span>,
    <span class="prop">highlights</span><span class="pu">:</span> [
      <span class="str">"Shipped two production backend platforms for Verizon — a workflow</span>
<span class="str">       orchestration service (800+ employees) and a real-time diagnostics</span>
<span class="str">       microservice handling 6,000+ queries/day"</span>,
      <span class="str">"Architected 12+ containerized microservices on AWS EKS/Kubernetes,</span>
<span class="str">       improving deployment reliability by 25%"</span>,
      <span class="str">"Designed an async, semaphore-limited concurrency layer aggregating</span>
<span class="str">       5 parallel APIs, cutting data-gathering latency by ~75%"</span>,
      <span class="str">"Instrumented full-stack observability (Prometheus, OpenTelemetry,</span>
<span class="str">       Grafana), cutting MTTD on incidents by 40%"</span>
    ]
  <span class="pu">}</span>
];`
  },

  network: {
    label: 'network-agent.js',
    color: '#cbcb41',
    html: `<span class="cm">// Network Agent — Real-Time Diagnostics Microservice</span>

<span class="kw">const</span> <span class="prop">project</span> <span class="pu">=</span> <span class="pu">{</span>
  <span class="prop">summary</span><span class="pu">:</span> <span class="str">"Production backend microservice for Verizon's customer service</span>
<span class="str">   platform, handling an estimated 6,000+ diagnostic queries/day via</span>
<span class="str">   async FastAPI (HTTP 202 + background task processing)"</span>,
  <span class="prop">highlights</span><span class="pu">:</span> [
    <span class="str">"Predictive XGBoost classification pipeline ingesting network</span>
<span class="str">     telemetry, outage logs &amp; user activity from BigQuery for</span>
<span class="str">     automated root-cause diagnosis + remediation"</span>,
    <span class="str">"State-machine orchestration coordinating parallel downstream</span>
<span class="str">     calls — structured diagnosis in under 6 seconds, Redis cached"</span>,
    <span class="str">"Full observability (Prometheus, OpenTelemetry, Grafana) on K8s,</span>
<span class="str">     cutting MTTD by an estimated 40%"</span>
  ],
  <span class="prop">stack</span><span class="pu">:</span> [<span class="str">"Python"</span>,<span class="str">"FastAPI"</span>,<span class="str">"XGBoost"</span>,<span class="str">"Scikit-Learn"</span>,<span class="str">"BigQuery"</span>,<span class="str">"aiohttp"</span>,<span class="str">"Redis"</span>,<span class="str">"Docker"</span>,<span class="str">"Kubernetes"</span>,<span class="str">"Prometheus"</span>,<span class="str">"Grafana"</span>]
<span class="pu">}</span>;`
  },

  vegas: {
    label: 'vegas-platform.js',
    color: '#cbcb41',
    html: `<span class="cm">// Vegas 2.0 — Full-Stack Platform for Verizon</span>

<span class="kw">const</span> <span class="prop">project</span> <span class="pu">=</span> <span class="pu">{</span>
  <span class="prop">summary</span><span class="pu">:</span> <span class="str">"Full-stack architecture for an internal platform used by 800+</span>
<span class="str">   Verizon employees and vendor partners, incl. a Node.js/Express</span>
<span class="str">   middleware layer bridging the frontend and a FastAPI backend"</span>,
  <span class="prop">highlights</span><span class="pu">:</span> [
    <span class="str">"Handled ~12,000 requests/day at sub-300ms latency"</span>,
    <span class="str">"Responsive React.js/Redux frontend with Tailwind CSS"</span>,
    <span class="str">"Modular drag-and-drop workflow builder, LangChain/LangGraph-backed,</span>
<span class="str">     cutting time to assemble a new workflow by an estimated 50%</span>
<span class="str">     for non-technical users"</span>
  ],
  <span class="prop">stack</span><span class="pu">:</span> [<span class="str">"React.js"</span>,<span class="str">"Tailwind CSS"</span>,<span class="str">"Redux"</span>,<span class="str">"Node.js"</span>,<span class="str">"Express"</span>,<span class="str">"Python"</span>,<span class="str">"FastAPI"</span>,<span class="str">"PostgreSQL"</span>,<span class="str">"LangChain"</span>,<span class="str">"LangGraph"</span>]
<span class="pu">}</span>;`
  },

  clinical: {
    label: 'clinical-data.js',
    color: '#cbcb41',
    html: `<span class="cm">// Clinical Data Analysis Web App</span>

<span class="kw">const</span> <span class="prop">project</span> <span class="pu">=</span> <span class="pu">{</span>
  <span class="prop">summary</span><span class="pu">:</span> <span class="str">"End-to-end ETL pipeline (extraction, cleaning, standardization,</span>
<span class="str">   enrichment) loading data into AWS Aurora (PostgreSQL)"</span>,
  <span class="prop">highlights</span><span class="pu">:</span> [
    <span class="str">"Cut manual data-prep time by an estimated 40%"</span>,
    <span class="str">"FastAPI microservices on AWS EKS + React.js frontend visualizing</span>
<span class="str">     20+ KPIs via Recharts/ECharts"</span>,
    <span class="str">"Added frontend caching to cut redundant API calls by ~30%"</span>
  ],
  <span class="prop">stack</span><span class="pu">:</span> [<span class="str">"FastAPI"</span>,<span class="str">"Python"</span>,<span class="str">"React.js"</span>,<span class="str">"Tailwind CSS"</span>,<span class="str">"Docker"</span>,<span class="str">"AWS Glue"</span>,<span class="str">"AWS S3"</span>,<span class="str">"AWS Aurora"</span>,<span class="str">"AWS EKS"</span>]
<span class="pu">}</span>;`
  },

  education: {
    label: 'education.md',
    color: '#519aba',
    html: `<span class="cm"># education.md</span>

<span class="file-name" style="font-size:1.25em">B.Tech, Computer Science Engineering</span>
Chandigarh Group of Colleges, Landran, Mohali
<span class="num">2020</span> – <span class="num">2024</span> · CGPA: <span class="num">8.25</span>

<span class="cm">## certifications</span>
- AWS Certified Cloud Practitioner — Amazon Web Services, <span class="num">2024</span>
- Google Developer Student Clubs (GDSC) Core Member — Google, <span class="num">2022</span>–<span class="num">2023</span>`
  },

  contact: {
    label: 'contact.js',
    color: '#cbcb41',
    html: `<span class="kw">const</span> <span class="prop">contact</span> <span class="pu">=</span> <span class="pu">{</span>
  <span class="prop">email</span><span class="pu">:</span>    <span class="str">"aa6125405@gmail.com"</span>,
  <span class="prop">phone</span><span class="pu">:</span>    <span class="str">"+91 87086 41899"</span>,
  <span class="prop">linkedin</span><span class="pu">:</span> <span class="str">"linkedin.com/in/aasif-ali-a58638229"</span>,
  <span class="prop">location</span><span class="pu">:</span> <span class="str">"Hyderabad, India"</span>
<span class="pu">}</span>;

<span class="cm">// tip: open the terminal below ⌗ for a quick view</span>`
  }
}

export const contactInfo = {
  email: 'aa6125405@gmail.com',
  phone: '+91 87086 41899',
  linkedin: 'linkedin.com/in/aasif-ali-a58638229',
  location: 'Hyderabad, India'
}
