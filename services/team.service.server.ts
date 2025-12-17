/**
 * Server-side team service with ISR support
 */
import { serverGet } from "@/lib/server-fetch";
import { TEAM } from "@/types/team-member";

const REVALIDATE_TIME = 3600; // 1 hour

export const teamServiceServer = {
  getTeamMembers: async (): Promise<TEAM[]> => {
    return serverGet<TEAM[]>("/api/team-member/", REVALIDATE_TIME);
  },
  getTeamMember: async (id: string): Promise<TEAM> => {
    return serverGet<TEAM>(`/api/team-member/${id}`, REVALIDATE_TIME);
  },
};

