"use server";
import axios, { AxiosError } from "axios";
import { ApiResponse, ApiError } from "@/types/queries";
import { Company, FilterOptions } from "@/types";

// Server action for initial data fetch
const getCompanies = async (
  queryParams?: string,
): Promise<ApiResponse<Company[]> | ApiError> => {
  try {
    const url = queryParams
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/companies?${queryParams}`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/companies`;

    const res = await axios.get(url);
    return { success: true, data: res.data };
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return {
        success: false,
        message: "Error fetching companies",
        statusCode: error.response.status,
      };
    }

    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
};

const getCompaniesFilterOptions = async (): Promise<
  ApiResponse<FilterOptions[]> | ApiError
> => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/companies/filter-options`,
    );
    return { success: true, data: res.data };
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return {
        success: false,
        message: "Error fetching companies filter options",
        statusCode: error.response.status,
      };
    }

    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
};

export { getCompanies, getCompaniesFilterOptions };
