import { Destaque } from "../Destaque";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <section>
        <Destaque />
      </section>
      <Footer />  
    </>
  );
}