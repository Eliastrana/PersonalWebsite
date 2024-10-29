import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
    title: string
    coverImage: string
    date: string
    excerpt: string
    author: Author
    slug: string
}

// const roundedSquareShadowStyle = {
//     borderRadius: '12px', // Adjust the value for your desired border radius
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 6px 8px rgba(0, 0, 0, 0.1)', // Customize shadow values as needed
//     padding: '20px', // Add padding to create space between the content and the border
// }

const PostPreview = ({
                         title,
                         coverImage,
                         date,
                         excerpt,
                         author,
                         slug,
                     }: Props) => {
    return (
        <div className="border-2 border-black dark:border-white rounded-lg">
            <div className="mb-5">
                <CoverImage slug={slug} title={title} src={coverImage} />
            </div>

            <div className="m-5">
            <h3 className="dark:text-white text-3xl mb-3 leading-snug">
                <Link
                    as={`/posts/${slug}`}
                    href="/posts/[slug]"
                    className="hover:underline"
                >
                    {title}
                </Link>
            </h3>
            <div className="text-lg mb-4">
                <DateFormatter dateString={date} />
            </div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
            <Avatar name={author.name} picture={author.picture} />
            </div>
        </div>
    )
}

export default PostPreview
