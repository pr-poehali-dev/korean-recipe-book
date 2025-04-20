
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Utensils, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";
import { Recipe } from "@/data/recipes";

const FeaturedRecipe = ({
  id,
  title,
  koreanTitle,
  image,
  description,
  cookTime,
  servings,
  difficulty,
  categories,
}: Recipe) => {
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
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 rounded-xl overflow-hidden bg-korean/5 p-6 lg:p-0">
      <div className="lg:col-span-3 flex flex-col justify-center lg:pl-10">
        <div className="mb-4 flex flex-wrap gap-2">
          {categories.slice(0, 3).map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className="bg-korean/10 text-korean"
            >
              {category}
            </Badge>
          ))}
        </div>

        <h2 className="text-5xl font-bold mb-4 text-korean-dark">
          {title}
          {koreanTitle && (
            <span className="block text-xl text-korean mt-2">
              {koreanTitle}
            </span>
          )}
        </h2>

        <p className="text-muted-foreground mb-6 lg:max-w-xl">
          {description}
        </p>

        <div className="flex flex-wrap gap-6 mb-6">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-korean mr-2" />
            <span>{cookTime} минут</span>
          </div>

          <div className="flex items-center">
            <Utensils className="h-5 w-5 text-korean mr-2" />
            <span>{servings} порций</span>
          </div>

          <div className="flex items-center">
            <ChefHat className="h-5 w-5 text-korean mr-2" />
            <span>{difficulty}</span>
          </div>
        </div>

        <div>
          <Link to={`/recipe/${id}`}>
            <Button className="gap-2 bg-korean hover:bg-korean-dark">
              Посмотреть рецепт <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="lg:col-span-2 h-64 lg:h-auto">
        <img
          src={recipeImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default FeaturedRecipe;
