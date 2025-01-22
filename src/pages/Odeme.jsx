import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Odeme({ sepet, setSepet }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ad: "",
    soyad: "",
    email: "",
    telefon: "",
    adres: "",
    kartNumarasi: "",
    sonKullanma: "",
    cvv: "",
  });

  const toplamTutar = sepet.reduce(
    (toplam, item) => toplam + item.fiyat * item.adet,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada normalde ödeme işlemi API'si çağrılır
    alert("Siparişiniz başarıyla tamamlandı!");
    setSepet([]); // Sepeti temizle
    navigate("/"); // Ana sayfaya yönlendir
  };

  if (sepet.length === 0) {
    navigate("/sepet");
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Ödeme Bilgileri</h1>

      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h2 className="font-semibold mb-2">Sipariş Özeti</h2>
        {sepet.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>
              {item.isim} x {item.adet}
            </span>
            <span>{item.fiyat * item.adet} TL</span>
          </div>
        ))}
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between font-bold">
            <span>Toplam</span>
            <span>{toplamTutar} TL</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Ad</label>
            <input
              type="text"
              name="ad"
              value={formData.ad}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Soyad</label>
            <input
              type="text"
              name="soyad"
              value={formData.soyad}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1">E-posta</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Telefon</label>
          <input
            type="tel"
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Adres</label>
          <textarea
            name="adres"
            value={formData.adres}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
            rows="3"
          />
        </div>

        <div className="border-t pt-4 mt-4">
          <h2 className="text-xl font-semibold mb-4">Kart Bilgileri</h2>

          <div>
            <label className="block mb-1">Kart Numarası</label>
            <input
              type="text"
              name="kartNumarasi"
              value={formData.kartNumarasi}
              onChange={handleChange}
              required
              placeholder="1234 5678 9012 3456"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block mb-1">Son Kullanma Tarihi</label>
              <input
                type="text"
                name="sonKullanma"
                value={formData.sonKullanma}
                onChange={handleChange}
                required
                placeholder="AA/YY"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
                placeholder="123"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            type="button"
            onClick={() => navigate("/sepet")}
            className="text-gray-600 hover:text-gray-800"
          >
            ← Sepete Dön
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Ödemeyi Tamamla
          </button>
        </div>
      </form>
    </div>
  );
}

export default Odeme;
