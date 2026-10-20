# Arthath Agary — Software Engineer Portfolio

A custom, desktop-inspired personal software engineer portfolio (**Minimal Engineer Workspace**) built with **Next.js (App Router)**, **TypeScript (strict mode)**, **Tailwind CSS**, and **Lucide Icons**.

## Features & Architecture

- **Minimal Engineer Workspace Layout**: Centered application shell with subtle macOS-inspired window controls, workspace path breadcrumb, slim left sidebar on desktop, and responsive pill/drawer navigation on mobile.
- **Dark Graphite Theme + Light Mode Option**: Defaults to the custom dark graphite palette (`#17191D` background, `#1F2228` surface, `#252930` elevated surface, `#F3F4F6` primary text, `#A6ABB5` secondary text, `#71D9BB` mint green accent, `#363941` border) with a clean light theme toggle.
- **Command Palette (`Cmd/Ctrl + K`)**: Keyboard-accessible jump menu for navigating directly to sections, opening project case studies, switching themes, or downloading the résumé.
- **Verified Résumé Content**: All experience, projects (`Appmaker`, `Otenro Pro`, `Telegram Sub Manager`, `Appmaker Spark`, `Cordova Hot Code Push CLI`), metrics, skills, education (`Cardiff Metropolitan University`), and contact details are strictly sourced from `agary_software_engineer_resume.pdf` and separated into `src/data/portfolio.ts`.

## Adding Your Original PDF Résumé Asset

To ensure your exact PDF résumé is served for direct downloads and inline PDF previews without replacing it with a generated file, copy your original PDF into `public/resume.pdf`:

```bash
mkdir -p public
cp /path/to/agary_software_engineer_resume.pdf public/resume.pdf
```

When clicked, the **Download Résumé** action automatically saves the file as `Arthath_Agary_Software_Engineer_Resume.pdf`.

## Local Development & Production Build

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Run type checking, linting, and production build:
   ```bash
   npm run typecheck
   npm run lint
   npm run build
   npm start
   ```
# agary_portfolio
