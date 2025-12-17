import { Metadata } from "next";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { teamService } from "@/services/team.service";
import TeamView from "./team-view";

interface TeamMemberPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: TeamMemberPageProps): Promise<Metadata> {
  const { id } = await params;

  try {
    const member = await teamService.getTeamMember(id);

    return {
      title: member.name,
    };
  } catch {
    return {
      title: "Team Member - XInfin Consulting",
    };
  }
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { id } = await params;
  const queryClient = new QueryClient();

  // Prefetch the team member data
  await queryClient.prefetchQuery({
    queryKey: ["team-member", id],
    queryFn: () => teamService.getTeamMember(id),
    staleTime: Infinity,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TeamView />
    </HydrationBoundary>
  );
}
