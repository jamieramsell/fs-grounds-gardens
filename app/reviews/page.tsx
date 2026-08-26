import ReviewGrid from "@/components/reviews/ReviewsGrid";
import Section from "@/components/ui/Section";
import { getReviews } from "@/lib/content/reviews";
import type { Metadata } from "next";
import type { ReactNode } from "react";

type ReviewsPageSectionProps = {
  children: ReactNode;
};

function ReviewsPageSection({ children }: ReviewsPageSectionProps) {
  return (
    <Section>
      <div className="space-y-6">
        <h1 className="text-brand text-3xl font-bold">
          Reviews from our customers
        </h1>
        {children}
      </div>
    </Section>
  );
}

export default function ReviewsPage() {
  const items = getReviews();
  if (items.length === 0) {
    return (
      <ReviewsPageSection>
        <p className="text-ink/70 mt-1">Customer reviews coming soon</p>
      </ReviewsPageSection>
    );
  }

  return (
    <ReviewsPageSection>
      <ReviewGrid reviews={items} />
    </ReviewsPageSection>
  );
}

export const metadata: Metadata = { title: "Reviews" };
