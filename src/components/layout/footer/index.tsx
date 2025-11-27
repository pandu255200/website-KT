"use client";
import React from "react";
import Link from "next/link";
import Styles from "./style.module.css";

const linkMap = {
  // Core
  "AI - Products & Platforms": "#aiProductsPlatforms",
  "AI - Solutions & IT Services": "/solutions-and-services/0",

  // Explore
  About: "/about-us",
  Solutions: "/solutions-and-services/0",
  Videos: "/videos",
  Blogs: "/blogs",
  Testimonials: "/testimonials",

  // Products
  ZodhaGPT: "/zodha-gpt",
  AnalyticsKart: "/analyticskart",
  FaceGenie: "/face-genie",

  // Company
  Internships: "/internships",
  Careers: "/career",
  "Privacy Policy": "/Privacy Policy.pdf", // ⬅️ stored in /public
  "Terms of Use": "/terms-of-use",
  "Application-Form": "/Form-5A.pdf",

  // Social
  LinkedIn: "https://linkedin.com",
  Instagram: "https://instagram.com",
  Twitter: "https://twitter.com",
  Facebook: "https://facebook.com",
  YouTube: "https://youtube.com",
};

const data1 = [
  {
    heading: "Core",
    items: ["AI - Products & Platforms", "AI - Solutions & Services"],
  },
  {
    heading: "Explore",
    items: ["About", "Solutions", "Videos", "Blogs", "Testimonials"],
  },
  {
    heading: "Products",
    items: ["ZodhaGPT", "AnalyticsKart", "FaceGenie"],
  },
  {
    heading: "Company",
    items: [
      "Internships",
      "Careers",
      "Privacy Policy",
      "Terms of Use",
      "Application-Form",
    ],
  },
  {
    heading: "Social",
    items: ["LinkedIn", "Instagram", "Twitter", "Facebook", "YouTube"],
  },
];

export function Footer() {
  return (
    <div className={Styles.container}>
      <footer className={Styles.footer}>
        <h1>
          Resolute<span style={{ color: "#fa2609" }}>AI</span>Software
        </h1>

        <div className={Styles.gridContainer}>
          {data1.map((column, index) => (
            <div key={index} className={Styles.column}>
              <h2 className={Styles.heading}>{column.heading}</h2>
              <ul className={Styles.list}>
                {column.items.map((item, idx) => {
                  const href = linkMap[item] || "#";
                  const isExternal = href.startsWith("http");
                  const isPDF = href.toLowerCase().endsWith(".pdf"); // detect pdf

                  return (
                    <li
                      key={idx}
                      className={Styles.listItem}
                      style={
                        item === "AI - Solutions & IT Services"
                          ? { whiteSpace: "nowrap" }
                          : {}
                      }
                    >
                      {isExternal || isPDF ? (
                        // 🟢 For PDF or external link → open in new tab
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          {item}
                        </a>
                      ) : (
                        // 🟠 Internal link → normal Next.js navigation
                        <Link
                          href={href}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          {item}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className={Styles.lastRow}>
          <div
            className={Styles.lastOne}
            style={{ fontWeight: 500, fontSize: "1rem", width: "auto" }}
          >
            <div style={{ fontWeight: 500, fontSize: "1rem" }}>
              Resolute AI Software Private Limited,
              <br />
              5th Floor, 91Springboard, #175, Dollars Colony, Phase 4, JP Nagar,
              <br />
              Bannerghatta Main Road, Bangalore 560076, India.
            </div>

            <div className={Styles.lastRowColumn}>
              <span style={{ fontWeight: 600, fontSize: "1.375rem" }}>
                Contact
              </span>

              <a
                href="tel:7406938888"
                style={{
                  display: "block",
                  margin: "0.4rem 0",
                  fontWeight: 400,
                  fontSize: "1rem",
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                7406938888
              </a>

              <a
                href="tel:7406937777"
                style={{
                  display: "block",
                  fontWeight: 400,
                  fontSize: "1rem",
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                7406937777
              </a>
            </div>

            {/* --- ISO CERTIFICATION LINE --- */}
            <div
              style={{
                marginTop: "1rem",
                fontWeight: 500,
                fontSize: "1rem",
                textAlign: "left",
                lineHeight: "1.5",
              }}
            >
              © 2025 ResoluteAI Software.in, All rights reserved.
              <br />
              <span
                style={{
                  fontSize: "0.95rem",
                  color: "#fa2f13",
                  fontStyle: "italic",
                }}
              >
                ISO/IEC 27001:2022 Certified Company
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
