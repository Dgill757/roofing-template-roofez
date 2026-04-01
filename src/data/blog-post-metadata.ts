export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  featuredImgUrl: string;
  featuredImgAlt: string;
}

export const blogPostMeta: Record<string, BlogPostMeta> = {
  "how-to-find-a-roofing-contractor-in-cape-coral-fl": {
    slug: "how-to-find-a-roofing-contractor-in-cape-coral-fl",
    title: "HOW TO FIND A ROOFING CONTRACTOR IN CAPE CORAL, FL",
    date: "June 2, 2025",
    category: "ROOFING",
    featuredImgUrl: "https://roofez.net/wp-content/uploads/2025/06/mexican-workers-repairing-roof.jpg",
    featuredImgAlt: "Roofing contractors working on a roof in Cape Coral, FL",
  },
  "signs-you-need-roofing-services-asap": {
    slug: "signs-you-need-roofing-services-asap",
    title: "SIGNS YOU NEED ROOFING SERVICES ASAP",
    date: "June 2025",
    category: "ROOFING",
    featuredImgUrl: "https://roofez.net/wp-content/uploads/2025/06/signs-need-roofing.jpg",
    featuredImgAlt: "Damaged roof showing signs that need immediate repair",
  },
  "how-to-check-for-roof-damage-after-a-storm-five-key-signs-to-look-for": {
    slug: "how-to-check-for-roof-damage-after-a-storm-five-key-signs-to-look-for",
    title: "HOW TO CHECK FOR ROOF DAMAGE AFTER A STORM: FIVE KEY SIGNS TO LOOK FOR",
    date: "June 2025",
    category: "ROOFING",
    featuredImgUrl: "https://roofez.net/wp-content/uploads/2025/06/storm-damage-roof.jpg",
    featuredImgAlt: "Storm damaged roof with missing shingles",
  },
};

export const allBlogPostSlugs = Object.keys(blogPostMeta);
