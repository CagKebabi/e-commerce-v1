import { Link } from "react-router-dom";

function Anasayfa({ ürünler, sepeteEkle }) {
  return (
    <main>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Öne Çıkan Ürünler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ürünler.map((ürün) => (
            <div key={ürün.id} className="border rounded-lg p-4 shadow-md">
              <Link to={`/urun/${ürün.id}`}>
                <img
                  src={ürün.resim}
                  alt={ürün.isim}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold">{ürün.isim}</h3>
                <p className="text-gray-600">{ürün.fiyat} TL</p>
              </Link>
              <button
                onClick={() => sepeteEkle(ürün)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
              >
                Sepete Ekle
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Anasayfa;
