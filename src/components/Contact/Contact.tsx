import ContactCard from "./components/ContactCard";
import ContactForm from "./components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get in touch</h2>
        <span className="section-subtitle">Contact me</span>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(2,_max-content)] justify-center gap-12 xm:gap-24 pb-12">
          <div>
            <h3 className="mb-6 text-h3 font-medium text-center">Talk to me</h3>
            <div className="w-full sm:w-[360px] mx-auto md:mx-0 flex flex-col gap-4">
              <ContactCard
                title="Email"
                subtitle="tchekerdes.vgen@ukr.net"
                icon={<i className="bx bx-mail-send"></i>}
                linkText="Write me"
                linkHref="mailto:tchekerdes.vgen@ukr.net"
              />
              <ContactCard
                title="Telegram"
                subtitle="t.me/ev6enij"
                icon={<i className="bx bxl-telegram"></i>}
                linkText="Write me"
                linkHref="https://t.me/ev6enij"
              />
              <ContactCard
                title="Phone"
                subtitle="+38 (095) 784 29 60"
                icon={<i className="bx bx-phone"></i>}
                linkText="Call me"
                linkHref="tel:+380957842960"
              />
            </div>
          </div>
          <div className="w-full sm:w-[360px] mx-auto md:mx-0">
            <h3 className="mb-6 text-h3 font-medium text-center">Write me your project</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
