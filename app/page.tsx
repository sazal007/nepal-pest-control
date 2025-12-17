import HomeView from "@/components/home/home-view";

// ISR: Revalidate every hour (3600 seconds)
export const revalidate = 3600;

export default function Home() {
  return <HomeView />;
}
