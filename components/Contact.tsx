import Section from "@/components/ui/Section";
import Button from "./ui/Button";

export default function Contact() {
  return (
    <div className="bg-brand">
      <Section id="contact">
        <div className="max-w-2xl space-y-6">
          <h2 className="text-brand-accent text-3xl font-bold">Get in touch</h2>
          <p className="text-white/80">
            Ready for a garden upgrade? Call or message for a free,
            no-obligation quote.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="tel:+441234567890" variant="light">
              Call for a quote
            </Button>
            <Button href="/contact-us" variant="lightOutline">
              Send us a message online
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
