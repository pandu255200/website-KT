"use client";

import React from "react";
import Styles from "./style.module.css";
import Image from "next/image";
// import DotCircle from "../../../../../../public/home/our-milestones/dot-circle.svg";

const OurMilestones = () => {
  const milestonesData = [
    { title: "10+", description: "Successful Projects Delivered" },
    { title: "100+", description: "Unique Challenges Solved" },
    { title: "3", description: "Proprietary Products Developed" },
    { title: "100+", description: "Corporate Professionals Upskilled" },
    { title: "300+", description: "Students Trained" },
    { title: "3+", description: "Patents Filed" },
  ];

  return (
    <div className={Styles.container} id="our-milestones">
      <h1 className="globalHeaderStyle">
        <span className="title">OUR MILESTONES</span>
        <div className={Styles.circle}>
          <div className={Styles.innerCircle}>
            {/* <div className={Styles.innermostCircle}></div> */}
          </div>
        </div>
      </h1>

      <div className={Styles.videoContainer}>
        <video
          className={Styles.backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/home/our-milestones/background.mp4" type="video/mp4" />
        </video>
        <Image
          src="/home/our-milestones/background.svg"
          alt="SlideImg"
          className={Styles.bgImage}
          layout="fixed"
          width={10}
          height={10}
        />

        <div className={Styles.cardsGrid}>
          {milestonesData.map((milestone, index) => (
            <div className={Styles.card} key={index}>
              <span>{milestone.title}</span>
              <p>{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMilestones;
