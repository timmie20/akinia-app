"use client";
import React, { createContext, useContext, useState, useCallback } from "react";

// Types
type FilterPage = "companies" | "investors";

interface FilterState {
  companies: Record<string, string[]>;
  investors: Record<string, string[]>;
}

interface FilterContextType {
  filters: FilterState;
  updateFilter: (page: FilterPage, key: string, values: string[]) => void;
  clearFilters: (page: FilterPage) => void;
}

// Create context
const FilterContext = createContext<FilterContextType | undefined>(undefined);

// Provider component
export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<FilterState>({
    companies: {},
    investors: {},
  });

  const updateFilter = useCallback(
    (page: FilterPage, key: string, values: string[]) => {
      setFilters((prev) => ({
        ...prev,
        [page]: {
          ...prev[page],
          [key]: values,
        },
      }));
    },
    [],
  );

  const clearFilters = useCallback((page: FilterPage) => {
    setFilters((prev) => ({
      ...prev,
      [page]: {},
    }));
  }, []);

  return (
    <FilterContext.Provider value={{ filters, updateFilter, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
}

// Custom hook to use the filter context
export function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
}
