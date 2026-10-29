# Sahil Gupta - Portfolio Website

A modern, responsive portfolio website built with React and Vite showcasing Sahil Gupta's full-stack development projects.

## 🚀 Features

- **Modern Design**: Dark theme with smooth animations and gradient effects
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Project Showcase**: Displays BiteBox and OffShirt projects with live demos
- **Interactive**: Smooth scroll animations, hover effects, and modal dialogs
- **SEO Optimized**: Meta tags for search engines and social media sharing
- **Performance**: Built with Vite for optimal loading speed

## 📦 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS variables and animations
- **Intersection Observer API** - Scroll animations

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect it's a Vite project
5. Click "Deploy"

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify

### Deploy to GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Install gh-pages:
```bash
npm install -D gh-pages
```

3. Add deploy script to package.json:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

4. Deploy:
```bash
npm run deploy
```

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and resources
│   ├── App.jsx         # Main component
│   ├── App.css         # Styles
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
└── README.md          # This file
```

## 🎨 Customization

### Update Projects

Edit the `projects` array in `src/App.jsx`:

```javascript
const projects = [
  {
    id: 0,
    title: 'Your Project',
    description: 'Project description',
    tags: ['React', 'Node.js'],
    gradient: 'rgba(52,211,153,.45)',
    accent: '#34D399',
    details: 'Detailed description',
    features: ['Feature 1', 'Feature 2'],
    github: 'https://github.com/yourusername/repo',
    liveDemo: 'https://your-demo-url.com',
    image: 'path/to/image.png'
  }
]
```

### Update Colors

Edit CSS variables in `src/App.css`:

```css
:root {
  --bg: #08090D;
  --surface: #0E1017;
  --cyan: #67E8F9;
  --violet: #8B7BFF;
  /* ... */
}
```

### Update Contact Info

Edit contact details in `src/App.jsx`:
- Email: `sahilgupta1008@gmail.com`
- Phone: `+91 72766 33710`
- GitHub: `https://github.com/sahil1009`
- LinkedIn: Your LinkedIn URL

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sahil Gupta**
- GitHub: [@sahil1009](https://github.com/sahil1009)
- Email: sahilgupta1008@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio templates
- Built with [Vite](https://vitejs.dev/)
- Icons and fonts from Google Fonts

---

**Note**: This portfolio showcases real projects including:
- **BiteBox** - Food delivery platform (https://bite-box-six.vercel.app)
- **OffShirt** - Fashion brand website (https://off-shirt.vercel.app)
