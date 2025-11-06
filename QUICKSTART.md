# 🚀 Quick Start Guide

Want to see these features in action right away? Here's how!

## View the Demos (with Eleventy)

Run the site locally and explore all demos:

```bash
npm install
npm run serve
# Open http://localhost:8080/
```

Key routes:
- `/` – Examples index
- `/demo/` – Combined demo (AOS, medium-zoom, dark mode)
- `/demos/*` – Individual feature demos (see README)

## Use in Your Project

### 1. Copy What You Need

Browse the examples and docs to find features you want, then copy the relevant code snippets.

### 2. Install via NPM (Recommended for Production)

```bash
# Install the features you want
npm install littlefoot tippy.js aos medium-zoom prismjs reading-time

# Or install them all at once
npm install littlefoot tippy.js aos medium-zoom prismjs reading-time mermaid rough-notation mark.js
```

### 3. Use CDN Links (Quick Prototyping)

Just include the CDN links in your HTML:

```html
<!-- Littlefoot for footnotes -->
<link rel="stylesheet" href="https://unpkg.com/littlefoot/dist/littlefoot.css">
<script src="https://unpkg.com/littlefoot/dist/littlefoot.js"></script>

<!-- AOS for animations -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<!-- Medium Zoom for images -->
<script type="module">
  import mediumZoom from 'https://unpkg.com/medium-zoom@latest/dist/medium-zoom.esm.js';
  mediumZoom('[data-zoomable]');
</script>
```

## For 11ty Users

Check out [`docs/11ty-integration.md`](./docs/11ty-integration.md) for:
- Complete configuration examples
- Custom shortcodes
- Filter implementations
- Full working templates

## Next Steps

1. **Explore** the categories in the main README
2. **Read** the detailed guides in the `docs/` folder
3. **Customize** the examples to match your design
4. **Star** the repo if you find it useful! ⭐

## Need Help?

- 📖 Read the [full README](./README.md)
- 🤝 Read [CONTRIBUTING.md](./CONTRIBUTING.md) to add your own features
- 💬 Open an issue if you're stuck

---

**Happy building! 🎨**