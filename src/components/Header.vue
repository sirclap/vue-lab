<template>
  <v-app-bar density="compact">
    <v-app-bar-title>Laboratorio Vue </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn :to="{ name: 'Home' }">Home</v-btn>
    <v-btn :to="{ name: 'Members' }">Member list</v-btn>
    <v-divider inset vertical></v-divider>
    <v-btn class="mr-4 ml-5" color="primary" plain>
      <v-icon left icon="mdi-handshake-outline"></v-icon>
      <span>Anonymous</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
