"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Styles from "./style.module.css";

import { useCounter } from "@/store/AnimationContext";

// ✅ Use public directory (without "/public" prefix)
const images = {
  AnalyticsImage: "/home/analytics-image.svg",
  FaceGenAiImage: "/home/face-genai-image.png",
  ZodhaImage: "/home/zondha-image.svg",
  ChatIcon: "/home/chat-icon.svg",
  ZodhaLogo: "/home/nav-icons/products/zodha.svg",
  FaceGenaiLogo: "/home/nav-icons/products/facegenie.svg",
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
  const [animationDiv, setAnimationDiv] = useState(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const timeout = setTimeout(() => {
      setAnimationDiv(0);
    }, 7000);

    return () => clearTimeout(timeout);
  }, []);

  const contentData = {
    ZodhaGPT: {
      heading:
        "Easily Integrateable, Swiftly Deployable & Highly Customisable.",
      description:
        "A dashboard & prediction software that analyses customer & operational data from multiple sources & helps businesses make informed decisions.",
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
    setActiveButton(buttonName);
  };

  const { heading, description, image, logo } = contentData[activeButton];

  // ✅ Prevent hydration mismatch
  if (!isClient) return null;

  return (
    <div className="flex">
      <section className={Styles.hero}>
        {/* ANIMATED DIV */}
        {counter <= 1 && (
          <div
            className={Styles.animatedDiv}
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
                    src={images.GlobeImage}
                    alt="GlobeImage"
                    width={450}
                    height={450}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={Styles.flex}>
          {/* LEFT SECTION */}
          <div
            className={Styles.content}
            // style={{ display: "block !important", opacity: 1 }}
          >
            <h1 className={`${Styles.h1} font-anta`}>{heading}</h1>
            <p className={Styles.para}>{description}</p>

            <div className="flex flex-col justify-start items-start gap-10">
              <Image
                src={logo}
                className={Styles.logo}
                alt="logo"
                width={180}
                height={50}
                priority
              />
              <div className="flex justify-center items-center gap-8">
                <button>
                  <span>Learn More</span>
                  <Image
                    src={images.TopRightArrowIcon}
                    className={Styles.arrow}
                    alt="arrowIcon"
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
                    <span>Watch Video</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div
            className={Styles.imageSection}
            // style={{ display: "block !important", opacity: 1 }}
          >
            <div className={Styles.image}>
              {activeButton === "FaceGenie" && (
                <Image
                  src={images.ScannerGif}
                  className={Styles.scanner}
                  alt="Scanner"
                  width={300}
                  height={300}
                  unoptimized
                />
              )}
              <Image
                src={image}
                alt="ProductImage"
                width={500}
                height={activeButton === "FaceGenie" ? 700 : 430}
                priority
              />
            </div>
          </div>
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
              src={images.ChatIcon}
              alt="ChatIcon"
              width={25}
              height={25}
              priority
            />
          </button>
        </div>
      </section>
    </div>
  );
}
