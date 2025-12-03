import axios, { AxiosError } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: add a response interceptor for centralized error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string }>) => {
    // You can customize this as needed (logging, toast, etc.)
    // Normalize the error before throwing so callers can rely on a consistent shape
    const normalizedError = {
      message:
        error.response?.data?.message ||
        error.message ||
        "Something went wrong",
      status: error.response?.status,
      data: error.response?.data,
      isAxiosError: true,
    };

    // Re-throw so calling code (e.g., React Query) can handle it
    return Promise.reject(normalizedError);
  }
);

export default apiClient;
