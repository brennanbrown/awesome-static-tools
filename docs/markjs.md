# Mark.js

## Overview
Programmatic text highlighting and search term marking.

## Install
- npm: `npm install mark.js`

## CDN
```html
<script src="https://cdn.jsdelivr.net/npm/mark.js/dist/mark.min.js"></script>
```

## Usage
```html
<article id="content">This is a long text...</article>
<script>
  const instance = new Mark(document.getElementById('content'));
  instance.mark('text');
</script>
```

## 11ty Tips
- Use a search input and hydrate on client.

## Accessibility
- Provide a "clear highlights" control.

## Performance
- Debounce searches for large documents.

## References
- https://markjs.io/
- https://github.com/julkue/mark.js
