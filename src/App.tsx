import { Header, Footer } from "./layouts";
import { Home, Benefits, Clients, Team, ContactUs } from "./sections";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Benefits />
      <Clients />
      <Team />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
