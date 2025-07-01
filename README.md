
# Tarpuy Foods - Superfoods Andinas

A beautiful, static website showcasing Andean superfoods (Cushuro and Tarwi) with bilingual support (Spanish/English).

## 🌿 Project Overview

Tarpuy Foods is a front-end only website built with pure HTML, CSS, and minimal JavaScript. It features:

- **4 main pages**: Home, Products, Recipes, How to Buy
- **Bilingual support**: Spanish (default) and English versions
- **Responsive design**: Mobile-first approach with hamburger menu
- **SEO optimized**: Semantic HTML, meta tags, and accessibility features
- **Beautiful design**: Andean-inspired color palette and typography

## 🎨 Design System

### Colors
- **Primary**: #2F855A (Verde Andino)
- **Secondary**: #F4EDE4 (Crema)
- **Accent**: #F2B705 (Dorado Suave)

### Typography
- **Headings**: Inter (Google Fonts)
- **Body**: System UI fonts

### Key Features
- Sticky navigation with smooth scrolling
- Mobile hamburger menu
- Hover effects and smooth transitions
- Optimized images with lazy loading
- Accessibility-first approach

## 📁 Project Structure

```
tarpuy-foods/
├── index.html                 # Spanish homepage
├── productos.html             # Spanish products page
├── recetario.html            # Spanish recipes page
├── como-comprar.html         # Spanish how-to-buy page
├── en/                       # English versions
│   ├── index.html
│   ├── productos.html
│   ├── recetario.html
│   └── como-comprar.html
├── css/
│   └── styles.css            # Main stylesheet
├── js/
│   └── script.js             # Mobile menu functionality
├── img/                      # Image assets
│   ├── logo.png
│   ├── favicon.png
│   ├── hero-superfoods.jpg
│   ├── cushuro-preview.jpg
│   ├── tarwi-preview.jpg
│   ├── cushuro-400x400.jpg
│   ├── tarwi-400x400.jpg
│   ├── recipe-cushuro-soup.jpg
│   ├── recipe-tarwi-salad.jpg
│   └── recipe-superfood-smoothie.jpg
└── README.md
```

## 🚀 Deployment to GitHub Pages

### Step 1: Create Repository
1. Create a new repository on GitHub named `tarpuy-foods`
2. Upload all project files to the repository

### Step 2: Enable GitHub Pages
1. Go to repository Settings
2. Navigate to "Pages" section
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

### Step 3: Access Your Site
Your site will be available at: `https://yourusername.github.io/tarpuy-foods`

### Step 4: Custom Domain (Optional)
1. Add a `CNAME` file with your custom domain
2. Configure DNS settings with your domain provider
3. Enable HTTPS in repository settings

## 🛠️ Local Development

### Prerequisites
- Any modern web browser
- Local web server (optional, but recommended)

### Quick Start
1. Download/clone the project files
2. Open `index.html` in your browser
3. For local server (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

## 📱 Features

### Navigation
- Responsive navigation with mobile hamburger menu
- Language toggle (🇪🇸/🇬🇧)
- Smooth scrolling to sections
- Active page indicators

### Content Sections
1. **Hero Section**: Welcome message with CTA
2. **Features**: Why choose Tarpuy Foods
3. **Products**: Detailed nutritional information
4. **Recipes**: Recipe cards with download CTA
5. **Purchase Process**: 3-step buying guide
6. **Contact**: WhatsApp integration

### Technical Features
- Semantic HTML5 structure
- CSS Grid and Flexbox layouts
- Mobile-first responsive design
- Optimized images with lazy loading
- SEO meta tags and structured data
- Accessibility features (ARIA labels, focus states)

## 🎯 SEO Optimization

### Meta Tags
- Title tags (< 60 characters)
- Meta descriptions (< 155 characters)
- Open Graph and Twitter Cards
- Structured data markup

### Performance
- Optimized images
- Minified CSS/JS
- Efficient loading strategies
- Mobile-optimized design

## 🔧 Customization

### Colors
Edit the CSS custom properties in `styles.css`:
```css
:root {
  --primary-green: #2F855A;
  --secondary-cream: #F4EDE4;
  --accent-gold: #F2B705;
}
```

### Content
- Edit HTML files directly for content changes
- Replace placeholder images in `/img/` folder
- Update contact information and WhatsApp links

### Styling
- All styles are in `css/styles.css`
- Well-commented and organized
- Easy to modify colors, fonts, and spacing

## 📞 Contact Integration

### WhatsApp Links
Replace `tu-numero` with actual WhatsApp number:
```html
<a href="https://wa.me/51987654321">Contact via WhatsApp</a>
```

### Email
Update email addresses throughout the site:
```html
<a href="mailto:info@tarpuyfoods.com">info@tarpuyfoods.com</a>
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 Notes

- Replace all placeholder images with actual product photos
- Update WhatsApp numbers and contact information
- Customize content to match your brand
- Test on multiple devices and browsers
- Consider adding Google Analytics for tracking

---

Built with ❤️ for Tarpuy Foods - Bringing Andean nutrition to the world! 🌿
