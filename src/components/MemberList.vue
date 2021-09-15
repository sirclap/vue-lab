<template>
  <div v-if="members" class="list">
    <v-card v-for="member in members" :key="member.id" class="member">
      <v-img :src="member.avatar_url" />
      <v-card-text>
        <p>{{ member.login }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn :href="`/member/${member.login}`">Ver</v-btn>
      </v-card-actions>
    </v-card>
  </div>
  <div v-else class="list-empty">No se han encontrado resultados</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { memberService } from "@/services/memberService";

export default defineComponent({
  props: {
    organization: {
      type: String,
      required: true,
    },
  },
  async setup(props) {
    async function fetchMembers(organization: string) {
      return await memberService.get(organization);
    }

    watch(
      () => props.organization,
      async () => {
        members.value = await fetchMembers(props.organization);
      }
    );

    const members = ref(await fetchMembers(props.organization));

    return { members };
  },
});
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
}
.member {
  margin: 2rem;
  width: 225px;
}
.list-empty {
  margin: 2rem;
  text-align: center;
}
</style>
