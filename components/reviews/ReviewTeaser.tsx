import Section from "../ui/Section";
import type { ReactNode } from "react";
import Button from "../ui/Button";
import { getReviews } from "@/lib/content/reviews";
import ReviewGrid from "./ReviewsGrid";

type ReviewsTeaserProps = {
  children: ReactNode;
};

function ReviewsTeaserSection({ children }: ReviewsTeaserProps) {
  return (
    <div>
      <Section id="reviews">
        <div className="space-y-6">
          <h2 className="text-brand text-3xl font-bold">
            Reviews from our customers
          </h2>
          {children}
        </div>
      </Section>
    </div>
  );
}

export default function ReviewsTeaser() {
  const reviews = getReviews();
  const teaser = reviews.slice(0, 3);

  if (teaser.length === 0) {
    return (
      <ReviewsTeaserSection>
        <p className="text-ink/70 mt-1">Customer reviews coming soon</p>
      </ReviewsTeaserSection>
    );
  }

  return (
    <ReviewsTeaserSection>
      <ReviewGrid reviews={teaser} />
      {reviews.length > 3 && <Button href="/reviews">View all reviews</Button>}
    </ReviewsTeaserSection>
  );
}
