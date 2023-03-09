import data from "@/data/clientsData.json";
import { TestimonialsBox } from "@/components";
import ClientsTextBox from "./ClientsTextBox";

type Props = {};

function Clients({}: Props) {
  return (
    <div className="clients">
      <TestimonialsBox data={data.testimonials} />
      <div className="clients__text-box">
        <ClientsTextBox />
      </div>
      <div className="clients__background" />
    </div>
  );
}

export default Clients;
