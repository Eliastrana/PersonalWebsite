// components/BlogSection.tsx

import React, { useState, useEffect } from 'react';
import HeroPost from './hero-post';
import MoreStories from './more-stories';
import CategorySorter from './CategorySorter';
import Post from '../interfaces/post';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
    allPosts: Post[];
    tags: string[];
};

const BlogSection = ({ allPosts, tags }: Props) => {
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
    const AnimatedSection = ({ children, animateOnce = false, fullWidth = false }) => {
        const sectionClass = fullWidth ? "w-full" : "";

        const { ref, inView } = useInView({
            triggerOnce: animateOnce,
            threshold: 0.1,
        });

        const [hasAnimated, setHasAnimated] = useState(false);

        useEffect(() => {
            if (inView && !hasAnimated) {
                setHasAnimated(true);
            }
        }, [inView, hasAnimated, animateOnce]);

        const shouldAnimate = animateOnce ? hasAnimated && inView : inView;

        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                className={sectionClass}
            >
                {children}
            </motion.div>
        );
    };

    return (
        <>
            <h2 className="mb-8 mt-10 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                Featured Project
            </h2>
            <CategorySorter selectedTag={selectedTag} onTagChange={setSelectedTag} tags={tags || []} />
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
                    <MoreStories posts={morePosts} />
                </AnimatedSection>
            )}
        </>
    );
};

export default BlogSection;
