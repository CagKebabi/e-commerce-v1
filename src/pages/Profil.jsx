import { useState } from "react";
import { FaUser, FaHistory, FaHeart, FaEdit } from "react-icons/fa";

function Profil() {
  const [aktifTab, setAktifTab] = useState("profil");
  const [kullanıcı] = useState({
    ad: "Ahmet",
    soyad: "Yılmaz",
    email: "ahmet@ornek.com",
    telefon: "0555 555 55 55",
    adres: "İstanbul, Türkiye",
    profilResmi: "https://picsum.photos/200/300",
  });

  const [siparişler] = useState([
    { id: 1, tarih: "2024-03-15", durum: "Teslim Edildi", tutar: "1250 TL" },
    { id: 2, tarih: "2024-03-10", durum: "Kargoda", tutar: "750 TL" },
  ]);

  const [favoriler] = useState([
    {
      id: 1,
      ad: "Akıllı Telefon",
      fiyat: "15000 TL",
      resim: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      ad: "Laptop",
      fiyat: "25000 TL",
      resim: "https://via.placeholder.com/100",
    },
  ]);

  const [düzenlemeModuAktif, setDüzenlemeModuAktif] = useState(false);

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="flex gap-6">
        {/* Sol Menü */}
        <div className="w-64">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex flex-col items-center mb-6">
              <img
                src={kullanıcı.profilResmi}
                alt="Profil"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h2 className="text-xl font-bold">{`${kullanıcı.ad} ${kullanıcı.soyad}`}</h2>
            </div>

            <nav>
              <button
                onClick={() => setAktifTab("profil")}
                className={`flex items-center gap-2 w-full p-2 rounded ${
                  aktifTab === "profil"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <FaUser /> Profil Bilgileri
              </button>
              <button
                onClick={() => setAktifTab("siparisler")}
                className={`flex items-center gap-2 w-full p-2 rounded mt-2 ${
                  aktifTab === "siparisler"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <FaHistory /> Sipariş Geçmişi
              </button>
              <button
                onClick={() => setAktifTab("favoriler")}
                className={`flex items-center gap-2 w-full p-2 rounded mt-2 ${
                  aktifTab === "favoriler"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <FaHeart /> Favoriler
              </button>
            </nav>
          </div>
        </div>

        {/* Sağ İçerik */}
        <div className="flex-1">
          <div className="bg-white shadow-md rounded-lg p-6">
            {aktifTab === "profil" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold">Profil Bilgileri</h1>
                  <button
                    onClick={() => setDüzenlemeModuAktif(!düzenlemeModuAktif)}
                    className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    <FaEdit /> {düzenlemeModuAktif ? "İptal" : "Düzenle"}
                  </button>
                </div>

                {Object.entries(kullanıcı).map(([key, value]) => {
                  if (key === "profilResmi") return null;
                  return (
                    <div key={key} className="mb-4">
                      <label className="font-semibold block mb-1">
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                      </label>
                      {düzenlemeModuAktif ? (
                        <input
                          type="text"
                          defaultValue={value}
                          className="w-full p-2 border rounded"
                        />
                      ) : (
                        <p className="text-gray-700">{value}</p>
                      )}
                    </div>
                  );
                })}

                {düzenlemeModuAktif && (
                  <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Kaydet
                  </button>
                )}
              </div>
            )}

            {aktifTab === "siparisler" && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Sipariş Geçmişi</h1>
                <div className="space-y-4">
                  {siparişler.map((sipariş) => (
                    <div key={sipariş.id} className="border rounded p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold">Sipariş #{sipariş.id}</p>
                          <p className="text-gray-600">
                            Tarih: {sipariş.tarih}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{sipariş.tutar}</p>
                          <p className="text-green-500">{sipariş.durum}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {aktifTab === "favoriler" && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Favori Ürünlerim</h1>
                <div className="grid grid-cols-2 gap-4">
                  {favoriler.map((ürün) => (
                    <div
                      key={ürün.id}
                      className="border rounded p-4 flex gap-4"
                    >
                      <img
                        src={ürün.resim}
                        alt={ürün.ad}
                        className="w-24 h-24 object-cover"
                      />
                      <div>
                        <h3 className="font-semibold">{ürün.ad}</h3>
                        <p className="text-gray-600">{ürün.fiyat}</p>
                        <button className="text-red-500 hover:text-red-600 mt-2">
                          Favorilerden Çıkar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
