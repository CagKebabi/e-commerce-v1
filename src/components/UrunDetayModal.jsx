import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import UrunResimSlider from "./UrunResimSlider";

function UrunDetayModal({ ürün, kapat }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full mx-4 relative">
        <button
          onClick={kapat}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes className="text-xl" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.isArray(ürün.resimler) && ürün.resimler.length > 1 ? (
            <UrunResimSlider
              resimler={ürün.resimler}
              className="h-64 rounded-lg"
            />
          ) : (
            <img
              src={ürün.resim || ürün.resimler?.[0]}
              alt={ürün.isim}
              className="w-full h-64 object-cover rounded-lg"
            />
          )}

          <div>
            <h2 className="text-2xl font-bold mb-4">{ürün.isim}</h2>
            <p className="text-gray-600 mb-4">{ürün.açıklama}</p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-blue-600">
                {ürün.fiyat} TL
              </span>
              {ürün.eskiFiyat && (
                <span className="text-lg text-gray-500 line-through">
                  {ürün.eskiFiyat} TL
                </span>
              )}
            </div>
            <Link
              to={`/urun/${ürün.id}`}
              className="text-blue-500 hover:text-blue-600"
            >
              Ürün detaylarına git →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UrunDetayModal;
