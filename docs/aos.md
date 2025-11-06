# AOS (Animate On Scroll)

## Overview
CSS-driven scroll animations.

## Install
- npm: `npm install aos`

## CDN
```html
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```

## Usage
```html
<div data-aos="fade-up">Content</div>
<script>AOS.init({ once: true });</script>
```

## 11ty Tips
- Add `data-aos` in templates; init globally.

## Performance
- Disable on prefers-reduced-motion if desired.

## References
- https://michalsnik.github.io/aos/
