# Fuse.js

## Overview
Powerful, zero-dependency fuzzy-search library for client-side search.

## Install
- npm: `npm install fuse.js`

## Usage (Basic)
```html
<input id="q" placeholder="Search...">
<ul id="results"></ul>
<script type="module">
  import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.esm.min.js';
  const items = [{ title: 'Hello World' }, { title: 'Static Sites' }];
  const fuse = new Fuse(items, { keys: ['title'] });
  const q = document.getElementById('q');
  const out = document.getElementById('results');
  q.addEventListener('input', () => {
    const res = fuse.search(q.value).map(r => `<li>${r.item.title}</li>`).join('');
    out.innerHTML = res;
  });
</script>
```

## 11ty Tips
- Pre-generate a JSON index and fetch it on the client for offline search.

## References
- https://fusejs.io/
