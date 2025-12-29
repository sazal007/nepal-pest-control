import HomeView from "@/components/home/home-view";
import { Metadata } from "next";

// ISR: Revalidate every hour (3600 seconds)
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Nepal Pest Control - Professional Pest Control Services",
  description:
    "Nepal Pest Control is a professional pest control company that provides exceptional pest control services. We are a leading pest control firm that offers a wide range of services to businesses of all sizes.",
};
export default function Home() {
  return <HomeView />;
}
