# Blog Setup Instructions

Your blog system is now ready! Here's how to set it up:

## 1. Create a GitHub Repository

Create a public GitHub repository for your blog content (e.g., `your-username/blog-content`).

## 2. Update Configuration

Edit `/src/lib/blog/api.ts` and update these variables:
```typescript
const GITHUB_USER = 'your-github-username'; // Replace with your actual GitHub username
const GITHUB_REPO = 'your-blog-repo'; // Replace with your blog repository name
const GITHUB_BRANCH = 'main'; // or 'master' depending on your default branch
```

## 3. Repository Structure

Your GitHub repository should have this structure:
```
your-blog-repo/
├── index.yaml          # Blog index file
└── posts/             # Directory for blog posts
    ├── first-post.yaml
    ├── second-post.yaml
    └── ...
```

## 4. Example Files

### `index.yaml` (Root of your repository)
```yaml
posts:
  - id: "first-post"
    title: "My First Blog Post"
    filename: "first-post.yaml"
  - id: "second-post" 
    title: "Another Post"
    filename: "second-post.yaml"
```

### `posts/first-post.yaml`
```yaml
title: "My First Blog Post"
author: "Your Name"
summary: "This is my first blog post using YAML"
topics:
  - technology
  - learning
content:
  introduction: "Welcome to my blog!"
  main_points:
    - "YAML is easy to read"
    - "GitHub hosting is free"
    - "Simple content management"
  conclusion: "This system works great for simple blogs"
```

### `posts/second-post.yaml`
```yaml
title: "Another Post"
author: "Your Name"
category: "tutorial"
tags:
  - yaml
  - blogging
  - github
steps:
  - step: 1
    description: "Create your YAML file"
  - step: 2
    description: "Add it to the posts directory"
  - step: 3
    description: "Update the index.yaml file"
resources:
  - name: "YAML Documentation"
    url: "https://yaml.org/"
  - name: "GitHub Pages"
    url: "https://pages.github.com/"
```

## 5. Adding New Posts

To add a new blog post:

1. Create a new YAML file in the `posts/` directory
2. Add an entry to the `index.yaml` file with:
   - `id`: URL-friendly identifier (used in the URL)
   - `title`: Display title for the post
   - `filename`: The actual filename in the posts directory

## 6. YAML Structure

Your YAML files can contain any structure you want. The system will display the entire YAML content in a readable format. Common fields you might include:

- `title`: Post title (will be used as the page title)
- `author`: Author name
- `date`: Publication date
- `tags`/`categories`: Organization
- `summary`: Brief description
- `content`: Main content (can be nested objects/arrays)

The system is flexible - use whatever YAML structure makes sense for your content!
