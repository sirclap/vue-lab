<template>
  <div class="container">
    <v-card>
      <v-card-text>
        <input
          type="text"
          v-model="filterValue"
          class="filter-input"
          v-on:keyup.enter="search"
        />
        <v-btn size="small" color="warning" flat @click="search()">
          Buscar
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
  <v-divider></v-divider>
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
  emits: ["onFilter"],
  setup(props, { emit }) {
    const filterValue: Ref<string> = ref(props.filter);

    const search = () => {
      emit("onFilter", filterValue.value);
    };

    return { search, filterValue };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.filter-input {
  border: 1px solid #ccc;
  padding: 0.2rem;
  width: 400px;
  margin-right: 1rem;
}
</style>
