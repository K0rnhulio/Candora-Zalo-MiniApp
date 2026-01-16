const API_URL = window.APP_CONFIG?.template?.apiUrl || '';

export async function request<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const url = API_URL ? `${API_URL}${path}` : '';

  if (!url) {
    throw new Error('API URL not configured');
  }

  const response = await fetch(url, options);
  return response.json() as T;
}

export async function requestWithFallback<T>(
  path: string,
  fallbackValue: T,
  options?: RequestInit
): Promise<T> {
  try {
    return await request<T>(path, options);
  } catch (error) {
    console.warn(
      "An error occurred while fetching data. Falling back to default value!"
    );
    console.warn({ path, error, fallbackValue });
    return fallbackValue;
  }
}
