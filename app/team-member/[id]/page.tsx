import { Metadata } from "next";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { teamServiceServer } from "@/services/team.service.server";
import TeamView from "./team-view";

interface TeamMemberPageProps {
  params: Promise<{
    id: string;
  }>;
}

// ISR: Revalidate every hour (3600 seconds)
export const revalidate = 3600;

export async function generateMetadata({
  params,
}: TeamMemberPageProps): Promise<Metadata> {
  const { id } = await params;

  try {
    const member = await teamServiceServer.getTeamMember(id);

    return {
      title: member.name,
    };
  } catch {
    return {
      title: "Team Member",
    };
  }
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { id } = await params;
  const queryClient = new QueryClient();

  // Prefetch the team member data with ISR
  await queryClient.prefetchQuery({
    queryKey: ["team-member", id],
    queryFn: () => teamServiceServer.getTeamMember(id),
    staleTime: 3600 * 1000, // 1 hour in milliseconds (matches ISR revalidate)
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TeamView />
    </HydrationBoundary>
  );
}
