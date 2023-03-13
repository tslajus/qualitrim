import data from "@/data/clientsData.json";
import { TestimonialsBox } from "@/components";
import ClientsHeader from "./parts/ClientsHeader";

function Clients() {
  return (
    <section id="testimonials" className="clients">
      <TestimonialsBox data={data.testimonials} />
      <ClientsHeader data={data} />
      <div className="clients__background">
        <div className="clients__background--top" />
        <div className="clients__background--bottom" />
      </div>
    </section>
  );
}

export default Clients;
