import data from "@/data/contactUsData.json";
import ContactUsForm from "./parts/ContactUsForm";
import ContactUsGallery from "./parts/ContactUsGallery";
import { LazyLoading } from "@/components";

function Form() {
  return (
    <section id="contact-us" className="contacts">
      <ContactUsForm data={data} />
      <LazyLoading key={data.heading}>
        <ContactUsGallery gallery={data.gallery} shadow={data.shadow} />
      </LazyLoading>
    </section>
  );
}

export default Form;
