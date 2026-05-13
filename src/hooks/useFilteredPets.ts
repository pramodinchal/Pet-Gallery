import { useMemo } from "react";
import type { Pet, FilterState } from "../types";

export function useFilteredPets(pets: Pet[], filters: FilterState): Pet[] {
  return useMemo(() => {
    let result = [...pets];

    if (filters.search.trim()) {
      const q = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.breed.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (filters.species !== "all") {
      result = result.filter(
        (p) => p.species.toLowerCase() === filters.species.toLowerCase()
      );
    }

    switch (filters.sort) {
      case "name-asc":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "date-newest":
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "date-oldest":
        result.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        break;
    }

    return result;
  }, [pets, filters]);
}
