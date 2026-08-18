import type { ReactNode } from "react";
import Container from "@/components/ui/Container";

type SectionProps = {
  children: ReactNode;
  id?: string;
};

/**
 * Section - a full-width page band, with vertical spacing and a centred Container.
 * @param children - the section's content
 * @param id - optional anchor target for in-page nav links
 */
export default function Section({ children, id }: SectionProps) {
  return (
    <section id={id} className="py-16">
      <Container>{children}</Container>
    </section>
  );
}
