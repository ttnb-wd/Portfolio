import ContactLinks from "./ContactLinks";

export default function ContactCard() {
  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <ContactLinks />
    </div>
  );
}