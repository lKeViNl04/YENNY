import ContactForm from "../components/Contact/ContactSectionForm";

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-black/40">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="https://javierceballosjimenezweb.wordpress.com/wp-content/uploads/2018/02/cropped-javier-ceballos-jimc3a9nez-head.jpg"
          alt="background"
          className="w-full h-80 object-cover opacity-70 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.9)_10%,rgba(0,0,0,0)_100%)]"
        />
      </div>
      <ContactForm />
    </section>
  );
}
