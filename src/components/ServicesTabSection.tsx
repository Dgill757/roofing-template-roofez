"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  {
    label: "Roof Repair",
    title: "ROOF REPAIR",
    desc: "When your roof needs some TLC, we're here to help. We specialize in diagnosing and fixing leaks, storm damage, and wear and tear. Our expert team ensures your roof is as good as new, keeping you safe and dry.",
    learnMore: "/roof-repair/",
    img: "/images/tab-roof-repair.webp",
    imgAlt: "Roof Repair - Roof EZ",
  },
  {
    label: "Re-Roofing",
    title: "RE-ROOFING",
    desc: "Time for a fresh start? We offer re-roofing services to replace your old roof with a new one. We handle everything from removing the old materials to installing the new roof, giving your home a refreshed look and improved protection.",
    learnMore: "/reroofing/",
    img: "/images/tab-reroofing.png",
    imgAlt: "Re-Roofing Services - Roof EZ",
  },
  {
    label: "New Construction Roofing",
    title: "NEW CONSTRUCTION ROOFING",
    desc: "Are you building a new home or addition? We've got your roofing needs covered. Our team works closely with builders and homeowners to ensure the roof installation meets all specifications, delivering a durable and quality roof from day one.",
    learnMore: "/new-construction-roofing/",
    img: "/images/tab-new-construction.png",
    imgAlt: "New Construction Roofing - Roof EZ",
  },
  {
    label: "Solar In Florida",
    title: "SOLAR IN FLORIDA",
    desc: "Harness the power of Florida sunshine with our solar roofing solutions. We integrate solar panels seamlessly into your roof, providing clean energy while maintaining the integrity and aesthetics of your home.",
    learnMore: "/solar-roofing/",
    img: "/images/tab-solar.png",
    imgAlt: "Solar Roofing Florida - Roof EZ",
  },
];

export default function ServicesTabSection() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

  return (
    <section
      className="py-16"
      style={{
        backgroundImage: "url('/images/tab-back2.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="container mx-auto px-6" style={{ maxWidth: 1320 }}>
        {/* Heading */}
        <h2
          className="font-ethno text-center mb-8"
          style={{ fontSize: 52, lineHeight: "56px", letterSpacing: "-0.03em", color: "#020202" }}
        >
          OUR FLORIDA ROOFING SERVICES
        </h2>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-0 mb-10 border-b border-gray-200">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setActiveTab(i)}
              className={`px-8 py-4 font-visbybold text-lg transition-all ${
                activeTab === i
                  ? "text-black"
                  : "text-gray-600 hover:text-black"
              }`}
              style={
                activeTab === i
                  ? {
                      background: "linear-gradient(90deg, #F9AC00 0%, #FF7600 91%)",
                      color: "#020202",
                    }
                  : {}
              }
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src={tab.img}
              alt={tab.imgAlt}
              width={670}
              height={460}
              className="w-full object-cover"
              style={{ maxHeight: 480 }}
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h3
              className="font-ethno mb-4"
              style={{ fontSize: 38, lineHeight: "44px", letterSpacing: "-0.03em", color: "#020202" }}
            >
              {tab.title}
            </h3>
            <p className="font-visbydb mb-6" style={{ fontSize: 19, lineHeight: "30px", color: "#212529" }}>
              {tab.desc}
            </p>
            <Link
              href={tab.learnMore}
              className="btn-orange inline-flex items-center"
              style={{ fontSize: 18, padding: "12px 32px" }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
