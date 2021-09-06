<template>
  <table border="1">
    <thead>
      <th>Avatar</th>
      <th>Login</th>
      <th>Id</th>
    </thead>
    <tbody>
      <tr v-for="member in members" :key="member.id">
        <td>{{ member.login }}</td>
        <td>{{ member.login }}</td>
        <td>{{ member.id }}</td>
      </tr>
    </tbody>
  </table>
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

<style scoped></style>
