// components/NewestPosts.tsx
import React from 'react';
import Link from 'next/link';
import Post from '../interfaces/post';

type Props = {
    posts: Post[];
};

const NewestPosts = ({ posts }: Props) => {
    // Clone and sort posts by date (newest first), then get the top three.
    const newestPosts = [...posts]
        .sort(
            (a, b) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        .slice(0, 3);

    return (


        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8  mx-auto w-[90%] md:p-4">

            <div className="md:col-span-3 col-span-1 mt-10 ">
                <h2 className="text-3xl font-semibold">Newest Posts</h2>
            </div>

            {newestPosts.map((post) => (


                <div
                    key={post.slug}
                    className="border-2 rounded-lg shadow-md overflow-hidden"
                >

                    {post.coverImage && (
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-48 object-cover"
                        />
                    )}
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">
                            <Link href={`/posts/${post.slug}`}>
                                <p>{post.title}</p>
                            </Link>
                        </h2>
                        <p className="mt-2 ">{post.excerpt}</p>
                        <p className="mt-2 text-sm ">
                            {new Date(post.date).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NewestPosts;
