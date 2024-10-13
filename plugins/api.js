import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1337/api', // Change the URL to your Strapi API URL
});

export const fetchBlogPosts = async () => {
  const response = await api.get('/blog-posts');
  return response.data;
};

export const fetchBlogPost = async (id) => {
  const response = await api.get(`/blog-posts/${id}`);
  return response.data;
};
