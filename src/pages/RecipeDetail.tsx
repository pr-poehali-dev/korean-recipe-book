import { useParams, Link } from "react-router-dom";
import { recipes } from "@/data/recipes";
import Header from "@/components/Header";
import { 
  Clock, 
  Utensils, 
  ChefHat, 
  ChevronLeft, 
  Heart, 
  Share2,
  Printer,
  Bookmark,
  Flame
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find(recipe => recipe.id === id);
  
  // Картинки корейских блюд
  const recipeImages = {
    "bibimbap": "https://images.unsplash.com/photo-1553163147-622ab57be1c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "kimchi": "https://images.unsplash.com/photo-1583224874284-0a87abbea0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "bulgogi": "https://images.unsplash.com/photo-1583018098802-9c1a38e79987?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "japchae": "https://images.unsplash.com/photo-1583233726297-5f8adee540df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "tteokbokki": "https://images.unsplash.com/photo-1626162079048-508e5f18560d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  };

  if (!recipe) {
    return (
      <div>
        <Header />
        <div className="container mx-auto py-16 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Рецепт не найден</h1>
          <p className="mb-6">К сожалению, запрашиваемый рецепт не существует.</p>
          <Link to="/">
            <Button>Вернуться на главную</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Определяем изображение для рецепта
  const recipeImage = recipeImages[id as keyof typeof recipeImages] || recipe.image;

  // Определяем цвет для сложности
  const difficultyColor = {
    "Легкий": "bg-green-100 text-green-800",
    "Средний": "bg-yellow-100 text-yellow-800",
    "Сложный": "bg-red-100 text-red-800",
  }[recipe.difficulty];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto py-8 px-4">
        {/* Навигация */}
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-korean">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Назад к рецептам
          </Link>
        </div>
        
        {/* Заголовок рецепта */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {recipe.categories.map(category => (
              <Badge key={category} variant="secondary" className="bg-korean/10 text-korean">
                {category}
              </Badge>
            ))}
          </div>
          
          {recipe.koreanTitle && (
            <h2 className="text-korean text-xl mb-2">{recipe.koreanTitle}</h2>
          )}
          <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
          
          <p className="text-lg text-muted-foreground mb-6">
            {recipe.description}
          </p>
          
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-korean mr-2" />
              <span>{recipe.cookTime} минут</span>
            </div>
            
            <div className="flex items-center">
              <Utensils className="h-5 w-5 text-korean mr-2" />
              <span>{recipe.servings} порций</span>
            </div>
            
            <div className="flex items-center">
              <Badge variant="outline" className={difficultyColor}>
                <Flame className="h-4 w-4 mr-1" />
                {recipe.difficulty}
              </Badge>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" className="gap-1">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">В избранное</span>
            </Button>
            
            <Button variant="outline" size="sm" className="gap-1">
              <Bookmark className="h-4 w-4" />
              <span className="hidden sm:inline">Сохранить</span>
            </Button>
            
            <Button variant="outline" size="sm" className="gap-1">
              <Share2 className="h-4 w-4" />
              <span className="hidden sm:inline">Поделиться</span>
            </Button>
            
            <Button variant="outline" size="sm" className="gap-1">
              <Printer className="h-4 w-4" />
              <span className="hidden sm:inline">Распечатать</span>
            </Button>
          </div>
        </div>
        
        {/* Изображение рецепта */}
        <div className="mb-12">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src={recipeImage} 
              alt={recipe.title} 
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ингредиенты */}
          <div className="md:col-span-1">
            <div className="bg-korean/5 rounded-xl p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <ChefHat className="h-5 w-5 mr-2 text-korean" />
                Ингредиенты
              </h2>
              <Separator className="mb-4" />
              
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-korean mt-1.5 mr-2" />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Инструкции */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Приготовление</h2>
            <Separator className="mb-6" />
            
            <ol className="space-y-6">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-8 w-8 rounded-full bg-korean flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="pt-1">
                    <p>{step}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-50 border-t py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2023 Корейская Кулинарная Книга. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RecipeDetail;
