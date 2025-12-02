import { BlogHero } from "@/components/blog/BlogHero";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { FooterCTA } from "@/components/shared/FooterCTA";

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
      <FooterCTA />
    </>
  );
}
