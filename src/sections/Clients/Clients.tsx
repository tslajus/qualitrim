import data from "@/data/clientsData.json";
import TestimonialsBox from "./parts/TestimonialsBox";
import ClientsHeader from "./parts/ClientsHeader";

function Clients() {
  return (
    <section id="testimonials" className="clients">
      <div className="clients__testimonials">
        <TestimonialsBox data={data.testimonials} />
      </div>

      <ClientsHeader data={data} />
      <div className="clients__background" />
    </section>
  );
}

export default Clients;
