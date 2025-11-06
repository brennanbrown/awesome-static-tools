# Reading Time

## Overview
Display estimated reading time using popular packages.

## Install
- npm: `npm install reading-time`

## Usage
```js
import readingTime from 'reading-time';
const stats = readingTime(text);
// stats.text -> e.g. "4 min read"
```

## 11ty Tips
- Add an Eleventy filter to compute `readingTime(content)`.
