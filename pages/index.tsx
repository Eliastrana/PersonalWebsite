import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import Container from '../components/container';
import Intro from '../components/intro';
import HeroPost from '../components/hero-post';
import MoreStories from '../components/more-stories';
import SlideshowDisplayer from "../components/slideshow-displayer";
import CategorySorter from '../components/CategorySorter';
import { getAllPosts } from '../lib/api';
import Post from "../interfaces/post";
import BoxDisplay from "../components/boxDisplay";
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';



type Props = {
  allPosts: Post[];
  tags: string[];
};

export default function Index({ allPosts, tags }: Props) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = selectedTag ? allPosts.filter(post => post.tags?.includes(selectedTag)) : allPosts;
  const heroPost = filteredPosts[0];
  const morePosts = filteredPosts.slice(1);

  // Animation variant
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  // Helper function to create motion.div with inView trigger
  const AnimatedSection = ({ children, animateOnce = false }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      if (inView && !hasAnimated) {
        setHasAnimated(true);
      }
    }, [inView, hasAnimated]);


    const shouldAnimate = animateOnce ? hasAnimated && inView : inView;


    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeIn' }}
        >
          {children}
        </motion.div>
    );
  };


  return (
      <>
        <Layout>
          <Head>
            <title>Elias Trana</title>
          </Head>

          <Container>
            <AnimatedSection><Intro/></AnimatedSection>
            <AnimatedSection><SlideshowDisplayer/></AnimatedSection>
            <AnimatedSection><BoxDisplay/></AnimatedSection>


            {/*<AnimatedSection animateOnce>*/}
              <h2 className="mb-8 mt-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                Featured Project
              </h2>
            {/*</AnimatedSection>*/}

            {/*<AnimatedSection animateOnce>*/}
              <CategorySorter selectedTag={selectedTag} onTagChange={setSelectedTag} tags={tags || []}/>
            {/*</AnimatedSection>*/}

            {heroPost && (
                <AnimatedSection>
                  <HeroPost
                      title={heroPost.title}
                      coverImage={heroPost.coverImage}
                      date={heroPost.date}
                      author={heroPost.author}
                      slug={heroPost.slug}
                      excerpt={heroPost.excerpt}
                      tags={heroPost.tags}
                  />
                </AnimatedSection>
            )}

            {morePosts.length > 0 && (
                <AnimatedSection>
                  <MoreStories posts={morePosts}/>
                </AnimatedSection>
            )}
          </Container>
        </Layout>
      </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tags',
  ]);

  const tags = Array.from(new Set(allPosts.flatMap(post => post.tags || [])));

  return {
    props: { allPosts, tags },
  };
}
