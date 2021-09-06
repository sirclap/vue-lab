<template>
  <div>
    <input type="text" v-model="filterValue" />
    <v-btn flat @click="search()"> Buscar </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  props: {
    filter: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const filterValue: Ref<string> = ref(props.filter);

    const search = () => {
      emit("onFilter", filterValue.value);
    };

    return { search, filterValue };
  },
});
</script>

<style scoped></style>
