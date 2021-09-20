<template>
  <StringFilter :filter="organization" @onFilter="onFilter"></StringFilter>
  <suspense>
    <template #default>
      <MemberList :organization="organization"></MemberList>
    </template>
    <template #fallback> Cargando... </template>
  </suspense>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import MemberList from "@/components/MemberList.vue";
import StringFilter from "@/components/StringFilter.vue";

export default defineComponent({
  components: {
    MemberList,
    StringFilter,
  },
  setup() {
    const sessionName = "member-list-filter";

    const organization: Ref<string> = ref(
      sessionStorage.getItem(sessionName) || "lemoncode"
    );

    const onFilter = (filter: string) => {
      organization.value = filter;
      sessionStorage.setItem(sessionName, filter);
    };

    return { organization, onFilter };
  },
});
</script>

<style scoped></style>
