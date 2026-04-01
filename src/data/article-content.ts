export interface ContentBlock {
  tag: "h2" | "h3" | "p";
  text: string;
}

type ArticleMap = Record<string, ContentBlock[]>;

// ─── Shared default content (used when no specific content exists) ─────────
const defaultContent: ContentBlock[] = [
  { tag: "h2", text: "SOUTHWEST FLORIDA'S TRUSTED ROOFING EXPERTS" },
  {
    tag: "p",
    text: "Roof EZ has been serving homeowners and businesses across Southwest Florida with professional roofing services. Our licensed and insured team delivers top-quality workmanship on every job — from minor repairs to full roof replacements.",
  },
  { tag: "h2", text: "WHY CHOOSE ROOF EZ?" },
  {
    tag: "h3",
    text: "LOCAL EXPERTISE",
  },
  {
    tag: "p",
    text: "As a locally owned and operated company, we understand the unique demands Florida's climate places on roofing systems. From hurricane-force winds to relentless heat and humidity, we know how to build and repair roofs that last.",
  },
  {
    tag: "h3",
    text: "LICENSED & INSURED",
  },
  {
    tag: "p",
    text: "Roof EZ is fully licensed, bonded, and insured in the state of Florida. You can trust that every project is completed safely, professionally, and to code.",
  },
  {
    tag: "h3",
    text: "FINANCING AVAILABLE",
  },
  {
    tag: "p",
    text: "We offer flexible financing options with no money down, making it easier for homeowners to get the roof they need without delay. Contact us today to learn more about our financing programs.",
  },
  {
    tag: "h3",
    text: "FREE INSPECTIONS & ESTIMATES",
  },
  {
    tag: "p",
    text: "Every project starts with a free, no-obligation inspection and estimate. Our experts will assess your roof, explain your options, and provide transparent pricing — no surprises.",
  },
  { tag: "h2", text: "CONTACT US TODAY" },
  {
    tag: "p",
    text: "Ready to protect your home with a quality roof from Roof EZ? Fill out the form to schedule your free inspection or call us at (239) 788-6108. We look forward to earning your trust.",
  },
];

