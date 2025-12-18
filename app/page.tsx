import HomeView from "@/components/home/home-view";
import { Metadata } from "next";

// ISR: Revalidate every hour (3600 seconds)
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Xinfin - Professional Accounting, Compliance & Business Setup",
  description:
    "Xinfin is a professional accounting, compliance and business setup company that provides exceptional financial services. We are a leading financial consulting firm that offers a wide range of services to businesses of all sizes.",
};
export default function Home() {
  return <HomeView />;
}
