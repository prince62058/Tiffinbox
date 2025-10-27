# The Tiffin Box - Restaurant Website

## Overview

The Tiffin Box is a modern, mobile-responsive web application for an authentic South Indian restaurant. Built with React and TypeScript, the application showcases the restaurant's menu, location, chef profile, and provides online ordering capabilities. The project emphasizes performance, smooth CSS animations, and pixel-perfect design implementation from Figma specifications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool for fast development and optimized production builds
- **Wouter** for lightweight client-side routing
- **TanStack Query** (React Query) for server state management and caching

**UI Component Library**
- **shadcn/ui** components built on Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom theme configuration
- CSS variables for consistent theming (colors, spacing, typography)
- Custom animations using pure CSS (keyframes and transitions) for performance

**Design System**
- Component-based architecture with reusable UI primitives
- Responsive design with mobile-first approach (breakpoint at 768px)
- Custom fonts: Plus Jakarta Sans, Montserrat, and Manrope
- Consistent color palette with CSS custom properties (HSL-based)

**Animation Strategy**
- Pure CSS animations (no JavaScript animation libraries) for optimal performance
- Predefined animation classes: `animate-fade-in`, `animate-fade-up`, `animate-pulse-slow`, `animate-float`
- Staggered animations using `animation-delay` CSS custom properties
- Hover effects and transitions for interactive elements

### Backend Architecture

**Server Framework**
- **Express.js** as the HTTP server
- **ESM** (ES Modules) for modern JavaScript syntax
- Custom middleware for request logging and JSON response capture
- Error handling middleware for consistent error responses

**Development Setup**
- **tsx** for TypeScript execution in development mode
- **esbuild** for bundling server code in production
- Vite middleware integration for seamless HMR (Hot Module Replacement)
- Custom logging utility for request tracking

**Storage Layer**
- In-memory storage implementation (`MemStorage` class)
- Interface-based storage design (`IStorage`) for easy migration to persistent databases
- Basic user management (create, get by ID, get by username)
- UUID-based user IDs

**API Structure**
- RESTful API pattern with `/api` prefix
- Routes registered through `registerRoutes` function
- HTTP server creation using Node's built-in `http` module
- Storage abstraction for CRUD operations

### External Dependencies

**Database**
- **Drizzle ORM** configured for PostgreSQL
- **Neon Database** serverless PostgreSQL driver (`@neondatabase/serverless`)
- Schema definition in shared directory for full-stack type safety
- Migration system using Drizzle Kit (`drizzle-kit push` command)
- Connection via `DATABASE_URL` environment variable

**UI Component Libraries**
- **Radix UI** primitives for all interactive components (dialogs, dropdowns, tooltips, etc.)
- **Embla Carousel** for image carousels
- **Lucide React** for consistent iconography
- **class-variance-authority** for type-safe component variants
- **clsx** and **tailwind-merge** for conditional className merging

**Form Management**
- **React Hook Form** for performant form state management
- **Zod** for schema validation
- **@hookform/resolvers** for Zod integration with React Hook Form
- **drizzle-zod** for generating Zod schemas from Drizzle tables

**Development Tools**
- **Replit-specific plugins** for enhanced development experience (error overlay, dev banner, cartographer)
- **PostCSS** with Tailwind CSS and Autoprefixer
- **TypeScript** with strict mode enabled for type safety

**Session Management**
- **connect-pg-simple** for PostgreSQL-backed session storage (configured but not actively used in current implementation)

**Utilities**
- **date-fns** for date manipulation
- **nanoid** for generating unique IDs
- **cmdk** for command palette functionality