# Team GitHub Project Startup Guide

A practical, copy‑pasteable checklist for kicking off and collaborating on this repository as a team.

---

## 0) Repository Setup (Owner)

1. **Collaborators added** → already done ✅
2. **Branch protection** (recommended): Protect `main`, require pull requests, at least one review, and status checks.
3. **Conventions**: We will use:

   * Branch names: `feature/...`, `fix/...`, `chore/...`
   * Commit messages: concise, meaningful (optionally Conventional Commits)
   * PR descriptions: clear scope, testing notes, screenshots if UI

---

## 1) First‑Time Setup (Everyone)

### Install Git & set identity

```bash
git --version
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### Clone the repo

```bash
# HTTPS
git clone https://github.com/<ORG_OR_USERNAME>/<REPO>.git

# or SSH
git clone git@github.com:<ORG_OR_USERNAME>/<REPO>.git

cd <REPO>
```

### Install dependencies (if any)

Examples:

* Node.js → `npm install` (or `yarn install`, `pnpm install`)
* Python → `pip install -r requirements.txt`
* Java → `./gradlew build`

---

## 2) Daily Workflow

### Start a new task

```bash
git checkout main
git pull origin main
git checkout -b feature/<short-description>
```

### Do work → commit

```bash
git add .
git commit -m "feat(login): add password reset flow"
```

### Push → open PR

```bash
git push -u origin feature/<short-description>
```

* Then open a **Pull Request** on GitHub into `main`.

### After merge → update local

```bash
git checkout main
git pull origin main
```

---

## 3) Keeping Branch Up to Date

**Merge (simple):**

```bash
git fetch origin
git merge origin/main
```

**Rebase (linear):**

```bash
git fetch origin
git rebase origin/main
# resolve conflicts → git add . → git rebase --continue
git push --force-with-lease
```

---

## 4) Troubleshooting

**Push rejected (behind main):**

```bash
git pull --rebase origin main
```

**SSH errors:**

```bash
ssh-keygen -t ed25519 -C "you@example.com"
ssh-add ~/.ssh/id_ed25519
```

**Undo last commit (keep changes staged):**

```bash
git reset --soft HEAD~1
```

---

## 5) Team Norms (fill in)

* Merge strategy: ☐ Squash ☐ Merge commit ☐ Rebase merge
* Required reviewers: ☐ 1 ☐ 2
* CI required: ☐ Yes ☐ No
* Commit style: ☐ Conventional Commits ☐ Free‑form

---

## 6) Quick Cheat Sheet

```bash
# New task
git checkout main && git pull
git checkout -b feature/<name>

# Work
git add .
git commit -m "feat: ..."
git push -u origin feature/<name>

# Open PR → merge → update main
git checkout main && git pull
```

---

> This README is our shared workflow. Keep it updated as the project evolves.
