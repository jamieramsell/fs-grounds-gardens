import Section from "./ui/Section";
import { Check } from "lucide-react";

export default function About() {
  return (
    <div className="bg-cream">
      <Section id="about">
        <div className="max-w-2xl space-y-6">
          <h2 className="text-brand text-3xl font-bold">
            Local, reliable garden care
          </h2>
          <p className="text-ink/80">
            FS Grounds &amp; Gardens is a locally owned garden maintenance
            service based in Rothley. We look after gardens right across
            Leicestershire, from regular upkeep to one-off tidy-ups, and we
            treat every garden with the same care we would our own.
          </p>
          <p className="text-ink/80">
            You will always deal with the same friendly face. We turn up on
            time, take pride in the small details, and leave your garden clean
            and tidy before we go.
          </p>
          <p className="text-ink/80">At FS Grounds &amp; Gardens, we are:</p>
          <ul className="text-ink/80 space-y-2 pl-5">
            <li className="text-ink/80 flex items-center gap-2">
              {" "}
              <Check className="text-brand-accent h-5 w-5" /> Locally owned and
              run
            </li>
            <li className="text-ink/80 flex items-center gap-2">
              {" "}
              <Check className="text-brand-accent h-5 w-5" /> Reliable, on-time
              visits
            </li>
            <li className="text-ink/80 flex items-center gap-2">
              {" "}
              <Check className="text-brand-accent h-5 w-5" /> Careful attention
              to detail
            </li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
