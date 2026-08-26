import Section from "@/components/ui/Section";
import { serviceAreas } from "@/lib/serviceAreas";

export default function ServiceAreas() {
  return (
    <div className="bg-cream">
      <Section id="areas">
        <div className="max-w-2xl space-y-6">
          <h2 className="text-brand text-3xl font-bold">Where we work</h2>
          <p className="text-ink/80">
            We&apos;re a small business based in Rothley, and offer our services
            across Charnwood and its surrounding area.
          </p>
          <p className="text-ink/80">We cover places such as:</p>
          <ul className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="bg-brand/5 text-brand rounded-full px-3 py-1 text-sm"
              >
                {area}
              </li>
            ))}
          </ul>
          <p className="text-ink/80">
            If in doubt, don&apos;t hesitate to{" "}
            <a href="#contact" className="text-brand-accent hover:underline">
              contact us.
            </a>{" "}
            We&apos;re always happy to help!
          </p>
        </div>
      </Section>
    </div>
  );
}
