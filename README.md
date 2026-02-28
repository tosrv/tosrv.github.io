# My Portfolio 🚀

This portfolio is built using **Next.js** and **Shadcn UI**. All content—such as intro, work experience, education, tech stack, and projects—is managed through **JSON files**, making it easy to update without touching React code.

Check out the portfolio [here](https://tosrv.github.io)

## Key Features

- **Data-driven**: All content can be edited via JSON (education, tech stack, work experience, projects, intro).
- **Shadcn UI Components**: Ready-to-use Badge, Card, Button, etc.
- **Easy Deployment**: GitHub Actions automatically handles deployment to GitHub Pages.
- **Responsive & Modern**: Clean, mobile-friendly design.

## Installation

1. Clone this repository

```bash
git clone https://github.com/tosrv/tosrv.github.io.git
cd tosrv.github.io
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the project locally

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 to see it in action.

## Deployment to GitHub Pages

This project includes **GitHub Actions** for automatic deployment.

Since this repository is named `tosrv.github.io`, it will be deployed as a **User Site**.

### ⚠️ Important

Make sure your repository name is exactly the same as your GitHub username, followed by `.github.io`.

Example:

If your GitHub username is:

```bash
tosrv
```

Then your repository name must be:

```bash
tosrv.github.io
```

Otherwise, it will be deployed as a project site (`username.github.io/repository-name`) instead of your main site.

### Steps to Deploy

1. Create a repository named `username.github.io` (must match your GitHub username).

2. Push your project to the `main` branch.

3. Go to **Settings** in your repository.

4. Navigate to **Pages** → **Build and deployment** → **Source**.

5. Select **GitHub Actions**.

6. Wait for the workflow to complete.

Your portfolio will be live at:

```bash
https://username.github.io
```

## License

Open-source. Feel free to use, modify, and distribute as needed.
