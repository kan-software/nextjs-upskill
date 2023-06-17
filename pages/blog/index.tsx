import { GetStaticProps } from 'next';
import Link from 'next/link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  BlogGrid,
  BlogGridItem,
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
        <BlogGridItem key={blogPost.postId}>
          <Link href={`blog/${blogPost.postId}`}>
            <Paper elevation={3}>
              <Box
                py={1}
                px={2}
                minHeight={150}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Typography variant="h6">{blogPost.title}</Typography>
                <Typography>author: {blogPost.author.name}</Typography>
              </Box>
            </Paper>
          </Link>
        </BlogGridItem>
      ))}
    </BlogGrid>
  );
}
