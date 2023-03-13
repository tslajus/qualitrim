import { Header, Footer, Wrapper } from "./layouts";
import { Home, Benefits, Clients, Team, ContactUs } from "./sections";

function App() {
  return (
    <Wrapper>
      <Header />
      <Home />
      <Benefits />
      <Clients />
      <Team />
      <ContactUs />
      <Footer />
    </Wrapper>
  );
}

export default App;
