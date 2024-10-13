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
import BlogPostCard from '~/components/BlogPostCard.vue';

export default {
  components: {
    BlogPostCard
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Learning Nuxt.js',
          author: 'John Doe',
          summary: 'An introduction to Nuxt.js and its features.',
          image: '/images/nuxt.jpg'
        },
        {
          id: 2,
          title: 'Building with Vuetify',
          author: 'Jane Smith',
          summary: 'A guide to building UIs with Vuetify.',
          image: '/images/vuetify.jpg'
        },
        {
          id: 3,
          title: 'Mastering Vue.js',
          author: 'Alex Johnson',
          summary: 'Advanced concepts in Vue.js development.',
          image: '/images/vuejs.jpg'
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Page-specific styles */
</style>
