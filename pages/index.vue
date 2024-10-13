<template>
  <v-container>
    <v-row dense justify="center">
      <v-col cols="12" sm="6" md="4" v-for="post in posts" :key="post.id">
        <BlogPostCard
          :id="post.id"
          :title="post.title"
          :author="post.author"
          :summary="post.summary"
          :image="post.image"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { fetchBlogPost } from '@/plugins/api';
import BlogPostCard from '~/components/BlogPostCard.vue';

export default {
  components: {
    BlogPostCard
  },
  data() {
    return {
      blogPosts:[],
    };
  },
  async created(){
    this.blogPosts = await fetchBlogPost(); 
  }
};
</script>

<style scoped>
/* Page-specific styles */
</style>
