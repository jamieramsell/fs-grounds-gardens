import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="">
      {/* Green band */}
      <div className="bg-cream">
        <Container>
          <div className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
            <div className="space-y-6">
              <h1 className="text-brand text-4xl font-bold tracking-tight md:text-5xl">
                Gardens tidied, maintained, and improved.
              </h1>
              <p className="text-ink/80 text-lg">
                Reliable garden maintenance services across Leicestershire.
              </p>
              <Button href="#contact">Get a free quote</Button>
            </div>

            {/* placeholder hero image — swap for a real photo later */}
            <div
              className="bg-brand-light/20 aspect-[4/3] rounded-lg"
              aria-hidden="true"
            />
          </div>
        </Container>
      </div>
    </section>
  );
}
