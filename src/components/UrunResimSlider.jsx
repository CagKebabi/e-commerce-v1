import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
    >
      <FaChevronRight className="text-gray-600" />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
    >
      <FaChevronLeft className="text-gray-600" />
    </button>
  );
}

function UrunResimSlider({ resimler, className }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={`relative max-h-[200px] ${className}`}>
      <Slider {...settings}>
        {resimler.map((resim, index) => (
          <div key={index} className="outline-none h-[200px]">
            <img
              src={resim}
              alt={`Ürün resmi ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default UrunResimSlider;
