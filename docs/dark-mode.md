# Dark Mode

## Overview
CSS + localStorage theme toggle.

## Example
```js
const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
const theme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
document.documentElement.dataset.theme = theme;
```

## References
- https://whitep4nth3r.com/blog/best-light-dark-mode-theme-toggle-javascript/
- https://github.com/GoogleChromeLabs/dark-mode-toggle
