import BlogView from "./blog-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Xinfin Consulting",
  description: "Blog for Xinfin Consulting",
};

export default function BlogPage() {
  return (
    <>
      <BlogView />
    </>
  );
}
