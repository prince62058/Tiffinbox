# The Tiffin Box - Restaurant Website

![The Tiffin Box Logo](https://tiffinboxprince.netlify.app/)

A modern, mobile-responsive web application for an authentic South Indian restaurant. Built with React and Vite, this application showcases the restaurant's menu, location, chef profile, and provides an engaging user experience.

## 🌐 Live Demo

[View Live Site](https://tiffinboxprince.netlify.app/)

## ✨ Features

- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Interactive Menu**: Browse through authentic South Indian dishes with detailed descriptions
- **Chef Profile**: Learn about the culinary expertise behind the dishes
- **Gallery**: Visual showcase of the restaurant's ambiance and food
- **Testimonials**: Customer reviews and feedback
- **Location & Contact**: Easy access to restaurant location and contact information
- **Social Integration**: Connect with the restaurant on social media platforms
- **Smooth Animations**: Performance-optimized CSS animations for enhanced user experience

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Wouter** - Lightweight client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Accessible UI components built on Radix UI
- **Framer Motion** - Smooth animations and transitions
- **TanStack Query** - Powerful data fetching and caching

### Design & Assets
- **Figma** - Design system and asset management
- **Custom Fonts** - Plus Jakarta Sans, Montserrat, and Manrope
- **SVG Icons** - Optimized vector graphics

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/tiffin-box.git
   cd tiffin-box
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
tiffin-box/
├── client/
│   ├── public/
│   │   ├── figmaAssets/     # Design assets from Figma
│   │   └── _redirects       # Netlify redirects for SPA routing
│   └── src/
│       ├── components/
│       │   └── ui/          # Reusable UI components
│       ├── hooks/           # Custom React hooks
│       ├── lib/             # Utility functions and configurations
│       ├── pages/
│       │   ├── sections/    # Page sections/components
│       │   └── TiffinBox.jsx # Main page component
│       ├── App.jsx          # Root component with routing
│       └── main.jsx         # Application entry point
├── dist/                    # Production build output
└── package.json
```

## 🎨 Design System

### Colors
- Primary: Custom color palette with CSS custom properties
- Dark theme optimized for restaurant ambiance

### Typography
- **Plus Jakarta Sans**: Headings and display text
- **Montserrat**: Body text and UI elements
- **Manrope**: Accent text and special elements

### Animations
- Pure CSS animations for optimal performance
- Fade-in, fade-up, float, and pulse effects
- Staggered animations for dynamic content loading

## 📱 Sections

1. **Hero Section** - Eye-catching landing with call-to-action
2. **About Us** - Restaurant story and values
3. **Menu** - Interactive menu with categories
4. **Chef Profile** - Meet the culinary expert
5. **Our Specialties** - Featured dishes
6. **Gallery** - Photo showcase
7. **Testimonials** - Customer reviews
8. **Location** - Find us section
9. **Contact** - Get in touch

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Deployment

The application is configured for deployment on Netlify with automatic builds from the `dist` directory. The `_redirects` file ensures proper SPA routing.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design assets provided by Figma
- UI components inspired by shadcn/ui
- Icons from Lucide React
- Font families from Google Fonts

---

**Made with ❤️ for authentic South Indian cuisine lovers**
