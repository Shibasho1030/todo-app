const API_ORIGIN =
  process.env.NEXT_PUBLIC_API_URL ??
  (process.env.API_BASE_URL
    ? process.env.API_BASE_URL.replace(/\/api\/v1\/?$/, "")
    : "http://localhost:3010");

export const API_BASE_URL =
  process.env.API_BASE_URL ?? `${API_ORIGIN}/api/v1`;
