import data from "@/data/contactUsData.json";
import ContactUsForm from "./parts/ContactUsForm";
import ContactUsGallery from "./parts/ContactUsGallery";

function Form() {
  return (
    <section id="contact-us" className="contacts">
      <ContactUsForm data={data} />
      <ContactUsGallery gallery={data.gallery} shadow={data.shadow} />
    </section>
  );
}

export default Form;
