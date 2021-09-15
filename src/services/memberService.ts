import { Member, Members } from "@/types";

export const memberService = {
  async get(organization: string): Promise<Members> {
    const members = await fetch(
      `https://api.github.com/orgs/${organization}/members`
    ).then((response) => {
      return response.ok ? response.json() : null;
    });

    return members;
  },

  async getMember(id: string): Promise<Member | undefined> {
    const member = await fetch(`https://api.github.com/users/${id}`).then(
      (response) => response.json()
    );

    return member;
  },
};
