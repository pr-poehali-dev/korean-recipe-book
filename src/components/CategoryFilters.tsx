
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface CategoryFiltersProps {
  categories: string[];
  activeFilters: string[];
  onFilterClick: (category: string) => void;
}

const CategoryFilters = ({
  categories,
  activeFilters,
  onFilterClick,
}: CategoryFiltersProps) => {
  if (!categories.length) return null;

  return (
    <div className="flex flex-col space-y-2 w-full md:w-auto">
      <div className="text-sm font-medium flex justify-between items-center">
        <span>Фильтры</span>
        {activeFilters.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            className="h-6 text-xs text-muted-foreground"
            onClick={() => {
              // Reset all filters by clicking on each active filter
              activeFilters.forEach((filter) => onFilterClick(filter));
            }}
          >
            <X className="h-3 w-3 mr-1" />
            Сбросить все
          </Button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeFilters.includes(category) ? "default" : "outline"}
            size="sm"
            className={
              activeFilters.includes(category)
                ? "bg-korean hover:bg-korean-dark text-white"
                : "hover:bg-korean/10 hover:text-korean"
            }
            onClick={() => onFilterClick(category)}
          >
            {category}
            {activeFilters.includes(category) && (
              <X className="h-3 w-3 ml-1" />
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilters;
