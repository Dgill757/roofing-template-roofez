import Image from "next/image";
import ContactForm from "./ContactForm";

export default function InnerPageSidebar() {
  return (
    <div
      style={{
        background: "rgb(2, 2, 2)",
        padding: 20,
        borderBottom: "2px solid transparent",
        borderImage: "linear-gradient(90deg, #F9AC00 0%, #FF7600 91%) 1",
      }}
    >
      {/* Chamber of Commerce badge */}
      <div className="flex justify-center mb-4">
        <Image
          src="/images/chamber-logo.png"
          alt="Chamber of Commerce of Cape Coral"
          width={110}
          height={70}
        />
      </div>

      {/* Form heading */}
      <h2
        className="font-visbyheavy text-white text-center mb-1"
        style={{ fontSize: 22, lineHeight: "32px" }}
      >
        Free Roof Inspections &amp; Estimates
      </h2>
      <p className="font-visbydb text-white text-center mb-4" style={{ fontSize: 15 }}>
        Financing Available. No Money Down.
      </p>

      {/* Reuse the shared form fields (without logo/header) */}
      <ContactForm fieldsOnly />
    </div>
  );
}
