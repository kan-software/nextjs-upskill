import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { blogData } from '@/lib/server/data/blog';
import { IBlogPost } from '@/lib/server/models/blog';
import {
  BlogGrid,
  BlogGridItem,
} from '@/lib/client/components/blog/Blog.styles';

export const getStaticProps: GetStaticProps<{
  blogPosts: IBlogPost[];
}> = async () => {
  // TODO: implement real data fetching
  return {
    props: {
      blogPosts: blogData,
    },
  };
};

export default function Blog({
  blogPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
