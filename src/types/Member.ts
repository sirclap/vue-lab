export interface Member {
  id: string;
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  blog: string;
  company: string;
  bio: string;
}

export type Members = Array<Member>;
