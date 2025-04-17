"use client";

import React from "react";
import Styles from "./style.module.css";

const data1 = [
  {
    heading: "Core",
    items: [
      "AI - Products & Platforms",
      "AI - Solutions & IT Services",
    ],
  },
  {
    heading: "Explore",
    items: ["About", "Solutions", "Videos", "Blogs", "About", "Testimonials"],
  },
  {
    heading: "Products",
    items: ["ZodhaGPT", "AnalyticsKart", "FaceGenie"],
  },
  {
    heading: "Company",
    items: ["Internships", "Careers", "Privacy Policy", "Terms of Use"],
  },
  {
    heading: "Social",
    items: ["LinkedIn", "Instagram", "Twitter", "Facebook", "YouTube"],
  },
];

export function Footer() {
  return (
    <div className={Styles.container}>
      {/* Footer Section */}
      <footer className={Styles.footer}>
        <h1>
          Resolute<span style={{ color: "#fa2609" }}>AI</span>Software
        </h1>

        <div className={Styles.gridContainer}>
          {data1.map((column, index) => (
            <div key={index} className={Styles.column}>
              <h2 className={Styles.heading}>{column.heading}</h2>
              <ul className={Styles.list}>
                {column.items.map((item, idx) => (
                  <li key={idx} className={Styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={Styles.lastRow}>
          <div style={{ fontWeight: 500, fontSize: "1rem", width: "25rem" }}>
            Resolute AI Software Private Limited,
            <br />
            5th Floor, 91Springboard, #175, Dollars Colony, Phase 4, JP Nagar,
            <br />
            Bannerghatta Main Road, Bangalore 560076, India.
          </div>
          <div className={Styles.lastRowColumn}>
            <span
              style={{
                fontWeight: 600,
                fontSize: "1.375rem",
              }}
            >
              Contact
            </span>
            <p
              style={{ margin: "0.4rem 0", fontWeight: 400, fontSize: "1rem" }}
            >
              7406938888
            </p>
            <p style={{ fontWeight: 400, fontSize: "1rem" }}>7406937777</p>
          </div>
          <div style={{ fontWeight: 500, fontSize: "1rem" }}>
            © 2025 ResoluteAI Software.in, All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
