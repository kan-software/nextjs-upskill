import {IBlogPost, IBlogService} from '@/lib/server/models/blog';
import { blogData } from '@/lib/server/data/blog';
import {IGlobalInstance, initializeService} from "@/lib/server/utils/initializeService";

class BlogService implements IBlogService {
    constructor(private blogs: IBlogPost[]) {}

    getBlogList() {
        return this.blogs.map(post => {
            return {
                postId: post.postId,
                title: post.title,
                slug: post.slug,
                author: post.author,
            }
        });
    }

    getSingeBlog(slug: string) {
        const blogPost = this.blogs.find(post => post.slug === slug);

        if(!blogPost) {throw new Error('Blog post not found')}

        return blogPost;
    }
}


let globalBlog = global as unknown as IGlobalInstance<BlogService>;

const blog = initializeService(BlogService, blogData, globalBlog, 'blog');


export default blog;