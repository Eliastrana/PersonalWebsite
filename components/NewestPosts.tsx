// components/NewestPosts.tsx
import React from 'react';
import Link from 'next/link';
import Post from '../interfaces/post';
import Image from 'next/image';
import DateFormatter from "./date-formatter";

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

            <div className="md:col-span-3 col-span-1 mt-10 flex justify-between items-center">
                <h2 className="text-3xl font-semibold">Newest Posts</h2>

                <a className="underline" href="/blog">Visit blog</a>
            </div>

            {newestPosts.map((post) => (


                <div
                    key={post.slug}
                    className="border-2 rounded-lg border-black dark:border-white overflow-hidden"
                >

                    <Link href={`/posts/${post.slug}`}>

                    {post.coverImage && (

                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            height={200}
                            width={400}
                            className="w-full h-48 object-cover"
                        />
                    )}
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">
                                <p>{post.title}</p>
                        </h2>

                        <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">
                        <DateFormatter dateString={post.date} />
                        </p>

                        <p className="mt-2 ">{post.excerpt}</p>


                    </div>
                    </Link>

                </div>

            ))}
        </div>
    );
};

export default NewestPosts;
