import type { Review } from "@/lib/content/reviews";
import Card from "../ui/Card";
import { Star } from "lucide-react";

type ReviewCardProps = {
  review: Review;
};

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card key={review.order}>
      <div
        role="img"
        className="flex"
        aria-label={`${review.rating} out of 5 stars`}
      >
        {/* Filled stars represent the number of stars given */}
        {Array.from({ length: review.rating }, (_, i) => {
          return (
            <Star
              key={i}
              className="mx-0.5"
              style={{ color: "#facc15" }}
              fill="currentColor"
              size={30}
              aria-hidden
            />
          );
        })}

        {/* Hollow stars represent the difference between the given review and
         * the maximum (5)
         */}
        {Array.from({ length: 5 - review.rating }, (_, i) => {
          return (
            <Star
              key={i}
              className="mx-0.5"
              style={{ color: "#facc15" }}
              size={30}
              aria-hidden
            />
          );
        })}
      </div>
      {review.quote && <p className="text-ink/70 mt-2">{review.quote}</p>}
      <p className="text-brand-light mt-2 text-xs">- {review.author}</p>
    </Card>
  );
}

type ReviewGridProps = {
  reviews: Review[];
};

export default function ReviewGrid({ reviews }: ReviewGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review) => (
        <ReviewCard review={review} key={review.order} />
      ))}
    </div>
  );
}
