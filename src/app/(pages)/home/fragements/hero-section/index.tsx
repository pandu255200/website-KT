"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Styles from "./style.module.css";
import { useCounter } from "@/store/AnimationContext";

<<<<<<< HEAD
// ✅ Use public directory (without "/public" prefix)
=======
>>>>>>> 81f7ec50d85d16f494d9156dc4b6e68d6d848f7a
const images = {
  AnalyticsImage: "/home/analytics-image.svg",
  FaceGenAiImage: "/home/face-genai-image.png",
  ZodhaImage: "/home/zondha-image.svg",
  ChatIcon: "/home/chat-icon.svg",
  ZodhaLogo: "/home/nav-icons/products/zodha.svg",
<<<<<<< HEAD
  FaceGenaiLogo: "/home/nav-icons/products/facegenie.svg",
=======
  FaceGenaiLogo: "/home/nav-icons/products/faceGenai.svg",
>>>>>>> 81f7ec50d85d16f494d9156dc4b6e68d6d848f7a
  AnalyticsLogo: "/home/nav-icons/products/analytics-kart.svg",
  TopRightArrowIcon: "/home/top-right-arrow.svg",
  WatchVideoIcon: "/home/watch-video.svg",
  ScannerGif: "/home/scanner.gif",
  GlobeImage: "/home/globe-image.svg",
};

type ButtonName = "ZodhaGPT" | "FaceGenie" | "AnalyticsKart";

