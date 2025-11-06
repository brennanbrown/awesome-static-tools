# Reading Progress

## Overview
Visual indicator of reading progress.

## Vanilla Implementation
```html
<div id="progress" style="position:fixed;top:0;left:0;height:4px;background:#09f;width:0"></div>
<script>
  const bar = document.getElementById('progress');
  const onScroll = () => {
    const s = window.scrollY;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (s / h * 100) + '%';
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
</script>
```

## Libraries
- scrollProgress.js: https://github.com/jeremenichelli/scrollProgress

## Accessibility
- Respect `prefers-reduced-motion`.