// ─── Per-page article content ──────────────────────────────────────────────
export const articleContent: ArticleMap = {
  _default: defaultContent,

  "roof-repair": [
    { tag: "h2", text: "RESIDENTIAL ROOFING PRODUCTS IN CAPE CORAL" },
    { tag: "h3", text: "Shingle Roofing" },
    {
      tag: "p",
      text: "Shingle roofs often experience leaks due to missing or damaged shingles, improper installation, or wear and tear. Common repairs include replacing damaged shingles, sealing cracks, and re-securing loose shingles to prevent further water penetration and damage.",
    },
    { tag: "h3", text: "Tile Roofing" },
    {
      tag: "p",
      text: "Tile roofs can develop leaks from cracked or broken tiles, underlayment deterioration, or improperly installed flashing. Repairs typically involve replacing damaged tiles, repairing or replacing the underlayment, and ensuring all flashings are correctly sealed.",
    },
    { tag: "h3", text: "Slate Roofing" },
    {
      tag: "p",
      text: "Slate roofs may leak due to broken or missing slates, improper installation, or aging. Common repairs include replacing damaged slates, securing loose slates, and addressing any issues with the underlayment or flashing to maintain a watertight seal.",
    },
    { tag: "h3", text: "Metal Roofing" },
    {
      tag: "p",
      text: "Metal roofs can leak from loose seams, damaged panels, or corrosion. Repairs often involve resealing seams, replacing damaged panels, and treating or replacing corroded areas to ensure long-lasting protection against leaks.",
    },
    { tag: "h2", text: "RESIDENTIAL ROOFING SYSTEMS IN CAPE CORAL" },
    { tag: "h3", text: "SHINGLE ROOFING" },
    {
      tag: "p",
      text: "Shingle roofing offers a cost-effective and aesthetically pleasing option for Cape Coral residents. It's known for its easy installation and wide variety of styles and colors. However, shingles can be susceptible to damage from high winds and severe weather, requiring regular maintenance and occasional repairs.",
    },
    { tag: "h3", text: "TILE AND SLATE ROOFING" },
    {
      tag: "p",
      text: "Tile and slate roofing delivers unmatched elegance and longevity, making it a popular choice in SW Florida. These materials withstand Florida's extreme weather, from scorching sun to hurricane-driven rain. While the initial investment is higher, the durability and aesthetic appeal often make it a cost-effective long-term choice.",
    },
    { tag: "h3", text: "METAL ROOFING" },
    {
      tag: "p",
      text: "Metal roofing is a durable and energy-efficient option for Cape Coral homes, reflecting the sun's rays and resisting severe weather. While it offers a long lifespan and minimal maintenance, the initial cost is typically higher than shingles. Metal roofing comes in a variety of styles, including panels, shingles, and tiles, to complement various architectural designs.",
    },
    { tag: "h2", text: "WHY ROOFEZ?" },
    { tag: "h3", text: "TRUST CAPE CORAL'S MOST TRUSTED RESIDENTIAL ROOF LEAK REPAIRER" },
    {
      tag: "p",
      text: "When it comes to residential roof repairs in Cape Coral, Roof EZ stands out for its exceptional service, expertise, and commitment to customer satisfaction. Our team of skilled roofers is equipped to handle all types of roofing systems, including shingles, tiles, slate, and metal. We pride ourselves on delivering high-quality repairs that withstand Florida's challenging weather conditions.",
    },
    { tag: "h3", text: "CAPE CORAL'S MOST TRUSTED ROOFER" },
    {
      tag: "p",
      text: "At Roof EZ, we understand that a leaking roof can be stressful and damaging to your home. That's why we offer prompt, reliable service to address your roofing issues quickly and efficiently. Our competitive pricing and financing options make it easier for homeowners to get the repairs they need without breaking the bank. Trust Roof EZ for all your Cape Coral residential roofing needs.",
    },
  ],

  "about-us": [
    { tag: "h2", text: "ABOUT ROOF EZ" },
    {
      tag: "p",
      text: "Roof EZ is a locally owned and operated roofing company proudly serving Cape Coral and all of Southwest Florida. Founded on the principles of integrity, craftsmanship, and customer service, we have grown to become the area's most trusted roofing contractor.",
    },
    { tag: "h2", text: "OUR MISSION" },
    {
      tag: "p",
      text: "Our mission is simple: to provide every homeowner and business owner with a roof they can count on, at a price that's fair and transparent. From the first call to the final inspection, we're committed to exceeding your expectations at every step.",
    },
    { tag: "h2", text: "WHY CHOOSE ROOF EZ?" },
    { tag: "h3", text: "LOCAL EXPERTS" },
    {
      tag: "p",
      text: "We know Southwest Florida. Our team has deep experience with the unique weather patterns, building codes, and roofing challenges specific to this region — from hurricane season to the intense Florida sun.",
    },
    { tag: "h3", text: "LICENSED & INSURED" },
    {
      tag: "p",
      text: "Roof EZ is fully licensed, bonded, and insured, giving you complete peace of mind on every project. We handle all permits and ensure every job meets or exceeds Florida building codes.",
    },
    { tag: "h3", text: "5-STAR REVIEWS" },
    {
      tag: "p",
      text: "With hundreds of 5-star reviews on Google and Facebook, our customers speak for themselves. We're proud of the relationships we build and the roofs we deliver.",
    },
    { tag: "h3", text: "FINANCING AVAILABLE" },
    {
      tag: "p",
      text: "We believe every homeowner deserves a quality roof. That's why we offer flexible financing options with no money down, making it easier to protect your home without financial stress.",
    },
  ],

  "commercial-roofing": [
    { tag: "h2", text: "COMMERCIAL ROOFING SERVICES IN SOUTHWEST FLORIDA" },
    {
      tag: "p",
      text: "Roof EZ provides comprehensive commercial roofing solutions for businesses, industrial facilities, and property managers throughout Southwest Florida. Our experienced commercial roofing team handles projects of all sizes with efficiency and minimal disruption to your operations.",
    },
    { tag: "h2", text: "COMMERCIAL ROOFING SYSTEMS WE INSTALL" },
    { tag: "h3", text: "TPO & PVC MEMBRANE ROOFING" },
    {
      tag: "p",
      text: "TPO and PVC single-ply membrane roofing systems are among the most popular choices for flat and low-slope commercial roofs. These systems offer outstanding energy efficiency, UV resistance, and long-term durability — perfect for Florida's climate.",
    },
    { tag: "h3", text: "FLAT METAL ROOFING" },
    {
      tag: "p",
      text: "Metal roofing systems for commercial buildings offer exceptional longevity and weather resistance. Standing seam metal panels provide a watertight, low-maintenance solution that stands up to Florida's intense sun and severe storms.",
    },
    { tag: "h3", text: "MODIFIED BITUMEN" },
    {
      tag: "p",
      text: "Modified bitumen roofing is a proven, durable solution for commercial flat roofs. It provides excellent waterproofing and can be applied using torch-down, cold-adhesive, or self-adhering methods depending on your building's requirements.",
    },
    { tag: "h2", text: "WHY BUSINESSES TRUST ROOF EZ" },
    {
      tag: "p",
      text: "We understand that your business can't afford downtime. Our commercial roofing crews work efficiently to complete projects on schedule with minimal disruption. We provide detailed proposals, transparent pricing, and regular progress updates throughout every project.",
    },
  ],

  "storm-damage-repair": [
    { tag: "h2", text: "STORM DAMAGE ROOF REPAIR IN SOUTHWEST FLORIDA" },
    {
      tag: "p",
      text: "Florida's severe weather — from hurricane-force winds to hail and heavy rain — can cause significant damage to your roof. Roof EZ responds quickly after storms to assess damage, provide emergency tarping, and begin the restoration process.",
    },
    { tag: "h2", text: "OUR STORM DAMAGE PROCESS" },
    { tag: "h3", text: "STEP 1: FREE INSPECTION" },
    {
      tag: "p",
      text: "After a storm, call Roof EZ for a free, no-obligation inspection. Our certified inspectors will thoroughly document all damage, including areas that may not be visible from the ground.",
    },
    { tag: "h3", text: "STEP 2: INSURANCE CLAIM ASSISTANCE" },
    {
      tag: "p",
      text: "We work directly with your insurance company to ensure your claim is processed accurately and completely. Our team prepares detailed damage reports and advocates on your behalf to maximize your settlement.",
    },
    { tag: "h3", text: "STEP 3: EMERGENCY TARPING" },
    {
      tag: "p",
      text: "If your roof is actively leaking or structurally compromised, we provide emergency tarping to protect your home while the full repair or replacement is scheduled.",
    },
    { tag: "h3", text: "STEP 4: FULL RESTORATION" },
    {
      tag: "p",
      text: "Once your claim is approved, our expert crew handles the complete repair or replacement, using quality materials and proper installation techniques to restore your roof to like-new condition.",
    },
  ],

  "metal-roofing": [
    { tag: "h2", text: "METAL ROOFING IN SOUTHWEST FLORIDA" },
    {
      tag: "p",
      text: "Metal roofing is one of the best long-term investments a Florida homeowner can make. With a lifespan of 40–70 years, exceptional wind resistance, and superior energy efficiency, metal roofs outperform traditional shingles in nearly every category.",
    },
    { tag: "h2", text: "BENEFITS OF METAL ROOFING IN FLORIDA" },
    { tag: "h3", text: "HURRICANE RESISTANCE" },
    {
      tag: "p",
      text: "Metal roofing systems are engineered to withstand winds exceeding 140 mph, making them ideal for Florida's hurricane-prone regions. When properly installed, metal roofs provide outstanding protection during even the most severe storms.",
    },
    { tag: "h3", text: "ENERGY EFFICIENCY" },
    {
      tag: "p",
      text: "Metal roofs reflect solar heat rather than absorbing it, which can reduce cooling costs by 10–25%. In Florida's hot climate, this energy savings adds up quickly, helping to offset the initial investment.",
    },
    { tag: "h3", text: "LONGEVITY" },
    {
      tag: "p",
      text: "While an asphalt shingle roof may need replacement every 15–20 years in Florida's harsh climate, a quality metal roof can last 40–70 years with minimal maintenance. This makes metal roofing a cost-effective long-term choice.",
    },
    { tag: "h3", text: "INSURANCE SAVINGS" },
    {
      tag: "p",
      text: "Many Florida homeowners with metal roofs qualify for significant insurance discounts due to the material's superior wind and fire resistance. Check with your insurer — the savings can be substantial.",
    },
  ],

  "residential-roofing": [
    { tag: "h2", text: "RESIDENTIAL ROOFING SERVICES IN SOUTHWEST FLORIDA" },
    {
      tag: "p",
      text: "Roof EZ provides complete residential roofing solutions for homeowners throughout Southwest Florida. Whether you need a minor repair, a full replacement, or a brand-new installation, our licensed team delivers exceptional craftsmanship on every project.",
    },
    { tag: "h2", text: "OUR RESIDENTIAL ROOFING SERVICES" },
    { tag: "h3", text: "ROOF REPAIRS" },
    {
      tag: "p",
      text: "From replacing a few damaged shingles to repairing significant storm damage, Roof EZ handles repairs of all sizes. We use quality materials matched to your existing roof for seamless, lasting results.",
    },
    { tag: "h3", text: "ROOF REPLACEMENT" },
    {
      tag: "p",
      text: "When repairs are no longer cost-effective, Roof EZ provides full roof replacement services. We'll help you choose the right roofing system for your home, budget, and aesthetic preferences.",
    },
    { tag: "h3", text: "NEW ROOF INSTALLATION" },
    {
      tag: "p",
      text: "Building a new home? Roof EZ partners with builders and homeowners to install quality roofing systems that protect your investment from day one.",
    },
    { tag: "h3", text: "ROOFING MATERIALS WE WORK WITH" },
    {
      tag: "p",
      text: "We install and repair all major roofing types, including asphalt shingles, metal roofing, tile, slate, and flat roof systems. Our team will help you understand the pros and cons of each material for your specific situation.",
    },
  ],

  "cape-coral-roofing-company": [
    { tag: "h2", text: "CAPE CORAL'S #1 RATED ROOFING COMPANY" },
    {
      tag: "p",
      text: "Roof EZ is proud to be Cape Coral's most trusted roofing contractor. With hundreds of 5-star reviews and thousands of completed projects, we've built our reputation one roof at a time. When you choose Roof EZ, you're choosing a company that puts your home and your satisfaction first.",
    },
    { tag: "h2", text: "ROOFING SERVICES IN CAPE CORAL" },
    { tag: "h3", text: "RESIDENTIAL ROOFING" },
    {
      tag: "p",
      text: "From shingle repairs to complete tile roof replacements, Roof EZ handles every residential roofing need in Cape Coral. Our licensed team uses quality materials and proven installation techniques to deliver roofs that protect your home for decades.",
    },
    { tag: "h3", text: "COMMERCIAL ROOFING" },
    {
      tag: "p",
      text: "Cape Coral businesses trust Roof EZ for professional commercial roofing services, including TPO/PVC membrane systems, metal roofing, and modified bitumen — all installed with minimal disruption to your operations.",
    },
    { tag: "h3", text: "STORM DAMAGE REPAIR" },
    {
      tag: "p",
      text: "After a hurricane or severe storm, Roof EZ responds fast to assess damage, assist with insurance claims, and restore your Cape Coral roof to like-new condition.",
    },
    { tag: "h2", text: "WHY CAPE CORAL HOMEOWNERS CHOOSE ROOF EZ" },
    {
      tag: "p",
      text: "Local expertise, transparent pricing, and a commitment to quality craftsmanship set Roof EZ apart from other Cape Coral roofing companies. We're not just contractors — we're neighbors who care about the community we serve.",
    },
  ],
};
