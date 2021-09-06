import { Ref, ref, watch } from "vue";
import { Members } from "@/types";
import { memberService } from "@/services/memberService";

export async function useGetMembers(organization: string) {
  async function fetchMembers(organization: string) {
    const json = await memberService.get(organization);

    return json;
  }

  const members = ref(await fetchMembers(organization));
  console.log(members);
  return { members, fetchMembers };
}
