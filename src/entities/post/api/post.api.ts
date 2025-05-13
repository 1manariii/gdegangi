import { httpClient } from "@/shared/api/http-client";
import { Post } from "../post.model";

export const postApi = {
    getAll: async () => {
      return httpClient.get<Post[]>('/posts');
    },
    
    getById: async (id: number) => {
      return httpClient.get<Post>(`/posts/${id}`);
    },
    
    create: async (postData: Omit<Post, 'id'>) => {
      return httpClient.post<Post>('/posts', postData);
    }
  };