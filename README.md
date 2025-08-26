# Platform PoC

![status](https://img.shields.io/badge/status-WIP-yellow)

This repository is a **proof-of-concept Internal Developer Platform** built with [Backstage](https://backstage.io).  
It demonstrates how to extend Backstage with custom frontend and backend plugins, integrate with a **PostgreSQL database**, and orchestrate **k6 performance test runs on Kubernetes**.  

The stack showcases modern platform engineering practices including **TypeScript/Node.js, React, Docker, Kubernetes, GitOps with ArgoCD, and Microsoft OIDC authentication**.  

The goal of this PoC is to explore how Backstage can **streamline developer workflows**, **centralize service visibility**, and provide a **foundation for scalable internal platforms**.

---

## Features
- **Monorepo structure** managed with Yarn workspaces  
- **Custom frontend plugin (`perf-ui`)** for performance dashboards  
- **Custom backend plugin (`perf-backend`)** to orchestrate Kubernetes Jobs  
- **PostgreSQL integration** for persistence and metrics storage  
- **Kubernetes orchestration** to trigger and manage `k6` test runs  
- **GitOps with ArgoCD** for continuous delivery and environment sync  
- **Microsoft OIDC authentication** for secure login  

---

## Tech Stack
- **Languages/Frameworks:** TypeScript, Node.js, React  
- **Platform:** Backstage (monorepo with plugins)  
- **Database:** PostgreSQL  
- **Infrastructure & Ops:** Docker, Kubernetes, ArgoCD  
- **Authentication:** Microsoft OIDC / Azure AD  
- **Testing & Performance:** k6  

---

## Architecture Overview

```mermaid
flowchart LR
  subgraph Backstage
    A[perf-ui Plugin] --> B[perf-backend Plugin]
  end

  B -->|SQL queries| C[(PostgreSQL)]
  B -->|Create Job| D[Kubernetes Cluster]
  D --> E[k6 Load Test Job]
  E -->|Results| C
  C -->|Data for dashboards| A
