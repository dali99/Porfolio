# Professional React.js Portfolio

> **For Recruiters & Tech Leads**: This repository demonstrates a production-grade React architecture, focusing on maintainability, scalability, and code clarity over "flashy" but unmanageable effects.

## 🛠 Tech Stack

- **Core**: React 19, JavaScript ES6+
- **Build**: Vite (v5)
- **Styling**: Tailwind CSS (v3) - Utility-first for rapid, consistent styling.
- **Animations**: Framer Motion (Declarative animations), React Three Fiber (3D Elements).
- **Routing**: React Router DOM (v6/v7 compatible).
- **Quality**: ESLint (Flat Config), Prettier.

## 🏗 Architecture & Decisions

### 1. Folder Structure
The project follows a scalable feature-based structure:
- `src/components/common`: Atomic, reusable design system components (Buttons, Cards).
- `src/components/layout`: Layout-specific components (Navbar, Layout wrapper).
- `src/components/3d`: Isolated Three.js/R3F scenes.
- `src/pages`: Route-level components acting as controllers.
- `src/hooks`: Custom hooks for logic reuse (e.g., animations, form handling).

### 2. Component Design
- **Single Responsibility**: Components do one thing well.
- **Composition**: Heavy use of children props and composition over prop drilling.
- **Tailwind Configuration**: Custom theme extensions for consistent branding.

### 3. Performance
- **3D Optimization**: The Hero background uses `Points` and `maath` buffers to render thousands of particles with a single draw call, ensuring 60fps even on mobile.
- **Bundle Size**: Lucide-react for tree-shakeable icons.

### 4. Code Quality
- **Modern React**: Strict use of Hooks, functional components, and no legacy class components.
- **Linting**: Strict ESLint configuration with React Hooks rules enabled to prevent common useEffect pitfalls.

## 🚀 Getting Started

### Prerequisites
- Node.js v18+

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

## 🧪 Testing (Planned)
- Architecture is set up for **Vitest** + **React Testing Library**.
- Components are decoupled to allow easy unit testing.

---
*Created by [Your Name] - 2026*
