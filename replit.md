# HomeStore - E-commerce Home Improvement Platform

## Overview

HomeStore is a modern e-commerce web application designed for home improvement retail. Built with React and TypeScript, it provides a comprehensive shopping experience for appliances, tools, paint, and building supplies. The application features a clean, responsive design using shadcn/ui components and Tailwind CSS, with client-side routing for a seamless single-page application experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18.3.1 with TypeScript for type-safe component development
- Vite as the build tool for fast development and optimized production builds
- React Router (BrowserRouter) for client-side navigation and routing

**UI Component System**
- shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for utility-first styling with a custom design system
- CSS variables for theming support (light/dark modes via next-themes)
- Component composition pattern using Radix UI's Slot component

**State Management**
- React Query (TanStack Query v5) for server state management and data fetching
- React Hook Form with Zod resolvers for form validation and state
- Local component state using React hooks (useState, useEffect, useContext)

**Routing Strategy**
- Page-based routing with dedicated route components
- Routes include: Home, Departments, product categories (Appliances, Tools, Paint, Building Supplies), Deals, About, Contact, Store Locator, Cart, Account
- 404 Not Found page with error logging for invalid routes
- BrowserRouter configuration supports flexible base path for deployment scenarios

### Design System

**Color Palette**
- HSL-based color system defined in CSS variables
- Primary: Blue (#005C99 - HSL 207 100% 28%)
- Accent: Orange/Red (#F26B50 - HSL 4 90% 58%)
- Neutral colors: Slate-based background, foreground, and muted tones
- Semantic colors: Destructive, secondary, border, input, ring

**Typography & Layout**
- Custom container with max-width and responsive padding
- Mobile-first responsive breakpoints (2xl: 1400px)
- Border radius tokens (--radius: 0.25rem)

**Component Variants**
- Button variants: default, destructive, outline, secondary, ghost, link
- Size variants: default, sm, lg, icon
- Consistent styling patterns across all UI components

### Deployment Configuration

**Replit Environment**
- Development server runs on port 5000
- Host configured as 0.0.0.0 for network accessibility
- Workflow: `bun run dev` for development server

**GitHub Pages Support**
- Automated deployment via gh-pages package (v6.3.0)
- Configurable base path through VITE_BASE_PATH environment variable
- Default base path: '/' (for custom domains or username.github.io)
- For repository subpath: set VITE_BASE_PATH=/repo-name/ before deploy
- Build scripts: `bun run build`, `bun run deploy` (includes predeploy build step)
- See GITHUB_PAGES_DEPLOYMENT.md for complete deployment guide

**Build Optimization**
- SWC-based React plugin for faster builds
- Development mode with component tagging (lovable-tagger)
- Production mode optimization through Vite

### Code Quality & Development

**Linting & TypeScript**
- ESLint with TypeScript support
- Relaxed strictness settings (noImplicitAny, noUnusedLocals disabled for flexibility)
- React Hooks and React Refresh plugins for development experience

**Development Server**
- Host: 0.0.0.0 (accessible on network)
- Port: 5000
- Hot module replacement enabled

### Project Structure

**Page Components**
- Feature-based pages in `/src/pages/`
- Shared Header and Footer components
- Product listing pages with image assets
- Form-based pages (Contact, Account) with input validation

**Asset Management**
- Product images stored in `/src/assets/products/`
- Category images in `/src/assets/`
- Static files in `/public/` (ads.txt, robots.txt)

**Path Aliases**
- `@/` aliased to `./src/` for clean imports
- Consistent import patterns across components

## External Dependencies

### UI & Component Libraries
- **@radix-ui/react-*** (v1.x-2.x): Accessible UI primitives for all interactive components (accordion, alert-dialog, avatar, checkbox, dialog, dropdown, popover, select, tabs, toast, tooltip, etc.)
- **shadcn/ui**: Component collection built on Radix UI
- **lucide-react** (v0.462.0): Icon library for UI elements
- **class-variance-authority** (v0.7.1): Component variant management
- **tailwind-merge**: Utility for merging Tailwind classes
- **clsx**: Conditional class name construction

### Form & Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers** (v3.10.0): Validation schema resolvers
- **zod** (implied through resolvers): Schema validation

### Data Management
- **@tanstack/react-query** (v5.83.0): Async state management and data fetching

### Utilities
- **date-fns** (v3.6.0): Date manipulation and formatting
- **embla-carousel-react** (v8.6.0): Carousel/slider functionality
- **next-themes** (v0.3.0): Theme switching (dark/light mode)
- **cmdk** (v1.1.1): Command palette component
- **input-otp** (v1.4.2): OTP input handling

### Advertising Integration
- **Google AdSense**: Integrated with client ID ca-pub-1086729994475948
- ads.txt file configured for direct advertising

### Development Tools
- **gh-pages**: Automated GitHub Pages deployment
- **lovable-tagger**: Development component tagging
- **ESLint**: Code quality and linting
- **TypeScript**: Type checking and IDE support
- **PostCSS & Autoprefixer**: CSS processing

### SEO & Discovery
- Meta tags configured for social sharing (Open Graph, Twitter Cards)
- robots.txt configured to allow all major search engines
- Sitemap-ready structure through static routing