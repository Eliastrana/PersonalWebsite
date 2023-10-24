import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import type Author from '../interfaces/author';

type Props = {
    title: string;
    coverImage: string;
    date: string;
    excerpt: string;
    author: Author;
    slug: string;
    tags: string[];
};

const roundedSquareShadowStyle = {
    borderRadius: '12px', // Adjust the value for your desired border radius
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 6px 8px rgba(0, 0, 0, 0.1)', // Customize shadow values as needed
    padding: '20px', // Add padding to create space between the content and the border
    martinBottom: '-1000px',
};

const roundedImageStyle = {
    borderRadius: '12px', // Apply rounded corners to the image

};

const HeroPost = ({
                      title,
                      coverImage,
                      date,
                      excerpt,
                      author,
                      slug,
                      tags,
                  }: Props) => {
    return (
        <section>
            <div style={roundedSquareShadowStyle}>
                <div className="mb-8 md:mb-16">
                    <CoverImage
                        title={title}
                        src={coverImage}
                        slug={slug}
                    />
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                    <div>
                        <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
                            <Link as={`/posts/${slug}`} href="/posts/[slug]" className="hover:underline">
                                {title}
                            </Link>
                        </h3>
                        <div className="mb-4 md:mb-0 text-lg">
                            <DateFormatter dateString={date} />
                        </div>

                        {tags && tags.length > 0 && (
                            <div className="flex flex-wrap">
                                {tags.map((tag) => (
                                    <div className="text-sm text-gray-700 mr-2" key={tag}>
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div>
                        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
                        <Avatar name={author.name} picture={author.picture} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroPost;
