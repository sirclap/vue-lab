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
      sessionStorage.organizationFilter
        ? sessionStorage.organizationFilter
        : "lemoncode"
    );

    const onFilter = (filter: string) => {
      organization.value = filter;
      sessionStorage.organizationFilter = filter;
    };

    return { organization, onFilter };
  },
});
</script>

<style scoped></style>
