<template>
    <v-card class="blog-post-card">
      <v-img :src="post.image.url" height="200px"></v-img>
      <v-card-title>{{ post.title }}</v-card-title>
      <v-card-subtitle>By {{ post.author }}</v-card-subtitle>
      <v-card-text>{{ post.content.substring(0,100) }}</v-card-text>
      <v-card-actions>
        <v-btn :to="`/blog/${id}`" color="primary">Read More</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      post: {
        type: Object,
        required: true,
      }
    }
  };
  </script>
  
  <!-- <style scoped>
  .blog-post-card {
    margin-bottom: 30px;
    margin-top: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }
  </style> -->
  