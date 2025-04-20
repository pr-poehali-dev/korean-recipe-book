
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4">Корейская Кулинарная Книга</h3>
            <p className="text-muted-foreground text-sm">
              Откройте для себя аутентичные корейские блюда с пошаговыми рецептами и советами
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-3">Рецепты</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-korean">Все рецепты</Link></li>
              <li><Link to="/categories" className="text-sm text-muted-foreground hover:text-korean">Категории</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-korean">Особенности корейской кухни</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-3">О проекте</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-korean">О нас</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-korean">Контакты</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-korean">Помощь</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-3">Подписаться</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Получайте новые рецепты каждую неделю
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="px-3 py-2 rounded-l-md border border-input bg-background text-sm"
              />
              <button className="bg-korean text-white px-3 py-2 text-sm rounded-r-md hover:bg-korean-dark transition-colors">
                Подписаться
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Корейская Кулинарная Книга. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
