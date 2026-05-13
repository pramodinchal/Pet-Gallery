import React, { createContext, useContext, useState } from "react";
import type { FilterState, SortOption } from "../types";

interface FilterContextValue {
  filters: FilterState;
  setSearch: (search: string) => void;
  setSort: (sort: SortOption) => void;
  setSpecies: (species: string) => void;
  resetFilters: () => void;
}

const defaultFilters: FilterState = {
  search: "",
  sort: "date-newest",
  species: "all",
};

const FilterContext = createContext<FilterContextValue | null>(null);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const setSearch = (search: string) =>
    setFilters((f) => ({ ...f, search }));
  const setSort = (sort: SortOption) =>
    setFilters((f) => ({ ...f, sort }));
  const setSpecies = (species: string) =>
    setFilters((f) => ({ ...f, species }));
  const resetFilters = () => setFilters(defaultFilters);

  return (
    <FilterContext.Provider
      value={{ filters, setSearch, setSort, setSpecies, resetFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error("useFilters must be used within FilterProvider");
  return ctx;
}
