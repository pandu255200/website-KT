"use client";

import React from "react";
import Styles from "./our-values.module.css";
import Collaboration1 from "../../../../../public/about-us/collaboration_1.svg";
import Collaboration2 from "../../../../../public/about-us/collaboration_2.svg";
import Collaboration3 from "../../../../../public/about-us/collaboration_3.svg";
import Diamond from "../../../../../public/about-us/diamond.svg";
import BigRedDiamond from "../../../../../public/about-us/bigRedDiamond.svg";
import Image from "next/image";

const OurValues = () => {
  const CollaborationData = [
    {
      image: Collaboration1,
      heading: "Collaboration",
      description:
        "We believe in evolving together within teams and beyond. Through our mutual learning approach, we design an optimal solution based for you.",
    },
    {
      image: Collaboration2,
      heading: "Compassion",
      description:
        "We bring compassion into everything we do and for everyone we interact with. A great customer experience is something we deeply care for.",
    },
    {
      image: Collaboration3,
      heading: "Credibility",
      description:
        "We work to establish everlasting credibility and integrity. Our products and solutions are built to give real-world accuracy without any embellishment.",
    },
  ];

  const currentCollaborations = CollaborationData;

  return (
    <div className={Styles.fullScreenContainer}>
      <div className={Styles.container} id="blogs">
        <div className={Styles.headerStyle}>
          <span className={Styles.title}>OUR VALUES</span>
          <Image
            src={Diamond}
            //   className={Styles.image}
            alt="Blog Image"
            layout="fixed"
            width={90}
            height={90}
          />
        </div>

        <div className={Styles.slider}>
          <div className={Styles.mainCrousel}>
            {currentCollaborations.map((collaboration, index) => (
              <div className={Styles.item} key={index}>
                <div className={Styles.content}>
                  <div>
                    <h1 className="font-anta">{collaboration.heading}</h1>
                    <p>{collaboration.description}</p>
                  </div>
                  <div className={Styles.collaborationImage}>
                    <Image
                      src={collaboration.image}
                      alt="Collaboration Image"
                      layout="fixed"
                      width={250}
                      height={250}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={Styles.footerDiamond}>
          <Image
            src={Diamond}
            className={Styles.image}
            alt="Blog Image"
            layout="fixed"
            width={90}
            height={90}
          />
        </div>

        <Image
          src={BigRedDiamond}
          alt="Big Red Diamond"
          className={Styles.bgImage}
          layout="fixed"
          width={10}
          height={10}
        />
      </div>
    </div>
  );
};

export default OurValues;
