import { React, useState } from "react";

const Faq = () => {
  const [clicked, setClick] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setClick(null);
    }
    setClick(index);
  };
  return KontenFaq.map((konten, index) => {
    var Arrow = () => {
      if (clicked === index) {
        return ["fill-text2 transition-all ease-in-out duration-200 rotate-180"];
      } else {
        return ["fill-text2 transition-all ease-in-out duration-200 "];
      }
    };
    var KontenAccordion = () => {
      if (clicked === index) {
        return ["content-accordion py-6 px-6 w-full bg-secondary text-text2 rounded-[8px] text-paragraph2res md:px-10 md:text-paragraph2 overflow-hidden transition-all ease-in-out duration-200"];
      } else {
        return ["content-accordion h-0 px-6 w-full bg-secondary text-text2 rounded-[8px] text-paragraph2res md:px-10 md:text-paragraph2 overflow-hidden transition-all ease-in-out duration-200"];
      }
    };
    // var isi = konten.isi;
    return (
      <div key={index} onClick={() => toggle(index)} className="flex flex-col accordion">
        <div className="accordion-faq flex flex-row px-3 lg:px-6 py-[10px] items-center cursor-pointer bg-primary rounded-[8px] justify-between w-full">
          <h5 className="text-text2 text-heading3res font-poppins md:text-paragraph1">{konten.title}</h5>
          <span className={Arrow()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z" />
            </svg>
          </span>
        </div>
        <div className={KontenAccordion()}>
          <ul className="list-disc">
            {konten.isi.map((list, i) => {
              return <li key={i}>{list}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  });
};
export default Faq;

const KontenFaq = [
  {
    title: "Mengapa harus memilih Blitz?",
    isi: [
      "Tersedia jasa fotografi dan jasa videografi dengan kebijakan harga",
      "Fotografer dan videografer berkompeten di bidang industri kreatif",
      "Kualitas foto dan video yang dihasilkan dalam format definisi tinggi (HD)",
      "Metode pembayaran yang mudah cukup dengan mengunggah bukti transfer",
    ],
  },
  {
    title: "Bagaimana melakukan pemesanan jasa di Blitz?",
    isi: [
      "Jelajahi halaman portofolio untuk menemukan fotografer/videografer yang sesuai dengan keinginan Anda",
      "Kunjungi halaman jasa kami untuk memilih jasa fotografi/videografi",
      "Tentukan pilihan kategori yang tersedia",
      "Isi jadwal dan fotografer/videografer",
      "Bayarkan sesuai nominal yang tertera",
      "Konfirmasi pembayaran dengan mengunggah bukti transfer",
    ],
  },
  {
    title: "Apa saja yang akan didapatkan pelanggan dari Blitz?",
    isi: ["File mentah dalam bentuk file lunak (soft file) yang dikirimkan melalui emailyang telah didaftarkan oleh pelanggan", "File yang sudah diedit yang dikirimkan melaluiyang telah didaftarkan oleh pelanggan"],
  },
  {
    title: "Bagaimana cara pembayaran jasa di Blitz?",
    isi: ["Pelanggan dapat membayar jasa Blitz menggunakan rekening pribadi (tidak terbatas pada Bank tertentu). Lalu mengunggah bukti transfer sebagai bentuk konfirmasi pesanan."],
  },
  {
    title: "Bagaimana Blitz mengirimkan hasil kepada pelanggan?",
    isi: [
      "Blitz akan mengirimkan hasil foto dalam dua bentuk file yaitu, file mentah dan file yang telah diedit melalui email yang didaftarkan oleh pelanggan",
      "Blitz akan mengirimkan hasil video yang telah diedit melalui email yang didaftarkan oleh pelanggan",
    ],
  },
];
