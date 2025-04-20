import { Utensils } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RecipeCard from "@/components/RecipeCard";
import { Recipe } from "@/data/recipes";

interface RecipeCategoriesProps {
  allCategories: string[];
  recipes: Recipe[];
}

const RecipeCategories = ({ allCategories, recipes }: RecipeCategoriesProps) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Utensils className="mr-2 h-6 w-6 text-korean" />
        Наши рецепты
      </h2>
      
      <Tabs defaultValue="all">
        <TabsList className="mb-6 w-full flex flex-wrap h-auto">
          <TabsTrigger value="all">Все рецепты</TabsTrigger>
          {allCategories.slice(0, 5).map(category => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value="all" className="animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map(recipe => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </div>
        </TabsContent>
        
        {allCategories.slice(0, 5).map(category => (
          <TabsContent key={category} value={category} className="animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes
                .filter(recipe => recipe.categories.includes(category))
                .map(recipe => (
                  <RecipeCard key={recipe.id} {...recipe} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default RecipeCategories;
