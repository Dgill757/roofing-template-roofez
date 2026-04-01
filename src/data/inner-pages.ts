export interface InnerPageData {
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  /** optional: used as <title> tag if different from heroTitle */
  metaTitle?: string;
}

export const innerPages: InnerPageData[] = [
  // ── Service / Info pages ───────────────────────────────────────────────
  {
    slug: "about-us",
    heroTitle: "YOUR FLORIDA ROOFING EXPERTS",
    heroSubtitle:
      "Roof EZ is the residential and commercial roofing expert in Florida that you can trust. Learn more about our veteran-owned & operated local roofing company.",
    metaTitle: "About Us",
  },
  {
    slug: "roofing-services",
    heroTitle: "FLORIDA ROOFING SERVICES",
    heroSubtitle:
      "If you're looking for an expert Florida roofer, look no further than the professionals at Roof EZ in Cape Coral. Learn more about our services today!",
  },
  {
    slug: "roof-repair",
    heroTitle: "ROOF REPAIR IN FLORIDA",
    heroSubtitle:
      "Roof EZ offers residential roofing services throughout Southwest Florida. Contact Cape Coral's residential roofing experts today.",
  },
  {
    slug: "reroofing",
    heroTitle: "RE-ROOFING IN FLORIDA",
    heroSubtitle:
      "When repairs aren't enough, Roof EZ provides professional re-roofing services to protect your home with a brand-new system.",
  },
  {
    slug: "commercial-roofing",
    heroTitle: "COMMERCIAL ROOFING",
    heroSubtitle:
      "Roof EZ specializes in durable, low-maintenance commercial roofing systems designed to protect your business for decades.",
  },
  {
    slug: "storm-damage-repair",
    heroTitle: "STORM DAMAGE REPAIR",
    heroSubtitle:
      "After a hurricane or severe storm, Roof EZ responds fast to assess damage, work with your insurance, and restore your roof.",
  },
  {
    slug: "solar-panels",
    heroTitle: "SOLAR PANELS",
    heroSubtitle:
      "Combine a new roof with solar energy from Roof EZ and start saving on electricity while protecting your home.",
  },
  {
    slug: "contact-us",
    heroTitle: "CONTACT ROOF EZ",
    heroSubtitle:
      "Contact us for more information about our Cape Coral roofing services.",
    metaTitle: "Contact Us",
  },
  {
    slug: "residential-roofing",
    heroTitle: "RESIDENTIAL ROOFING IN FLORIDA",
    heroSubtitle:
      "Roof EZ offers residential roofing services throughout Southwest Florida. Contact Cape Coral's residential roofing experts today.",
  },
  {
    slug: "how-it-works",
    heroTitle: "HOW IT WORKS",
    heroSubtitle:
      "Our simple 4-step process makes getting a new roof or repair as easy and stress-free as possible for homeowners.",
  },
  {
    slug: "insurance",
    heroTitle: "INSURANCE CLAIMS",
    heroSubtitle:
      "Roof EZ works directly with your insurance company to maximize your claim and minimize out-of-pocket costs after storm damage.",
  },
  {
    slug: "careers",
    heroTitle: "CAREERS",
    heroSubtitle:
      "Join the Roof EZ team! We're always looking for skilled, motivated roofing professionals to grow with us.",
  },
  {
    slug: "reviews",
    heroTitle: "CUSTOMER REVIEWS",
    heroSubtitle:
      "Don't just take our word for it — read what hundreds of satisfied homeowners throughout Southwest Florida say about Roof EZ.",
  },
  {
    slug: "awards",
    heroTitle: "AWARDS & RECOGNITION",
    heroSubtitle:
      "Roof EZ has earned industry-leading awards and accreditations that reflect our commitment to quality and customer satisfaction.",
  },
  {
    slug: "history",
    heroTitle: "OUR HISTORY",
    heroSubtitle:
      "From a small local crew to Southwest Florida's premier roofing company — learn how Roof EZ grew to serve thousands of homeowners.",
  },
  {
    slug: "service-areas",
    heroTitle: "SERVICE AREAS",
    heroSubtitle:
      "Roof EZ proudly serves Cape Coral, Fort Myers, Naples, and communities throughout Lee and Collier counties.",
  },
  {
    slug: "financing",
    heroTitle: "ROOFING FINANCING",
    heroSubtitle:
      "No money down, flexible payment options — Roof EZ makes it easy to get the roof you need without breaking the bank.",
  },
  {
    slug: "roof-replacement",
    heroTitle: "ROOF REPLACEMENT",
    heroSubtitle:
      "When it's time for a full roof replacement, Roof EZ delivers quality materials and expert installation you can count on.",
  },
  {
    slug: "emergency-roof-repair",
    heroTitle: "EMERGENCY ROOF REPAIR",
    heroSubtitle:
      "Roof leaking right now? Roof EZ offers emergency repair services to stop damage fast and protect your home.",
  },
  {
    slug: "metal-roofing",
    heroTitle: "METAL ROOFING",
    heroSubtitle:
      "Durable, energy-efficient, and hurricane-resistant — discover why metal roofing is a top choice for Florida homeowners.",
  },
  {
    slug: "slate-tile-roofing",
    heroTitle: "SLATE & TILE ROOFING",
    heroSubtitle:
      "Add timeless elegance and unmatched durability to your home with professional slate and tile roofing from Roof EZ.",
  },
  {
    slug: "shingle-roofs-cape-coral",
    heroTitle: "SHINGLE ROOFING IN CAPE CORAL",
    heroSubtitle:
      "Asphalt shingle roofing is cost-effective, versatile, and beautiful. Roof EZ installs and repairs shingle roofs across Cape Coral.",
  },
  {
    slug: "thermal-roof-inspection",
    heroTitle: "THERMAL ROOF INSPECTION",
    heroSubtitle:
      "Roof EZ uses advanced infrared thermal imaging to detect hidden leaks, moisture, and damage before they become costly problems.",
  },
  {
    slug: "gutter-repair",
    heroTitle: "GUTTER REPAIR & INSTALLATION",
    heroSubtitle:
      "Protect your home's foundation and landscaping with properly functioning gutters installed and repaired by Roof EZ.",
  },
  {
    slug: "commercial-tpo-pvc-roofing",
    heroTitle: "COMMERCIAL TPO & PVC ROOFING",
    heroSubtitle:
      "Roof EZ installs and maintains high-performance TPO and PVC membrane roofing systems for commercial properties.",
  },
  {
    slug: "commercial-flat-metal-roofing",
    heroTitle: "COMMERCIAL FLAT METAL ROOFING",
    heroSubtitle:
      "Roof EZ's commercial flat metal roofing solutions provide lasting protection with minimal maintenance for Florida businesses.",
  },
  {
    slug: "non-insurance",
    heroTitle: "NON-INSURANCE ROOFING",
    heroSubtitle:
      "No insurance claim? No problem. Roof EZ offers competitive pricing and flexible financing for out-of-pocket roofing projects.",
  },

  // ── City landing pages ─────────────────────────────────────────────────
  {
    slug: "cape-coral-roofing-company",
    heroTitle: "CAPE CORAL ROOFING COMPANY",
    heroSubtitle:
      "Roof EZ is proud to be Cape Coral's go-to roofing company. Learn more about the roofing services that we are proud to offer.",
  },
  {
    slug: "fort-myers-roofing-company",
    heroTitle: "FORT MYERS ROOFING COMPANY",
    heroSubtitle:
      "Serving Fort Myers with expert roofing repairs, replacements, and inspections. Call Roof EZ for a free estimate today.",
  },
  {
    slug: "naples-roofing-company",
    heroTitle: "NAPLES ROOFING COMPANY",
    heroSubtitle:
      "Roof EZ provides premium roofing services to Naples homeowners and businesses — quality work at honest prices.",
  },
  {
    slug: "bonita-springs-roofing-company",
    heroTitle: "BONITA SPRINGS ROOFING COMPANY",
    heroSubtitle:
      "From roof repairs to full replacements, Roof EZ is the trusted choice for Bonita Springs homeowners.",
  },
  {
    slug: "port-charlotte-roofing-company",
    heroTitle: "PORT CHARLOTTE ROOFING COMPANY",
    heroSubtitle:
      "Roof EZ serves Port Charlotte with professional roofing installation, repair, and storm damage restoration services.",
  },
  {
    slug: "sanibel-roofing-company",
    heroTitle: "SANIBEL ROOFING COMPANY",
    heroSubtitle:
      "Protecting Sanibel island homes from the elements — Roof EZ brings expert roofing care to the barrier islands.",
  },
  {
    slug: "lehigh-acres-roofing-company",
    heroTitle: "LEHIGH ACRES ROOFING COMPANY",
    heroSubtitle:
      "Roof EZ is the trusted local roofing contractor for Lehigh Acres — quality repairs and replacements at fair prices.",
  },
  {
    slug: "iona-roofing-company",
    heroTitle: "IONA ROOFING COMPANY",
    heroSubtitle:
      "Serving Iona and the greater Fort Myers area with expert residential and commercial roofing from Roof EZ.",
  },
  {
    slug: "punta-gorda-roofing-company",
    heroTitle: "PUNTA GORDA ROOFING COMPANY",
    heroSubtitle:
      "Roof EZ provides professional roofing services to Punta Gorda homeowners — repairs, replacements, and free inspections.",
  },
  {
    slug: "north-naples-roofing-company",
    heroTitle: "NORTH NAPLES ROOFING COMPANY",
    heroSubtitle:
      "Expert roofing for North Naples homes and businesses. Roof EZ delivers quality and reliability on every project.",
  },
  {
    slug: "alva-roofing-company",
    heroTitle: "ALVA ROOFING COMPANY",
    heroSubtitle:
      "Roof EZ serves the Alva community with honest, professional roofing repairs and replacements throughout Lee County.",
  },
  {
    slug: "naples",
    heroTitle: "ROOFING CONTRACTOR IN NAPLES, FL",
    heroSubtitle:
      "Naples homeowners trust Roof EZ for quality roofing services, storm damage repairs, and free inspections.",
  },
  {
    slug: "venice",
    heroTitle: "ROOFING CONTRACTOR IN VENICE, FL",
    heroSubtitle:
      "Roof EZ brings expert roofing service to Venice, FL — repairs, replacements, and storm damage restoration.",
  },
  {
    slug: "north-port",
    heroTitle: "ROOFING CONTRACTOR IN NORTH PORT, FL",
    heroSubtitle:
      "North Port homeowners choose Roof EZ for trusted, affordable roofing repairs and full roof replacements.",
  },
  {
    slug: "marco-island",
    heroTitle: "ROOFING CONTRACTOR IN MARCO ISLAND, FL",
    heroSubtitle:
      "Protecting Marco Island homes from Florida's harsh weather — Roof EZ offers premium roofing with coastal expertise.",
  },
  {
    slug: "tampa",
    heroTitle: "ROOFING CONTRACTOR IN TAMPA, FL",
    heroSubtitle:
      "Roof EZ serves Tampa homeowners with quality roofing repairs, replacements, and free storm damage inspections.",
  },
  {
    slug: "roofing-company-in-rotonda-west",
    heroTitle: "ROOFING COMPANY IN ROTONDA WEST, FL",
    heroSubtitle:
      "Serving Rotonda West with expert roofing repairs, replacements, and insurance claim assistance from Roof EZ.",
  },
];

export function getPageBySlug(slug: string): InnerPageData | undefined {
  return innerPages.find((p) => p.slug === slug);
}
