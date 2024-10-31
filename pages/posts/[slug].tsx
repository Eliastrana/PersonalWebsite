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
import { useEffect, useState, useRef } from 'react';

type Props = {
  post: PostType;
  preview?: boolean;
};

export default function Post({ post, preview }: Props) {
  const router = useRouter();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showImage, setShowImage] = useState(true);
  const [scrollDirection, setScrollDirection] = useState(''); // Track scroll direction
  const [isDangling, setIsDangling] = useState(false);
  const [rotationIntensity, setRotationIntensity] = useState(10); // Initial rotation intensity
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollTimeRef = useRef<number>(0);

  useEffect(() => {
    let lastScrollPosition = window.scrollY;

    const handleScroll = () => {
      const currentScrollTime = Date.now();
      const scrollSpeed = Math.abs(window.scrollY - lastScrollPosition) / (currentScrollTime - lastScrollTimeRef.current || 1);

      // Calculate rotation intensity based on scroll speed (capped for safety)
      const intensity = Math.min(Math.max(scrollSpeed * 200, 10), 30);
      setRotationIntensity(intensity);

      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);

      if (scrollPosition > lastScrollPosition) {
        setScrollDirection('down');
      } else if (scrollPosition < lastScrollPosition) {
        setScrollDirection('up');
      }

      lastScrollPosition = scrollPosition;
      lastScrollTimeRef.current = currentScrollTime;

      setIsDangling(false);
      setShowImage(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsDangling(true);
        setTimeout(() => {
          setIsDangling(false); // Stop the dangling effect and level the image
          scrollTimeoutRef.current = setTimeout(() => setShowImage(false), 5000); // Fade out after the dangling animation
        }, 2000); // Duration of the dangling animation
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const title = post ? `${post.title} | Personal Portfolio by Elias Trana` : '';

  return (
      <Layout preview={preview}>
        {/* Progress Bar */}
        <div style={{ width: `${scrollProgress}%` }} className="fixed top-0 left-0 h-1 bg-black dark:bg-white z-50" />

        {/* Image Follows Progress Bar and Fades In/Out After Inactivity */}
        <div
            style={{
              left: `calc(${scrollProgress}% - 50px)`,
              opacity: showImage ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out, transform 0.2s ease-in-out', // Smooth fade effect
              transform: isDangling
                  ? 'rotate(0deg)' // Ensure it is level after dangling
                  : `rotate(${scrollDirection === 'down' ? `${rotationIntensity}deg` : scrollDirection === 'up' ? `-${rotationIntensity}deg` : '0deg'})`, // Rotate based on scroll direction
            }}
            className={`fixed top-1 left-0 z-50`}
        >
          {/*<img*/}
          {/*    src="/assets/gallery/IMG_0475.PNG" // Replace with your image path*/}
          {/*    alt="Progress Indicator"*/}
          {/*    className="w-24 h-24" // 50x50px image*/}
          {/*    style={{ width: '100px', height: '100px' }}*/}
          {/*/>*/}
        </div>

        <Container>
          <Header />
          {router.isFallback ? (
              <h1>Loading…</h1>
          ) : (
              <>
                <article className="mb-32">
                  <Head>
                    <title>{title}</title>
                    {post.ogImage && <meta property="og:image" content={post.ogImage.url} />}
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
                  <PostBody content={post.content} />
                </article>
              </>
          )}
        </Container>

        <style jsx>{`
        .dangling {
          animation: dangling 2s ease-in-out;
        }

        @keyframes dangling {
          0% {
            transform: rotate(${rotationIntensity}deg);
          }
          25% {
            transform: rotate(-${rotationIntensity}deg);
          }
          50% {
            transform: rotate(${rotationIntensity - 2}deg);
          }
          75% {
            transform: rotate(-${rotationIntensity - 5}deg);
          }
          100% {
            transform: rotate(0deg); 
          }
        }
      `}</style>
      </Layout>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
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
