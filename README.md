# Keith Ciceron - Portfolio

A modern, interactive portfolio website showcasing my work as a Full Stack Developer and UI/UX Designer.

## 🚀 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Modern UI**: Dark theme with smooth animations and transitions
- **Interactive Components**: 
  - Contact modal with social media links
  - Project showcase
  - Tech stack display
  - Work experience timeline
  - OJT experience section with image gallery
  - Admin panel (hidden feature)
- **Performance Optimized**: Built with Vite for fast load times
- **Accessibility**: Semantic HTML and ARIA labels

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Database**: Supabase (optional)

## 📋 Sections

1. **Hero** - Introduction and call-to-action
2. **About** - Professional background
3. **Work Experience** - Career history
4. **Education** - Academic credentials
5. **OJT Experience** - On-the-job training with image gallery
6. **Projects** - Featured work samples
7. **Tech Stack** - Technologies and tools
8. **Contact** - Message form and social links

## 🔐 Admin Panel (Hidden Feature)

- **Trigger**: Click the ✖ icon next to "KC" logo 5 times in quick succession
- **Features**:
  - View all submitted messages
  - Delete messages
  - Scrollable message list

## 🚀 Deployment

This project is optimized for deployment on Vercel.

### Deploy to Vercel

1. Push to GitHub: `git push origin main`
2. Visit [Vercel](https://vercel.com)
3. Import this repository
4. Deploy with one click

### Environment Variables

No additional environment variables required for basic deployment.

## 📦 Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Type checking
npm run typecheck
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── TechStack.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── OJT.tsx
│   ├── Contact.tsx
│   ├── CallToAction.tsx
│   ├── Footer.tsx
│   ├── ContactModal.tsx
│   ├── AdminModal.tsx
│   └── index.ts
├── App.tsx
├── main.tsx
├── index.css
└── vite-env.d.ts
```

## ✨ Customization

### Update Content

1. **About Section**: Edit `src/components/About.tsx`
2. **Work Experience**: Edit `src/components/Experience.tsx`
3. **Education**: Edit `src/components/Education.tsx`
4. **OJT**: Edit `src/components/OJT.tsx` and add images to `public/images/ojt/`
5. **Projects**: Edit `src/components/Projects.tsx`
6. **Contact Links**: Edit `src/components/ContactModal.tsx`
7. **Resume**: Replace `public/resume.pdf`

### Styling

- Theme colors: `src/index.css` (CSS variables)
- Tailwind config: `tailwind.config.js`
- Global styles: `src/index.css`

## 📧 Contact

- Email: ciceronkeith4@gmail.com
- GitHub: [ciceronkeith4-code](https://github.com/ciceronkeith4-code)

## 📄 License

Built with ❤️ by Keith Ciceron
