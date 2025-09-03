export interface BlogPost {
	id: string;
	title: string;
	filename: string;
}

export interface BlogIndex {
	posts: BlogPost[];
}

export interface BlogPostContent {
	title: string;
	content: any; // YAML content can be any structure
}
