<template>
  <v-card class="member-card">
    <v-img :src="member.avatar_url" />
    <v-card-header>
      <v-card-header-text>
        <v-card-title>{{ member.name }}</v-card-title>
        <v-card-subtitle> {{ member.login }}</v-card-subtitle>
      </v-card-header-text>
    </v-card-header>
    <v-card-text>
      <p>{{ member.company }}</p>
      {{ member.bio }}
    </v-card-text>
    <v-card-actions>
      <v-btn elevation="2" icon rounded :href="member.html_url">
        <v-icon large color="darken-2"> mdi-github </v-icon>
      </v-btn>
      <v-btn v-if="member.blog" elevation="2" icon rounded :href="member.blog">
        <v-icon large color="darken-2"> mdi-blogger </v-icon>
      </v-btn>
    </v-card-actions>
    <v-card-actions>
      <v-btn :href="`/members`">Regresar</v-btn>
    </v-card-actions>
  </v-card>
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

<style scoped>
.member-card {
  max-width: 400px;
  margin: 50px auto;
}
</style>
