export type Role = "vip" | "mod" | "sub";

export interface Sub {
  nick: string;
  role: Role;
  avatar: string;
  subMonths: number;
  description?: string;
}
