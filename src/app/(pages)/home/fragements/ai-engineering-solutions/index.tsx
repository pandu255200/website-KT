"use client";

import React, { useState } from "react";
import Styles from "./style.module.css";
import Image from "next/image";

import SlideImg from "../../../../../../public/home/ai-engineering/slide-img1.svg";
import SlideImg2 from "../../../../../../public/home/ai-engineering/slide-img-2.svg";
import SlideImg3 from "../../../../../../public/home/ai-engineering/slide-img-3.svg";
import Solutions3 from "../../../../../../public/home/ai-engineering/solutions-3.svg";
import Solutions4 from "../../../../../../public/home/ai-engineering/solutions-4.svg";
import Solutions5 from "../../../../../../public/home/ai-engineering/solutions-5.svg";
import Solutions6 from "../../../../../../public/home/ai-engineering/solutions-6.svg";
import Solutions7 from "../../../../../../public/home/ai-engineering/solutions-7.svg";
import Solutions8 from "../../../../../../public/home/ai-engineering/solutions-8.svg";
import RIghtAngleIcon from "../../../../../../public/home/right-angle-icon.svg";
import TopLeftArrow from "../../../../../../public/core-team/top-left-arrow.svg";
import { GoBackButton } from "@/components/common/go-back-button";
import Link from "next/link";

interface EngineeringSolutionsProps {
  goback: boolean;
  solution: number;
}

const slides = [
  {
    title: "Permit to Work Automation",
    description:
      "Our AI-led Permit to Work Automation streamlines the process of managing work permits, ensuring compliance and safety across industrial and operational environments. The system automates permit creation, tracking, and approvals while integrating with exist...",
    image: SlideImg,
    alt: "Work Permit Automation",
  },
  {
    title: "EHS Digitalization",
    description:
      "Our EHS Digitalization solution leverages AI to automate safety inspections, incident reporting, and compliance tracking. The platform provides real-time insights into safety metrics, ensuring proactive risk mitigation and improving workplace safety standards.",
    image: SlideImg3,
    alt: "EHS Digitalization",
  },
  {
    title: "Digital Logbook",
    description:
      "Our Digital Logbook replaces traditional paper-based logbooks with an AI-enabled digital platform. It captures operational data, maintenance records, and shift handovers in real time, ensuring accurate and secure data storage and retrieval.",
    image: Solutions3,
    alt: "Digital Logbook",
  },
  {
    title: "Data Lake Management",
    description:
      "Our Data Lake Management solution organizes and manages large volumes of structured and unstructured data using AI and machine learning. It automates data ingestion, classification, and retrieval, providing actionable insights and enhancing data-driven decision-making.",
    image: Solutions4,
    alt: "Data Lake Management",
  },
  {
    title: "Cloud Engineering Services",
    description:
      "Our Cloud Engineering Services provide end-to-end cloud infrastructure management, including deployment, monitoring, and optimization. AI-driven automation ensures scalability, security, and high availability of cloud-based applications.",
    image: Solutions5,
    alt: "Cloud Engineering Services",
  },
  {
    title: "Android/iOS Application Development",
    description:
      "Our AI-enabled Android and iOS application development services deliver user-centric mobile apps with advanced features like real-time data processing, personalized recommendations, and seamless user experience.",
    image: Solutions6,
    alt: "Android/iOS Application Development",
  },
  {
    title: "Flutter based Application Development",
    description:
      "Our Flutter-based application development leverages AI to create high-performance, cross-platform apps from a single codebase. The platform ensures consistent UI/UX, rapid deployment, and real-time feature updates.",
    image: Solutions6,
    alt: "Flutter based Application Development",
  },
  {
    title: "AI Trainings",
    description:
      "Our AI Training programs equip businesses and teams with the knowledge and skills needed to implement and scale AI-driven solutions. The training covers AI model development, deployment, and performance optimization across industries.",
    image: Solutions7,
    alt: "AI Trainings",
  },
  {
    title: "Tech Support & AMC",
    description:
      "Our Tech Support & AMC services ensure the smooth functioning and long-term performance of your deployed systems, platforms, and infrastructure. From proactive maintenance to rapid issue resolution, our expert team provides round-the-cl...",
    image: Solutions8,
    alt: "Tech Support & AMC",
  },
];

const EngineeringSolutions: React.FC<EngineeringSolutionsProps> = ({
  goback,
  solution,
}) => {
  const [currentSlide, setCurrentSlide] = useState(solution);
  const [bgImageRotation, setBgImageRotation] = useState(0);

  // Function to get visible slides (previous, current, next)
  const getVisibleSlides = () => {
    const visibleSlides = [];

    // Previous slide (if exists)
    if (currentSlide > 0) {
      visibleSlides.push({
        slide: slides[currentSlide - 1],
        position: "previous",
        index: currentSlide - 1,
      });
    }

    // Current slide
    visibleSlides.push({
      slide: slides[currentSlide],
      position: "current",
      index: currentSlide,
    });

    // Next slide (if exists)
    if (currentSlide < slides.length - 1) {
      visibleSlides.push({
        slide: slides[currentSlide + 1],
        position: "next",
        index: currentSlide + 1,
      });
    }

    return visibleSlides;
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setBgImageRotation((prev) => prev + 180);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setBgImageRotation((prev) => prev - 180);
    }
  };

  return (
    <div className={Styles.container} id="solutionsAndServices">
      {/* <div > */}
      <div className={Styles.header}>
        <h1 className="font-anta">AI SOLUTIONS & IT SERVICES</h1>
        {goback && <GoBackButton text={"Go Back"} type="prev" />}
      </div>
      {/* </div> */}
      <div className={Styles.sliderContainer}>
        <div className={Styles.slider}>
          {getVisibleSlides().map((item) => (
            <div
              key={item.index}
              className={`${Styles.slide} ${
                item.position === "current"
                  ? Styles.centerSlide
                  : item.position === "previous"
                  ? Styles.previousSlide
                  : Styles.nextSlide
              }`}
            >
              <div className={Styles.rightSection}>
                <Image
                  src={item.slide.image.src}
                  alt={item.slide.alt}
                  // layout="fixed"
                  width={300}
                  height={600}
                />
              </div>
              <div className={Styles.leftSection}>
                <h2 className="font-anta">{item.slide.title}</h2>
                <p>{item.slide.description}</p>
                <Link href={`/solutions-and-services/${item.index}`}>
                  <button className={Styles.exploreBtn}>
                    <span>Explore more</span>
                    <Image
                      src={TopLeftArrow}
                      className={Styles.arrow}
                      alt="TopLeftArrow"
                      style={{
                        background: "white",
                        borderRadius: "50%",
                      }}
                      width={30}
                      height={30}
                    />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={Styles.navigation}>
        <button
          disabled={currentSlide === 0}
          className={`${Styles.navBtn} ${currentSlide === 0 ? "disabled" : ""}`}
          onClick={handlePrev}
        >
          <Image
            src={RIghtAngleIcon.src}
            alt="Previous"
            style={{ transform: "rotate(180deg" }}
            width={25}
            height={25}
          />
        </button>
        <button
          disabled={currentSlide === slides.length - 1}
          className={`${Styles.navBtn} ${
            currentSlide === slides.length - 1 ? "disabled" : ""
          }`}
          onClick={handleNext}
        >
          <Image src={RIghtAngleIcon.src} alt="Next" width={25} height={25} />
        </button>
      </div>

      <div
        className={Styles.bgImage}
        style={{
          transform: `rotateY(${bgImageRotation}deg)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {/* Background image handled via CSS */}
      </div>
    </div>
  );
};

export default EngineeringSolutions;
