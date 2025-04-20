import { Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CategoryFiltersProps {
  categories: string[];
  activeFilters: string[];
  onFilterClick: (category: string) => void;
}

const CategoryFilters = ({ categories, activeFilters, onFilterClick }: CategoryFiltersProps) => {
  return (
    <div className="w-full md:w-auto flex flex-wrap gap-2">
      {categories.slice(0, 6).map(category => (
        <Badge 
          key={category} 
          variant={activeFilters.includes(category) ? "default" : "outline"}
          className={`cursor-pointer ${activeFilters.includes(category) ? 'bg-korean text-white' : 'text-korean hover:bg-korean/10'}`}
          onClick={() => onFilterClick(category)}
        >
          {category}
        </Badge>
      ))}
      
      <Button variant="outline" className="ml-2">
        <Filter className="h-4 w-4 mr-2" />
        Ещё
      </Button>
    </div>
  );
};

export default CategoryFilters;
