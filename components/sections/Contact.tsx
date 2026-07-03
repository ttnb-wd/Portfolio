import Container from "@/components/shared/Container";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactCard from "@/components/contact/ContactCard";
import ContactCTA from "@/components/contact/ContactCTA";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-50 py-32"
    >
      <Container>
        <ContactHeader />
        <div className="mt-12">
            <ContactCard />
        </div>
        <ContactCTA />
      </Container>
    </section>
  );
}