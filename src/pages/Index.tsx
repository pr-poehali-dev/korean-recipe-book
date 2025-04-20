import { useState } from "react";
import Header from "@/components/Header";
import RecipeCard from "@/components/RecipeCard";
import FeaturedRecipe from "@/components/FeaturedRecipe";
import { recipes } from "@/data/recipes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Search, Filter, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Выбираем избранный рецепт для главного баннера
  const featuredRecipe = recipes.find(recipe => recipe.isFeatured) || recipes[0];
  
  // Фильтруем рецепты по поисковому запросу
  const filteredRecipes = recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Получаем все уникальные категории
  const allCategories = [...new Set(recipes.flatMap(recipe => recipe.categories))];
  
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
        
        {/* Рецепт дня */}
        <section className="mb-12">
          <FeaturedRecipe {...featuredRecipe} />
        </section>
        
        {/* Поиск и фильтры */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Найти рецепт..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Button variant="outline" className="w-full md:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              Фильтры
            </Button>
          </div>
        </section>
        
        {/* Вкладки с категориями */}
        <section className="mb-8">
          <Tabs defaultValue="all">
            <TabsList className="mb-6 w-full flex flex-wrap h-auto">
              <TabsTrigger value="all">Все рецепты</TabsTrigger>
              {allCategories.slice(0, 5).map(category => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRecipes.map(recipe => (
                  <RecipeCard key={recipe.id} {...recipe} />
                ))}
              </div>
            </TabsContent>
            
            {allCategories.slice(0, 5).map(category => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredRecipes
                    .filter(recipe => recipe.categories.includes(category))
                    .map(recipe => (
                      <RecipeCard key={recipe.id} {...recipe} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>
        
        {/* Секция "Изучите корейскую кухню" */}
        <section className="my-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Изучите корейскую кухню</h2>
            <p className="text-muted-foreground">Узнайте об истории, ингредиентах и техниках приготовления</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-korean to-korean-dark rounded-lg p-6 text-white shadow-lg transform transition hover:scale-105">
              <h3 className="text-xl font-bold mb-2">История</h3>
              <p className="mb-4">Познакомьтесь с богатой историей корейской кулинарии, насчитывающей тысячи лет</p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-korean">
                Подробнее <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg transform transition hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-korean">Ингредиенты</h3>
              <p className="mb-4 text-muted-foreground">Узнайте об основных ингредиентах, специях и соусах корейской кухни</p>
              <Button variant="outline" className="text-korean border-korean hover:bg-korean hover:text-white">
                Подробнее <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-korean-accent rounded-lg p-6 text-white shadow-lg transform transition hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Техники</h3>
              <p className="mb-4">Освойте традиционные техники приготовления и современные методы</p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-korean-accent">
                Подробнее <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-50 border-t py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2023 Корейская Кулинарная Книга. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
