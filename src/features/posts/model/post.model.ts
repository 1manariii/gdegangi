import { postApi } from '@/entities/post/api/post.api';

export const postModel = {
  getPopularPosts: async () => {
    const posts = await postApi.getAll();
    return posts.slice(0, 10); 
  }
};