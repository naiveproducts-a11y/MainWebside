# Project Rules: naive-innova Customizations

This file instructs all future AI agents on how to operate in the `naive-innova` workspace. It incorporates the Global Skills for **Obsidian Memory Vault**, **Prompt Optimizer**, and **Token Optimizer**.

---

## 🧠 1. Obsidian Memory Vault Integration

### On Session Startup:
- Identify the active project as `naive-innova`.
- Scan and load context files from the memory vault at:
  - **Working Memory**: `C:\Users\asus\Desktop\Antigraity\AI_Memory\working_memory\naive-innova\`
  - **Episodic Memory**: `C:\Users\asus\Desktop\Antigraity\AI_Memory\episodic_memory\naive-innova\`
  - **Semantic Memory**: `C:\Users\asus\Desktop\Antigraity\AI_Memory\semantic_memory\naive-innova\`
- Acknowledge loaded context/learnings in the startup log.

### On Task Completion:
- Create or update markdown summaries in the memory vault:
  - Daily progress: `/working_memory/naive-innova/daily_log_<date>.md`
  - Bug fixes: `/episodic_memory/naive-innova/bug_fixes/<issue_name>_fix.md`
  - Completed tasks: `/episodic_memory/naive-innova/tasks/<task_name>.md`
  - Preferences / standards: `/semantic_memory/naive-innova/<topic>.md`

---

## 🎯 2. Metaprompting & Prompt Optimization (RISEN)

For every user request, you **MUST start your response with a visible, formatted `[RISEN Interpretation Log]` block** before planning or executing:

```markdown
### [RISEN Interpretation Log]
- **Role:** [Specific expert persona required, e.g., Senior TypeScript/React/Vite Architect]
- **Instructions:** [Concrete technical objectives translated from high-level commands]
- **Steps:** [Logical Chain of Thought (CoT) execution steps]
- **Expectation:** [Targeted output files and verification plan]
- **Narrowing:** [Strict limits, constraints, and scope boundaries]
```

---

## ⚡ 3. Token & Context Optimization

- **Surgical File Access:** Do not read entire files unless necessary. Utilize range parameters in viewers or query spec sheets in Obsidian.
- **Surgical Edits:** Output only the specific lines changed when modifying code. Avoid re-writing unchanged code.
- **Offload Chat History:** If the conversation reaches 10-15 messages, summarize state to the Obsidian Daily Log and recommend starting a fresh chat session.
