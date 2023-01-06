import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TestimonialContents } from "../static/TestimonialContents";
const CarouselTestimonials = () => {
  return (
    <Swiper
      className="ulasan-carousel w-full md:w-[90%] lg:max-w-[1064px] container relative"
      modules={[Navigation, Pagination, A11y, Autoplay]}
      slidesPerView={1}
      spaceBetween={30}
      loop={{ Infinity }}
      autoplay={{ delay: 8000 }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      }}
      navigation={{
        nextEl: ".swiper-ulasan-button-next",
        prevEl: ".swiper-ulasan-button-prev",
      }}
    >
      {TestimonialContents.map((konten, index) => {
        return (
          <SwiperSlide key={index} className="mb-9 mt-16 md:mt-6">
            <ElemenTestimonials image={konten.img} nama={konten.nama} desc={konten.desc} isi={konten.isi} rate={konten.rate}></ElemenTestimonials>
          </SwiperSlide>
        );
      })}
      <div className="flex-row justify-between w-full h-full items-center z-50 absolute top-0 hidden md:flex">
        <div className="swiper-ulasan-button-prev bg-secondary rounded-full hover:bg-background2 transition-all ease-in-out duration-200 fill-text2 left-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
          </svg>
        </div>
        <div className="swiper-ulasan-button-next bg-secondary rounded-full hover:bg-background2 transition-all ease-in-out duration-200 fill-text2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
          </svg>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default CarouselTestimonials;

const ElemenTestimonials = (props) => {
  var rates = props.rate;
  return (
    <div className=" w-full md:flex md:justify-center">
      <div className="w-full bg-primary md:w-[95%] p-6 md:p-12 relative rounded-3xl flex flex-col md:flex-row md:justify-center gap-4 items-center text-text2">
        <div className="lg:flex flex justify-center w-full items-center md:justify-start lg:items-center md:gap-10">
          <img className="h-[120px] lg:h-[188px] md:relative md:top-0 absolute -top-[60px] border-4 border-secondary md:border-text2 rounded-full" src={props.image} alt="" />
          <div className="flex flex-col md:items-start items-center gap-4">
            <div className="flex flex-col items-center md:items-start md:mt-0 mt-10">
              <h3 className="text-heading3res font-poppins lg:text-heading4">{props.nama}</h3>
              <p className="text-paragraph4res text-text3 lg:text-paragraph4">{props.desc}</p>
            </div>
            <p className="text-text2 text-paragraph4res lg:text-paragraph4 md:text-start text-center">{props.isi}</p>
            <ul className="flex flex-row fill-background3 gap-1">
              {rates.map((value, i) => {
                return (
                  <li key={i}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
                    </svg>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
