import About1 from "../assets/img/about1.png";
import About2 from "../assets/img/about2.png";
import About3 from "../assets/img/about3.png";

const AboutUs = () => {
  return (
    <>
      <section className="flex flex-col items-center gap-3 lg:gap-6 w-full">
        <h1 className="text-heading1res text-center font-poppins text-text1 md:text-heading2 md:font-bold lg:text-heading1">
          Blitz hadir sebagai penyedia jasa fotografi & videografi yang mengutamakan kenyamanan dan kepuasan pelanggan dalam mengabadikan setiap momen.
        </h1>
        <p className="text-paragraph2res text-center lg:text-paragraph2">Kami dapat menyediakan profesional fotografer & videografer untuk memberikan kualitas terbaik dalam setiap momen yang berhasil diabadikan.</p>
        <div className="flex flex-row gap-2 items-center">
          <a className="btn-primary-res" href="/">
            Portofolio
          </a>
          <a className="flex px-4 py-2 gap-1 text-primary text-paragraph5res rounded-[8px] transition-all ease-in-out duration-200 group lg:text-paragraph1 items-center" href="/">
            Jasa Kami
            <span className="fill-primary group-hover:translate-x-2 transition-all ease-in-out duration-200">
              <svg className="h-4 lg:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
              </svg>{" "}
            </span>
          </a>
        </div>
      </section>
      <section className="mt-10 lg:mt-[100px] flex flex-col items-center gap-8 lg:gap-[70px]">
        <figure className="relative w-full flex flex-col md:flex-row overflow-hidden md:overflow-visible rounded-lg bg-cover h-52 sm:h-80 lg:h-auto lg:items-center border-4 border-secondary group hover:shadow-default transition-all ease-in-out duration-500 md:border-none md:rounded-none md:hover:shadow-none">
          <img className="w-full h-full object-cover absolute -z-10 md:relative md:z-0 md:rounded-lg lg:h-[436px] lg:w-auto" src={About1} alt="" />
          <div className="bg-gradient-to-b p-6 from-[rgba(255,255,255,0)] to-primary w-full h-full flex flex-col items-center justify-center text-text2 translate-y-56 transition-all ease-in-out duration-500 group-hover:translate-y-0 md:translate-y-0 md:bg-none md:text-text1 lg:-translate-x-24">
            <div className="flex flex-col gap-2 w-auto items-center md:items-start">
              <h1 className="text-heading1res font-poppins lg:text-heading2">Melampaui Ekspektasi</h1>
              <p className="text-paragraph4res text-center md:text-start md:text-paragraph2res lg:text-paragraph2 lg:max-w-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur augue commodo quis sollicitudin nec venenatis.
              </p>
            </div>
          </div>
        </figure>
        <figure className="relative w-full flex flex-col md:flex-row overflow-hidden md:overflow-visible rounded-lg bg-cover h-52 sm:h-80 lg:h-auto lg:items-center border-4 border-secondary group hover:shadow-default transition-all ease-in-out duration-500 md:border-none md:rounded-none md:hover:shadow-none">
          <img className="w-full h-full object-cover absolute -z-10 md:relative md:z-0 md:hidden" src={About2} alt="" />
          <div className="bg-gradient-to-b p-6 gap-2 from-[rgba(255,255,255,0)] to-primary w-full h-full flex flex-col items-center justify-center text-text2 translate-y-56 transition-all ease-in-out duration-500 group-hover:translate-y-0 md:translate-y-0 md:bg-none md:text-text1 md:items-start">
            <h1 className="text-heading1res font-poppins lg:text-heading2">Kreatif dan Berkomitmen</h1>
            <p className="text-paragraph4res text-center md:text-start md:text-paragraph2res lg:text-paragraph2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur augue commodo quis sollicitudin nec venenatis.</p>
          </div>
          <img className="w-full h-full object-cover absolute -z-10 md:relative md:z-0 hidden md:block md:rounded-lg lg:h-[380px] lg:w-auto" src={About2} alt="" />
        </figure>
        <figure className="relative w-full flex flex-col items-center overflow-hidden md:overflow-visible rounded-lg bg-cover h-52 sm:h-80 md:h-auto border-4 border-secondary group hover:shadow-default transition-all ease-in-out duration-500 md:border-none md:rounded-none md:hover:shadow-none">
          <img className="w-full h-full object-cover absolute -z-10 md:relative md:z-0 md:rounded-lg md:h-80 md:w-auto" src={About3} alt="" />
          <div className="bg-gradient-to-b p-6 gap-2 from-[rgba(255,255,255,0)] to-primary w-full h-full flex flex-col items-center justify-center text-text2 translate-y-56 transition-all ease-in-out duration-500 group-hover:translate-y-0 md:translate-y-0 md:bg-none md:text-text1">
            <h1 className="text-heading1res font-poppins lg:text-heading2">KALEIDOSKOP BLITZ</h1>
            <p className="text-paragraph4res text-center md:text-paragraph2res lg:text-paragraph2">Canda, tawa, dan bahagia dalam bidikan kamera</p>
          </div>
        </figure>
      </section>
    </>
  );
};

export default AboutUs;
