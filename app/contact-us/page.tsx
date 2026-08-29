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
          <p className="text-ink/80">
            Unfortunately, our contact form is not available at the moment.
            Sorry for any inconvenience caused.
          </p>

          <h2 className="text-brand text-xl font-bold">
            Alternatively, you can use our social media
          </h2>
          <div className="flex flex-wrap gap-2">
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
        </div>
      </Section>

      {/* Privacy notice */}
      <div className="bg-cream flex items-center justify-center gap-2">
        <p className="text-ink/70 m-4 text-sm">
          We use the details you send here (your name, contact information, and
          message) only to reply to your enquiry and, where relevant, to prepare
          a quote. Your message reaches us through Web3Forms, a third-party form
          service, and is delivered to our email inbox. We keep enquiries only
          for as long as we need them to deal with your request, and we never
          sell your details or use them for marketing. If you would like to know
          what we hold about you, or to have it deleted, please email us at{" "}
          <a
            href="mailto:admin@fsgroundsandgardens.co.uk"
            className="text-brand-accent hover:underline"
          >
            admin@fsgroundsandgardens.co.uk
          </a>
          .
        </p>
      </div>
    </>
  );
}

export const metadata: Metadata = { title: "Contact" };
