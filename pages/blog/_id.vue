<template>
    <v-container>
      <v-card v-if="blogPost">
        <v-img :src="blogPost.image.url" />
        <v-card-title>{{ blogPost.title }}</v-card-title>
        <v-card-text v-html="blogPost.content"></v-card-text>
      </v-card>
      <v-alert v-else type="error">Post not found!</v-alert>
    </v-container>
  </template>
  
  <script>
  import { fetchBlogPost } from '@/plugins/api'; // Adjust the path as needed
  
  export default {
    async asyncData({ params }) {
      const blogPost = await fetchBlogPost(params.id);
      return { blogPost };
    },
  };
  </script>
  