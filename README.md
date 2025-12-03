# Comprehensive Home Care - Website

A modern, responsive website for Comprehensive Home Care, a home health care service based in Chicago, IL.

## Project Structure

```
CHC/
├── index.html          # Homepage with hero section and service overview
├── services.html       # Detailed services page
├── contact.html        # Contact page with form and Google Maps
├── favicon.svg         # Custom SVG favicon with brand colors
├── css/
│   └── styles.css      # Main stylesheet with design system
├── js/
│   └── main.js         # JavaScript functionality and animations
├── images/             # Image assets and logo
└── README.md           # This file
```

## Features

### Responsive Design
- **Mobile-First Approach**: Optimized layouts for all screen sizes (mobile, tablet, desktop)
- **Adaptive Navigation**:
  - Mobile: Slide-down menu with centered logo
  - Desktop: Traditional horizontal navbar with collapsible toggle
- **Touch-Optimized**: 44px minimum touch targets for accessibility
- **Breakpoint Coverage**: Responsive adjustments from 320px to 1440px+

### Modern UI/UX
- **Design System**: CSS custom properties for consistent colors, spacing, and typography
- **Smooth Animations**:
  - Scroll-triggered animations using Intersection Observer
  - Animated counter for statistics
  - Hover effects and transitions
- **Professional Styling**: Gradient backgrounds, subtle shadows, polished card designs
- **Accessibility**: High contrast, readable fonts, semantic HTML

### Interactive Features

- **Collapsible Navbar**:
  - Toggle button with smooth hamburger ↔ X icon transitions
  - Desktop: Hides/shows entire navbar
  - Mobile: Slide-down menu with centered logo
  - Adaptive icon states based on screen size
- **Contact Form**: Client-side validation with animated submit states
- **Service Cards**: Interactive hover effects with 3D tilt on desktop
- **Mobile Menu Overlay**: Backdrop blur effect with smooth slide-in animation
- **Google Maps Integration**: Interactive embedded map with location cards
- **Custom Favicon**: SVG favicon with medical cross symbol in brand colors

### Performance
- **No External Dependencies**: Pure HTML, CSS, and vanilla JavaScript
- **Optimized Images**: Lazy loading and responsive image sizing
- **Efficient Animations**: Hardware-accelerated CSS transforms
- **Clean Code**: Organized, maintainable codebase

## Pages

1. **Home (index.html)**:
   - Hero section with call-to-action
   - Service overview cards (3 main services)
   - Trust badges and value propositions
   - Statistics section with animated counters

2. **Services (services.html)**:
   - Detailed service descriptions
   - Enhanced card designs with bottom accent animations
   - Professional imagery
   - Comprehensive care solutions section

3. **Contact (contact.html)**:
   - Interactive contact form with validation
   - Business information and hours
   - Service selection dropdown
   - Animated submit feedback
   - Google Maps embed showing office location
   - Location info cards (address and parking information)

## Technologies Used

- **HTML5**: Semantic markup, accessibility features
- **CSS3**:
  - Custom properties (CSS variables)
  - Flexbox and CSS Grid layouts
  - Media queries for responsive design
  - Advanced animations and transitions
- **Vanilla JavaScript**:
  - Intersection Observer API for scroll animations
  - Dynamic counter animations
  - Form handling and validation
  - Responsive navbar toggling with adaptive icon states
  - Google Maps API integration
- **No Frameworks**: Zero external dependencies for optimal performance

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Small Laptop**: 1024px - 1280px
- **Desktop**: 1280px - 1440px
- **Large Desktop**: > 1440px

## Development Notes

### CSS Architecture
- Mobile-first responsive design
- BEM-inspired naming conventions
- Organized by component sections
- Comprehensive media query system

### JavaScript Features
- Modular event handling
- Scroll-based animations
- Dynamic state management with adaptive navbar behavior
- Performance-optimized observers
- Context-aware UI states (mobile vs desktop navigation)

## Deployment

This website is deployed on:

- **Vercel**: [https://comprehensive-home-care-demo.vercel.app/](https://comprehensive-home-care-demo.vercel.app/)

## Key Features Summary

- **Fully Responsive**: 5 breakpoints covering mobile to large desktop
- **Accessibility-First**: ARIA attributes, semantic HTML, 44px touch targets
- **Performance Optimized**: Zero dependencies, lazy loading, hardware-accelerated animations
- **Modern Interactions**: Scroll animations, animated counters, adaptive navigation
- **Professional Design**: Custom design system, gradient effects, polished UI
- **Location Integration**: Google Maps embed with interactive location cards
- **Custom Branding**: SVG favicon with medical cross in brand colors

## Recent Updates

- Added custom SVG favicon with CHC branding
- Integrated Google Maps on contact page with location cards
- Implemented adaptive navbar with context-aware icon states
- Enhanced mobile responsiveness with progressive spacing adjustments
- Fixed duplicate JavaScript event handlers for improved reliability
- Added dynamic padding adjustments when navbar is collapsed

## Demo Purpose

This website was created as a professional demonstration project and showcases modern web development best practices including responsive design, accessibility, performance optimization, and clean code architecture.

## Contact Information

**Comprehensive Home Care**
- Address: 6321 N Avondale Ave Suite 106, Chicago, IL 60631
- Hours: Monday - Friday, 9:00 AM - 5:00 PM

---


