/**
 * Server-side fetch utility with ISR support
 * Uses Next.js fetch API with revalidation for Incremental Static Regeneration
 */

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface FetchOptions extends RequestInit {
  revalidate?: number | false; // ISR revalidation time in seconds
}

/**
 * Server-side fetch with ISR support
 * @param endpoint - API endpoint (without base URL)
 * @param options - Fetch options including revalidate
 * @returns Promise with response data
 */
export async function serverFetch<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { revalidate = 3600, ...fetchOptions } = options; // Default: 1 hour revalidation

  const url = `${baseURL}${endpoint}`;

  const response = await fetch(url, {
    ...fetchOptions,
    headers: {
      "Content-Type": "application/json",
      ...fetchOptions.headers,
    },
    next: {
      revalidate: revalidate === false ? 0 : revalidate,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message ||
        errorData.error?.message ||
        `HTTP error! status: ${response.status}`
    );
  }

  return response.json();
}

/**
 * GET request with ISR
 */
export async function serverGet<T>(
  endpoint: string,
  revalidate: number | false = 3600
): Promise<T> {
  return serverFetch<T>(endpoint, {
    method: "GET",
    revalidate,
  });
}
