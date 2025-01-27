import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaEye, FaShoppingCart } from "react-icons/fa";
import UrunDetayModal from "./UrunDetayModal";
import UrunResimSlider from "./UrunResimSlider";

function UrunKart({ ürün, sepeteEkle }) {
  const [favori, setFavori] = useState(false);
  const [modalAçık, setModalAçık] = useState(false);

  const indirimOranı = ürün.eskiFiyat
    ? Math.round(((ürün.eskiFiyat - ürün.fiyat) / ürün.eskiFiyat) * 100)
    : 0;

  const stokDurumu = ürün.stokMiktari > 0;

  // Fiyat formatlaması için yardımcı fonksiyon
  const formatFiyat = (fiyat) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 2,
    }).format(fiyat);
  };

  return (
    <div className="border rounded-lg p-4 shadow-md relative group">
      {/* Üst Butonlar */}
      <div className="absolute top-2 right-2 z-10 flex gap-2">
        <button
          onClick={() => setModalAçık(true)}
          className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <FaEye className="text-gray-400 text-xl" />
        </button>
        <button
          onClick={() => setFavori(!favori)}
          className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          {favori ? (
            <FaHeart className="text-red-500 text-xl" />
          ) : (
            <FaRegHeart className="text-gray-400 text-xl" />
          )}
        </button>
      </div>

      {/* İndirim Badge'i */}
      {indirimOranı > 0 && (
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md z-10">
          %{indirimOranı} İndirim
        </div>
      )}

      {/* Ürün Resimleri */}
      <Link to={`/urun/${ürün.id}`}>
        <img
          src={ürün.resim || ürün.resimler?.[0]}
          alt={ürün.isim}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      </Link>

      {/* Ürün Bilgileri */}
      <Link to={`/urun/${ürün.id}`}>
        <h3 className="text-lg font-semibold">{ürün.isim}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-bold text-blue-600">
            {formatFiyat(ürün.fiyat)}
          </span>
          {ürün.eskiFiyat && (
            <span className="text-sm text-gray-500 line-through">
              {formatFiyat(ürün.eskiFiyat)}
            </span>
          )}
        </div>
      </Link>

      {/* Stok Durumu */}
      <div className="mt-2">
        {stokDurumu ? (
          <span className="text-sm text-green-500">Stokta Mevcut</span>
        ) : (
          <span className="text-sm text-red-500">Stokta Yok</span>
        )}
      </div>

      {/* Sepete Ekle Butonu */}
      <button
        onClick={() => sepeteEkle(ürün)}
        disabled={!stokDurumu}
        className={`mt-4 px-4 py-2 rounded w-full flex items-center justify-center gap-2 ${
          stokDurumu
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        <FaShoppingCart />
        {stokDurumu ? "Sepete Ekle" : "Stokta Yok"}
      </button>

      {/* Hızlı Bakış Modalı */}
      {modalAçık && (
        <UrunDetayModal ürün={ürün} kapat={() => setModalAçık(false)} />
      )}
    </div>
  );
}

export default UrunKart;
