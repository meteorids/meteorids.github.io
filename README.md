# meteorids

Personal portfolio site for Dr. Milos Sztipanov — physicist specializing in radiative transfer, atmospheric physics, machine learning, and instrumentation.

## Tech Stack

- **React 18** + **Vite** — fast dev server and optimized builds
- **Tailwind CSS 3** — utility-first styling
- **React Router** (HashRouter) — client-side routing compatible with GitHub Pages
- **Lucide React** — icons
- **Space Mono + Syne** — font pairing (loaded via Google Fonts)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens a local dev server at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Outputs static files to `dist/`.

### Preview Build

```bash
npm run preview
```

Serves the `dist/` folder locally for testing the production build.

## Project Structure

```
src/
├── main.jsx                # App entry point + router setup
├── App.jsx                 # Route definitions
├── index.css               # Tailwind directives + custom styles
├── components/
│   ├── Header.jsx          # Sticky nav with mobile menu
│   ├── Footer.jsx          # Footer with dynamic year
│   ├── Layout.jsx          # Page wrapper (Header + Outlet + Footer)
│   ├── PageTitle.jsx       # ASCII art title image component
│   └── Section.jsx         # Reusable content container
└── pages/
    ├── Home.jsx            # Landing / hero page
    ├── About.jsx           # Biography + photo + CV download
    ├── Research.jsx        # Research sections + publications
    ├── Teaching.jsx        # Teaching experience + course list
    └── Contact.jsx         # Contact links with icons
public/
├── images/                 # ASCII art titles, photos
├── fonts/                  # Syne font files (local fallback)
└── documents/              # CV PDF
```

## Deployment

The site uses `HashRouter`, so it works on GitHub Pages without server-side routing configuration. Deploy the contents of `dist/` to your GitHub Pages branch.
