// pages/newPage.tsx
import React from 'react';
import PhysicsFrontpage from '../components/PhysicsFrontpage';

import ProjectCarousel from '../components/ProjectCarousel';
import NewestPostDisplayer from '../components/NewestPostDisplayer';
import { getAllPosts } from '../lib/api';
import Layout from "../components/layout";
import Aboutme from "../components/aboutme";
import Post from "../interfaces/post";

type Props = {
    allPosts: Post[];
};

const NewPage: React.FC<Props> = ({ allPosts }) => {
    return (
        <div className="custom-cursor">
            <Layout>
                <PhysicsFrontpage />
                <ProjectCarousel />
                <Aboutme />
                <NewestPostDisplayer allPosts={allPosts} />
            </Layout>
        </div>
    );
};

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

    return {
        props: { allPosts },
    };
}

export default NewPage;
