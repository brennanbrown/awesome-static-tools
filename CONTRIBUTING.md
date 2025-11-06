# Contributing to JAMstack Features Library

Thank you for your interest in contributing! 🎉

This document provides guidelines for contributing to this repository.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
  - [Adding New Libraries](#adding-new-libraries)
  - [Improving Documentation](#improving-documentation)
  - [Contributing Examples](#contributing-examples)
- [Development Setup](#development-setup)
- [Style Guidelines](#style-guidelines)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

---

## Code of Conduct

This project adheres to a Code of Conduct. By participating, you are expected to uphold this code. Please be respectful and considerate to others.

---

## How Can I Contribute?

### Reporting Bugs

If you find a bug in the documentation, examples, or broken links:

1. **Search existing issues** to avoid duplicates
2. **Open a new issue** with:
   - Clear, descriptive title
   - Detailed description of the issue
   - Steps to reproduce (if applicable)
   - Expected vs. actual behavior
   - Screenshots (if helpful)
   - Browser/environment information

### Suggesting Features

We love new ideas! To suggest a library or feature:

1. **Check if it already exists** in the repository
2. **Open a discussion or issue** describing:
   - The library/feature name
   - Why it's useful for JAMstack/personal sites
   - Link to official documentation
   - Example use cases
   - Browser support and performance characteristics

**Criteria for inclusion:**
- ✅ Lightweight (<50kb)
- ✅ Well-documented
- ✅ Actively maintained (activity in last 6 months)
- ✅ Works without frameworks (vanilla JS friendly)
- ✅ Good browser support
- ✅ Relevant to personal sites/blogs/documentation

### Adding New Libraries

To add a new library to the collection:

1. Fork the repository
2. Create a new branch: `git checkout -b add-library-name`
3. Add the library to the appropriate section in `README.md`
4. Add additional links under the "Additional Resources" section of `README.md`
5. (Optional) Create a guide in `docs/library-name.md`
6. (Optional) Add an example in `examples/`
7. Submit a pull request

**Template for README.md:**
```markdown
#### Library Name
Brief description (1-2 sentences).

- **Size:** Xkb gzipped
- **Website:** https://example.com/
- **GitHub:** https://github.com/author/library
- **npm:** `npm install library-name`
- **CDN:** `https://unpkg.com/library-name`
- **Features:** Key feature 1, feature 2, feature 3
- **Integration:** [View Guide](./docs/library-name.md)

\```javascript
// Simple example
import library from 'library-name';
library.doSomething();
\```
```

### Improving Documentation

Documentation improvements are always welcome!

- Fix typos or grammatical errors
- Clarify confusing sections
- Add missing information
- Improve code examples
- Add visual examples or screenshots

### Contributing Examples

We love working examples! To contribute:

1. Create a folder in `examples/` with a descriptive name
2. Include:
   - `README.md` - What the example demonstrates
   - `index.html` - Working HTML file
   - `style.css` - Styles (if needed)
   - `script.js` - JavaScript (if separate)
   - `package.json` - Dependencies (if applicable)
3. Keep it simple and focused
4. Add comments explaining key parts
5. Test in multiple browsers

---

## Development Setup

### Prerequisites

- Node.js 16+ and npm/yarn
- Git
- A code editor (VS Code recommended)

### Local Setup

```bash
# Clone your fork
git clone https://github.com/brennanbrown/awesome-static-tools.git
cd awesome-static-tools

# Install dependencies (if any)
npm install

# Create a new branch
git checkout -b my-contribution

# Make your changes...

# Test locally
# (Open examples in browser, check links, etc.)

# Commit and push
git add .
git commit -m "Add: description of changes"
git push origin my-contribution
```

---

## Style Guidelines

### Markdown

- Use ATX-style headers (`#` not `===`)
- Add blank lines around headers
- Use fenced code blocks with language specified
- Use relative links for internal references
- Keep lines reasonably short (<100 characters when possible)

### Code Examples

**JavaScript:**
```javascript
// Use modern ES6+ syntax
const example = () => {
  // Add comments for clarity
  return 'value';
};
```

**HTML:**
```html
<!-- Use semantic HTML -->
<!-- Keep indentation consistent (2 spaces) -->
<article>
  <h1>Title</h1>
  <p>Content</p>
</article>
```

**CSS:**
```css
/* Use clear, descriptive selectors */
/* Group related properties */
.example {
  /* Layout */
  display: flex;
  
  /* Appearance */
  color: var(--text-color);
  background: var(--bg-color);
}
```

### File Naming

- Use kebab-case: `my-file-name.md`
- Be descriptive: `reading-progress-bar.md` not `rpb.md`
- Lowercase only

---

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <description>

[optional body]
```

**Types:**
- `feat:` - New feature or library
- `fix:` - Bug fix
- `docs:` - Documentation only
- `style:` - Formatting, missing semicolons, etc.
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

**Examples:**
```
feat: add Tippy.js to interactive elements section

docs: improve 11ty integration guide

fix: correct broken link in README resources section

chore: update all npm package versions
```

---

## Pull Request Process

1. **Update documentation** - Ensure README.md reflects your changes (including the Resources section if applicable)
2. **Test your changes** - Verify links work, code runs, examples function
3. **Write a clear PR description**:
   - What does this PR do?
   - Why is it needed?
   - How has it been tested?
4. **Link related issues** - Use "Fixes #123" or "Closes #123"
5. **Respond to feedback** - Address review comments promptly
6. **Keep PRs focused** - One feature/fix per PR when possible

### PR Template

```markdown
## Description
<!-- Brief summary of changes -->

## Type of Change
- [ ] New library/feature
- [ ] Bug fix
- [ ] Documentation update
- [ ] Example/demo
- [ ] Other (describe)

## Checklist
- [ ] I have tested these changes
- [ ] Documentation has been updated
- [ ] Links are working
- [ ] Code follows style guidelines
- [ ] Commit messages follow conventions

## Screenshots (if applicable)
<!-- Add screenshots or GIFs showing the changes -->

## Additional Context
<!-- Any other information reviewers should know -->
```

---

## Questions?

- **Open a discussion** for general questions
- **Join our community** (if you have a Discord/forum/etc.)
- **Check existing issues** for similar questions

---

## Recognition

Contributors will be:
- Listed in the project README
- Credited in release notes
- Thanked in commits/PRs
- Given our eternal gratitude! 🙏

---

Thank you for contributing to JAMstack Features Library! 🎉

Every contribution, no matter how small, makes this resource better for everyone.