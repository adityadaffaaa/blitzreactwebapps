import { ListBrand } from "../static/KlienKamiContents";
const KlienKami = () => {
  return (
    <section className="mt-10 lg:mt-[100px] mx-6 flex flex-col items-center gap-3 md:gap-6">
      <h1 className="text-text1 text-heading1res md:text-heading1 font-poppins">Klien Kami</h1>
      <div className="grid grid-cols-4 w-full md:w-auto justify-items-center gap-4 md:gap-10">
        {ListBrand.map((value, index) => {
          var Ukuran = () => {
            if (index === 5 || index === 7) {
              return ["w-[32px] md:w-[82px] lg:w-[112px]"];
            } else {
              return ["w-[50px] md:w-[114px] lg:w-[136px]"];
            }
          };
          return <Brand key={index} ukuran={Ukuran()} logo={value} />;
        })}
      </div>
      <a className="flex px-4 py-2 md:px-4 md:py-3 md:text-paragraph3 lg:px-6 lg:py-4 gap-1 bg-primary text-text2 text-paragraph5res lg:text-paragraph1 rounded-[8px] transition-all ease-in-out duration-200 group" href="/">
        Jasa Kami
        <span className="fill-text2 group-hover:translate-x-2 transition-all ease-in-out duration-200">
          <svg className="md:h-6 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
          </svg>{" "}
        </span>
      </a>
    </section>
  );
};
export default KlienKami;

const Brand = (props) => {
  return (
    <a href="/">
      <div className="h-16 w-16 md:h-32 md:w-32 lg:h-40 lg:w-40 flex justify-center items-center rounded-full hover:shadow-default hover:scale-110 transition-default">
        <img className={props.ukuran} src={props.logo} alt="" />
      </div>
    </a>
  );
};
