# Viraal Project

This is a monorepo containing the Viraal application, which consists of a Django REST API backend and a Next.js 16 frontend.

## Structure

*   `frontend/`: Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript.
*   `backend/`: Django REST Framework (Python).
*   `docs/`: Project documentation, PRDs, and business plans.

## Setup

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
*(Django project to be initialized)*

---

# AI Agent Instructions

> **Note to AI Agents (Gemini, Claude, Copilot, etc.):**
> Read the following rules before modifying this repository.

### Frontend Rules (Next.js)
*   **This is NOT the Next.js you know.** This version (16) has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
*   Always use `frontend/` as the working directory for frontend commands.
*   Use standard App Router conventions.

### General Rules
*   Do not leave secrets in plaintext. Use environment variables.
*   When executing shell commands, verify your current working directory (`frontend/` vs `backend/`).
