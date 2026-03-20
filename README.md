# AI Model Observability — The Architecture of Trust

A polished, responsive single-page website presenting a comprehensive technical analysis of AI model observability. Built from the research report *The Architecture of Trust*.

## What it covers

- **Monitoring vs. Observability** — why traditional monitoring fails for probabilistic AI systems
- **The Five Pillars** — Cognition, Traceability, Performance, Environment, and Security governance
- **Drift Detection** — data drift vs. concept drift, PSI thresholds, and automated retraining
- **Explainability** — SHAP vs. LIME feature attribution methods
- **GenAI Metrics** — hallucination rate, groundedness, toxicity, token efficiency
- **Tooling Landscape** — Braintrust, Langfuse, Datadog, Arize, Fiddler, Maxim, Monte Carlo
- **Learning Path** — 5-module curriculum with links to relevant deep-dives on the page
- **Future Outlook** — self-adaptive MAPE-K control loops

## Project structure

```
├── index.html      # Single-page site
├── style.css       # Design system (dark navy + teal palette)
├── script.js       # Nav highlighting, accordion, scroll animations
└── files/
    └── AI Model Observability Research Report.docx   # Source research
```

## Running locally

No build step required. Just open `index.html` in a browser:

```bash
open index.html
```

## Source

Based on *The Architecture of Trust: A Comprehensive Technical Analysis of AI Model Observability* — a 43-source research report covering the theoretical foundations, business case, technical nuances, MLOps architecture, and future direction of AI observability.