export default function HeroSection() {
  const { counter } = useCounter();
  const [activeButton, setActiveButton] = useState<ButtonName>("ZodhaGPT");
<<<<<<< HEAD
  const [animationDiv, setAnimationDiv] = useState(1);
  const [isClient, setIsClient] = useState(false); // ✅ Fix hydration mismatch

  useEffect(() => {
    setIsClient(true); // ✅ Ensure client-side rendering
    console.log("HeroSection Mounted");

    const timeout = setTimeout(() => {
      setAnimationDiv(0);
    }, 7000);

    return () => clearTimeout(timeout);
=======
  const [animationDiv, setAnimationDiv] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Check if animation has already played using sessionStorage
    const hasPlayed = sessionStorage.getItem("heroAnimationPlayed");

    if (!hasPlayed) {
      setAnimationDiv(1); // Show animation

      const timeout = setTimeout(() => {
        setAnimationDiv(0); // Hide animation after timeout
        // sessionStorage.setItem("heroAnimationPlayed", "true"); // Mark animation as played
      }, 7000);

      return () => clearTimeout(timeout);
    }
>>>>>>> 81f7ec50d85d16f494d9156dc4b6e68d6d848f7a
  }, []);

  const contentData = {
    ZodhaGPT: {
<<<<<<< HEAD
      heading:
        "Easily Integrateable, Swiftly Deployable & Highly Customisable.",
      description:
        "A dashboard & prediction software that analyses customer & operational data from multiple sources & helps businesses make informed decisions.",
=======
      heading: "GenAI-Powered, Effortlessly Scalable & Exceptionally Adaptive.",
      description:
        "The next-gen LLM with AgenticAI for adaptive, scalable, and intelligent decision-making.",
>>>>>>> 81f7ec50d85d16f494d9156dc4b6e68d6d848f7a
      image: images.ZodhaImage,
      logo: images.ZodhaLogo,
    },
    FaceGenie: {
      heading: "Safe, Secure, Hygienic, Automated & Touchless",
      description:
        "From Dynamic to Compact and Pro, we utilize the benefits of AI to the furthest extent possible to give you the competitive edge",
      image: images.FaceGenAiImage,
      logo: images.FaceGenaiLogo,
    },
    AnalyticsKart: {
      heading: "AnalyticsKart: Smarter Data, Better Decisions",
      description:
        "An AI-driven analytics platform that provides insights to streamline business operations and enhance decision-making.",
      image: images.AnalyticsImage,
      logo: images.AnalyticsLogo,
    },
  };

  const handleButtonClick = (buttonName: ButtonName) => {
    console.log("Button Clicked:", buttonName);
    setActiveButton(buttonName);
  };

  if (!isClient) return null;

  // ✅ Prevent hydration mismatch
  if (!isClient) return null;

  return (
    <div className="flex">
      <section className={Styles.hero}>
<<<<<<< HEAD
        {/* ANIMATED DIV */}
=======
        {/* ANIMATED DIV (Only plays once per visit) */}
>>>>>>> 81f7ec50d85d16f494d9156dc4b6e68d6d848f7a
        {counter <= 1 && (
          <div
            className={Styles.animatedDiv}
            style={{
              visibility: animationDiv > 0 ? "visible" : "hidden",
              opacity: animationDiv,
              transition: "opacity 0.8s linear",
            }}
          >
            <div className={Styles.innerAnimation} style={{ padding: "7rem" }}>
              <div className={Styles.content}>
                <h1 className={Styles.h1}>Empowering the future</h1>
                <p className={Styles.para}>
                  Our Purpose is to make AI accessible to everyone.
                </p>
              </div>
              <div className={Styles.imageSection}>
<<<<<<< HEAD
                <Image src={images.GlobeImage} alt="Globe" width={450} height={450} priority />
=======
                <Image
                  src={images.GlobeImage}
                  alt="Globe"
                  width={450}
                  height={450}
                  layout="fixed"
                  priority
                />
>>>>>>> 81f7ec50d85d16f494d9156dc4b6e68d6d848f7a
              </div>
            </div>
          </div>
        )}

        <div className={Styles.flex}>
          {/* LEFT SECTION */}
<<<<<<< HEAD
          <div className={Styles.content} style={{ display: "block !important", opacity: 1 }}>
            <h1 className={`${Styles.h1} font-anta`}>{heading}</h1>
            <p className={Styles.para}>{description}</p>

            <div className="flex flex-col gap-10">
              <Image src={logo} className={Styles.logo} alt="logo" width={180} height={50} priority />
              <div className="flex gap-8">
                <button>
                  <span>Learn More</span>
                  <Image src={images.TopRightArrowIcon} alt="arrow" width={28} height={28} priority />
                </button>
                {activeButton === "FaceGenie" && (
                  <button className={Styles.watchVideo}>
                    <Image src={images.WatchVideoIcon} alt="WatchVideo" width={15} height={15} priority />
=======
          <div className={Styles.content} style={{ opacity: 1 }}>
            <h1 className={`${Styles.h1} font-anta`}>
              {contentData[activeButton].heading}
            </h1>
            <p className={Styles.para}>
              {contentData[activeButton].description}
            </p>

            <div className="flex flex-col gap-10">
              <Image
                src={contentData[activeButton].logo}
                className={Styles.logo}
                alt="logo"
                width={180}
                height={50}
                priority
              />
              <div className="flex gap-8">
                <button>
                  <span>Learn More</span>
                  <Image
                    src={images.TopRightArrowIcon}
                    alt="arrow"
                    width={28}
                    height={28}
                    priority
                  />
                </button>
                {activeButton === "FaceGenie" && (
                  <button className={Styles.watchVideo}>
                    <Image
                      src={images.WatchVideoIcon}
                      alt="WatchVideo"
                      width={15}
                      height={15}
                      priority
                    />
>>>>>>> 81f7ec50d85d16f494d9156dc4b6e68d6d848f7a
                    <span>Watch Video</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
<<<<<<< HEAD
          <div className={Styles.imageSection} style={{ display: "block !important", opacity: 1 }}>
            {activeButton === "FaceGenie" && (
              <Image src={images.ScannerGif} alt="Scanner" width={300} height={300} unoptimized  />
            )}
            <Image src={image} alt="ProductImage" width={500} height={activeButton === "FaceGenie" ? 700 : 430} priority />
=======
          <div className={Styles.image} style={{ opacity: 1 }}>
            {activeButton === "FaceGenie" && (
              <Image
                src={images.ScannerGif}
                alt="Scanner"
                className={Styles.scanner}
                width={300}
                height={300}
                unoptimized
              />
            )}
            <Image
              src={contentData[activeButton].image}
              alt="ProductImage"
              width={500}
              height={activeButton === "FaceGenie" ? 550 : 430}
              priority
            />
>>>>>>> 81f7ec50d85d16f494d9156dc4b6e68d6d848f7a
          </div>
        </div>

        <div className={Styles.imageContainer}>
          <div className={Styles.tabs}>
            {Object.keys(contentData).map((button) => (
              <button
                key={button}
                className={`${Styles.tabButton} ${activeButton === button ? Styles.activeTab : ""}`}
                onClick={() => handleButtonClick(button as ButtonName)}
              >
                {button}
              </button>
            ))}
          </div>
          <button className={Styles.chatButton}>
<<<<<<< HEAD
            <Image src={images.ChatIcon} alt="ChatIcon" width={25} height={25} priority />
=======
            <Image
              src={images.ChatIcon}
              alt="ChatIcon"
              width={25}
              height={25}
              priority
            />
>>>>>>> 81f7ec50d85d16f494d9156dc4b6e68d6d848f7a
          </button>
        </div>
      </section>
    </div>
  );
}
