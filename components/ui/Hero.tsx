import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="">
      {/* Green band */}
      <Container>
        <h1>Gardens tidied, maintained, and improved.</h1>
        <p>Reliable garden maintenance services across Leicestershire.</p>
        <Button href="#contact">Get a free quote</Button>
      </Container>
    </section>
  );
}
