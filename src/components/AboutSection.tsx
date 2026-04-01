import Image from "next/image";

const values = [
  { label: "Quality\nCraftsmanship", icon: "/images/icon-quality.svg" },
  { label: "Customer\nFocus", icon: "/images/icon-customer-focus.svg" },
  { label: "Community", icon: "/images/icon-community.svg" },
  { label: "Reliability", icon: "/images/icon-reliability.svg" },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 597 }}>
      {/* American flag background (::before pseudo-element equivalent) */}
      <div
        className="absolute left-0 top-0 w-full"
        style={{
          height: 551,
          backgroundImage: "url('/images/usa-flag.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />

      <div
        className="relative container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12"
        style={{ maxWidth: 1320, zIndex: 1 }}
      >
        {/* Left: Team photo */}
        <div className="w-full md:w-5/12 flex-shrink-0">
          <Image
            src="/images/team-photo.webp"
            alt="Roof EZ Team - Professional Florida Roofers"
            width={540}
            height={600}
            className="w-full object-cover"
            style={{ maxHeight: 560 }}
          />
        </div>

        {/* Right: Text + value cards */}
        <div className="w-full md:w-7/12">
          <h2
            className="font-ethno mb-6"
            style={{ fontSize: 48, lineHeight: "52px", letterSpacing: "-0.03em", color: "#020202" }}
          >
            YOUR PROFESSIONAL FLORIDA ROOFING COMPANY
          </h2>
          <p
            className="font-visbydb text-center mb-8"
            style={{ fontSize: 18, lineHeight: "28px", color: "#020202" }}
          >
            Roof EZ is a proud veteran-owned and operated company located in Cape Coral, FL. Our headline
            &ldquo;Where We Make it EASY&rdquo; is more than just a motto for us, it&apos;s also our promise to the way we
            provide service! We offer all residential and commercial services from new roofs, re-roofs,
            repairs, and inspections utilizing the most advanced equipment and expert installation services.
            At Roof EZ, we strive to go the extra mile to deliver you not only quality and personable services
            but quality products that will last for decades.
          </p>

          {/* Value cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {values.map((v) => (
              <div key={v.label} className="value-card flex flex-col items-center gap-3">
                <Image src={v.icon} alt={v.label} width={60} height={60} />
                <p
                  className="font-ethno text-white text-center whitespace-pre-line"
                  style={{ fontSize: 14, lineHeight: "18px", letterSpacing: "0.03em" }}
                >
                  {v.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
