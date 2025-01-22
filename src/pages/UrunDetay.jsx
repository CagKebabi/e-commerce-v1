import { useParams, useNavigate } from "react-router-dom";

function UrunDetay({ ürünler, sepeteEkle }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const ürün = ürünler.find((ü) => ü.id === parseInt(id));

  if (!ürün) {
    return <div>Ürün bulunamadı!</div>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-500 hover:underline"
      >
        ← Geri Dön
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={ürün.resim} alt={ürün.isim} className="w-full rounded-lg" />
        <div>
          <h1 className="text-3xl font-bold mb-4">{ürün.isim}</h1>
          <p className="text-gray-600 mb-4">{ürün.açıklama}</p>
          <p className="text-2xl font-bold mb-4">{ürün.fiyat} TL</p>
          <button
            onClick={() => sepeteEkle(ürün)}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 w-full"
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}

export default UrunDetay;
