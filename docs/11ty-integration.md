# 11ty Integration Guide

This guide shows you how to integrate the features from this library into your [Eleventy (11ty)](https://www.11ty.dev/) project.

---

## 📚 Table of Contents

- [Prerequisites](#prerequisites)
- [Basic Setup](#basic-setup)
- [Syntax Highlighting](#syntax-highlighting)
- [Reading Time](#reading-time)
- [Footnotes](#footnotes)
- [Reading Progress Bar](#reading-progress-bar)
- [Dark Mode](#dark-mode)
- [Text Annotations](#text-annotations)
- [Image Zoom](#image-zoom)
- [Diagrams](#diagrams)
- [Full Example](#full-example)

---

## Prerequisites

- 11ty installed: `npm install @11ty/eleventy`
- Basic understanding of 11ty configuration
- Node.js 16+

---

## Basic Setup

### Project Structure

```
your-11ty-site/
├── _includes/
│   ├── layouts/
│   │   └── base.njk
│   └── components/
├── _data/
├── src/
│   ├── posts/
│   └── assets/
│       ├── css/
│       └── js/
├── .eleventy.js
└── package.json
```

### Basic `.eleventy.js` Configuration

```javascript
module.exports = function(eleventyConfig) {
  // Copy assets
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Watch for changes
  eleventyConfig.addWatchTarget("src/assets/");
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
```

---

## Syntax Highlighting

### Option 1: Official Plugin (Recommended)

```bash
npm install @11ty/eleventy-plugin-syntaxhighlight
```

**`.eleventy.js`:**
```javascript
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight, {
    // Options
    init: function({ Prism }) {
      // Custom language definitions
    }
  });
};
```

**In your layout:**
```html
<!-- Choose a Prism theme -->
<link rel="stylesheet" href="/assets/css/prism-tomorrow.css">
```

### Option 2: Custom with Prism.js

```bash
npm install prismjs
```

**`_includes/layouts/base.njk`:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ title }}</title>
  
  <!-- Prism CSS -->
  <link rel="stylesheet" href="https://unpkg.com/prismjs/themes/prism-tomorrow.css">
</head>
<body>
  {{ content | safe }}
  
  <!-- Prism JS -->
  <script src="https://unpkg.com/prismjs/components/prism-core.min.js"></script>
  <script src="https://unpkg.com/prismjs/plugins/autoloader/prism-autoloader.min.js"></script>
</body>
</html>
```

---

## Reading Time

### Create a Filter

**`.eleventy.js`:**
```javascript
const readingTime = require('reading-time');

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("readingTime", (content) => {
    const stats = readingTime(content);
    return stats.text;
  });
  
  eleventyConfig.addFilter("readingTimeMin", (content) => {
    const stats = readingTime(content);
    return stats.minutes;
  });
};
```

### Use in Templates

**`_includes/layouts/post.njk`:**
```html
{% extends "layouts/base.njk" %}

{% block content %}
  <article>
    <header>
      <h1>{{ title }}</h1>
      <p class="meta">
        <time datetime="{{ date }}">{{ date | dateDisplay }}</time>
        • {{ content | readingTime }}
      </p>
    </header>
    
    <div class="post-content">
      {{ content | safe }}
    </div>
  </article>
{% endblock %}
```

---

## Footnotes

### Using markdown-it-footnote

```bash
npm install markdown-it-footnote
```

**`.eleventy.js`:**
```javascript
const markdownIt = require('markdown-it');
const markdownItFootnote = require('markdown-it-footnote');

module.exports = function(eleventyConfig) {
  const markdownLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItFootnote);
  
  eleventyConfig.setLibrary('md', markdownLib);
};
```

### Add Littlefoot.js for Interactive Footnotes

**`_includes/layouts/base.njk`:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- ... -->
  <link rel="stylesheet" href="https://unpkg.com/littlefoot/dist/littlefoot.css">
</head>
<body>
  {{ content | safe }}
  
  <script src="https://unpkg.com/littlefoot/dist/littlefoot.js"></script>
  <script>
    littlefoot.littlefoot();
  </script>
</body>
</html>
```

**In your Markdown:**
```markdown
Here's some text with a footnote[^1].

[^1]: This is the footnote content.
```

---

## Reading Progress Bar

### Create a Custom Script

**`src/assets/js/reading-progress.js`:**
```javascript
(function() {
  'use strict';
  
  // Create progress bar element
  const progressBar = document.createElement('div');
  progressBar.className = 'reading-progress';
  progressBar.innerHTML = '<div class="reading-progress-bar"></div>';
  document.body.prepend(progressBar);
  
  const bar = progressBar.querySelector('.reading-progress-bar');
  
  function updateProgress() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const progress = (scrollTop / documentHeight) * 100;
    
    bar.style.width = Math.min(progress, 100) + '%';
  }
  
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
})();
```

**`src/assets/css/reading-progress.css`:**
```css
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.reading-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  width: 0%;
  transition: width 100ms ease-out;
}
```

**Include in your layout:**
```html
<link rel="stylesheet" href="/assets/css/reading-progress.css">
<script src="/assets/js/reading-progress.js" defer></script>
```

---

## Dark Mode

### Using CSS Custom Properties

**`src/assets/css/theme.css`:**
```css
:root {
  --bg-color: #ffffff;
  --text-color: #1a1a1a;
  --accent-color: #667eea;
}

[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: #e0e0e0;
  --accent-color: #8b9dc3;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

### Add Toggle Script

**`src/assets/js/theme-toggle.js`:**
```javascript
(function() {
  const html = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');
  
  // Get saved theme or default to light
  const currentTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', currentTheme);
  
  if (toggle) {
    toggle.addEventListener('click', () => {
      const theme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    });
  }
})();
```

**In your layout:**
```html
<button data-theme-toggle aria-label="Toggle dark mode">
  <span class="theme-icon">🌙</span>
</button>
<script src="/assets/js/theme-toggle.js"></script>
```

---

## Text Annotations

### Using Rough Notation with Shortcodes

**`.eleventy.js`:**
```javascript
module.exports = function(eleventyConfig) {
  eleventyConfig.addPairedShortcode("highlight", function(content, type = "highlight", color = "yellow") {
    return `<span class="rough-notation" data-type="${type}" data-color="${color}">${content}</span>`;
  });
};
```

**In Markdown:**
```markdown
{% highlight "highlight", "yellow" %}This text will be highlighted{% endhighlight %}

{% highlight "underline", "red" %}This text will be underlined{% endhighlight %}
```

**Add Rough Notation JS:**
```html
<script type="module">
  import { annotate, annotationGroup } from 'https://unpkg.com/rough-notation?module';
  
  const elements = document.querySelectorAll('.rough-notation');
  const annotations = Array.from(elements).map(el => {
    return annotate(el, {
      type: el.dataset.type,
      color: el.dataset.color
    });
  });
  
  const group = annotationGroup(annotations);
  group.show();
</script>
```

---

## Image Zoom

### Using medium-zoom

**`src/assets/js/image-zoom.js`:**
```javascript
import mediumZoom from 'https://unpkg.com/medium-zoom@latest/dist/medium-zoom.esm.js';

document.addEventListener('DOMContentLoaded', () => {
  mediumZoom('[data-zoomable]', {
    margin: 24,
    background: 'rgba(0, 0, 0, 0.9)',
    scrollOffset: 0
  });
});
```

### Create Image Shortcode

**`.eleventy.js`:**
```javascript
const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode("image", async function(src, alt, sizes = "100vw", zoomable = false) {
    const metadata = await Image(src, {
      widths: [300, 600, 1200],
      formats: ["webp", "jpeg"],
      outputDir: "./_site/img/"
    });
    
    const imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
      ...(zoomable && { 'data-zoomable': '' })
    };
    
    return Image.generateHTML(metadata, imageAttributes);
  });
};
```

**Usage:**
```markdown
{% image "src/assets/images/photo.jpg", "A beautiful photo", "(min-width: 768px) 50vw, 100vw", true %}
```

---

## Diagrams

### Using Mermaid.js

**`_includes/layouts/base.njk`:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- ... -->
</head>
<body>
  {{ content | safe }}
  
  <script type="module">
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
    mermaid.initialize({ startOnLoad: true });
  </script>
</body>
</html>
```

### Custom Shortcode for Diagrams

**`.eleventy.js`:**
```javascript
module.exports = function(eleventyConfig) {
  eleventyConfig.addPairedShortcode("mermaid", function(content) {
    return `<pre class="mermaid">${content}</pre>`;
  });
};
```

**Usage in Markdown:**
```markdown
{% mermaid %}
graph TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> B
{% endmermaid %}
```

---

## Full Example

### Complete `.eleventy.js`

```javascript
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require('markdown-it');
const markdownItFootnote = require('markdown-it-footnote');
const markdownItAnchor = require('markdown-it-anchor');
const readingTime = require('reading-time');

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);
  
  // Markdown
  const markdownLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  })
  .use(markdownItFootnote)
  .use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.headerLink()
  });
  
  eleventyConfig.setLibrary('md', markdownLib);
  
  // Filters
  eleventyConfig.addFilter("readingTime", (content) => {
    return readingTime(content).text;
  });
  
  eleventyConfig.addFilter("dateDisplay", (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });
  
  // Shortcodes
  eleventyConfig.addPairedShortcode("highlight", function(content, type, color) {
    return `<span class="rough-notation" data-type="${type}" data-color="${color}">${content}</span>`;
  });
  
  eleventyConfig.addPairedShortcode("mermaid", function(content) {
    return `<pre class="mermaid">${content}</pre>`;
  });
  
  // Passthrough copy
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");
  
  // Watch targets
  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/js/");
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
```

### Complete Base Layout

**`_includes/layouts/base.njk`:**
```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ title }} - {{ site.title }}</title>
  
  <!-- Styles -->
  <link rel="stylesheet" href="/assets/css/main.css">
  <link rel="stylesheet" href="/assets/css/theme.css">
  <link rel="stylesheet" href="/assets/css/reading-progress.css">
  <link rel="stylesheet" href="https://unpkg.com/littlefoot/dist/littlefoot.css">
  <link rel="stylesheet" href="https://unpkg.com/prismjs/themes/prism-tomorrow.css">
  
  {% block head %}{% endblock %}
</head>
<body>
  <header class="site-header">
    <nav>
      <a href="/" class="logo">{{ site.title }}</a>
      <button data-theme-toggle aria-label="Toggle dark mode">
        🌙
      </button>
    </nav>
  </header>
  
  <main>
    {% block content %}
      {{ content | safe }}
    {% endblock %}
  </main>
  
  <footer class="site-footer">
    <p>&copy; {{ "now" | date: "%Y" }} {{ site.author }}</p>
  </footer>
  
  <!-- Scripts -->
  <script src="/assets/js/theme-toggle.js"></script>
  <script src="/assets/js/reading-progress.js" defer></script>
  <script src="https://unpkg.com/littlefoot/dist/littlefoot.js"></script>
  <script>littlefoot.littlefoot();</script>
  
  <script type="module">
    import { annotate, annotationGroup } from 'https://unpkg.com/rough-notation?module';
    import mediumZoom from 'https://unpkg.com/medium-zoom@latest/dist/medium-zoom.esm.js';
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
    
    // Rough Notation
    const elements = document.querySelectorAll('.rough-notation');
    if (elements.length > 0) {
      const annotations = Array.from(elements).map(el => {
        return annotate(el, {
          type: el.dataset.type,
          color: el.dataset.color
        });
      });
      annotationGroup(annotations).show();
    }
    
    // Medium Zoom
    mediumZoom('[data-zoomable]');
    
    // Mermaid
    mermaid.initialize({ startOnLoad: true });
  </script>
  
  {% block scripts %}{% endblock %}
</body>
</html>
```

---

## Additional Resources

- **11ty Documentation:** https://www.11ty.dev/docs/
- **11ty Rocks:** https://11ty.rocks/
- **Awesome Eleventy:** https://github.com/pdehaan/awesome-eleventy
- **11ty Discord:** https://www.11ty.dev/blog/discord/

---

**Need help?** Open an issue in this repository!