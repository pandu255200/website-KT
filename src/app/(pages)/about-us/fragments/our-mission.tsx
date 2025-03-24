import React from "react";
import styles from "./our-mission.module.css";
import Image from "next/image";
import FaceGenie from "../../../../../public/home/nav-icons/products/facegenie.svg";
import Zodha from "../../../../../public/home/nav-icons/products/zodha.svg";
import PolygonImage from "../../../../../public/about-us/polygon.svg";
import AnalyticsKart from "../../../../../public/home/nav-icons/products/analytics-kart.svg";

export const OurMission = () => {
  return (
    <div className={styles.container}>
      {/* <div> */}
      <div className={styles.content}>
        <div className={styles.introduction}>
          <div className={styles.title}>
            <h2>We Are</h2>
            <h1>
              RESOLUTE<span>AI</span> SOFTWARE
            </h1>
          </div>
          <div className={styles.description}>
            <p>
              ResoluteAI Software was founded in 2018, with a single goal in
              mind- “To enhance trust with AI, for a safer and happier life”.
              Today, our highly experienced team of technology experts, leading
              specialists, seasoned business leaders and data scientists work
              towards this common goal.
            </p>
            <p>
              We help companies improve productivity and profits by implementing
              GenAI, LLM, Computer Vision machine vision, data analytics, NLP
              technology and IoT.
            </p>
            <p>
              We aim to empower our clients across industries with customized
              and efficient AI-led products, services and solutions, enabling
              businesses to compete in the global market. Our purpose is to make
              AI accessible to everyone. With ResoluteAI Software as your
              partner, you can look forward to a brighter future.
            </p>
          </div>
        </div>
        <div className={styles.products}>
          <h1>Our Products</h1>
          <div className={styles.logos}>
            <Image src={AnalyticsKart} alt="analytics_kart" />
            <Image src={FaceGenie} alt="faceGenie" />
            <Image src={Zodha} alt="zodhaGPT" />
          </div>
        </div>
      </div>
      {/* </div> */}
      <div>
        <div className={styles.illustration}>
          <Image src={PolygonImage} alt="polygon" />
        </div>
      </div>
    </div>
  );
};
