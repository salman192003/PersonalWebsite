# iOS Settings Portfolio — Salman Ajmal

A polished, mobile-first portfolio website inspired by Apple's iOS Settings app design language. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 📱 **iOS Settings Homepage** — Large title, profile card, grouped section rows, chevrons, badges
- 🌗 **Dark / Light Mode Toggle** — iOS-style switch with smooth theme transition, persists in localStorage
- 🎯 **Section Detail Views** — Each section slides in like an iOS push navigation
- 💫 **Premium Animations** — Spring-based transitions, staggered reveals, micro-interactions
- 📱 **Mobile-first + Desktop Phone Frame** — On mobile/tablet, it fills the viewport. On desktop, it's presented in a realistic iPhone frame
- 🎨 **Section-specific Theming** — Each section has its own color personality while remaining cohesive

## 🏗️ Project Structure

```
src/
├── App.tsx                    # Main app with theme provider + responsive layout
├── index.css                  # Complete iOS design system (CSS variables)
├── data/
│   └── portfolioData.ts       # ← EDIT THIS to update all your content
├── components/
│   ├── SettingsHome.tsx        # Main settings screen orchestrator
│   ├── ios/
│   │   ├── IOSToggle.tsx       # iOS-style animated toggle switch
│   │   ├── SettingsRow.tsx     # Reusable settings row with icon/label/value/chevron
│   │   ├── SettingsGroup.tsx   # Grouped card container
│   │   └── SectionView.tsx     # Detail screen with back navigation
│   └── sections/
│       ├── BioSection.tsx      # Bio / About Me detail
│       ├── SkillsSection.tsx   # Skills with expandable categories + proficiency bars
│       ├── EducationSection.tsx # Education timeline
│       ├── ProjectsSection.tsx # Projects with gradient cards
│       ├── ResearchSection.tsx # Research experiences
│       ├── ExperienceSection.tsx # Professional experience
│       ├── ContactSection.tsx  # Contact with copy-to-clipboard
│       └── ResumeSection.tsx   # Resume with PDF preview
```

## 🚀 Getting Started

### Install dependencies
```bash
cd frontend
npm install
```

### Run development server
```bash
npm start
```

### Build for production
```bash
npm run build
```

## ✏️ How to Customize

### 1. Update Your Content
**Edit `src/data/portfolioData.ts`** — this is the single source of truth for all portfolio content:
- `profileData` — Name, subtitle, avatar
- `highlightCard` — Status card content
- `bioData` — Full bio, mission, interests
- `skillsData` — Skills by category with proficiency levels
- `educationData` — Schools, degrees, coursework
- `projectsData` — Projects with tech stacks and gradients
- `researchData` — Research experiences
- `experienceData` — Work experience
- `contactData` — Email, GitHub, LinkedIn
- `resumeData` — Summary, highlights, PDF path

### 2. Update Your Avatar
Replace `/public/cu.png` with your own photo.

### 3. Update Your Resume
Replace `/public/CV.pdf` with your own resume PDF.

### 4. Customize Section Themes
Edit color variables in `src/index.css` under the `:root` and `[data-theme="light"]` blocks.

### 5. Add/Remove Sections
- Add a new section component in `src/components/sections/`
- Add a new row in `SettingsHome.tsx`
- Add the section key to the `SectionKey` type and `sectionConfig`

## 🎨 Design System

| Token | Dark | Light |
|-------|------|-------|
| Background | `#000000` | `#F2F2F7` |
| Card Surface | `#1C1C1E` | `#FFFFFF` |
| Primary Text | `#FFFFFF` | `#000000` |
| Secondary Text | `#8E8E93` | `#3C3C43` |
| Separator | `rgba(84,84,88,0.65)` | `rgba(60,60,67,0.29)` |
| Accent Blue | `#0A84FF` | `#007AFF` |

## 📱 Section Color Themes

| Section | Accent | Mood |
|---------|--------|------|
| Bio | Neutral gray | Elegant, personal |
| Skills | Blue / Cyan | Technical, dynamic |
| Education | Gold | Academic, prestigious |
| Projects | Gradient | Vibrant, product-focused |
| Research | Indigo / Purple | Analytical, intelligent |
| Experience | Graphite / Steel | Executive, crisp |
| Contact | Green | Fresh, approachable |
| Resume | Monochrome | Professional, minimal |

## 🛠️ Tech Stack

- **React 18** + TypeScript
- **Tailwind CSS 3** (for utility classes)
- **Framer Motion** (spring-based animations)
- **React Router** (routing infrastructure)
- **CSS Custom Properties** (design tokens, theme system)

## 📄 License

This project is for personal use. Customize freely.
