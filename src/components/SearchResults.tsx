
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import RecipeCard from "./RecipeCard";
import { Recipe } from "@/data/recipes";

interface SearchResultsProps {
  searchQuery: string;
  filteredRecipes: Recipe[];
  resetSearch: () => void;
}

const SearchResults = ({
  searchQuery,
  filteredRecipes,
  resetSearch,
}: SearchResultsProps) => {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-1">
            {searchQuery
              ? `Результаты поиска для "${searchQuery}"`
              : "Отфильтрованные рецепты"}
          </h2>
          <p className="text-muted-foreground">
            {filteredRecipes.length
              ? `Найдено ${filteredRecipes.length} ${
                  filteredRecipes.length === 1 ? "рецепт" : 
                  filteredRecipes.length < 5 ? "рецепта" : "рецептов"
                }`
              : "Ничего не найдено"}
          </p>
        </div>

        <Button
          onClick={resetSearch}
          variant="outline"
          className="gap-1 hover:bg-korean/10 hover:text-korean"
        >
          <X className="h-4 w-4" />
          Сбросить
        </Button>
      </div>

      {filteredRecipes.length === 0 ? (
        <div className="text-center py-12 bg-muted/50 rounded-lg">
          <div className="text-5xl mb-4">🍲</div>
          <h3 className="text-xl font-medium mb-2">Рецепты не найдены</h3>
          <p className="text-muted-foreground mb-6">
            Попробуйте изменить поисковый запрос или фильтры
          </p>
          <Button onClick={resetSearch}>Показать все рецепты</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SearchResults;
