import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Flame, Award, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

interface RecipeCardProps {
  id: string;
  title: string;
  koreanTitle?: string;
  image: string;
  description: string;
  cookTime: number;
  difficulty: "Легкий" | "Средний" | "Сложный";
  isFeatured?: boolean;
  categories: string[];
  servings: number;
}

const RecipeCard = ({
  id,
  title,
  koreanTitle,
  image,
  description,
  cookTime,
  difficulty,
  isFeatured = false,
  categories,
  servings,
}: RecipeCardProps) => {
  // Определяем цвет для сложности
  const difficultyColor = {
    "Легкий": "bg-green-100 text-green-800",
    "Средний": "bg-yellow-100 text-yellow-800",
    "Сложный": "bg-red-100 text-red-800",
  }[difficulty];

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

  return (
    <Link to={`/recipe/${id}`} className="group">
      <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 recipe-card border-korean/20">
        <div className="relative">
          <img
            src={recipeImage}
            alt={title}
            className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {isFeatured && (
            <div className="absolute top-2 right-2">
              <Badge className="bg-korean hover:bg-korean-dark">
                <Award className="h-3 w-3 mr-1" />
                Популярное
              </Badge>
            </div>
          )}
        </div>

        <CardContent className="p-5">
          <div className="space-y-2">
            {koreanTitle && (
              <p className="text-sm text-korean font-medium">{koreanTitle}</p>
            )}
            <h3 className="font-bold text-xl group-hover:text-korean transition-colors">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

            <div className="flex flex-wrap gap-1 pt-1">
              {categories.slice(0, 2).map((category) => (
                <Badge key={category} variant="secondary" className="bg-korean/10 text-korean hover:bg-korean/20">
                  {category}
                </Badge>
              ))}
              {categories.length > 2 && (
                <Badge variant="secondary" className="bg-korean/10 text-korean hover:bg-korean/20">
                  +{categories.length - 2}
                </Badge>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-5 pt-0 flex justify-between items-center">
          <div className="flex items-center space-x-5">
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-korean mr-1" />
              <span className="text-sm">{cookTime} мин.</span>
            </div>
            
            <div className="flex items-center">
              <Utensils className="h-4 w-4 text-korean mr-1" />
              <span className="text-sm">{servings} порц.</span>
            </div>
          </div>
          
          <Badge variant="outline" className={difficultyColor}>
            <Flame className="h-3 w-3 mr-1" />
            {difficulty}
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default RecipeCard;
