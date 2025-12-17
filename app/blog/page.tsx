import BlogView from "./blog-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stay informed with the latest insights from XInfin Consulting. Read our expert articles on tax planning, financial strategy, business compliance, accounting best practices, and industry trends.",
};

export default function BlogPage() {
  return (
    <>
      <BlogView />
    </>
  );
}
