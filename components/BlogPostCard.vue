<template>
    <v-card class="blog-post-card">
      <v-img :src="image" height="200px"></v-img>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle>By {{ author }}</v-card-subtitle>
      <v-card-text>{{ summary }}</v-card-text>
      <v-card-actions>
        <v-btn :to="`/blog/${id}`" color="primary">Read More</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      id: { type: Number, required: true },
      title: { type: String, required: true },
      author: { type: String, required: true },
      summary: { type: String, required: true },
      image: { type: String, required: true }
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
  