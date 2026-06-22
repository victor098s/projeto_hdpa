// Lê o JWT salvo no navegador para manter o usuário autenticado entre recarregamentos.
export function getToken() {
  return window.localStorage.getItem("jwtToken");
}

// Salva o JWT recebido do backend depois do login.
export function setToken(token) {
  window.localStorage.setItem("jwtToken", token);
}

// Remove apenas o token da aplicação, encerrando a sessão sem apagar outros dados locais.
export function removeToken() {
  window.localStorage.removeItem("jwtToken");
}

// Valida a estrutura do JWT e compara o campo exp com a data atual.
export function isTokenExpired(token) {
  if (!token) return true;

  const parts = token.split(".");
  if (parts.length !== 3) return true;

  try {
    // O payload fica na segunda parte do token e guarda a expiração em segundos.
    const payload = JSON.parse(atob(parts[1]));
    if (!payload || typeof payload.exp !== "number") {
      return true;
    }
    return payload.exp * 1000 <= Date.now();
  } catch {
    return true;
  }
}

// Wrapper do fetch que injeta o Authorization automaticamente quando há token salvo.
export async function authenticatedFetch(url, options = {}) {
  const token = getToken();
  const headers = {
    ...options.headers,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const response = await fetch(url, { ...options, headers });

  // Se o backend rejeitar a sessão, remove o token para forçar um novo login.
  if (response.status === 401) {
    removeToken();
  }

  return response;
}
