import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const KoreanCuisineExplorer = () => {
  return (
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
  );
};

export default KoreanCuisineExplorer;
