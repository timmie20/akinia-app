"use client";
import React, { useEffect, useState, useCallback } from "react";
import DataTable from "@/components/shared/data-table";
import { FilterSelect } from "@/components/shared/filter-select";
import { Company, FilterOptions } from "@/types";
import { useFilter } from "@/contexts/filter-context";
import { fetchCompanies } from "@/sevices/companies-client";
import { Spin } from "antd";
import debounce from "lodash/debounce";

type CompaniesProps = {
  data: Company[];
  filters: FilterOptions[];
};

export default function Client({ data: initialData, filters }: CompaniesProps) {
  const [data, setData] = useState<Company[]>(initialData);
  const [loading, setLoading] = useState(false);
  const { filters: filterState } = useFilter();

  const fetchFilteredData = useCallback(async () => {
    const queryParams = new URLSearchParams();

    // Add each filter to query params
    Object.entries(filterState.companies).forEach(([key, values]) => {
      if (values && values.length > 0) {
        values.forEach((value) => {
          queryParams.append(key, value);
        });
      }
    });

    console.log("Current filters:", filterState.companies);
    console.log("Query params:", queryParams.toString());

    // Only fetch if we have query parameters
    if (queryParams.toString()) {
      setLoading(true);
      try {
        const response = await fetchCompanies(queryParams.toString());
        console.log("API Response:", response);
        if (response.success) {
          setData(response.data);
        }
      } catch (error) {
        console.error("Error fetching filtered companies:", error);
      } finally {
        setLoading(false);
      }
    } else {
      // If no filters are selected, use initial data
      setData(initialData);
    }
  }, [filterState.companies, initialData]);

  // Create a debounced version of fetchFilteredData
  const debouncedFetch = useCallback(debounce(fetchFilteredData, 300), [
    fetchFilteredData,
  ]);

  // Effect to trigger fetch when filters change
  useEffect(() => {
    console.log("Filter state changed:", filterState.companies);
    debouncedFetch();
    // Cleanup debounce on unmount
    return () => {
      debouncedFetch.cancel();
    };
  }, [filterState.companies, debouncedFetch]);

  const formattedData = data.map((d) => ({
    key: d.id,
    Name: d.name,
    Sector: d.sector,
    Headquarters: d.headquarters,
    Stage: d.stage,
    Founded: d.founded,
    "Primary Investor": d.name,
    "Investor Type": d.investor_type,
  }));

  console.log("Current data:", data);
  console.log("Formatted data:", formattedData);

  return (
    <main className="space-y-6">
      <h1 className="text-xl font-semibold">Companies</h1>

      <div className="flex w-full items-start gap-4">
        {filters.map((filter) => (
          <FilterSelect
            key={filter.key}
            filterKey={filter.key}
            label={filter.label}
            options={filter.options}
            page="companies"
          />
        ))}
      </div>

      {loading ? (
        <div className="flex h-96 items-center justify-center">
          <Spin size="large" />
        </div>
      ) : (
        <DataTable data={formattedData} />
      )}
    </main>
  );
}
