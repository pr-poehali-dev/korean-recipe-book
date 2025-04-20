import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import RecipeCard from "@/components/RecipeCard";
import { Recipe } from "@/data/recipes";

interface SearchResultsProps {
  searchQuery: string;
  filteredRecipes: Recipe[];
  resetSearch: () => void;
}

const SearchResults = ({ searchQuery, filteredRecipes, resetSearch }: SearchResultsProps) => {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Результаты поиска{" "}
          {searchQuery && <span className="text-korean">"{searchQuery}"</span>}
        </h2>
        <Button 
          variant="ghost" 
          onClick={resetSearch}
        >
          Сбросить
        </Button>
      </div>
      
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map(recipe => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-medium mb-2">Ничего не найдено</h3>
          <p className="text-muted-foreground mb-4">
            Попробуйте изменить запрос или сбросить фильтры
          </p>
          <Button 
            variant="outline" 
            onClick={resetSearch}
          >
            Показать все рецепты
          </Button>
        </div>
      )}
    </section>
  );
};

export default SearchResults;
