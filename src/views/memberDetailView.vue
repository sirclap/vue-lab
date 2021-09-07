<template>
  <div>{{ member.login }}{<img :src="member.avatar_url" />}</div>
  <router-link :to="`/members`"> regresar </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteLocation } from "vue-router";
import { Member } from "@/types";
import { memberService } from "@/services/memberService";

export default defineComponent({
  data: () => ({
    member: {} as Member,
  }),
  setup() {
    return {};
  },
  computed: {
    id(): string {
      return String((this.$route as RouteLocation).params.id);
    },
  },
  created() {
    memberService.getMember(this.id).then((member: Member | undefined) => {
      if (member) {
        this.member = member;
      }
    });
  },
});
</script>

<style scoped></style>
