import { useNavigate } from "react-router-dom";

function Sepet({ sepet, setSepet }) {
  const navigate = useNavigate();

  const ürünüSil = (ürünId) => {
    setSepet(sepet.filter((item) => item.id !== ürünId));
  };

  const adetGüncelle = (ürünId, yeniAdet) => {
    if (yeniAdet < 1) {
      ürünüSil(ürünId);
      return;
    }
    setSepet(
      sepet.map((item) =>
        item.id === ürünId ? { ...item, adet: yeniAdet } : item
      )
    );
  };

  const toplamTutar = sepet.reduce(
    (toplam, item) => toplam + item.fiyat * item.adet,
    0
  );

  if (sepet.length === 0) {
    return <div className="text-center py-8">Sepetiniz boş!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Sepetim</h1>
      <div className="space-y-4">
        {sepet.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border p-4 rounded-lg"
          >
            <img
              src={item.resim}
              alt={item.isim}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.isim}</h3>
              <p className="text-gray-600">{item.fiyat} TL</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => adetGüncelle(item.id, item.adet - 1)}
                className="px-2 py-1 border rounded"
              >
                -
              </button>
              <span>{item.adet}</span>
              <button
                onClick={() => adetGüncelle(item.id, item.adet + 1)}
                className="px-2 py-1 border rounded"
              >
                +
              </button>
            </div>
            <button
              onClick={() => ürünüSil(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              Sil
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <p className="text-xl font-bold">Toplam: {toplamTutar} TL</p>
        <button
          onClick={() => navigate("/odeme")}
          className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Siparişi Tamamla
        </button>
      </div>
    </div>
  );
}

export default Sepet;
