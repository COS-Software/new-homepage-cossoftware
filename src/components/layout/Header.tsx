import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-white shadow-md py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <img 
              src="/assets/logo.png" 
              alt="COSSOFTWARE" 
              className="h-10 mr-2"
            />
            <h1 className="text-2xl font-bold text-primary">COSSOFTWARE</h1>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <a href="/#clients" className="nav-link">Produtos</a>
          <a href="/#technologies" className="nav-link">Tecnologias</a>
          <Link to="/calculator" className="nav-link">Calculadora</Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="block py-2 nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <a href="/#clients" className="block py-2 nav-link" onClick={() => setMobileMenuOpen(false)}>Produtos</a>
            <a href="/#technologies" className="block py-2 nav-link" onClick={() => setMobileMenuOpen(false)}>Tecnologias</a>
            <Link to="/calculator" className="block py-2 nav-link" onClick={() => setMobileMenuOpen(false)}>Calculadora</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
