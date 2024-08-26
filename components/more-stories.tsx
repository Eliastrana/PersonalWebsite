import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PostPreview from './post-preview';
import type Post from '../interfaces/post';
import CategorySorter from './CategorySorter';

type Props = {
    posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const handleTagChange = (tag: string | null) => {
        setSelectedTag(tag);
    };

    const filteredPosts = selectedTag
        ? posts.filter((post) => post.tags && post.tags.includes(selectedTag))
        : posts;

    return (
        // <motion.div
        //     initial={{ opacity: 0, y: 20 }}
        //     animate={{ opacity: 1, y: 0 }}
        //     transition={{ duration: 1.5, ease: "easeIn" }}
        // >
            <section>
                <h2 className="mb-8 mt-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                    More Posts
                </h2>




                <div className="mb-8 md:mb-16">
                    {/* Pass the current selected tag and the handler to the CategorySorter */}

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32 ">
                    {filteredPosts.map((post) => (
                        <PostPreview
                            key={post.slug}
                            title={post.title}
                            coverImage={post.coverImage}
                            date={post.date}
                            author={post.author}
                            slug={post.slug}
                            excerpt={post.excerpt}
                        />
                    ))}
                </div>
            </section>
        // </motion.div>
    );
};

export default MoreStories;
