import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-korean py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-white text-2xl font-bold">한식 레시피</span>
            <span className="text-white text-xl">|</span>
            <span className="text-white text-xl">Корейские рецепты</span>
          </Link>

          <div className="flex items-center space-x-4">
            {isSearchOpen ? (
              <div className="animate-fade-in flex items-center bg-white rounded-md overflow-hidden w-64">
                <Input 
                  placeholder="Поиск рецептов..." 
                  className="border-none focus-visible:ring-0"
                  autoFocus
                  onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                />
                <Search className="mr-2 h-5 w-5 text-muted-foreground" />
              </div>
            ) : (
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-white hover:text-korean-light transition-colors"
              >
                <Search className="h-6 w-6" />
              </button>
            )}
            
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-white hover:text-korean-light transition-colors font-medium">
                Главная
              </Link>
              <Link to="/categories" className="text-white hover:text-korean-light transition-colors font-medium">
                Категории
              </Link>
              <Link to="/about" className="text-white hover:text-korean-light transition-colors font-medium">
                О книге
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
