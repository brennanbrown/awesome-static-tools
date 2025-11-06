# Web Share API

## Overview
Native sharing using `navigator.share`.

## Usage
```js
if (navigator.share) {
  await navigator.share({ title: 'Article', url: location.href });
}
```

## Fallback
- Provide traditional share links for unsupported browsers.

## References
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API
