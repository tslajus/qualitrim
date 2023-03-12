import data from "@/data/clientsData.json";
import { TestimonialsBox } from "@/components";
import ClientsHeader from "./parts/ClientsHeader";

function Clients() {
  return (
    <div className="clients">
      <TestimonialsBox data={data.testimonials} />
      <ClientsHeader data={data} />
      <div className="clients__background" />
    </div>
  );
}

export default Clients;
