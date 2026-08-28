import ContactForm from "@/components/ContactForm";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import type { Metadata } from "next";

export default function ContactFormPage() {
  return (
    <>
      <div className="bg-brand">
        <Section>
          <div className="max-w-2xl space-y-6">
            <h1 className="text-brand-accent text-3xl font-bold">
              Get in touch
            </h1>
            <p className="text-white/80">
              Ready for a garden upgrade? Call or message for a free,
              no-obligation quote.
            </p>
          </div>
        </Section>
      </div>

      <Section>
        <div className="space-y-6">
          <h2 className="text-brand text-3xl font-bold">Contact form</h2>
          <ContactForm />

          <h2 className="text-brand text-xl font-bold">
            Alternatively, you can use our social media
          </h2>
          <div className="flex flex-wrap gap-2">
            <Button href="tel:+441234567890" variant="secondary">
              Call us
            </Button>
            <Button
              href="mailto:enquiries@fsgroundsandgardens.co.uk"
              variant="secondary"
            >
              Email us
            </Button>
            <Button
              href="https://www.facebook.com/p/FS-Grounds-Gardens-61593549812509/"
              variant="secondary"
            >
              Facebook
            </Button>
            <Button
              href="https://www.instagram.com/fs.grounds.gardens/"
              variant="secondary"
            >
              Instagram
            </Button>
          </div>
          <p className="text-ink/80">
            Please note that email responses may come from a personal email
            address.
          </p>
        </div>
      </Section>
    </>
  );
}

export const metadata: Metadata = { title: "Contact" };
