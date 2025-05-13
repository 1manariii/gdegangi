const API_BASE_URL = 'https://2d02d8c653345787.mokky.dev';

export const httpClient = {
  get: async <T>(endpoint: string) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      cache: 'no-store' // Для динамических данных (SSR)
      // next: { revalidate: 60 } // Для ISR
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json() as Promise<T>;
  },
  
  post: async <T>(endpoint: string, body: object) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    return response.json() as Promise<T>;
  }
};