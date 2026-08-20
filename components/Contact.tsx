import Section from "@/components/ui/Section";
import Button from "./ui/Button";

export default function Contact() {
  return (
    <div className="bg-cream">
      <Section id="contact">
        <div className="max-w-2xl space-y-6">
          <h2 className="text-brand text-3xl font-bold">Get in touch</h2>
          <p className="text-ink/80">
            Ready for a garden upgrade? Call or message for a free,
            no-obligation quote.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="tel:+441234567890">Call for a quote</Button>
            <Button
              href="https://instagram.com/fs.grounds.gardens"
              variant="secondary"
            >
              Message us on Instagram
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
