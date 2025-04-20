
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const KoreanCuisineExplorer = () => {
  const explorerItems = [
    {
      title: "Кимчи и ферментированные продукты",
      description: "Узнайте больше о традиционных корейских ферментированных продуктах",
      icon: "🥬",
      link: "/categories"
    },
    {
      title: "Корейские соусы и пасты",
      description: "Изучите разнообразные корейские соусы, которые придают блюдам уникальный вкус",
      icon: "🌶️",
      link: "/categories"
    },
    {
      title: "Корейские техники приготовления",
      description: "Освойте традиционные и современные техники корейской кухни",
      icon: "🔥",
      link: "/categories"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Изучите корейскую кухню</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {explorerItems.map((item, index) => (
          <Card key={index} className="border-korean/20 hover:border-korean hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
              <Link to={item.link}>
                <Button variant="outline" className="w-full gap-1 justify-between hover:bg-korean hover:text-white">
                  Узнать больше
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default KoreanCuisineExplorer;
