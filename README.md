# ShreeMedia Solutions

> Smart Digital Solutions for Modern Businesses

A modern, responsive marketing and e-commerce website built with React and Vite for ShreeMedia Solutions — a digital services and print/media products company. The site showcases services, project portfolio, blog content, and a product catalog with cart functionality.

## Features

- **Marketing pages** — Home, Services, Projects/Portfolio, Blog, and Contact pages with animated sections (via Framer Motion)
- **Service showcase** — Detailed expertise/service categories (Software Development, UI/UX Design, etc.) with rich descriptions and imagery
- **Product catalog & cart** — Browse products (cards, stationery, banners, etc.) and manage a shopping cart with persistent storage (localStorage) via React Context
- **Authentication UI** — Login, Signup, and Forgot Password pages
- **Reusable UI components** — Glass-morphism cards, animated sections, section titles, timelines, and a tech marquee
- **Fully responsive** — Styled with Tailwind CSS
- **Client-side routing** — Powered by React Router

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| Animation | Framer Motion, Lottie (`lottie-react`, `@lottiefiles/react-lottie-player`) |
| Icons | Lucide React |
| Linting | ESLint |

## Project Structure

```
shreemediasolutions/
├── public/                     # Static assets (logos, favicon)
├── src/
│   ├── assets/                 # Images used across the site
│   ├── components/
│   │   ├── layout/              # Header, Footer, Login, Signup, ForgotPassword
│   │   ├── sections/             # Page sections (Hero, Testimonials, CTA, etc.)
│   │   └── ui/                   # Reusable UI primitives (GlassCard, Timeline, etc.)
│   ├── context/
│   │   └── CartContext.jsx       # Global cart state (localStorage persisted)
│   ├── data/                     # Static data (contact info, expertise, products)
│   ├── pages/                    # Route-level pages (Home, Services, Projects, Blog, Contact, Cart)
│   ├── App.jsx                   # Root component & route definitions
│   ├── main.jsx                  # App entry point
│   └── index.css                 # Global styles / Tailwind directives
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── eslint.config.js
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes bundled with Node.js)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd shreemediasolutions

# Install dependencies
npm install
```

### Development

Start the local development server with hot module reloading:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Build

Create an optimized production build:

```bash
npm run build
```

Output is generated in the `dist/` folder.

### Preview Production Build

Serve the production build locally to verify it before deployment:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/services` | Services |
| `/projects` | Projects |
| `/blog` | Blog |
| `/contact` | Contact |
| `/cart` | Cart |
| `/login` | Login |
| `/signup` | Signup |
| `/forgot-password` | Forgot Password |
| `/get-started` | Redirects to Login |

## Notes

- Cart state is currently persisted client-side via `localStorage` — there is no backend/API integration yet.
- Authentication pages (Login/Signup/Forgot Password) are UI-only in the current version and are not wired to a backend auth service.
- Update contact details (phone/email) in `src/data/contact.js`.
- Product catalog data lives in `src/data/products.js`; service/expertise content lives in `src/data/expertise.js`.

## License

This project is proprietary to ShreeMedia Solutions. All rights reserved.
