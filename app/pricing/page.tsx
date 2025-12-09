import PricingView from "./pricing-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Xinfin Consulting",
  description: "Pricing for Xinfin Consulting",
};

export default function PricingPage() {
  return <PricingView />;
}
