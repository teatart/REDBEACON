Follow these steps in order to safely push the project to GitHub.

## Step 1 — Security scan
Before touching git, scan all files for secrets. Search for:
- API keys, tokens, passwords hardcoded in source files (patterns: `sk-`, `ghp_`, `Bearer `, `password =`, `secret =`, `api_key =`, `API_KEY`)
- `.env` files or any file containing real credentials
- Private keys (-----BEGIN PRIVATE KEY-----)

If anything sensitive is found, STOP and alert the user immediately. Do not proceed until secrets are removed or added to `.gitignore`.

## Step 2 — Update README.md
Read the current project files and rewrite `README.md` to accurately reflect:
- Project name and description
- Live site URL (if deployed)
- Tech stack
- Project file structure
- How to run locally
- How deployment works

## Step 3 — Stage and commit
Run:
```
git add .
git status
```
Show the user what files will be committed. Then ask for a commit message, or suggest one based on what changed. Commit with that message.

## Step 4 — Push to GitHub
Push to origin main. Report success or show the error if it fails.

## Step 5 — Update repo About
Use the GitHub CLI (`gh repo edit`) to update the repository description and homepage URL. If `gh` is not installed or not authenticated, open the repo settings page and instruct the user to update the About section manually with:
- **Description**: one-line summary of the project
- **Website**: the live URL

## Step 6 — Confirm
Report what was done:
- Files pushed
- README updated (yes/no)
- Repo About updated (yes/no)
- Any warnings
