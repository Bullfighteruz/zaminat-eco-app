# Zaminat Eco App

An ecological awareness application for Uzbekistan that combines gamification with environmental education.

[![Open in Bolt](https://bolt.new/button)](https://bolt.new/Bullfighteruz/zaminat-eco-app)

## Project Overview

A React-based web application for promoting environmental awareness and eco-friendly actions in Uzbekistan.

## Technology Stack

- **Framework:** React 18 with Vite
- **Language:** TypeScript
- **UI Components:** shadcn/ui (pre-downloaded in `@/components/ui`)
- **Styling:** Tailwind CSS
- **Internationalization:** i18next (UZ/RU/EN)

## Development Setup

```bash
# Install dependencies
pnpm i

# Add new dependency
pnpm add [package-name]

# Start development server
pnpm run dev

# Build for production
pnpm run build
```

## Key Files and Directories

```
├── index.html          # HTML entry point
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── package.json        # Dependencies and scripts
└── src/
    ├── app.tsx         # Root component
    ├── main.tsx        # Project entry point
    ├── index.css       # Global styles
    ├── components/
    │   └── ui/         # shadcn/ui components
    └── pages/
        └── Index.tsx   # Home page
```

## Development Guidelines

- All shadcn/ui components are available at `@/components/ui`
- Use Tailwind classes for styling components
- Add global styles to `src/index.css`
- The `@/` path alias points to the `src/` directory
- Avoid re-exporting types that are already imported

## Project Structure

```
src/
├── components/     # UI components
├── hooks/         # Custom React hooks
├── lib/           # Utilities and data
├── locales/       # Translations
├── pages/         # Page components
└── styles/        # CSS styles
```

## Environment Variables

```env
VITE_APP_API_URL=your_api_url_here
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Quick Links

- [Documentation](docs/)
- [Component Library](src/components/)
- [Translations](src/locales/)

## License

MIT License