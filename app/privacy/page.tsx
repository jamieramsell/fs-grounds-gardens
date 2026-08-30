import Section from "@/components/ui/Section";
import type { Metadata } from "next";

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-brand">
        <Section>
          <div className="max-w-2xl space-y-6">
            <h1 className="text-brand-accent text-3xl font-bold">
              Privacy policy
            </h1>
            <p className="text-white/80">Last updated 29 August 2026</p>
            <p className="text-white/80">
              This policy explains what personal information FS Grounds &
              Gardens collects, why we collect it, and what we do with it.
              We&apos;ve tried to keep this section plain and honest, as
              we&apos;re a family run business, not a data company.
            </p>
          </div>
        </Section>
      </div>

      <Section>
        <div className="max-w-2xl space-y-6">
          <h2 className="text-brand text-3xl font-bold">Who are we</h2>
          <p className="text-ink/80">
            FS Grounds & Gardens (&quot;we&quot;, &quot;us&quot;,
            &quot;our&quot;) provides grounds and garden maintenance services in
            Leicestershire. For any questions about this policy or your personal
            information, contact us at{" "}
            <a
              href="mailto:admin@fsgroundsandgardens.co.uk"
              className="text-brand-accent hover:underline"
            >
              admin@fsgroundsandgardens.co.uk
            </a>
            .
          </p>
          <p className="text-ink/80">
            For the purposes of UK data protection law, FS Grounds & Gardens is
            the &quot;data controller&quot; of the information described below.
          </p>

          <h2 className="text-brand text-3xl font-bold">What we collect</h2>
          <p className="text-ink/80">
            The only personal information we collect is what you choose to give
            us through our contact form. That is:
          </p>
          <ul className="list-disc pl-6">
            <li className="text-ink/80">Your name</li>
            <li className="text-ink/80">Your email address</li>
            <li className="text-ink/80">Optionally, your phone number</li>
            <li className="text-ink/80">
              Your message, and any details that you send within it
            </li>
            <li className="text-ink/80">Your preferred method of contact</li>
          </ul>
          <p className="text-ink/80">
            We don&apos;t ask for anything else, and we don&apos;t collect any
            of this unless you fill in the form and submit it. You can also
            email us directly at{" "}
            <a
              href="mailto:enquiries@fsgroundsandgardens.co.uk"
              className="text-brand-accent hover:underline"
            >
              enquiries@fsgroundsandgardens.co.uk
            </a>{" "}
            instead of using the form.
          </p>

          <h2 className="text-brand text-3xl font-bold">
            Why we collect it, and our legal basis
          </h2>
          <p className="text-ink/80">
            We use your information for one purpose: to reply to your enquiry
            and, where relevant, to arrange and provide a quote or our services.
          </p>
          <p className="text-ink/80">
            Our lawful basis for this is our legitimate interest in responding
            to people who get in touch with us. If your enquiry leads to work,
            we may also process your information to fulfil that agreement with
            you.
          </p>

          <h2 className="text-brand text-3xl font-bold">
            Who else is involved
          </h2>
          <p className="text-ink/80">
            We don&apos;t sell your information or share it for marketing. When
            you contact us, your message travels through Web3Forms and then
            arrives in our email inbox, where we read and reply to it. The
            following providers are involved in that process:
          </p>
          <ul className="list-disc pl-6">
            <li className="text-ink/80">
              Web3Forms - when you submit the contact form, your message is sent
              through Web3Forms, a third-party form service, which delivers it
              to our email inbox. Your details pass through their systems for
              this purpose. You can read their privacy policy at{" "}
              <a
                href="web3forms.com"
                className="text-brand-accent hover:underline"
              >
                web3forms.com
              </a>
              .
            </li>
            <li className="text-ink/80">
              Cloudflare - our website is hosted on Cloudflare&apos;s platform.
              To deliver the site and keep it secure, Cloudflare processes basic
              technical information such as your IP address and request logs.
              You can read their privacy policy at{" "}
              <a
                href="cloudflare.com"
                className="text-brand-accent hover:underline"
              >
                cloudflare.com
              </a>
              .
            </li>
            <li className="text-ink/80">
              Google / Gmail - once your enquiry reaches us, it&apos;s stored in
              our email inbox, which is provided and hosted by Gmail. Your
              message stays there while we deal with your enquiry, subject to
              the retention section below. You can read their privacy policy at{" "}
              <a href="gmail.com" className="text-brand-accent hover:underline">
                gmail.com
              </a>
              .
            </li>
          </ul>
          <p className="text-ink/80">
            Our website also links to our pages on Instagram and Facebook. If
            you follow those links, you&apos;ll be on those platforms and their
            own privacy policies apply, not ours.
          </p>
          <p className="text-ink/80">
            Some of these providers may process data on servers outside the UK.
            Where that happens, appropriate safeguards are in place to protect
            your information.
          </p>

          <h2 className="text-brand text-3xl font-bold">
            Cookies and tracking
          </h2>
          <p className="text-ink/80">
            Our website does not use analytics, advertising, or tracking
            cookies, and we don&apos;t build any profile of you. Our host,
            Cloudflare, may set a strictly necessary cookie to keep the site
            secure, but we don&apos;t use cookies to monitor your activity.
          </p>

          <h2 className="text-brand text-3xl font-bold">How long we keep it</h2>
          <p className="text-ink/80">
            We keep your enquiry and any related correspondence only for as long
            as we need to deal with your enquiry and any work that follows from
            it, and to keep sensible business records afterwards. When it&apos;s
            no longer needed, we delete it. By default, our emails are deleted
            automatically six months after being received.
          </p>

          <h2 className="text-brand text-3xl font-bold">Your rights</h2>
          <p className="text-ink/80">
            Under UK data protection law you have the right to:
          </p>
          <ul className="list-disc pl-6">
            <li className="text-ink/80">
              ask for a copy of the personal information we hold about you;
            </li>
            <li className="text-ink/80">
              ask us to correct anything that&apos;s wrong;
            </li>
            <li className="text-ink/80">ask us to delete your information;</li>
            <li className="text-ink/80">
              object to, or ask us to restrict, how we use it.
            </li>
          </ul>
          <p className="text-ink/80">
            To exercise any of these, just email us at{" "}
            <a
              href="mailto:admin@fsgroundsandgardens.co.uk"
              className="text-brand-accent hover:underline"
            >
              admin@fsgroundsandgardens.co.uk
            </a>{" "}
            and we&apos;ll be happy to help you.
          </p>
          <p className="text-ink/80">
            If you&apos;re unhappy with how we&apos;ve handled your information,
            you can also complain to the Information Commissioner&apos;s Office
            (ICO), the UK&apos;s data protection regulator, at{" "}
            <a href="ico.org.uk" className="text-brand-accent hover:underline">
              ico.org.uk
            </a>
            , or by calling their helpline.
          </p>
        </div>
      </Section>
    </>
  );
}

export const metadata: Metadata = { title: "Privacy" };
