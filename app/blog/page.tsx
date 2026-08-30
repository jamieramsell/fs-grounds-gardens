import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { getBlogPosts } from "@/lib/content/blog";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

type BlogProps = {
  children: ReactNode;
};

function BlogSection({ children }: BlogProps) {
  return (
    <Section>
      <div className="space-y-6">
        <h1 className="text-brand text-3xl font-bold">Blog posts</h1>
        {children}
      </div>
    </Section>
  );
}

export default function BlogPage() {
  const posts = getBlogPosts();

  if (posts.length === 0) {
    return (
      <BlogSection>
        <p className="text-ink/70 mt-1">Blog posts coming soon</p>
      </BlogSection>
    );
  }

  return (
    <BlogSection>
      <div className="grid gap-6 space-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <Card>
              <h2 className="text-ink mt-2 text-lg font-semibold">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="text-ink/70 mt-2">{post.excerpt}</p>
              )}
              <p className="text-brand-light mt-2 text-xs">
                Posted on {post.date.toDateString()}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </BlogSection>
  );
}

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Seasonal garden tips and news from FS Grounds & Gardens. Practical advice on lawns, hedges, pruning and keeping your Leicestershire garden looking its best.",
};
