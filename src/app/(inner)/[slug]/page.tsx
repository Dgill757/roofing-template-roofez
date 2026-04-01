import { notFound } from "next/navigation";
import { Metadata } from "next";
import InnerPageHero from "@/components/InnerPageHero";
import InnerPageLayout from "@/components/InnerPageLayout";
import InnerPageArticle from "@/components/InnerPageArticle";
import InnerPageSidebar from "@/components/InnerPageSidebar";
import BlogPostHeader from "@/components/BlogPostHeader";
import BlogPostArticle from "@/components/BlogPostArticle";
import { getPageBySlug, innerPages } from "@/data/inner-pages";
import { blogPostMeta, allBlogPostSlugs } from "@/data/blog-post-metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    ...innerPages.map((p) => ({ slug: p.slug })),
    ...allBlogPostSlugs.map((s) => ({ slug: s })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const blogMeta = blogPostMeta[slug];
  if (blogMeta) {
    return {
      title: `${blogMeta.title} | Roof EZ`,
      description: `Read about ${blogMeta.title.toLowerCase()} on the Roof EZ blog.`,
    };
  }

  const page = getPageBySlug(slug);
  if (!page) return {};
  return {
    title: `${page.metaTitle ?? page.heroTitle} | Roof EZ`,
    description: page.heroSubtitle,
  };
}

export default async function InnerPage({ params }: Props) {
  const { slug } = await params;

  // Check if this is a blog post slug
  const blogMeta = blogPostMeta[slug];
  if (blogMeta) {
    return (
      <>
        <BlogPostHeader
          title={blogMeta.title}
          date={blogMeta.date}
          category={blogMeta.category}
          featuredImgUrl={blogMeta.featuredImgUrl}
          featuredImgAlt={blogMeta.featuredImgAlt}
        />
        <section style={{ background: "rgb(15,15,15)", padding: "60px 0" }}>
          <div className="mx-auto px-6" style={{ maxWidth: 1320 }}>
            <div className="flex gap-8 items-start">
              <div className="flex-1 min-w-0">
                <BlogPostArticle slug={slug} />
              </div>
              <div className="shrink-0" style={{ width: 370 }}>
                <InnerPageSidebar />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Fall back to service page
  const page = getPageBySlug(slug);
  if (!page) notFound();

  return (
    <>
      <InnerPageHero title={page.heroTitle} subtitle={page.heroSubtitle} />
      <InnerPageLayout>
        <InnerPageArticle slug={slug} />
      </InnerPageLayout>
    </>
  );
}
