// ─────────────────────────────────────────────────────────────────────────────
// src/data/content.js — Single source of truth for all portfolio content.
// Edit this file to update what shows on the site.
//
// ADDING A NEW FILE:
//   1. Add an entry to sidebarTree (type:'file', key, label, color, indent)
//   2. Add a matching key to files{} with label, color, html (for syntax view),
//      and plain (plain text for search indexing)
//   3. Optionally add it to commandPaletteFiles in src/utils/commands.js
// ─────────────────────────────────────────────────────────────────────────────

export const sidebarTree = [
  { type: 'folder', label: 'PORTFOLIO', key: 'root', defaultOpen: true },
  { type: 'file', key: 'about',      label: 'about.md',          color: '#519aba', indent: 1 },
  { type: 'file', key: 'skills',     label: 'skills.json',        color: '#cbcb41', indent: 1 },
  { type: 'file', key: 'experience', label: 'experience.js',      color: '#cbcb41', indent: 1 },
  { type: 'folder', label: 'projects', key: 'projects', defaultOpen: true },
  { type: 'file', key: 'network',    label: 'network-agent.js',   color: '#cbcb41', indent: 2 },
  { type: 'file', key: 'vegas',      label: 'vegas-platform.js',  color: '#cbcb41', indent: 2 },
  { type: 'file', key: 'clinical',   label: 'clinical-data.js',   color: '#cbcb41', indent: 2 },
  { type: 'file', key: 'education',  label: 'education.md',       color: '#519aba', indent: 1 },
  { type: 'file', key: 'contact',    label: 'contact.js',         color: '#cbcb41', indent: 1 },
]

