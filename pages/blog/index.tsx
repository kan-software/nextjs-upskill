import { GetStaticProps } from 'next';
import Typography from '@mui/material/Typography';
import {
  BlogGrid,
  BlogGridItem,
  BlogPostItem,
} from '@/lib/client/components/blog/Blog.styles';
import blogService from '@/lib/server/services/blog';

export type BlogProps = {
  blogPosts: ReturnType<typeof blogService.getBlogList>;
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const blogPosts = blogService.getBlogList();
  return {
    props: {
      blogPosts,
    },
  };
};

export default function Blog({ blogPosts }: BlogProps) {
  return (
    <BlogGrid>
      {blogPosts.map((blogPost) => (
        <BlogGridItem
          key={blogPost.slug}
          href={`blog/${blogPost.slug}`}
        >
          <BlogPostItem>
            <Typography variant="h6">{blogPost.title}</Typography>
            <Typography>author: {blogPost.author.name}</Typography>
          </BlogPostItem>
        </BlogGridItem>
      ))}
    </BlogGrid>
  );
}
