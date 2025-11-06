# Eleventy Image

## Overview
Official Eleventy plugin for build-time image optimization and responsive output (WebP/AVIF/multiple sizes).

## Install
```bash
npm install @11ty/eleventy-img
```

## Basic Usage
```js
// .eleventy.js
const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  eleventyConfig.addNunjucksAsyncShortcode("image", async (src, alt, sizes = "100vw") => {
    let metadata = await Image(src, {
      widths: [320, 640, 960, 1280, 1920],
      formats: ["webp", "avif", "jpeg"],
      urlPath: "/img/",
      outputDir: "_site/img/"
    });
    let imageAttributes = { alt, sizes, loading: "lazy", decoding: "async" };
    return Image.generateHTML(metadata, imageAttributes);
  });
};
```

## Template
```njk
{% raw %}{% image "/path/to/hero.jpg", "Hero image" %}{% endraw %}
```

## References
- https://www.11ty.dev/docs/plugins/image/
- https://github.com/11ty/eleventy-img
