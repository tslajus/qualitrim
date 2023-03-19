import data from "@/data/clientsData.json";
import TestimonialsBox from "./parts/TestimonialsBox";
import ClientsHeader from "./parts/ClientsHeader";
import { LazyLoading } from "@/components";

function Clients() {
  return (
    <section id="testimonials" className="clients">
      <div className="clients__testimonials">
        <LazyLoading key={data.heading}>
          <TestimonialsBox data={data.testimonials} />
        </LazyLoading>
      </div>

      <ClientsHeader data={data} />
      <div className="clients__background" />
    </section>
  );
}

export default Clients;
