import { Link } from "react-router-dom";

function Navbar({ sepetAdedi }) {
  return (
    <header className="flex justify-between items-center mb-8">
      <Link to="/" className="text-3xl font-bold">
        E-Ticaret Mağazası
      </Link>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="hover:text-blue-500">
              Anasayfa
            </Link>
          </li>
          <li>
            <Link to="/sepet" className="hover:text-blue-500">
              Sepet ({sepetAdedi})
            </Link>
          </li>
          <li>
            <Link to="/profil" className="hover:text-blue-500">
              Profil
            </Link>
          </li>
          <li>
            <Link to="/Iletisim" className="hover:text-blue-500">
              İletişim
            </Link>
          </li>
          <li>
            <Link to="/giris">Giriş Yap</Link>
          </li>
          <li>
            <Link to="/kayit">Kayıt Ol</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
