# Littlefoot.js

## Overview
Converts footnotes to interactive popovers.

## Install
- npm: `npm install littlefoot`

## CDN
```html
<link rel="stylesheet" href="https://unpkg.com/littlefoot/dist/littlefoot.css">
<script src="https://unpkg.com/littlefoot/dist/littlefoot.js"></script>
```

## Usage
```html
<script>
  littlefoot({ anchorPattern: /fnref[:-]\d+/ });
</script>
```

## 11ty Tips
- Use markdown-it-footnote; run Littlefoot after render.

## Accessibility
- Test keyboard navigation of popovers.

## Performance
- Initialize once after page load.

## References
- https://littlefoot.js.org/
- https://github.com/goblindegook/littlefoot
