import React from "react";
import styles from "./our-mission.module.css";
import Image from "next/image";
import FaceGenie from "../../../../../public/home/nav-icons/products/faceGenai.svg";
import Zodha from "../../../../../public/home/nav-icons/products/zodha.svg";
import PolygonImage from "../../../../../public/about-us/polygon.gif";
import AnalyticsKart from "../../../../../public/home/nav-icons/products/analytics-kart.svg";

export const OurMission = () => {
  return (
    <div className={styles.container}>
      {/* <div> */}
      <div className={styles.content}>
        <div className={styles.introduction}>
          <div className={`${styles.title}`}>
            <h2 className="font-anta" style={{ fontFamily: "Anta, serif" }}>
              We Are
            </h2>
            <h1 className="font-anta" style={{ fontFamily: "Anta, serif" }}>
              RESOLUTE<span>AI</span> SOFTWARE
            </h1>
          </div>
          <div className={styles.description}>
            <p>
              ResoluteAI Software was founded in 2018 with a vision — "To
              enhance trust with AI, for a safer and happier life." Over the
              years, we’ve grown into a team of enterprise leaders, solution
              architects, problem-solvers, technologists, domain experts, and
              data scientists — all united by the same mission.
            </p>
            <p>
              We help enterprises and SMEs solve complex challenges, boost
              productivity, and improve profitability through Generative AI,
              Agentic AI, LLMs, Computer Vision, Machine Vision, Data Analytics,
              NLP, and IoT.
            </p>
            <p>
              At ResoluteAI Software, we deliver both plug-and-play and fully
              customized GenAI-led products, solutions, and services that
              empower businesses to scale and stay competitive. Our purpose is
              simple: to make AI accessible to everyone. With ResoluteAI
              Software as your strategic partner, you move closer to your
              organization’s vision — confidently, intelligently, and
              efficiently.
            </p>
          </div>
        </div>
        <div className={styles.products}>
          <h1 className="font-anta">Our Products, Solutions & Services</h1>
          <div className={styles.logos}>
            <Image src={Zodha} alt="zodhaGPT" />
            <Image src={FaceGenie} width={175} alt="faceGenie" />
            <Image src={AnalyticsKart} alt="analytics_kart" />
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
