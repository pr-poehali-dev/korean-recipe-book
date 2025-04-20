
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RecipeCard from "./RecipeCard";
import { Recipe } from "@/data/recipes";

interface RecipeCategoriesProps {
  allCategories: string[];
  recipes: Recipe[];
}

const RecipeCategories = ({ allCategories, recipes }: RecipeCategoriesProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const filteredRecipes = activeCategory === "all" 
    ? recipes 
    : recipes.filter(recipe => recipe.categories.includes(activeCategory));

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Популярные рецепты</h2>
      
      <Tabs defaultValue="all" onValueChange={setActiveCategory}>
        <TabsList className="mb-6 w-full h-auto flex-wrap bg-card justify-start">
          <TabsTrigger value="all" className="data-[state=active]:bg-korean data-[state=active]:text-white">
            Все рецепты
          </TabsTrigger>
          {allCategories.map((category) => (
            <TabsTrigger 
              key={category} 
              value={category}
              className="data-[state=active]:bg-korean data-[state=active]:text-white"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value={activeCategory} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default RecipeCategories;
