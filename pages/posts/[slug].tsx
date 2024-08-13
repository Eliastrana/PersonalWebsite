import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
import Layout from '../../components/layout';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import Head from 'next/head';
import markdownToHtml from '../../lib/markdownToHtml';
import type PostType from '../../interfaces/post';

type Props = {
  post: PostType;
  preview?: boolean;
};

export default function Post({ post, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const title = post ? `${post.title} | Personal Portfolio by Elias Trana` : '';

  return (
      <Layout preview={preview}>
        <Container>
          <Header />
          {router.isFallback ? (
              <h1>Loading…</h1>
          ) : (
              <>
                <article className="mb-32">
                  <Head>
                    <title>{title}</title>
                    {post.ogImage && <meta property="og:image" content={post.ogImage.url}/>}
                  </Head>
                  <PostHeader
                      title={post.title}
                      coverImage={post.coverImage}
                      date={post.date}

                      author={post.author}
                  />
                  <div className="tags flex flex-wrap md:mx-32">
                    {post.tags?.map(tag => (
                        <span key={tag} className="m-1 p-2 bg-gray-200 rounded-full">{tag}</span>
                    ))}
                  </div>
                  {/* Displaying Tags */}

                  <PostBody content={post.content}/>
                </article>
              </>
          )}
        </Container>
      </Layout>
  );
}

export async function getStaticProps({params}: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'tags',
  ]);

  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map(post => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
}
