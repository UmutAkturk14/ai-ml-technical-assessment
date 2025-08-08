import { Navbar, Main, Product, Footer } from "../components";
import AIChatButton from "../components/AIChatButton";

function Home() {
  return (
    <>
      <Navbar />
      <AIChatButton />
      <Main />
      <Product />
      <Footer />
    </>
  );
}

export default Home;
