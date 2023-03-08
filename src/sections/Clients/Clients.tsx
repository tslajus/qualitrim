import { TestimonialsBox } from "@/components";
import ClientsTextBox from "./ClientsTextBox";

type Props = {};

function Clients({}: Props) {
  return (
    <div className="clients">
      <TestimonialsBox />

      <div className="clients__background">
        <ClientsTextBox />
      </div>
    </div>
  );
}

export default Clients;
