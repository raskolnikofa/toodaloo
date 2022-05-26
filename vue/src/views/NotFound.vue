<template>
  <v-card
      class="mx-auto"
      max-width="500"
      min-height="250"
  >
    <v-list-item one-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          404
        </div>
        <v-list-item-subtitle>Page wasn't found. Please, try another one.</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {
      title: "NotFound",
    };
  }
};
</script>

<style>
.mx-auto {
  margin-top: 2rem;
}
</style>
