"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Styles from "./style.module.css";

import { useCounter } from "@/store/AnimationContext";
import AnalyticsImage from "../../../../../../public/home/analytics-image.svg";
import FaceGenAiImage from "../../../../../../public/home/face-genai-image.png";
import ZodhaImage from "../../../../../../public/home/zondha-image.svg";
import ChatIcon from "../../../../../../public/home/chat-icon.svg";

import ZodhaLogo from "../../../../../../public/home/nav-icons/products/zodha.svg";
import FaceGenaiLogo from "../../../../../../public/home/nav-icons/products/facegenie.svg";
import AnalyticsLogo from "../../../../../../public/home/nav-icons/products/analytics-kart.svg";
import TopRightArrowIcon from "../../../../../../public/home/top-right-arrow.svg";
import WatchVideoIcon from "../../../../../../public/home/watch-video.svg";
import ScannerGif from "../../../../../../public/home/scanner.gif";
import GlobeImage from "../../../../../../public/home/globe-image.svg";

type ButtonName = "Zodha GPT" | "FaceGenie" | "AnalyticsKart";

export default function HeroSection() {
  const { counter } = useCounter();
  const [activeButton, setActiveButton] = useState<ButtonName>("Zodha GPT");
  const [animationDiv, setAnimationDiv] = useState(1); // Added state to manage visibility of rightDiv
  const showAnimation = counter <= 1 ? true : false;

  // useEffect(() => {
  //   // Check if animation has already played in this session
  //   const hasShownAnimation = localStorage.getItem("animationShown");

  //   if (!hasShownAnimation) {
  //     setAnimationDiv(1); // Show animation
  //     setShowAnimation(true); // Make it visible
  //     const timeout = setTimeout(() => {
  //       localStorage.setItem("animationShown", "true"); // Prevent replaying on reload
  //     }, 12000); // Hides after 6 seconds
  //     return () => {
  //       clearTimeout(timeout)
  //     };
  //   }
  // }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationDiv(0); // Set width to 0 to animate the disappearance
    }, 7000); // Set timeout to hide rightDiv after 10 seconds
    return () => {
      clearTimeout(timeout);
    };
    // }, [showAnimation]);
  }, []);

  const contentData = {
    "Zodha GPT": {
      heading:
        "Easily Integrateable, Swiftly Deployable & Highly Customisable.",
      description:
        "A dashboard & prediction software that analyses customer & operational data from multiple sources & helps businesses make informed decisions.",
      image: ZodhaImage,
      logo: ZodhaLogo,
    },
    FaceGenie: {
      heading: "Safe, Secure, Hygienic, Automated & Touchless",
      description:
        "From Dynamic to Compact and Pro, we utilize the benefits of AI to the furthest extent possible to give you the competitive edge",
      image: FaceGenAiImage,
      logo: FaceGenaiLogo,
    },
    AnalyticsKart: {
      heading: "AnalyticsKart: Smarter Data, Better Decisions",
      description:
        "An AI-driven analytics platform that provides insights to streamline business operations and enhance decision-making.",
      image: AnalyticsImage,
      logo: AnalyticsLogo,
    },
  };

  const handleButtonClick = (buttonName: ButtonName) => {
    setActiveButton(buttonName);
  };

  const { heading, description, image, logo } = contentData[activeButton];

  return (
    <div className="flex">
      <section className={Styles.hero}>
        {/* ANIMATED DIV */}
        {showAnimation && (
          <div
            className={`${Styles.animatedDiv} `}
            style={{
              visibility: animationDiv > 0 ? "visible" : "hidden",
              opacity: animationDiv,
              transition: "0.8s linear",
            }}
          >
            <div
              className={Styles.innerAnimation}
              style={{ width: "100%", padding: "7rem" }}
            >
              <div className={Styles.content}>
                <h1 className={Styles.h1}>Empowering the future</h1>
                <p className={Styles.para}>
                  Our Purpose is to make AI accessible to everyone. With
                  ResoluteAI Software, as your partner, you can look forward to
                  a bright future
                </p>
              </div>

              <div className={Styles.imageSection}>
                <div className={Styles.image}>
                  <Image
                    src={GlobeImage}
                    alt={"GlobeImage"}
                    width={450}
                    height={450}
                    // className={Styles.scanner}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ANIMATED DIV */}

        <div className={Styles.flex}>
          {/* LEFT SECTION */}
          <div className={Styles.content}>
            <h1 className={`${Styles.h1} font-anta`}>{heading}</h1>
            <p className={Styles.para}>{description}</p>

            <div className="flex flex-col justify-start items-start gap-10">
              <Image
                src={logo}
                className={Styles.logo}
                alt={"logo"}
                width={180}
                height={50}
                // layout="fixed"
              />
              <div className="flex justify-center items-center gap-8">
                <button>
                  <span>Learn More</span>
                  <Image
                    src={TopRightArrowIcon}
                    className={Styles.arrow}
                    alt="arrowIcon"
                    // layout="fixed"
                    width={28}
                    height={28}
                  />
                </button>
                {activeButton === "FaceGenie" && (
                  <button className={Styles.watchVideo}>
                    <Image
                      src={WatchVideoIcon}
                      alt="WatchVideoIcon"
                      // layout="fixed"
                      width={15}
                      height={15}
                    />
                    <span>Watch Video</span>
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* LEFT SECTION */}

          {/* RIGHT SECTION */}
          <div className={Styles.imageSection}>
            <div className={Styles.image}>
              {activeButton === "FaceGenie" && (
                <Image
                  src={ScannerGif}
                  alt={"activeButton"}
                  width={300}
                  height={300}
                  className={Styles.scanner}
                />
              )}
              <Image
                src={image}
                alt={"activeButton"}
                width={500}
                height={activeButton === "FaceGenie" ? 700 : 430}
              />
            </div>
          </div>
          {/* RIGHT SECTION */}
        </div>

        <div className={Styles.imageContainer}>
          <div className={Styles.tabs}>
            {Object.keys(contentData).map((button) => (
              <button
                key={button}
                className={`${Styles.tabButton} ${
                  activeButton === button ? Styles.activeTab : ""
                }`}
                onClick={() => handleButtonClick(button as ButtonName)}
              >
                {button}
              </button>
            ))}
          </div>
          <button className={Styles.chatButton}>
            <Image
              src={ChatIcon}
              alt={activeButton}
              width={25}
              height={25}
              // layout="fixed"
            />
          </button>
        </div>
      </section>

      {/* { <section className={Styles.rightDiv} style={{ width: `${rightDivWidth}px` }}></section>} Added condition to show or hide rightDiv with width animation */}
    </div>
  );
}
