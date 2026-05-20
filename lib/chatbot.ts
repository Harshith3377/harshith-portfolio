import { profile } from "@/data/profile";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// ─── Local keyword-based fallback ──────────────────────────────────────────

type Rule = { keywords: string[]; response: string };

const rules: Rule[] = [
  {
    keywords: ["background", "about", "who is", "introduce", "overview", "summary"],
    response: `**Harshith Mullapudi** is a Java Full Stack Engineer with 4+ years of experience building scalable microservices and AI-integrated backend systems.

**Current Role:** Software Engineer II at AT&T (Dallas, TX) since Oct 2024, working on intelligent network operations and customer experience platforms.

**Previous Role:** Software Engineer at Kroger (Hyderabad, India) from Jan 2022–Dec 2023, building AI-driven retail supply chain systems.

He holds an **M.S. in Artificial Intelligence** from the University of North Texas and is targeting roles including Java Backend Engineer, AI Backend Engineer, and Applied AI Engineer.`,
  },
  {
    keywords: ["skills", "technologies", "technical", "stack", "tools", "strongest"],
    response: `Harshith's strongest technical skills span backend systems, cloud, and AI/ML:

**Backend:** Java (8/11/17), Spring Boot, Spring MVC, Spring Security, Hibernate, REST APIs, GraphQL
**Distributed Systems:** Apache Kafka, Microservices Architecture, Event-Driven Architecture
**Cloud:** AWS (EC2, EKS, S3, RDS), Docker, Kubernetes
**Databases:** PostgreSQL, MySQL, MongoDB, Redis
**AI/ML:** NLP, Prompt Engineering, OpenAI APIs, Vector Embeddings, RAG Concepts
**Frontend:** React.js, TypeScript, Redux
**DevOps:** Jenkins, GitHub Actions, CI/CD
**Monitoring:** Prometheus, Grafana, ELK Stack, AWS CloudWatch`,
  },
  {
    keywords: ["java", "spring boot", "spring", "hibernate"],
    response: `Harshith has **4+ years of professional Java and Spring Boot experience**:

At **AT&T**: Built Spring Boot microservices supporting telecom provisioning workflows handling ~5K daily service activations. Secured APIs with Spring Security (OAuth2, JWT) and designed REST/GraphQL APIs across customer, billing, and partner services.

At **Kroger**: Developed Spring Boot microservices for product catalog, pricing, and inventory systems supporting high-volume retail transactions.

He is an **Oracle Certified Professional – Java SE 17**, demonstrating deep expertise in modern Java.`,
  },
  {
    keywords: ["kafka", "event", "streaming", "pipeline", "messaging"],
    response: `Harshith has hands-on Kafka experience at both AT&T and Kroger:

**AT&T:** Built Kafka-based event pipelines for provisioning and billing workflows, reducing cross-system data latency by **25%**.

**Kroger:** Built Kafka-driven pipelines for inventory synchronization, improving real-time data consistency by **20%**.

**Projects:** Designed asynchronous Kafka processing pipelines for the AI-Powered Customer Support Assistant to handle high-volume support requests, and used Kafka consumers for real-time recommendation updates in the Smart Recommendation Engine.`,
  },
  {
    keywords: ["ai", "machine learning", "ml", "nlp", "artificial intelligence", "openai", "embedding", "rag"],
    response: `Harshith has practical AI/ML experience integrated into production systems:

**At AT&T:**
- Integrated NLP-based log analysis to identify recurring failure patterns from ELK data
- Designed AI-assisted diagnostics using historical logs and event streams

**At Kroger:**
- Integrated ML-based demand forecasting services, reducing stockout rates by 15%
- Exposed ML model inference endpoints via REST APIs for personalized recommendations
- Built data pipelines feeding recommendation systems

**Projects:**
- *AI Customer Support Assistant*: NLP query classification, embedding-based search, vector knowledge retrieval
- *Smart Recommendation Engine*: ML-based user segmentation, real-time updates

**Skills:** NLP, Prompt Engineering, OpenAI APIs, Vector Embeddings, RAG Concepts, Scikit-learn`,
  },
  {
    keywords: ["projects", "built", "portfolio", "work"],
    response: `Harshith has built two notable projects:

**1. AI-Powered Customer Support Assistant**
- NLP-based query classification and contextual response generation
- Embedding-based search for knowledge base retrieval
- Kafka async processing pipelines for high-volume support
- REST APIs for ticket ingestion, routing, and response
*Stack: NLP, Kafka, REST APIs, Java, Spring Boot, Embeddings*

**2. Smart Recommendation Engine**
- Microservices processing user activity streams
- Kafka consumers for real-time recommendation updates
- ML-based user segmentation
- Low-latency APIs serving recommendations
*Stack: Kafka, ML, Microservices, REST APIs, Java, Spring Boot*`,
  },
  {
    keywords: ["backend", "fit", "role", "backend engineer", "hire"],
    response: `Yes — Harshith is an excellent fit for backend engineering roles. Here's why:

✅ **4+ years** building production-grade Java/Spring Boot microservices
✅ **Distributed systems expertise** — Kafka event pipelines, Redis caching, service decomposition
✅ **Cloud-native** — AWS EKS/EC2, Docker, Kubernetes deployments
✅ **API design** — REST, GraphQL, OAuth2/JWT security
✅ **Database optimization** — PostgreSQL performance tuning at scale
✅ **Observability** — ELK Stack, Prometheus, Grafana, CloudWatch
✅ **Proven impact** — 30% API performance improvement, 40% faster deployments

He's targeting: **Java Backend Engineer, Backend Software Engineer, AI Backend Engineer**.`,
  },
  {
    keywords: ["ai engineer", "applied ai", "ml engineer", "ai systems", "machine learning engineer"],
    response: `Harshith is well-positioned for AI Engineer / Applied AI Engineer roles:

✅ **NLP in production** — log analysis and AI-assisted diagnostics at AT&T
✅ **ML integration** — demand forecasting and recommendation systems at Kroger
✅ **AI project work** — NLP query classification, vector embeddings, RAG concepts
✅ **M.S. in Artificial Intelligence** from University of North Texas
✅ **AI/ML skills** — OpenAI APIs, Prompt Engineering, Vector Embeddings, Scikit-learn
✅ **Backend foundation** — can build and productionize AI services at scale

Best fit roles: **Applied AI Engineer, AI Backend Engineer, ML Platform Engineer, Software Engineer – AI Systems**.`,
  },
  {
    keywords: ["cloud", "aws", "docker", "kubernetes", "eks", "ec2", "devops", "infrastructure"],
    response: `Harshith has strong cloud and infrastructure experience:

**AWS:** EC2, EKS, S3, RDS — deployed at both AT&T and Kroger
**Containers:** Docker for containerizing microservices
**Orchestration:** Kubernetes / AWS EKS for production deployments
**CI/CD:** Jenkins and GitHub Actions — reduced deployment time by **40%**
**Certifications:**
- ✅ AWS Certified Developer – Associate
- ✅ Microsoft Azure Fundamentals (AZ-900)`,
  },
  {
    keywords: ["achievements", "impact", "metrics", "results", "numbers", "performance"],
    response: `Harshith's measurable impact across his career:

| Metric | Achievement |
|--------|-------------|
| **30%** | API performance improvement via caching & query optimization |
| **40%** | Faster deployments via automated CI/CD pipelines |
| **35%** | Improved API response times under peak load (Redis caching) |
| **25%** | Reduced cross-system latency (Kafka event pipelines) |
| **20%** | Improved data synchronization consistency |
| **15%** | Reduced stockout rates (ML demand forecasting) |`,
  },
  {
    keywords: ["contact", "reach", "email", "hire", "interview", "available", "availability"],
    response: `You can reach Harshith through multiple channels:

📧 **Email:** harshithmullapudi37@gmail.com
💼 **LinkedIn:** linkedin.com/in/harshithchowdary
📱 **Phone:** +1 469-364-4637
🌎 **Location:** USA — authorized to work in the United States

He is actively exploring new opportunities in Backend Engineering, Full Stack, and AI/Backend Systems roles. Feel free to reach out directly to schedule a conversation!`,
  },
  {
    keywords: ["education", "degree", "university", "ms", "masters", "study"],
    response: `**Education:**
- **Master of Science in Artificial Intelligence**
  University of North Texas, USA

**Certifications:**
- Oracle Certified Professional – Java SE 17
- AWS Certified Developer – Associate
- Microsoft Azure Fundamentals (AZ-900)`,
  },
  {
    keywords: ["work authorization", "visa", "authorized", "green card", "citizenship"],
    response: `Harshith is **authorized to work in the United States**. For specific details about work authorization status, please reach out directly at harshithmullapudi37@gmail.com.`,
  },
  {
    keywords: ["kroger", "retail", "supply chain", "inventory"],
    response: `At **Kroger** (Jan 2022 – Dec 2023), Harshith worked on an AI-Driven Retail Supply Chain & Customer Insights Platform:

- Spring Boot microservices for product catalog, pricing, and inventory
- REST APIs connecting e-commerce, warehouse, and analytics systems
- Kafka pipelines for inventory synchronization (+20% data consistency)
- React dashboards for merchandising teams
- ML-based demand forecasting (-15% stockout rates)
- Redis caching for product queries (+30% response time)
- PostgreSQL query tuning for high-volume sales events
- ML inference APIs for personalized recommendations
- Fault-tolerant patterns: retries, circuit breakers`,
  },
  {
    keywords: ["att", "at&t", "telecom", "network", "provisioning"],
    response: `At **AT&T** (Oct 2024 – Present), Harshith works on the Intelligent Network Operations & Customer Experience Platform:

- Spring Boot microservices for telecom provisioning (~5K daily activations)
- REST + GraphQL APIs across customer, billing, and partner services
- Kafka event pipelines (-25% cross-system latency)
- Redis caching (+35% API response time under peak load)
- React dashboards (-20% manual tracking effort)
- Spring Security with OAuth2/JWT
- AWS EKS deployments with Docker
- CI/CD with Jenkins + GitHub Actions (-40% deployment time)
- NLP-based log analysis for incident triage
- AI-assisted diagnostics using historical logs`,
  },
];

