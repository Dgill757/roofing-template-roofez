import Image from "next/image";
import Link from "next/link";

const cities = [
  { name: "Cape Coral", href: "/cape-coral-roofing-company/" },
  { name: "Bonita Springs", href: "/bonita-springs-roofing-company/" },
  { name: "Port Charlotte", href: "/port-charlotte-roofing-company/" },
  { name: "Sanibel", href: "/sanibel-roofing-company/" },
  { name: "Alva", href: "/alva-roofing-company/" },
  { name: "Fort Myers", href: "/fort-myers-roofing-company/" },
  { name: "Naples", href: "/naples-roofing-company/" },
  { name: "Iona", href: "/iona-roofing-company/" },
  { name: "North Naples", href: "/north-naples-roofing-company/" },
  { name: "Lehigh Acres", href: "/lehigh-acres-roofing-company/" },
  { name: "Punta Gorda", href: "/punta-gorda-roofing-company/" },
];

// Split into 2 columns
const col1 = cities.filter((_, i) => i % 2 === 0);
const col2 = cities.filter((_, i) => i % 2 !== 0);

export default function CitiesSection() {
  return (
    <section style={{ background: "#020202", padding: "80px 0" }}>
      <div className="container mx-auto px-6" style={{ maxWidth: 1320 }}>
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left: Cities list */}
          <div className="w-full lg:w-1/2">
            <h2
              className="font-ethno mb-8"
              style={{
                fontSize: 52,
                lineHeight: "56px",
                letterSpacing: "-0.03em",
                background: "linear-gradient(90deg, #F9AC00 0%, #FF7600 91%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              CITIES WE SERVE
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {/* Column 1 */}
              <div className="space-y-3">
                {col1.map((city) => (
                  <Link key={city.name} href={city.href} className="city-btn block">
                    <span>{city.name}</span>
                    <span style={{ color: "#FF7600" }}>→</span>
                  </Link>
                ))}
              </div>
              {/* Column 2 */}
              <div className="space-y-3">
                {col2.map((city) => (
                  <Link key={city.name} href={city.href} className="city-btn block">
                    <span>{city.name}</span>
                    <span style={{ color: "#FF7600" }}>→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Florida map */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/service-area-map.svg"
              alt="Southwest Florida Service Area Map - Roof EZ"
              width={600}
              height={700}
              className="w-full max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
