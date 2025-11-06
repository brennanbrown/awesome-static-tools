# Rough Notation

## Overview
Hand-drawn style annotations with a sketchy, human feel.

## Install
- npm: `npm install rough-notation`

## CDN
```html
<script src="https://unpkg.com/rough-notation/lib/rough-notation.iife.js"></script>
```

## Usage
```html
<span id="note">Highlight me</span>
<script>
  const { annotate } = RoughNotation;
  const el = document.getElementById('note');
  const a = annotate(el, { type: 'highlight', color: 'yellow' });
  a.show();
</script>
```

## 11ty Tips
- Wrap annotation markup in shortcodes for reuse.

## Accessibility
- Ensure annotations don’t obscure text contrast.

## Performance
- Initialize only visible elements (IntersectionObserver).

## References
- https://roughnotation.com/
- https://github.com/rough-stuff/rough-notation
