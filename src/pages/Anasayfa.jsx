import UrunKart from "../components/UrunKart";

function Anasayfa({ ürünler, sepeteEkle }) {
  return (
    <main>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Öne Çıkan Ürünler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ürünler.map((ürün) => (
            <UrunKart key={ürün.id} ürün={ürün} sepeteEkle={sepeteEkle} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Anasayfa;
