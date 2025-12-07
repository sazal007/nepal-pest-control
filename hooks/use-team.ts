import { teamService } from "@/services/team.service";
import { useQuery } from "@tanstack/react-query";

export const useGetTeam = () => {
  return useQuery({
    queryKey: ["team-members"],
    queryFn: () => teamService.getTeamMembers(),
  });
};
