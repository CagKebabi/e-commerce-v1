import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Iletisim() {
  const [formData, setFormData] = useState({
    ad: "",
    email: "",
    konu: "",
    mesaj: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log("Form gönderildi:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Bize Ulaşın</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* İletişim Bilgileri */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-6">İletişim Bilgilerimiz</h2>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaPhone className="text-blue-500 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">Telefon</h3>
                <p className="text-gray-600">+90 (555) 123 45 67</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaEnvelope className="text-blue-500 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">E-posta</h3>
                <p className="text-gray-600">info@sirketim.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaMapMarkerAlt className="text-blue-500 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">Adres</h3>
                <p className="text-gray-600">
                  Atatürk Caddesi, No: 123
                  <br />
                  Kadıköy, İstanbul
                </p>
              </div>
            </div>
          </div>

          {/* Harita */}
          <div className="mt-6 h-48 bg-gray-200 rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24087.42271299778!2d29.02545!3d40.990982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab86bc34f73a1%3A0x7f10b02fcd762cc!2zS2FkxLFrw7Z5LCDEsHN0YW5idWw!5e0!3m2!1str!2str!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* İletişim Formu */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-6">Mesaj Gönderin</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Adınız Soyadınız
              </label>
              <input
                type="text"
                name="ad"
                value={formData.ad}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                E-posta Adresiniz
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Konu</label>
              <input
                type="text"
                name="konu"
                value={formData.konu}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Mesajınız
              </label>
              <textarea
                name="mesaj"
                value={formData.mesaj}
                onChange={handleChange}
                rows="5"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              Mesaj Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Iletisim;
