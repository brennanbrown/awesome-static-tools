# Scroll-Out

## Overview
Zero-dependency utility that exposes scroll position and direction as CSS variables.

## Install
- npm: `npm install scroll-out`

## CDN
```html
<script src="https://unpkg.com/scroll-out/dist/scroll-out.min.js"></script>
```

## Usage
```html
<div data-scroll>
  Animate me using CSS vars like --scroll-percent
</div>
<script>
  ScrollOut();
</script>
```

## CSS Example
```css
[data-scroll] {
  transform: translateY(calc(var(--scroll-percent, 0) * 1px));
}
```

## References
- https://github.com/scroll-out/scroll-out
