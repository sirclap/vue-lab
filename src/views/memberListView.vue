<template>
  <StringFilter :filter="organization" @onFilter="onFilter"></StringFilter>
  <suspense>
    <MemberList :organization="organization"></MemberList>
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
    const organization: Ref<string> = ref(
      localStorage.organizationFilter
        ? localStorage.organizationFilter
        : "lemoncode"
    );
    console.log("setup");
    const onFilter = (filter: string) => {
      organization.value = filter;
      localStorage.organizationFilter = filter;
    };

    return { organization, onFilter };
  },
});
</script>

<style scoped></style>
