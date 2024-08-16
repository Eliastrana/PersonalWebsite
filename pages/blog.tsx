import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import Container from '../components/container';
import BlogSection from '../components/BlogSection';
import { getAllPosts } from '../lib/api';
import Post from '../interfaces/post';

type Props = {
    allPosts: Post[];
    tags: string[];
};

const BlogPage = ({ allPosts, tags }: Props) => {
    return (
        <>
            <Layout>
                <Head>
                    <meta name="robots" content="all" />
                    <meta charSet="UTF-8" />
                    <title>Blog - Elias Trana</title>
                    <meta property="og:image" content="/favicon/logoai.png" />
                </Head>
                <Container padding="px-4 md:px-8 lg:px-16 mt-32">
                    <BlogSection allPosts={allPosts} tags={tags} />
                </Container>
            </Layout>
        </>
    );
};

export default BlogPage;

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
