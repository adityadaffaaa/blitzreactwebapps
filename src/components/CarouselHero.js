import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bgHero1 from "../assets/img/hero1.png";
import bgHero2 from "../assets/img/hero2.png";
import bgHero3 from "../assets/img/hero3.png";

const CarouselHero = () => {
  return (
    <Swiper
      className="mt-[56px] hero-carousel"
      modules={[Navigation, Pagination, A11y, Autoplay]}
      slidesPerView={1}
      spaceBetween={0}
      loop={{ Infinity }}
      autoplay={{ delay: 8000 }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
    >
      {heroKonten.map((konten, index) => {
        return (
          <SwiperSlide key={index} className="mb-9 lg:mb-12">
            <ElemenCarousel image={konten.img} judul={konten.title} judul2={konten.title2} desc={konten.desc} btn={konten.btn}></ElemenCarousel>
          </SwiperSlide>
        );
      })}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default CarouselHero;

const ElemenCarousel = (props) => {
  return (
    <div className="relative h-[235px] sm:h-[286px] md:h-[414px] lg:h-[670px] w-full">
      <img className="object-cover h-full w-full absolute top-0 -z-10" src={props.image} alt="" />
      <div className="h-full w-full bg-gradient-to-b flex justify-center from-[rgba(0,0,0,0.38)] to-[rgba(3,76,95,0.53)]">
        <div className="flex items-center h-full w-[90%] lg:w-4/5">
          <div className="flex flex-col gap-4">
            <h1 className="text-heading1res text-text2 md:text-heading2 md:font-bold lg:text-heading1 font-poppins">
              {props.judul}
              <span className="text-secondary"> {props.judul2}</span>
            </h1>
            <p className="text-text2 text-paragraph4res md:text-paragraph4 lg:text-paragraph2 w-4/5 lg:w-1/2">{props.desc}</p>
            <div className="wrapbtn">
              <a className="btn-primary-res" href="/">
                {props.btn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const heroKonten = [
  {
    img: bgHero1,
    title: "Selamat Datang di",
    title2: "Blitz",
    desc: "Sedang mencari fotografer atau videografer? Temukan jasa fotografi & videografi terbaik untuk setiap momen berharga yang hanya terjadi sekali dalam hidup",
    btn: "Mulai sebagai customer",
  },
  {
    img: bgHero2,
    title: "Hasilkan Gambar Sekelas Profesional!",
    desc: "Eksplorasi Kemampuan Fotografi Dalam Setiap Bidikan Kamera",
    btn: "Mulai sebagai fotografer",
  },
  { img: bgHero3, title: "Jadilah Bagian Dari Tim Videografi!", desc: "Ciptakan karya memukau untuk kesan indah bagi setiap klien Blitz", btn: "Mulai sebagai videografer" },
];
