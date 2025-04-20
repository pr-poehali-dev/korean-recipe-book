
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="flex items-center border rounded-lg overflow-hidden bg-white shadow-sm">
        <div className="px-3 text-muted-foreground">
          <Search className="h-5 w-5" />
        </div>
        <Input
          type="text"
          placeholder="Найти рецепт, ингредиент или категорию..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        {searchQuery && (
          <Button
            type="button"
            variant="ghost"
            onClick={handleClearSearch}
            className="h-full px-3"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
