import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  const files = fs.readdirSync(postsDirectory);
  const mdFiles = files.filter((file) => file.endsWith('.md'));
  return mdFiles;
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  // Assuming posts are stored as files under a specific directory
  const slugs = getPostSlugs(); // Function to get list of post filenames or slugs
  const posts = slugs
      .map((slug) => getPostBySlug(slug, fields)) // Function to read post file and extract required fields
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
