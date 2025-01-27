import UrunKart from "../components/UrunKart";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

function Anasayfa({ ürünler, sepeteEkle }) {
  const mainSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  const productSliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5, // Alttaki sliderda 5 ürün gösterilecek
    slidesToScroll: 5,
    //autoplay: true,
    //autoplaySpeed: 3000,
    arrows: false,
    dots: false,
  };
  const sliderRef = useRef(null); // Slider referansı
  return (
    <main>
      <section className="mb-12">
        <div className="max-w-7xl mx-auto px-4">
          <Slider {...mainSliderSettings}>
            {ürünler.slice(0, 5).map(
              (
                ürün // İlk 5 ürünü sliderda göster
              ) => (
                <div key={ürün.id} className="relative h-96">
                  <img
                    src={
                      "https://fastly.picsum.photos/id/367/4928/3264.jpg?hmac=H-2OwMlcYm0a--Jd2qaZkXgFZFRxYyGrkrYjupP8Sro"
                    }
                    alt={ürün.ad}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6 rounded-b-lg">
                    <h3 className="text-3xl font-bold mb-2">{ürün.ad}</h3>
                    <p className="text-lg">{ürün.açıklama}</p>
                  </div>
                </div>
              )
            )}
          </Slider>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Öne Çıkan Ürünler</h2>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex justify-between absolute w-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => sliderRef.current.slickPrev()} // Önceki slayta git
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Önceki
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()} // Sonraki slayta git
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Sonraki
            </button>
          </div>
          <Slider ref={sliderRef} {...productSliderSettings} draggable={false}>
            {ürünler.map(
              (
                ürün // Alttaki sliderda tüm ürünler gösterilecek
              ) => (
                <div key={ürün.id} className="relative h-96">
                  <UrunKart ürün={ürün} sepeteEkle={sepeteEkle} />
                </div>
              )
            )}
          </Slider>
        </div>
      </section>
      {/* <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Öne Çıkan Ürünler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ürünler.map((ürün) => (
            <UrunKart key={ürün.id} ürün={ürün} sepeteEkle={sepeteEkle} />
          ))}
        </div>
      </section> */}
      {/* <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Öne Çıkan Ürünler</h2>
        <div className="max-w-7xl mx-auto px-4">
          <Slider {...settings}>
            {ürünler.map(
              (
                ürün // Tüm ürünleri sliderda göster
              ) => (
                <div key={ürün.id} className="relative h-96">
                  <UrunKart ürün={ürün} sepeteEkle={sepeteEkle} />
                </div>
              )
            )}
          </Slider>
        </div>
      </section> */}
    </main>
  );
}

export default Anasayfa;
