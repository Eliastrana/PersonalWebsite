// components/NewestPostDisplayer.tsx
import React from 'react';
import NewestPosts from './NewestPosts';
import Post from '../interfaces/post';

type Props = {
    allPosts: Post[];
};

const NewestPostDisplayer = ({ allPosts }: Props) => {
    return <NewestPosts posts={allPosts} />;
};

export default NewestPostDisplayer;
