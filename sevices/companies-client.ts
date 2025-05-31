import axios, { AxiosError } from "axios";
import { ApiResponse, ApiError } from "@/types/queries";
import { Company } from "@/types";

// Client-side API function
export const fetchCompanies = async (
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
