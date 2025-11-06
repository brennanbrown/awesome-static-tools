# Alpine.js

## Overview
Minimal JavaScript framework for composing behavior directly in your markup.

## Install
- npm: `npm install alpinejs`

## CDN
```html
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

## Usage
```html
<div x-data="{ open: false }">
  <button @click="open = !open">Toggle</button>
  <p x-show="open">Hello Alpine!</p>
</div>
```

## 11ty Tips
- Great for progressive enhancement on static pages.

## References
- https://github.com/alpinejs/alpine
