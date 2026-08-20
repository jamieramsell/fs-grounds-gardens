import type { LucideIcon } from "lucide-react";
import { Scissors, Sprout, Flower2, Trash2, Leaf } from "lucide-react";
import Section from "./ui/Section";
import Card from "./ui/Card";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Hedge trimming",
    description: "Neat, healthy hedges, shaped and tidied.",
    icon: Scissors,
  },
  {
    title: "Lawn care",
    description: "Mowing, edging and feeding for a striped, healthy lawn.",
    icon: Sprout,
  },
  {
    title: "Pruning",
    description: "Careful pruning to keep plants and shrubs thriving.",
    icon: Flower2,
  },
  {
    title: "Clearances",
    description: "Overgrown gardens cleared and hauled away.",
    icon: Trash2,
  },
  {
    title: "Garden maintenance",
    description: "Regular visits to keep everything looking its best.",
    icon: Leaf,
  },
];

export default function Services() {
  return (
    <Section id="services">
      <h2 className="text-brand text-3xl font-bold">Our services</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title}>
            <service.icon
              className="text-brand-accent mb-3 h-8 w-8"
              aria-hidden="true"
            />
            <h3 className="text-ink text-lg font-semibold">{service.title}</h3>
            <p className="text-ink/70 mt-1">{service.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
