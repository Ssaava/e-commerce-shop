# E-Commerce Shop
## Table of Contents
- [Project Setup](#project-setup)
- [Tech Stack Used](#tech-stack-used)
- [Contribution](#contribution)

### Project Setup

- First clone the repository either running one of the commands
<details>
<summary>1.<code>https</code></summary>
<br>

```bash
git clone https://github.com/Ssaava/e-commerce-shop.git
cd e-commerce-shop
```
</details>
<br>
<details>
<summary>2.<code>ssh</code></summary>
<br>

```bash
git clone git@github.com:Ssaava/e-commerce-shop.git
cd e-commerce-shop
```
</details>

- Second step is installing the necessary packages using npm

```bash
npm i
# or
npm install
```

- Finally run the following command in the terminal to add tailwindcss to the project

```bash
npm run dev

```

### Tech Stack Used
- HTML5
- Tailwind CSS
- JavaScript

### Contribution
- Create a new branch to avoid conflicts using the git command below
```bash
git branch new-branch-name
# switch to new branch
git checkout new-branch-name
```

- Do not merge directly to main branch instead create a pull request to the branch named **test**.
- Then, if no conflicts, merge the changes and make a pull request directly to the main branch to include the changes to the project.
- If you want to include the test branch on local repository, then run the followinf command
```bash
git fetch origin test/branch name
# then
git checkout test/branchname 
```