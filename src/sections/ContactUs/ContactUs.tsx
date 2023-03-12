import data from "@/data/contactUsData.json";
import ContactUsForm from "./parts/ContactUsForm";
import ContactUsGallery from "./parts/ContactUsGallery";

function Form() {
  return (
    <div className="contacts">
      <ContactUsForm data={data} />
      <ContactUsGallery gallery={data.gallery} shadow={data.shadow} />
    </div>
  );
}

export default Form;
