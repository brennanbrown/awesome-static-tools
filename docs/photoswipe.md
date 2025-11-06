# PhotoSwipe

## Overview
Zero-dependency, touch-friendly image gallery/lightbox for mobile and desktop.

## Install
- npm: `npm install photoswipe`

## CDN (ESM)
```html
<link rel="stylesheet" href="https://unpkg.com/photoswipe@5/dist/photoswipe.css">
<script type="module">
  import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe@5/dist/photoswipe-lightbox.esm.min.js';
  const lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery',
    children: 'a',
    pswpModule: () => import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.min.js')
  });
  lightbox.init();
</script>
```

## Markup
```html
<div id="gallery">
  <a href="large.jpg" data-pswp-width="1600" data-pswp-height="1067">
    <img src="thumb.jpg" alt="Sample"/>
  </a>
</div>
```

## References
- https://photoswipe.com/
- https://github.com/photoswipe/photoswipe
