<template>
  <v-app>
    <v-toolbar app color="pink" dark>
      <v-toolbar-nav-icon @click="drawer= !drawer" ></v-toolbar-nav-icon>
      <v-toolbar-title>NiNai's Blogs</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" text>Home</v-btn>
      <v-btn to="/about" text>About</v-btn>
      <v-btn icon @click="goToProfile">
        <v-img src="/assets/profile-logo.png" contain width="40" height="40"></v-img>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item to="/" @click="drawer = false">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item to="/about" @click="drawer = false">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!-- Page content goes here -->
      <nuxt />
    </v-main>

    <v-footer app>
      <v-col class="text-center" cols="12">
        © 2024 - NaiNai Blog Collections
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false, // State to manage the navigation drawer
    };
  },
  methods: {
    goToProfile() {
      // Logic to navigate to the profile page
      this.$router.push('/profile'); // Adjust the path as necessary
    },
  },
};
</script>

<style scoped>
.v-toolbar {
  max-height: 65px;
  margin-bottom: 10px;
}

.v-footer {
  background-color: #3d8cdc;
  padding: 1px 0;
}
</style> 
