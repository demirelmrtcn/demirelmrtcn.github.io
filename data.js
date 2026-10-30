// ============================================================
//  SITE CONTENT: edit this file only. index.html builds the page from it.
//  Save → git push (or edit on github.com) → live in ~1 minute.
// ============================================================
window.SITE = {
  name: "Mertcan Demirel",
  email: "demirelmrtcn@icloud.com",
  cv: "Mertcan_Demirel_CV.pdf",
  location: "Istanbul, Türkiye",
  timezone: "Europe/Istanbul",
  githubUser: "demirelmrtcn",          // used for the contribution heatmap
  badge: "open to AI/ML roles",

  hero: {
    from: "credit risk modeling",
    to: "AI & LLM engineering",
    intro: "I build PD, LGD, CCF and NPL models at Akbank. After hours I build LLM systems: multi-agent pipelines, RAG and agentic automation. Next step: an AI / ML Engineer role.",
    stats: [                            // value is counted up from 0
      { pre: "",    value: 3, post: "+",  label: "years building<br>models" },
      { pre: "Top ", value: 5, post: "%", label: "İş Bankası<br>ML Challenge" },
      { pre: "",    value: 3, post: "rd", label: "in department,<br>B.Sc. Statistics" },
    ],
  },

  links: [
    { label: "GitHub",   url: "https://github.com/demirelmrtcn" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/demirelmrtcn/" },
    { label: "Kaggle",   url: "https://www.kaggle.com/demirelmrtcn" },
  ],

  // Hero chart. side: "risk" (amber) or "ai" (teal). Keep 5 points.
  trajectory: [
    { label: "stats",       side: "risk", title: "2019 — Statistics",       text: "Started with probability and inference at Ankara University, then Yıldız Technical University." },
    { label: "ml",          side: "risk", title: "2023 — NextGeo",          text: "First production ML: tree-based models on geospatial data." },
    { label: "credit risk", side: "risk", title: "2024 — Akbank",           text: "PD, LGD, CCF and NPL models under EBA guidelines, monitored on Gini, PD and DR." },
    { label: "llm systems", side: "ai",   title: "2026 — LLM systems",      text: "Multi-agent pipelines, RAG and an LLM-curated newsletter used inside the bank." },
    { label: "next →",      side: "ai",   title: "Next — AI / ML Engineer", text: "Looking for a role building LLM and generative AI systems." },
  ],

  // Scrolling strip under the hero. The first `riskCount` words are amber, the rest teal.
  ticker: ["PD","LGD","CCF","NPL","EBA","Python","SAS","SQL","scikit-learn","Keras","RAG","multi-agent","Ollama","ChromaDB","FastAPI","Whisper"],
  riskCount: 10,

  // side: "ai" gives a teal dot on the timeline. Each paragraph is one string.
  experience: [
    { when: "Mar 2024 — now · Istanbul", title: "Data Scientist, Model Development", org: "Akbank", side: "ai",
      text: [
        "End-to-end credit risk models under EBA guidelines: an EBA-compliant CCF model, a PD module, PD/LGD for commercial lending and NPL models, plus portfolio monitoring on Gini, PD and DR. Promoted to Level 3 in July 2025.",
        "Built the KRKB AI Bulletin <span class=\"tag\">LLM agent</span>, a twice-weekly AI and risk newsletter for Akbank employees, curated by an LLM agent and published through GitHub Actions.",
      ] },
    { when: "Sep 2023 — Mar 2024", title: "Jr. Data Scientist", org: "NextGeo",
      text: ["Tree-based regression and classification on geospatial data, including location-based order quantity forecasting."] },
    { when: "2019 — 2023", title: "B.Sc. Statistics", org: "Yıldız Technical University",
      text: ["Graduated third in the department (GPA 3.67). Top 5% in the İş Bankası ML Challenge #5, top 4% in Kaggle Playground S3E25."] },
  ],

  // status: "active" shows a teal dot. repo: leave "" for private projects.
  projects: [
    { when: "2026 — now", status: "active", title: "Jarvis — local multi-agent assistant",
      text: "Three LLM agents (indicator, news, orchestrator) on a local Qwen3 model, RAG over past analyses, and a training coach with source-cited answers.",
      tags: ["Ollama","RAG","ChromaDB","FastAPI"], repo: "" },
    { when: "2026 — now", status: "active", title: "Deep learning, from scratch up",
      text: "An autograd engine written by hand, an MLP benchmarked against logistic regression on AUC/Gini, and controlled optimizer experiments.",
      tags: ["Keras","NumPy","micrograd"], repo: "https://github.com/demirelmrtcn/Deep-Learning" },
    { when: "2025", status: "shipped", title: "Speak-to-DOCX",
      text: "Local Whisper transcription that turns audio into formatted Word documents, with language detection across 90+ languages.",
      tags: ["Whisper","Python"], repo: "https://github.com/demirelmrtcn/Voice-to-Docx" },
    { when: "2023", status: "thesis", title: "Customer segmentation",
      text: "Graduation thesis combining RFM rules with unsupervised clustering to define customer personas.",
      tags: ["scikit-learn","RFM"], repo: "https://github.com/demirelmrtcn/rfm-analysis" },
  ],

  // Filter groups for the Stack section: risk, ml, ai, tools
  stack: {
    risk:  ["PD / LGD / CCF","EBA guidelines","Gini · DR monitoring","SAS","Statistical modeling"],
    ml:    ["Python","scikit-learn","TensorFlow / Keras","Tree-based models"],
    ai:    ["Multi-agent LLMs","RAG · ChromaDB","Ollama · Qwen3","Whisper"],
    tools: ["SQL","FastAPI"],
  },

  // Stack "vector search" demo: each query mixes the stack groups above (weights 0–1)
  stackQueries: [
    { q: "LLM agents & RAG",   mix: { ai: 1 } },
    { q: "credit risk + LLM",  mix: { risk: 1, ai: 1 } },
    { q: "deep learning",      mix: { ml: 1, ai: .3 } },
    { q: "credit risk models", mix: { risk: 1, ml: .3 } },
    { q: "ship it as an API",  mix: { tools: 1, ai: .3 } },
  ],

  contact: {
    // index.html only: quick-pick chips in the chat window (each becomes the email subject)
    prompts: ["AI / ML Engineer role", "LLM project collaboration", "Credit risk + AI idea", "Just saying hi"],
    headline: "Hiring for <span class=\"grad\">AI / ML?</span><br>Let's talk.",
    text: "I'm looking for an AI / ML Engineer role focused on LLMs and generative AI. Happy to talk about roles, projects or credit risk + AI ideas.",
    facts: [
      ["status", "Data Scientist @ Akbank"],
      ["looking for", "AI / ML Engineer · LLM roles"],
      ["based in", "Istanbul, Türkiye"],
    ],
  },
};
