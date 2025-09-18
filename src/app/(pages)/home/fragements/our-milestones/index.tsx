"use client";

import React from "react";
import Styles from "./style.module.css";
import Image from "next/image";
import DotCircle from "../../../../../../public/home/our-milestones/dot_circle.png";

const OurMilestones = () => {
  const milestonesData1 = [
    { title: "300+", description: "Unique Challenges Solved" },
    { title: "3", description: "Proprietary Products Developed" },
  ];
  const milestonesData2 = [
    { title: "100+", description: "Corporate Professionals Upskilled" },
    { title: "500+", description: "Students Trained" },
    { title: "3+", description: "Patents Filed" },
  ];

  return (
    <div className={Styles.container} id="our-milestones">
      <h1 className="globalHeaderStyle">
        <span className="title">OUR MILESTONES</span>
        <Image
          src={DotCircle}
          alt="DotCircleImage"
          className={Styles.circleImage}
          width={110}
          height={110}
        />
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
          // layout="fixed"
          width={10}
          height={10}
        />
        <div className={Styles.gridContainer}>

          <div className={Styles.cardsGrid1}>
            {milestonesData1.map((milestone, index) => (
              <div className={Styles.card} key={index}>
                <span>{milestone.title}</span>
                <p>{milestone.description}</p>
              </div>
            ))}
          </div>
          <div className={Styles.cardsGrid2}>
            {milestonesData2.map((milestone, index) => (
              <div className={Styles.card} key={index}>
                <span>{milestone.title}</span>
                <p>{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurMilestones;