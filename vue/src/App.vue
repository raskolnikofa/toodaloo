<template>
  <v-app>
    <v-app-bar
      app
      color="rgba(5, 130, 151, 0.8)"
      dark
    >
      <div class="d-flex align-center">
        Toodaloo
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
