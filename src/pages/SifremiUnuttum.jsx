import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";

function SifremiUnuttum() {
  const [email, setEmail] = useState("");
  const [gonderildi, setGonderildi] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Şifre sıfırlama e-postası gönderme işlemi burada yapılacak
    console.log("Şifre sıfırlama e-postası gönderiliyor:", email);
    setGonderildi(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Şifremi Unuttum
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            E-posta adresinizi girin, size şifre sıfırlama bağlantısı
            gönderelim.
          </p>
        </div>

        {!gonderildi ? (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="sr-only">
                E-posta
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="E-posta adresiniz"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Şifre Sıfırlama Bağlantısı Gönder
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-green-700">
                  Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.
                  Lütfen e-postanızı kontrol edin.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-center mt-6">
          <Link
            to="/giris"
            className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            <FaArrowLeft className="mr-2" />
            Giriş sayfasına dön
          </Link>
        </div>

        <div className="text-center text-sm text-gray-600">
          <p>
            E-posta almadınız mı?{" "}
            <button
              onClick={() => setGonderildi(false)}
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              Tekrar deneyin
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SifremiUnuttum;
