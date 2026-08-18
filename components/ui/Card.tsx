import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

/**
 * Card - a bordered, padded surface for grouping related content.
 * @param children - the content to display inside the card
 */
export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
      {children}
    </div>
  );
}
