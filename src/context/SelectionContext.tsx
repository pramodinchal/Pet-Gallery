import React, { createContext, useContext, useState, useCallback } from "react";
import type { Pet } from "../types";

interface SelectionContextValue {
  selectedIds: Set<string>;
  toggleSelect: (id: string) => void;
  selectAll: (pets: Pet[]) => void;
  clearSelection: () => void;
  isSelected: (id: string) => boolean;
  selectedCount: number;
  totalFileSizeKb: (pets: Pet[]) => number;
}

const SelectionContext = createContext<SelectionContextValue | null>(null);

export function SelectionProvider({ children }: { children: React.ReactNode }) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const toggleSelect = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const selectAll = useCallback((pets: Pet[]) => {
    setSelectedIds(new Set(pets.map((p) => p.id)));
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedIds(new Set());
  }, []);

  const isSelected = useCallback(
    (id: string) => selectedIds.has(id),
    [selectedIds]
  );

  const totalFileSizeKb = useCallback(
    (pets: Pet[]) =>
      pets
        .filter((p) => selectedIds.has(p.id))
        .reduce((sum, p) => sum + p.fileSizeKb, 0),
    [selectedIds]
  );

  return (
    <SelectionContext.Provider
      value={{
        selectedIds,
        toggleSelect,
        selectAll,
        clearSelection,
        isSelected,
        selectedCount: selectedIds.size,
        totalFileSizeKb,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
}

export function useSelection() {
  const ctx = useContext(SelectionContext);
  if (!ctx) throw new Error("useSelection must be used within SelectionProvider");
  return ctx;
}
