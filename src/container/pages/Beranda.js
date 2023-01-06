import AboutUs from "../../components/AboutUs.js";
import CarouselHero from "../../components/CarouselHero.js";
import CarouselTestimonials from "../../components/CarouselTestimonials.js";
import Faq from "../../components/Faq.js";
import Footer from "../../components/Footer.js";
import KlienKami from "../../components/KlienKami.js";

var Beranda = () => {
  return (
    <>
      <CarouselHero />;
      <div className="w-full flex justify-center">
        <div className="container mx-6 mt-10 lg:mt-10 lg:mx-0 lg:w-4/5">
          <AboutUs />
        </div>
      </div>
      <section className="mt-10 lg:mt-[100px] mx-6 flex flex-col items-center gap-2">
        <h1 className="text-heading1res md:text-heading2 md:font-bold lg:text-heading1 text-center font-poppins text-text1">Apa kata mereka?</h1>
        <CarouselTestimonials />
      </section>
      <section className="mt-10 lg:mt-[100px] mx-6 flex flex-col gap-6 items-center">
        <h1 className="text-text1 text-heading1res font-poppins md:text-heading1">Tentang Blitz</h1>
        <div className="flex flex-col md:w-3/4 lg:w-1/2 gap-3">
          <Faq />
        </div>
      </section>
      <KlienKami />
      <Footer />
    </>
  );
};

export default Beranda;
