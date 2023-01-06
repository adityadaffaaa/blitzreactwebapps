import BlitzLogoWhite from "../assets/Blitz Logo White.png";

const Footer = () => {
  return (
    <>
      <footer className="mt-20 lg:mt-[100px] bg-secondary p-6 flex rounded-t-2xl lg:p-10 justify-center items-center text-text2">
        <div className="flex flex-col md:flex-row md:justify-between w-full md:w-[90%] gap-6">
          <div className="flex flex-col md:items-start items-center gap-2">
            <img className="w-20 lg:w-40" src={BlitzLogoWhite} alt="" />
            <p className="text-paragraph1res font-poppins italic">CAPTURE A BEAUTIFUL MOMENT WITH US</p>
          </div>
          <div className="flex flex-col md:items-start items-center md:text-start text-center gap-2">
            <p className="text-paragraph1res font-poppins lg:text-paragraph1">Lokasi</p>
            <p className="text-paragraph2res lg:text-paragraph2 md:max-w-[300px]">2HJV+G2V, Jl. Dieng Atas, Sumberjo, Kalisongo, Kec. Dau, Kabupaten Malang, Jawa Timur 65151</p>
          </div>
          <div className="flex flex-col md:items-start items-center md:text-start text-center gap-2">
            <p className="text-paragraph1res font-poppins lg:text-paragraph1">Kontak Kami</p>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-paragraph2res lg:text-paragraph2">(+62) 81807866444</p>
              <p className="text-paragraph2res lg:text-paragraph2">blitz@gmail.com</p>
            </div>
            <ul className="flex flex-row gap-2">
              <li>
                <a href="/">
                  <svg className="hover:scale-110 transition-default fill-text2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/">
                  <svg className="hover:scale-110 transition-default fill-text2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/">
                  <svg className="hover:scale-110 transition-default fill-text2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M22 10.69c0 1.787-.687 3.4-2.123 4.974-2.1 2.414-6.788 5.363-7.864 5.812-1.074.451-.911-.287-.874-.537l.137-.85c.034-.262.068-.65-.032-.9-.112-.277-.556-.424-.881-.492C5.558 18.059 2 14.7 2 10.69c0-4.475 4.487-8.118 10-8.118 5.512 0 10 3.643 10 8.118zm-3.6 3.625c1.113-1.22 1.6-2.361 1.6-3.625 0-3.268-3.51-6.118-8-6.118s-8 2.85-8 6.118c0 2.905 2.728 5.507 6.626 6.024l.147.026c1.078.226 1.884.614 2.329 1.708l.036.096c1.806-1.176 4.174-2.98 5.261-4.229zm-.262-4a.526.526 0 0 1 0 1.05h-1.463v.938h1.462a.525.525 0 1 1 0 1.049H16.15a.526.526 0 0 1-.522-.524V8.852c0-.287.235-.525.525-.525h1.988a.525.525 0 0 1-.003 1.05h-1.462v.938h1.462zm-3.213 2.513a.524.524 0 0 1-.526.522.515.515 0 0 1-.425-.208l-2.036-2.764v2.45a.525.525 0 0 1-1.047 0V8.852a.522.522 0 0 1 .52-.523c.162 0 .312.086.412.211l2.052 2.775V8.852c0-.287.235-.525.525-.525.287 0 .525.238.525.525v3.976zm-4.784 0a.527.527 0 0 1-.526.524.526.526 0 0 1-.523-.524V8.852c0-.287.236-.525.525-.525.289 0 .524.238.524.525v3.976zm-2.055.524H6.097a.528.528 0 0 1-.525-.524V8.852a.527.527 0 0 1 1.05 0v3.45h1.464a.525.525 0 0 1 0 1.05z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <span className="bg-primary w-full flex justify-center py-2 text-text2 text-paragraph2res lg:text-paragraph2">© 2022 Blitz</span>
    </>
  );
};

export default Footer;
