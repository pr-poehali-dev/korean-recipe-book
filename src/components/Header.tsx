
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: "Главная", href: "/" },
    { name: "Категории", href: "/categories" },
    { name: "О корейской кухне", href: "/about" }
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🍲</span>
            <span className="font-bold text-lg">Корейская Кухня</span>
          </Link>
        </div>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-korean"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button className="ml-2 bg-korean hover:bg-korean-dark">
            Добавить рецепт
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-6 space-y-4 border-b">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                to={item.href}
                className={`block py-2 text-base font-medium ${
                  isActive(item.href)
                    ? "text-korean"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </div>
          ))}
          <Button className="w-full mt-4 bg-korean hover:bg-korean-dark">
            Добавить рецепт
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
