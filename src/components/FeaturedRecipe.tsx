import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ChefHat, Award } from "lucide-react";
import { Link } from "react-router-dom";

interface FeaturedRecipeProps {
  id: string;
  title: string;
  koreanTitle: string;
  image: string;
  description: string;
  cookTime: number;
  difficulty: string;
  categories: string[];
}

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
  return (
    <div className="relative overflow-hidden rounded-lg bg-card shadow-lg">
      <div className="md:flex">
        <div className="md:w-1/2">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-64 w-full object-cover md:h-full"
          />
        </div>
        
        <div className="p-6 md:w-1/2 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-korean font-medium">{koreanTitle}</p>
              <Badge className="bg-korean hover:bg-korean-dark">
                <Award className="h-3 w-3 mr-1" />
                Рецепт дня
              </Badge>
            </div>
            
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-muted-foreground mb-4">{description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((category) => (
                <Badge key={category} variant="secondary" className="bg-korean-light text-korean-dark hover:bg-korean-light">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-muted-foreground mr-1" />
                <span className="text-sm text-muted-foreground">{cookTime} мин.</span>
              </div>
              <div className="flex items-center">
                <ChefHat className="h-5 w-5 text-muted-foreground mr-1" />
                <span className="text-sm text-muted-foreground">{difficulty}</span>
              </div>
            </div>
            
            <Button asChild className="w-full bg-korean hover:bg-korean-dark">
              <Link to={`/recipe/${id}`}>Смотреть рецепт</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRecipe;
