export interface IBlogPost {
    postId: number;
    title: string;
    slug: string;
    content: string;
    createdAt: string;
    author: {
        name: string;
    }
}

export interface IBlogService {
    getBlogList(): Partial<IBlogPost>[];
    getSingeBlog(slug: string): IBlogPost;
}