export function getLocalResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase();

  for (const rule of rules) {
    if (rule.keywords.some((kw) => lower.includes(kw))) {
      return rule.response;
    }
  }

  // Generic fallback
  return `I can help you learn about Harshith's background, skills, and experience. Here are some things you can ask:

- **Background & summary** — "Tell me about Harshith"
- **Technical skills** — "What are his strongest skills?"
- **Java/Spring Boot** — "What's his Java experience?"
- **AI/ML experience** — "What AI work has he done?"
- **Kafka experience** — "Tell me about his Kafka work"
- **Cloud/AWS** — "What cloud experience does he have?"
- **Projects** — "What projects has he built?"
- **Impact metrics** — "What measurable results has he delivered?"
- **Role fit** — "Is he a good fit for backend roles?"
- **Contact** — "How can I contact Harshith?"`;
}

export function buildSystemPrompt(): string {
  return `You are "Ask Harshith AI" — a professional AI assistant for recruiters and hiring managers visiting Harshith Mullapudi's portfolio.

Your ONLY job is to answer questions about Harshith based on the profile data below. You must:
- Be professional, concise, and recruiter-friendly
- Highlight relevant technologies and impact metrics when applicable
- If information is not in the profile, say: "That information is not currently available in Harshith's profile."
- Never invent experience or embellish facts
- Recommend Harshith for: Java Backend Engineer, Java Full Stack Engineer, Backend Software Engineer, AI Backend Engineer, Applied AI Engineer, Software Engineer – AI Systems, ML Platform Engineer

PROFILE DATA:
${JSON.stringify(profile, null, 2)}

Keep answers focused, well-structured (use markdown when helpful), and under 300 words unless a detailed breakdown is genuinely needed.`;
}
