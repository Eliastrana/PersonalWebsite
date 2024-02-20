import React, { useState } from 'react';
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
import ContentBox from "../components/ContentBox";
import BoxDisplay from "../components/boxDisplay";

type Props = {
  allPosts: Post[];
  tags: string[];
};

export default function Index({ allPosts, tags }: Props) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Assuming the first post is always the hero post, even after filtering
  const filteredPosts = selectedTag ? allPosts.filter(post => post.tags?.includes(selectedTag)) : allPosts;
  const heroPost = filteredPosts[0];
  const morePosts = filteredPosts.slice(1);

  return (
      <>
        <Layout>
          <Head>
            <title>Elias Trana</title>
          </Head>

          <Container>
            <Intro/>
            <SlideshowDisplayer/>

            <BoxDisplay/>


            <h2 className="mb-8 mt-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              Featured Project
            </h2>


            <CategorySorter selectedTag={selectedTag} onTagChange={setSelectedTag} tags={tags || []}/>


            {heroPost && (
                <HeroPost
                    title={heroPost.title}
                    coverImage={heroPost.coverImage}
                    date={heroPost.date}
                    author={heroPost.author}
                    slug={heroPost.slug}
                    excerpt={heroPost.excerpt}
                    tags={heroPost.tags}
                />
            )}


            {morePosts.length > 0 && <MoreStories posts={morePosts}/>}
          </Container>
        </Layout>
      </>
  );
}

export const getStaticProps = async () => {
  // Fetch posts and extract tags logic...
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tags',
  ]);



  // Fallback to an empty array if no tags are found
  const tags = Array.from(new Set(allPosts.flatMap(post => post.tags || [])));

  return {
    props: {allPosts, tags},
  };
};


