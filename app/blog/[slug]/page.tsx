import Section from "@/components/ui/Section";
import { getBlogPosts } from "@/lib/content/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getBlogPosts().map((post) => {
    getPost(post.slug); // Throw a 404 if the post is not found
    return { slug: post.slug };
  });
}

function getPost(slug: string) {
  // Find the post with the associated slug and return it, else 404.
  const post = getBlogPosts().find((post) => post.slug === slug);

  if (post && slug) {
    return post;
  } else {
    notFound();
  }
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  return (
    <Section>
      <h1>{post.title}</h1>
      <h2>{post.excerpt && post.excerpt}</h2>
      <p>{post.date.toDateString()}</p>
      <p>{post.body}</p>
    </Section>
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { title, excerpt } = getPost(slug);
  const metadata: Metadata = {
    title: title,
    description: excerpt ?? "Garden care tips from FS Grounds & Gardens",
  };
  return metadata;
}
