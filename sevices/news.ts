"use server";

import { News } from "@/types";
import { ApiResponse, ApiError } from "@/types/queries";
import axios, { AxiosError } from "axios";

export const getNews = async (): Promise<ApiResponse<News[]> | ApiError> => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/news`);
    return { success: true, data: res.data };
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return {
        success: false,
        message: "Error fetching news",
        statusCode: error.response.status,
      };
    }

    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
};
