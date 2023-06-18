import { GetStaticPaths, GetStaticProps } from 'next';
import Typography from '@mui/material/Typography';
import blogService from '@/lib/server/services/blog';
import { BlogPostContainer } from '@/lib/client/components/blog/BlogPost.styles';

export type BlogPostProps = {
  blogPost: ReturnType<typeof blogService.getSingeBlog>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogService
    .getBlogList()
    .map(({ slug }) => ({ params: { slug } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async (
  context
) => {
  const params = context.params!;
  const blogPost = blogService.getSingeBlog(params.slug as string);
  return {
    props: {
      blogPost,
    },
  };
};

export default function BlogPost({ blogPost }: BlogPostProps) {
  return (
    <BlogPostContainer>
      <Typography
        variant="h4"
        gutterBottom
      >
        {blogPost.title}
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
      >
        author: {blogPost.author.name}
      </Typography>
      <Typography>{blogPost.content}</Typography>
    </BlogPostContainer>
  );
}
