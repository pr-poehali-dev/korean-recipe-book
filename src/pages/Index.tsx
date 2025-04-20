import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedRecipe from "@/components/FeaturedRecipe";
import SearchBar from "@/components/SearchBar";
import CategoryFilters from "@/components/CategoryFilters";
import SearchResults from "@/components/SearchResults";
import RecipeCategories from "@/components/RecipeCategories";
import KoreanCuisineExplorer from "@/components/KoreanCuisineExplorer";
import { recipes } from "@/data/recipes";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showingResults, setShowingResults] = useState(false);
  
  // Выбираем избранный рецепт для главного баннера
  const featuredRecipe = recipes.find(recipe => recipe.isFeatured) || recipes[0];
  
  // Фильтруем рецепты по поисковому запросу и активным фильтрам
  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = searchQuery.trim() === "" || 
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.koreanTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase())) ||
      recipe.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilters = activeFilters.length === 0 || 
      activeFilters.some(filter => recipe.categories.includes(filter));
    
    return matchesSearch && matchesFilters;
  });
  
  // Эффект для отображения результатов поиска
  useEffect(() => {
    if (searchQuery.trim() !== "") {
      setShowingResults(true);
    } else if (activeFilters.length === 0) {
      setShowingResults(false);
    }
  }, [searchQuery, activeFilters]);
  
  // Получаем все уникальные категории
  const allCategories = [...new Set(recipes.flatMap(recipe => recipe.categories))];
  
  // Обработчик клика по фильтру
  const handleFilterClick = (category: string) => {
    if (activeFilters.includes(category)) {
      setActiveFilters(activeFilters.filter(filter => filter !== category));
    } else {
      setActiveFilters([...activeFilters, category]);
    }
  };
  
  // Сброс поиска и фильтров
  const resetSearch = () => {
    setSearchQuery("");
    setActiveFilters([]);
    setShowingResults(false);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto py-8 px-4">
        {/* Заголовок */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4 text-korean-dark">Корейская Кулинарная Книга</h1>
          <p className="text-muted-foreground text-lg">
            Откройте для себя аутентичные корейские блюда с пошаговыми рецептами и советами
          </p>
        </div>
        
        {/* Показываем фичеринг рецепта только если не ищем что-то */}
        {!showingResults && (
          <section className="mb-12">
            <FeaturedRecipe {...featuredRecipe} />
          </section>
        )}
        
        {/* Поиск и фильтры */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-start justify-between">
            <SearchBar 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery} 
            />
            
            <CategoryFilters 
              categories={allCategories}
              activeFilters={activeFilters}
              onFilterClick={handleFilterClick}
            />
          </div>
        </section>
        
        {/* Результаты поиска или каталог рецептов */}
        {showingResults ? (
          <SearchResults 
            searchQuery={searchQuery}
            filteredRecipes={filteredRecipes}
            resetSearch={resetSearch}
          />
        ) : (
          <>
            {/* Категории рецептов */}
            <RecipeCategories 
              allCategories={allCategories}
              recipes={recipes}
            />
            
            {/* Секция "Изучите корейскую кухню" */}
            <KoreanCuisineExplorer />
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
