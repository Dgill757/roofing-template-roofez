"use client";

import Image from "next/image";

interface ContactFormProps {
  showLogo?: boolean;
  /** When true, suppress the card wrapper + heading — render fields only */
  fieldsOnly?: boolean;
}

export default function ContactForm({ showLogo = false, fieldsOnly = false }: ContactFormProps) {
  const fields = (
    <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-2 gap-3">
        <input className="form-input-dark" type="text" placeholder="First Name *" required />
        <input className="form-input-dark" type="text" placeholder="Last Name *" required />
        <input className="form-input-dark" type="tel" placeholder="Phone *" required />
        <input className="form-input-dark" type="email" placeholder="Email *" required />
      </div>
      <input className="form-input-dark" type="text" placeholder="Street Address*" required />
      <input className="form-input-dark" type="text" placeholder="Address Line 2" />
      <div className="grid grid-cols-2 gap-3">
        <input className="form-input-dark" type="text" placeholder="City*" required />
        <select className="form-input-dark" defaultValue="FL" required>
          <option value="FL">Florida</option>
          <option value="AL">Alabama</option>
          <option value="GA">Georgia</option>
          <option value="TX">Texas</option>
        </select>
      </div>
      <input className="form-input-dark" type="text" placeholder="Zip Code*" required />
      <select className="form-input-dark" defaultValue="" required>
        <option value="" disabled>Interested In *</option>
        <option>Roof Repair</option>
        <option>Re-Roofing</option>
        <option>New Construction</option>
        <option>Solar</option>
        <option>Inspection</option>
      </select>
      <textarea
        className="form-input-dark"
        placeholder="Comments"
        rows={3}
        style={{ resize: "vertical" }}
      />
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          className="btn-orange font-visbyxb"
          style={{ minWidth: 160, height: 48, fontSize: 20 }}
        >
          Free Estimate
        </button>
      </div>
    </form>
  );

  if (fieldsOnly) return fields;

  return (
    <div
      style={{
        background: "rgba(55,58,64,0.92)",
        borderBottom: "2px solid transparent",
        borderImage: "linear-gradient(90deg, #FF7600 5%, #F9AC00 95%) 1",
        padding: "40px 30px 32px",
      }}
    >
      {showLogo && (
        <div className="flex justify-center mb-4">
          <Image src="/images/logo-1.svg" alt="Roof EZ" width={181} height={85} />
        </div>
      )}

      <h2
        className="font-visbyheavy text-white text-center mb-1"
        style={{ fontSize: 27, lineHeight: "40px" }}
      >
        Free Roof Inspections &amp; Estimates
      </h2>
      <p className="font-visbydb text-white text-center mb-6" style={{ fontSize: 16 }}>
        Financing Available. No Money Down.
      </p>

      {fields}
    </div>
  );
}
