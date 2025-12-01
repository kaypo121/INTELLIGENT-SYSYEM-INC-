# INTELLIGENT SYSTEMS INC - Enterprise AI Website

A professional, enterprise-grade website for INTELLIGENT SYSTEMS INC - an AI-first technology company.

## 🚀 Features

- **Single-Page Application** with smooth client-side routing
- **8 Complete Pages**: Home, About, Solutions, Industries, Technology, Resources, Careers, Contact
- **Fully Responsive** design across all devices
- **Smooth Animations** using Motion (Framer Motion)
- **Enterprise-Grade UI** with shadcn/ui components
- **Type-Safe** with TypeScript
- **Modern Styling** with Tailwind CSS v4

## 📦 Tech Stack

- **Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS v3.4.1
- **Animations**: Motion (Framer Motion)
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── textarea.tsx
│   │   ├── checkbox.tsx
│   │   └── label.tsx
│   ├── pages/                 # Page components
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── SolutionsPage.tsx
│   │   ├── IndustriesPage.tsx
│   │   ├── TechnologyPage.tsx
│   │   ├── ResourcesPage.tsx
│   │   ├── CareersPage.tsx
│   │   └── ContactPage.tsx
│   ├── Navigation.tsx         # Top navigation
│   ├── Footer.tsx             # Site footer
│   ├── Hero.tsx               # Reusable hero section
│   ├── SolutionCard.tsx       # Solution display card
│   └── MetricCard.tsx         # Animated metric display
├── lib/
│   └── utils.ts               # Utility functions
├── App.tsx                    # Root component with router
├── main.tsx                   # Entry point
└── index.css                  # Global styles

```

## 🎨 Design System

### Colors
- **Primary**: `#0A2463` (Deep Blue)
- **Secondary**: `#00D9FF` (Electric Cyan)
- **Accent**: `#00FF88` (Vibrant Green)

### Typography
- Semantic HTML with global CSS styling
- Responsive font sizes
- Clean, professional typography

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd intelligent-systems
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📄 Pages Overview

### 1. Home Page
- Hero section with CTAs
- Trust indicators (animated metrics)
- Company overview
- Flagship solutions grid
- How it works process
- Client testimonials
- Final CTA section

### 2. About Page
- Mission and vision statements
- Company values
- Journey timeline
- Founder message
- Team culture

### 3. Solutions Page
- 5 detailed solution sections:
  - Intelligent Automation
  - Predictive Analytics
  - AI Security
  - Business Intelligence
  - Developer Tools
- Each with features, benefits, and metrics

### 4. Industries Page
- Interactive industry selector
- 4 industries covered:
  - Healthcare
  - Financial Services
  - Manufacturing
  - Retail & E-commerce
- Dynamic content based on selection

### 5. Technology Page
- 4-layer architecture diagram
- Models & frameworks
- Cloud infrastructure options
- Security & ethics
- Technical specifications table

### 6. Resources Page
- Tab navigation for:
  - Blog posts
  - Research publications
  - Case studies
  - Whitepapers
- Newsletter signup

### 7. Careers Page
- Why work here
- Company culture
- Benefits & perks (6 categories)
- Open positions
- Hiring process
- Diversity statement

### 8. Contact Page
- Contact options cards
- Comprehensive contact form
- Direct contact information
- Response time promises
- Social media links

## 🎯 Key Features

### Navigation
- Sticky header
- Active page highlighting
- Mobile hamburger menu
- Smooth scroll on navigation

### Animations
- Scroll-triggered animations
- Staggered card animations
- Animated metrics counter
- Smooth page transitions

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Optimized for all screen sizes

## 🔧 Customization

### Changing Colors
Find and replace color values throughout the codebase:
- Primary: `#0A2463`
- Secondary: `#00D9FF`
- Accent: `#00FF88`

### Adding New Pages
1. Create new page component in `src/components/pages/`
2. Add page to `Page` type union in `Navigation.tsx`
3. Add navigation item to `navItems` array
4. Add route case in `App.tsx`

### Modifying Content
All content is defined within the page components. Simply edit the text, images, or data structures in each page file.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a complete, production-ready implementation. For modifications:
1. Follow the existing code patterns
2. Maintain TypeScript type safety
3. Keep components modular and reusable
4. Test responsive layouts

## 📝 License

Copyright © 2025 INTELLIGENT SYSTEMS INC. All rights reserved.

## 🙏 Acknowledgments

- Built with React and TypeScript
- UI components from shadcn/ui
- Icons from Lucide React
- Images from Unsplash
- Animations powered by Motion

---

**Built with ❤️ for enterprise AI solutions**
