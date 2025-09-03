import yaml from 'js-yaml';
import type { BlogIndex, BlogPostContent } from './types';

// GitHub repository configuration
const GITHUB_USER = 'its-colby'; // Replace with your GitHub username
const GITHUB_REPO = 'blog'; // Replace with your blog repository name
const GITHUB_BRANCH = 'main'; // or 'master' depending on your default branch

const BASE_URL = `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_REPO}/${GITHUB_BRANCH}`;

/**
 * Fetch the blog index from GitHub
 */
export async function fetchBlogIndex(): Promise<BlogIndex> {
	try {
		const response = await fetch(`${BASE_URL}/index.yaml`);
		if (!response.ok) {
			throw new Error(`Failed to fetch blog index: ${response.status}`);
		}
		const yamlText = await response.text();
		const index = yaml.load(yamlText) as BlogIndex;
		return index;
	} catch (error) {
		console.error('Error fetching blog index:', error);
		// Return empty index on error
		return { posts: [] };
	}
}

/**
 * Fetch a specific blog post content from GitHub
 */
export async function fetchBlogPost(filename: string): Promise<BlogPostContent | null> {
	try {
		const response = await fetch(`${BASE_URL}/posts/${filename}`);
		if (!response.ok) {
			throw new Error(`Failed to fetch blog post: ${response.status}`);
		}
		const yamlText = await response.text();
		const content = yaml.load(yamlText) as any;
		
		// Extract title from YAML content, fallback to filename
		const title = content.title || filename.replace('.yaml', '').replace(/[-_]/g, ' ');
		
		return {
			title,
			content
		};
	} catch (error) {
		console.error(`Error fetching blog post ${filename}:`, error);
		return null;
	}
}
