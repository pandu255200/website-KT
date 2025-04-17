import React from "react";
import Image from "next/image";
import styles from "./mission.module.css";
import GlobeGif from "../../../../../public/about-us/globe.gif";
import MissionImage from "../../../../../public/about-us/mission-image.png";

export const Mission = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className="font-anta">OUR MISSION</h2>
        <h6>
          Collaborate,develop and deploy unique AI products and solutions.
        </h6>
        <h6>Create Safe & Secure place to live and work.</h6>
        <h6>
          Transform individuals and organisations for the future through
          continuous learning and training.
        </h6>
        <h6>Partner and grow compassionate social ecosystem.</h6>
      </div>
      <div className={styles.illustration}>
        <Image src={GlobeGif} alt="globe-gif" />
        <Image src={MissionImage} alt="mission-image" />
      </div>
    </div>
  );
};
