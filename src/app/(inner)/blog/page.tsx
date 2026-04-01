import type { Metadata } from "next";
import InnerPageHero from "@/components/InnerPageHero";
import BlogGrid from "@/components/BlogGrid";

export const metadata: Metadata = {
  title: "Florida Roofing Blog | Roof EZ",
  description:
    "Tips, insights, and expert advice from Southwest Florida's leading roofing professionals.",
};

export default function BlogPage() {
  return (
    <>
      <InnerPageHero
        title="OUR BLOG"
        subtitle="Tips, insights, and expert advice from Southwest Florida's leading roofing professionals."
      />
      <BlogGrid />
    </>
  );
}
