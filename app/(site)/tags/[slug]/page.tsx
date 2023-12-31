import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts, Post } from "contentlayer/generated";

import { sortByDate } from "@/lib/utils";
import PostPreview from "@/components/post-preview";

async function getSortedArticles(): Promise<Post[]> {
  let articles = await allPosts;

  articles = articles.filter((article: Post) => article.status === "published");

  return articles.sort((a: Post, b: Post) => {
    if (a.publishedDate && b.publishedDate) {
      return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
    }
    return 0;
  });
}

// Dynamic metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `All blogs in ${params.slug}`,
    description: `All blogs in ${params.slug}`,
  };
}

export default async function TagPage({ params }: { params: { slug: string } }) {
  const tag = params.slug;

  const blogs = allPosts
    .filter((post) => post.status === "published")
    .filter((post) => post.tags?.includes(tag))
    .sort(sortByDate);

  if (!blogs) {
    notFound();
  }

  return (
    <div className="container mb-4">
      <div className="prose mx-auto max-w-5xl dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-headings:leading-tight hover:prose-a:text-accent-foreground prose-a:prose-headings:no-underline">
        <h1 className="mt-0">All blogs in {tag}</h1>
        <hr className="my-4" />
        <div className="grid grid-flow-row gap-2">
          {blogs.map((blog) => (
            <PostPreview post={blog} key={blog._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
