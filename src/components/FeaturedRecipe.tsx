import { Recipe } from "@/data/recipes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Flame, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface FeaturedRecipeProps extends Recipe {}

const FeaturedRecipe = ({
  id,
  title,
  koreanTitle,
  image,
  description,
  cookTime,
  difficulty,
  categories,
}: FeaturedRecipeProps) => {
  // Картинки корейских блюд
  const recipeImages = {
    "bibimbap": "https://images.unsplash.com/photo-1553163147-622ab57be1c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "kimchi": "https://images.unsplash.com/photo-1583224874284-0a87abbea0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "bulgogi": "https://images.unsplash.com/photo-1583018098802-9c1a38e79987?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "japchae": "https://images.unsplash.com/photo-1583233726297-5f8adee540df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "tteokbokki": "https://images.unsplash.com/photo-1626162079048-508e5f18560d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  };

  // Определяем изображение для карточки
  const recipeImage = recipeImages[id as keyof typeof recipeImages] || image;

  // Определяем цвет для сложности
  const difficultyColor = {
    "Легкий": "bg-green-100 text-green-800",
    "Средний": "bg-yellow-100 text-yellow-800",
    "Сложный": "bg-red-100 text-red-800",
  }[difficulty];

  return (
    <div className="group relative rounded-xl overflow-hidden bg-gradient-to-r from-korean to-korean-dark shadow-xl">
      <div className="absolute inset-0 opacity-20">
        <img
          src={recipeImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div 
        className="relative flex flex-col md:flex-row"
        style={{
          background: "linear-gradient(to right, rgba(153, 27, 27, 0.85), rgba(153, 27, 27, 0.7))"
        }}
      >
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-4">
            <Badge className="bg-white/20 text-white hover:bg-white/30">
              Рецепт дня
            </Badge>
          </div>
          {koreanTitle && (
            <h3 className="text-white/90 text-xl mb-2">{koreanTitle}</h3>
          )}
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-white/80 mb-6 text-lg">{description}</p>
          
          <div className="flex mb-6 gap-4">
            <div className="flex items-center text-white/90">
              <Clock className="mr-2 h-5 w-5" />
              <span>{cookTime} минут</span>
            </div>
            <div className="flex items-center">
              <Badge variant="outline" className={`${difficultyColor} border-none`}>
                <Flame className="mr-2 h-4 w-4" />
                {difficulty}
              </Badge>
            </div>
          </div>
          
          <Link to={`/recipe/${id}`}>
            <Button size="lg" className="bg-white text-korean hover:bg-white/90">
              Смотреть рецепт
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="hidden md:block w-1/2 relative overflow-hidden">
          <img
            src={recipeImage}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedRecipe;
