import { teamService } from "@/services/team.service";
import { useQuery } from "@tanstack/react-query";

export const useGetTeam = () => {
  return useQuery({
    queryKey: ["team-members"],
    queryFn: () => teamService.getTeamMembers(),
  });
};

export const useGetTeamMember = (id?: string) => {
  return useQuery({
    queryKey: ["team-member", id],
    enabled: Boolean(id),
    queryFn: () => teamService.getTeamMember(id as string),
  });
};