export const files = {
  about: {
    label: 'about.md',
    color: '#519aba',
    lang: 'Markdown',
    plain: 'Aasif Ali Software Engineer AI GenAI Hyderabad India AI Engineer 1.7 years experience GenAI platforms agentic workflows RAG architectures AWS Kubernetes LangChain LangGraph FastAPI Pinecone Verizon 40000 users',
    html: `<span class="cm"># about.md</span>

<span class="file-name">Aasif Ali</span>
<span class="file-role">Software Engineer — AI &amp; GenAI</span>

<span class="pu">📍</span> <span class="str">Hyderabad, India</span>

AI Engineer with <span class="num">1.7+</span> years of experience designing and deploying
production GenAI platforms, agentic workflows, and RAG architectures on
AWS and Kubernetes. Specialized in building stateful LLM systems using
<span class="type">LangChain</span> and <span class="type">LangGraph</span>, high-throughput <span class="type">FastAPI</span> microservices, and
vector retrieval systems (<span class="type">Pinecone</span>).

Shipped enterprise AI tools to <span class="num">40,000+</span> users at Verizon — cutting
diagnostic query latency under <span class="num">6</span> seconds while driving <span class="num">35%+</span>
operational efficiency gains.

<span class="cm">## contact</span>
<span class="prop">email</span>    <span class="str">aa6125405@gmail.com</span>
<span class="prop">phone</span>    <span class="str">+91 87086 41899</span>
<span class="prop">linkedin</span> <span class="str">linkedin.com/in/aasif-ali-a58638229</span>
<span class="prop">leetcode</span> <span class="str">leetcode.com/u/aasif_ali</span>`
  },

  skills: {
    label: 'skills.json',
    color: '#cbcb41',
    lang: 'JSON',
    plain: 'LangChain LangGraph RAG Pipelines Prompt Engineering Agentic Workflows Function Calling Vector Databases Pinecone Semantic Search LLM Observability Node.js Express.js Python FastAPI REST APIs Microservices C++ PostgreSQL MongoDB Redis Prisma Docker Kubernetes AWS EC2 S3 EKS Aurora Glue Prometheus OpenTelemetry Grafana CI/CD React Next.js Redux TypeScript JavaScript',
    html: `<span class="pu">{</span>
  <span class="prop">"ai_engineering"</span><span class="pu">:</span> [
    <span class="str">"LangChain"</span>, <span class="str">"LangGraph"</span>, <span class="str">"RAG Pipelines"</span>,
    <span class="str">"Prompt Engineering"</span>, <span class="str">"Agentic Workflows"</span>,
    <span class="str">"Function Calling / Tool Use"</span>, <span class="str">"Vector DBs (Pinecone)"</span>,
    <span class="str">"Semantic Search"</span>, <span class="str">"LLM Observability &amp; Tracing"</span>
  ],
  <span class="prop">"languages"</span><span class="pu">:</span> [<span class="str">"Python"</span>, <span class="str">"JavaScript"</span>, <span class="str">"TypeScript"</span>, <span class="str">"C++"</span>],
  <span class="prop">"backend"</span><span class="pu">:</span> [
    <span class="str">"Node.js"</span>, <span class="str">"Express.js"</span>, <span class="str">"FastAPI"</span>,
    <span class="str">"REST APIs"</span>, <span class="str">"Microservices"</span>, <span class="str">"Async Architecture"</span>
  ],
  <span class="prop">"databases"</span><span class="pu">:</span> [<span class="str">"PostgreSQL"</span>, <span class="str">"MongoDB"</span>, <span class="str">"Redis"</span>, <span class="str">"Prisma ORM"</span>, <span class="str">"Pinecone"</span>],
  <span class="prop">"cloud_devops"</span><span class="pu">:</span> [
    <span class="str">"Docker"</span>, <span class="str">"Kubernetes"</span>, <span class="str">"AWS (EC2, S3, EKS, Aurora, Glue)"</span>,
    <span class="str">"Prometheus"</span>, <span class="str">"OpenTelemetry"</span>, <span class="str">"Grafana"</span>, <span class="str">"CI/CD"</span>
  ],
  <span class="prop">"system_design"</span><span class="pu">:</span> [
    <span class="str">"High-throughput API design"</span>, <span class="str">"Circuit breakers &amp; fallback patterns"</span>,
    <span class="str">"Caching strategies"</span>, <span class="str">"Service observability"</span>
  ],
  <span class="prop">"frontend"</span><span class="pu">:</span> [<span class="str">"React.js"</span>, <span class="str">"Next.js"</span>, <span class="str">"Redux"</span>, <span class="str">"TypeScript"</span>, <span class="str">"Tailwind CSS"</span>]
<span class="pu">}</span>`
  },

  experience: {
    label: 'experience.js',
    color: '#cbcb41',
    lang: 'JavaScript',
    plain: 'Software Engineer Incedo Inc Verizon Jan 2025 Present Hyderabad workflow orchestration 800 employees diagnostics microservice 6000 queries day FastAPI Node.js React Redux AWS EKS Docker Kubernetes Prometheus OpenTelemetry Grafana aiohttp concurrency 75% latency',
    html: `<span class="kw">const</span> <span class="fn">experience</span> <span class="pu">=</span> [
  <span class="pu">{</span>
    <span class="prop">role</span><span class="pu">:</span>     <span class="str">"Software Engineer"</span>,
    <span class="prop">company</span><span class="pu">:</span>  <span class="str">"Incedo Inc."</span>,
    <span class="prop">client</span><span class="pu">:</span>   <span class="str">"Verizon"</span>,
    <span class="prop">duration</span><span class="pu">:</span> <span class="str">"Jan 2025 – Present"</span>,
    <span class="prop">location</span><span class="pu">:</span> <span class="str">"Hyderabad, India"</span>,
    <span class="prop">highlights</span><span class="pu">:</span> [
      <span class="str">"Built &amp; shipped two production backend platforms for Verizon —
       a workflow orchestration service (800+ employees) and a real-time
       diagnostics microservice handling 6,000+ queries/day"</span>,
      <span class="str">"Architected 12+ containerized microservices on AWS EKS/Kubernetes,
       improving deployment reliability by 25%"</span>,
      <span class="str">"Designed an async, semaphore-limited concurrency layer (aiohttp)
       aggregating 5 parallel internal APIs — cutting data-gathering
       latency by ~75% vs sequential calls"</span>,
      <span class="str">"Instrumented full-stack observability (Prometheus, OpenTelemetry,
       Grafana), cutting MTTD on incidents by 40% and manual effort by 35%"</span>
    ],
    <span class="prop">stack</span><span class="pu">:</span> [<span class="str">"FastAPI"</span>, <span class="str">"Node.js"</span>, <span class="str">"React.js"</span>, <span class="str">"Redux"</span>, <span class="str">"AWS EKS"</span>, <span class="str">"Docker"</span>, <span class="str">"Kubernetes"</span>]
  <span class="pu">}</span>
]<span class="pu">;</span>

<span class="kw">export default</span> experience<span class="pu">;</span>`
  },

  network: {
    label: 'network-agent.js',
    color: '#cbcb41',
    lang: 'JavaScript',
    plain: 'Network Agent Real-Time Diagnostics Microservice Verizon 6000 queries day FastAPI XGBoost classification BigQuery Redis state-machine orchestration 6 seconds Prometheus OpenTelemetry Grafana Kubernetes MTTD 40%',
    html: `<span class="cm">// Network Agent — Real-Time Diagnostics Microservice</span>

<span class="kw">const</span> <span class="fn">project</span> <span class="pu">=</span> <span class="pu">{</span>
  <span class="prop">title</span><span class="pu">:</span>   <span class="str">"Network Agent"</span>,
  <span class="prop">type</span><span class="pu">:</span>    <span class="str">"Production Backend Microservice"</span>,
  <span class="prop">client</span><span class="pu">:</span>  <span class="str">"Verizon"</span>,
  <span class="prop">scale</span><span class="pu">:</span>   <span class="str">"6,000+ diagnostic queries / day"</span>,

  <span class="prop">summary</span><span class="pu">:</span> <span class="str">"Async FastAPI architecture (HTTP 202 + background task processing)
  for Verizon's customer service platform — real-time root-cause diagnosis
  with automated remediation recommendations."</span>,

  <span class="prop">highlights</span><span class="pu">:</span> [
    <span class="str">"Predictive XGBoost classification pipeline ingesting network telemetry,
     regional outage logs &amp; user activity from Google BigQuery for automated
     failure signature extraction"</span>,
    <span class="str">"State-machine orchestration coordinating parallel downstream calls —
     structured diagnostic output in under 6 seconds, Redis-cached for repeats"</span>,
    <span class="str">"Full observability (Prometheus, OpenTelemetry, Grafana) on Kubernetes —
     cutting MTTD by an estimated 40%"</span>
  ],

  <span class="prop">stack</span><span class="pu">:</span> [
    <span class="str">"Python"</span>, <span class="str">"FastAPI"</span>, <span class="str">"XGBoost"</span>, <span class="str">"Scikit-Learn"</span>,
    <span class="str">"Google BigQuery"</span>, <span class="str">"aiohttp"</span>, <span class="str">"Redis"</span>,
    <span class="str">"Docker"</span>, <span class="str">"Kubernetes"</span>, <span class="str">"Prometheus"</span>, <span class="str">"OpenTelemetry"</span>, <span class="str">"Grafana"</span>,
    <span class="str">"Pydantic"</span>
  ]
<span class="pu">}</span><span class="pu">;</span>

<span class="kw">export default</span> project<span class="pu">;</span>`
  },

  vegas: {
    label: 'vegas-platform.js',
    color: '#cbcb41',
    lang: 'JavaScript',
    plain: 'Vegas 2.0 Full-Stack Platform Verizon 800 employees 12000 requests day sub-300ms latency React Redux Node.js Express FastAPI PostgreSQL LangChain LangGraph drag-and-drop workflow builder 50% faster',
    html: `<span class="cm">// Vegas 2.0 — Full-Stack Platform for Verizon</span>

<span class="kw">const</span> <span class="fn">project</span> <span class="pu">=</span> <span class="pu">{</span>
  <span class="prop">title</span><span class="pu">:</span>   <span class="str">"Vegas 2.0"</span>,
  <span class="prop">type</span><span class="pu">:</span>    <span class="str">"Full-Stack Internal Platform"</span>,
  <span class="prop">client</span><span class="pu">:</span>  <span class="str">"Verizon"</span>,
  <span class="prop">users</span><span class="pu">:</span>   <span class="str">"800+ Verizon employees &amp; vendor partners"</span>,
  <span class="prop">scale</span><span class="pu">:</span>   <span class="str">"~12,000 requests/day at sub-300ms latency"</span>,

  <span class="prop">summary</span><span class="pu">:</span> <span class="str">"Full-stack architecture including a Node.js/Express middleware layer
  bridging a React.js/Redux frontend with a FastAPI backend — plus a
  drag-and-drop workflow builder backed by LangChain/LangGraph."</span>,

  <span class="prop">highlights</span><span class="pu">:</span> [
    <span class="str">"Handled ~12,000 requests/day at sub-300ms latency"</span>,
    <span class="str">"Responsive React.js/Redux frontend with Tailwind CSS"</span>,
    <span class="str">"Modular drag-and-drop workflow builder, LangChain/LangGraph-backed —
     cutting time to assemble a new workflow by ~50% for non-technical users"</span>
  ],

  <span class="prop">stack</span><span class="pu">:</span> [
    <span class="str">"React.js"</span>, <span class="str">"Tailwind CSS"</span>, <span class="str">"Redux"</span>,
    <span class="str">"Node.js"</span>, <span class="str">"Express"</span>, <span class="str">"Python"</span>,
    <span class="str">"FastAPI"</span>, <span class="str">"PostgreSQL"</span>, <span class="str">"LangChain"</span>, <span class="str">"LangGraph"</span>
  ]
<span class="pu">}</span><span class="pu">;</span>

<span class="kw">export default</span> project<span class="pu">;</span>`
  },

  clinical: {
    label: 'clinical-data.js',
    color: '#cbcb41',
    lang: 'JavaScript',
    plain: 'Clinical Data Analysis Web App ETL pipeline AWS Aurora PostgreSQL FastAPI EKS React KPIs Recharts ECharts frontend caching 30% API calls 40% data prep time Docker AWS Glue S3',
    html: `<span class="cm">// Clinical Data Analysis Web App</span>

<span class="kw">const</span> <span class="fn">project</span> <span class="pu">=</span> <span class="pu">{</span>
  <span class="prop">title</span><span class="pu">:</span>  <span class="str">"Clinical Data Analysis Web App"</span>,
  <span class="prop">type</span><span class="pu">:</span>   <span class="str">"Full-Stack Data Platform"</span>,

  <span class="prop">summary</span><span class="pu">:</span> <span class="str">"End-to-end ETL pipeline (extraction, cleaning, standardization,
  enrichment) loading data into AWS Aurora (PostgreSQL), with FastAPI
  microservices on AWS EKS and a React.js frontend visualizing 20+ KPIs."</span>,

  <span class="prop">highlights</span><span class="pu">:</span> [
    <span class="str">"Designed ETL pipeline — cutting manual data-prep time by ~40%"</span>,
    <span class="str">"FastAPI microservices on AWS EKS + React.js frontend visualizing
     20+ KPIs via Recharts/ECharts"</span>,
    <span class="str">"Added frontend caching to cut redundant API calls by ~30%"</span>
  ],

  <span class="prop">stack</span><span class="pu">:</span> [
    <span class="str">"FastAPI"</span>, <span class="str">"Python"</span>, <span class="str">"React.js"</span>, <span class="str">"Tailwind CSS"</span>,
    <span class="str">"Docker"</span>, <span class="str">"AWS Glue"</span>, <span class="str">"AWS S3"</span>, <span class="str">"AWS Aurora"</span>, <span class="str">"AWS EKS"</span>
  ]
<span class="pu">}</span><span class="pu">;</span>

<span class="kw">export default</span> project<span class="pu">;</span>`
  },

  education: {
    label: 'education.md',
    color: '#519aba',
    lang: 'Markdown',
    plain: 'B.Tech Computer Science Engineering Chandigarh Group of Colleges Landran Mohali 2020 2024 CGPA 8.25 AWS Certified Cloud Practitioner Amazon Web Services 2024 Google Developer Student Clubs GDSC Core Member 2022 2023 Leetcode',
    html: `<span class="cm"># education.md</span>

<span class="file-name" style="font-size:1.25em">B.Tech, Computer Science Engineering</span>
Chandigarh Group of Colleges, Landran, Mohali
<span class="num">2020</span> – <span class="num">2024</span> &nbsp;·&nbsp; CGPA: <span class="num">8.25</span>

<span class="cm">## certifications &amp; memberships</span>

- <span class="type">AWS Certified Cloud Practitioner</span>
  Amazon Web Services · <span class="num">2024</span>

- <span class="type">Google Developer Student Clubs (GDSC) Core Member</span>
  Google · <span class="num">2022</span>–<span class="num">2023</span>

<span class="cm">## competitive programming</span>

- <span class="prop">LeetCode</span> — active problem solver
  <span class="str">leetcode.com/u/aasif_ali</span>`
  },

  contact: {
    label: 'contact.js',
    color: '#cbcb41',
    lang: 'JavaScript',
    plain: 'email aa6125405@gmail.com phone +91 87086 41899 linkedin aasif-ali Hyderabad India',
    html: `<span class="kw">const</span> <span class="fn">contact</span> <span class="pu">=</span> <span class="pu">{</span>
  <span class="prop">email</span><span class="pu">:</span>    <span class="str">"aa6125405@gmail.com"</span>,
  <span class="prop">phone</span><span class="pu">:</span>    <span class="str">"+91 87086 41899"</span>,
  <span class="prop">linkedin</span><span class="pu">:</span> <span class="str">"linkedin.com/in/aasif-ali-a58638229"</span>,
  <span class="prop">leetcode</span><span class="pu">:</span> <span class="str">"leetcode.com/u/aasif_ali"</span>,
  <span class="prop">location</span><span class="pu">:</span> <span class="str">"Hyderabad, India"</span>
<span class="pu">}</span><span class="pu">;</span>

<span class="cm">// 💡 Tip: open the terminal below and run  cat contact.txt</span>
<span class="cm">//         or click any link above to get in touch!</span>

<span class="kw">export default</span> contact<span class="pu">;</span>`
  }
}

export const contactInfo = {
  email:    'aa6125405@gmail.com',
  phone:    '+91 87086 41899',
  linkedin: 'linkedin.com/in/aasif-ali-a58638229',
  leetcode: 'leetcode.com/u/aasif_ali',
  location: 'Hyderabad, India'
}

