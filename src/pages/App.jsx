import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Anasayfa from "./Anasayfa";
import UrunDetay from "./UrunDetay";
import Sepet from "./Sepet";
import Odeme from "./Odeme";
import Profil from "./Profil";
import Iletisim from "./Iletisim";
import Login from "./Login";
import Register from "./Register";
import SifremiUnuttum from "./SifremiUnuttum";
import urunler from "../data/urunler";

function App() {
  const [sepet, setSepet] = useState([]);
  const [ürünler] = useState([
    {
      id: 1,
      isim: "Akıllı Telefon",
      fiyat: 8999,
      resim: "https://picsum.photos/200/300",
      açıklama: "Son model akıllı telefon, 128GB depolama, 8GB RAM",
    },
    {
      id: 2,
      isim: "Laptop",
      fiyat: 15999,
      resim: "https://picsum.photos/200/300",
      açıklama: "Güçlü işlemci, 512GB SSD, 16GB RAM",
    },
    {
      id: 3,
      isim: "Kablosuz Kulaklık",
      fiyat: 1299,
      resim: "https://picsum.photos/200/300",
      açıklama: "Aktif gürültü önleme, 30 saat pil ömrü",
    },
  ]);

  const sepeteEkle = (ürün) => {
    const sepettekiÜrün = sepet.find((item) => item.id === ürün.id);
    if (sepettekiÜrün) {
      setSepet(
        sepet.map((item) =>
          item.id === ürün.id ? { ...item, adet: item.adet + 1 } : item
        )
      );
    } else {
      setSepet([...sepet, { ...ürün, adet: 1 }]);
    }
  };

  return (
    <BrowserRouter>
      <div className="container mx-auto p-4">
        <Navbar
          sepetAdedi={sepet.reduce((toplam, item) => toplam + item.adet, 0)}
        />
        <Routes>
          <Route
            path="/"
            element={<Anasayfa ürünler={urunler} sepeteEkle={sepeteEkle} />}
          />
          <Route
            path="/urun/:id"
            element={<UrunDetay ürünler={ürünler} sepeteEkle={sepeteEkle} />}
          />
          <Route
            path="/sepet"
            element={<Sepet sepet={sepet} setSepet={setSepet} />}
          />
          <Route
            path="/odeme"
            element={<Odeme sepet={sepet} setSepet={setSepet} />}
          />
          <Route path="/profil" element={<Profil />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="/giris" element={<Login />} />
          <Route path="/kayit" element={<Register />} />
          <Route path="/sifremi-unuttum" element={<SifremiUnuttum />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
