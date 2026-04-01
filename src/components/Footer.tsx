import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "About us", href: "/about-us/" },
  { label: "Service Areas", href: "/service-areas/" },
  { label: "Awards", href: "/awards/" },
  { label: "Blog", href: "/blog/" },
  { label: "Careers", href: "/careers/" },
];

const resources = [
  { label: "How It Works", href: "/how-it-works/" },
  { label: "Insurance", href: "/insurance/" },
  { label: "Roofing Services", href: "/roofing-services/" },
  { label: "Reviews", href: "/reviews/" },
  { label: "Contact Us", href: "/contact-us/" },
];

const socialLinks = [
  { icon: "/images/icon-instagram.svg", label: "Instagram", href: "https://instagram.com" },
  { icon: "/images/icon-tiktok.svg", label: "TikTok", href: "https://tiktok.com" },
  { icon: "/images/icon-facebook.svg", label: "Facebook", href: "https://facebook.com" },
  { icon: "/images/icon-google-social.svg", label: "Google", href: "https://google.com" },
  { icon: "/images/icon-mail.svg", label: "Email", href: "mailto:info@roofez.net" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#020202", padding: "60px 0 30px" }}>
      <div className="container mx-auto px-6" style={{ maxWidth: 1320 }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Column 1: Logo + social + location */}
          <div>
            <Link href="/" className="block mb-5">
              <Image
                src="/images/footer-logo.svg"
                alt="Roof EZ - Florida Roofing Company"
                width={200}
                height={95}
              />
            </Link>

            {/* Social icons */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity"
                  aria-label={s.label}
                >
                  <Image src={s.icon} alt={s.label} width={28} height={28} />
                </a>
              ))}
            </div>

            {/* Locations */}
            <h4
              className="font-ethno mb-2"
              style={{
                fontSize: 20,
                background: "linear-gradient(90deg, #F9AC00 0%, #FF7600 91%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              LOCATIONS
            </h4>
            <p
              className="font-ethno mb-1"
              style={{
                fontSize: 14,
                background: "linear-gradient(90deg, #F9AC00 0%, #FF7600 91%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              CAPE CORAL
            </p>
            <p className="font-visbydb text-white" style={{ fontSize: 14, lineHeight: "22px" }}>
              2528 Andalusia Blvd, Unit 1<br />
              Cape Coral, FL 33909
            </p>
            <div className="mt-4">
              <p className="font-visbyxb text-white text-sm">HOURS</p>
              <p className="font-visbydb text-gray-400 text-sm">Monday - Friday:</p>
              <p className="font-visbydb text-gray-400 text-sm">8AM - 4PM</p>
            </div>
            <div className="mt-3">
              <p className="font-visbyxb text-white text-sm">LICENSES</p>
              <p className="font-visbydb text-gray-400 text-sm">CCC1333863</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              className="font-ethno mb-5"
              style={{
                fontSize: 22,
                background: "linear-gradient(90deg, #F9AC00 0%, #FF7600 91%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="font-visbydb text-white hover:text-orange-400 transition-colors"
                    style={{ fontSize: 16 }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4
              className="font-ethno mb-5"
              style={{
                fontSize: 22,
                background: "linear-gradient(90deg, #F9AC00 0%, #FF7600 91%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              RESOURCES
            </h4>
            <ul className="space-y-3">
              {resources.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="font-visbydb text-white hover:text-orange-400 transition-colors"
                    style={{ fontSize: 16 }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Call + Map */}
          <div>
            <div className="mb-5">
              <p className="font-visbyxb text-white mb-2" style={{ fontSize: 16 }}>Call Us:</p>
              <a
                href="tel:239-788-6108"
                className="font-ethno block mb-3"
                style={{
                  fontSize: 28,
                  letterSpacing: "-0.05em",
                  background: "linear-gradient(90deg, #F9AC00 0%, #FF7600 91%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                239-788-6108
              </a>
              <Link
                href="/contact-us/"
                className="btn-orange inline-flex"
                style={{ fontSize: 16, padding: "10px 24px" }}
              >
                Contact Us
              </Link>
            </div>

            <Image
              src="/images/footer-map.png"
              alt="Roof EZ Service Area Map"
              width={380}
              height={220}
              className="w-full object-cover"
              style={{ border: "2px solid rgba(249,172,0,0.3)" }}
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p className="font-visbydb text-gray-500 text-sm">© 2026 All Rights Reserved</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            {["Privacy Policy", "Cookie Policy", "Terms Of Use"].map((label) => (
              <Link
                key={label}
                href="#"
                className="font-visbydb text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
