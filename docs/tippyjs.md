# Tippy.js

## Overview
Highly customizable tooltips and popovers.

## Install
- npm: `npm install tippy.js`

## CDN
```html
<link rel="stylesheet" href="https://unpkg.com/tippy.js@6/themes/light.css">
<script src="https://unpkg.com/@popperjs/core@2"></script>
<script src="https://unpkg.com/tippy.js@6"></script>
```

## Usage
```html
<button id="btn" title="Tooltip">Hover</button>
<script>
  tippy('#btn', { content: "I'm a tooltip!", theme: 'light' });
</script>
```

## 11ty Tips
- Use data attributes for progressive enhancement.

## Accessibility
- Prefer `aria-label` for icon-only buttons.

## Performance
- Use singleton for many tooltips.

## References
- https://atomiks.github.io/tippyjs/
