<template>
  <v-app-bar density="compact">
    <v-app-bar-title>Laboratorio Vue </v-app-bar-title>
    <v-spacer></v-spacer>

    <v-btn :to="{ name: 'Members' }">Member list</v-btn>
    <v-divider inset vertical></v-divider>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
