import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Flame, Award } from "lucide-react";
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
}: RecipeCardProps) => {
  // Определяем цвет для сложности
  const difficultyColor = {
    "Легкий": "bg-green-100 text-green-800",
    "Средний": "bg-yellow-100 text-yellow-800",
    "Сложный": "bg-red-100 text-red-800",
  }[difficulty];

  return (
    <Link to={`/recipe/${id}`}>
      <Card className="overflow-hidden h-full recipe-card">
        <div className="relative">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-48 w-full object-cover"
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

        <CardContent className="p-4">
          <div className="space-y-1">
            {koreanTitle && (
              <p className="text-sm text-korean">{koreanTitle}</p>
            )}
            <h3 className="font-bold text-lg line-clamp-1">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{cookTime} мин.</span>
          </div>
          
          <div className="flex flex-wrap gap-1">
            <Badge variant="outline" className={difficultyColor}>
              <Flame className="h-3 w-3 mr-1" />
              {difficulty}
            </Badge>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default RecipeCard;
