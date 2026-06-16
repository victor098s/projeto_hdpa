export function getToken() {
  return window.localStorage.getItem("jwtToken");
}

export function setToken(token) {
  window.localStorage.setItem("jwtToken", token);
}

export function removeToken() {
  window.localStorage.removeItem("jwtToken");
}

export function isTokenExpired(token) {
  if (!token) return true;

  const parts = token.split(".");
  if (parts.length !== 3) return true;

  try {
    const payload = JSON.parse(atob(parts[1]));
    if (!payload || typeof payload.exp !== "number") {
      return true;
    }
    return payload.exp * 1000 <= Date.now();
  } catch {
    return true;
  }
}

export async function authenticatedFetch(url, options = {}) {
  const token = getToken();
  const headers = {
    ...options.headers,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const response = await fetch(url, { ...options, headers });

  if (response.status === 401) {
    removeToken();
  }

  return response;
}
