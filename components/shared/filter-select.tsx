"use client";
import React from "react";
import { Select } from "antd";
import { useFilter } from "@/contexts/filter-context";

type FilterSelectProps = {
  filterKey: string;
  label: string;
  options: string[];
  page: "companies" | "investors";
};

export const FilterSelect = ({
  filterKey,
  label,
  options,
  page,
}: FilterSelectProps) => {
  const { filters, updateFilter } = useFilter();
  const currentFilters = filters[page];

  const handleChange = (values: string[]) => {
    updateFilter(page, filterKey, values);
  };

  return (
    <Select
      mode="multiple"
      allowClear
      value={currentFilters[filterKey] || []}
      onChange={handleChange}
      options={options.map((opt) => ({ label: opt, value: opt }))}
      prefix={label}
      style={{ width: "200px" }}
      maxTagCount={0}
      size="small"
    />
  );
};
