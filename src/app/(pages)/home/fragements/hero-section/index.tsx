"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Styles from "./style.module.css";
import { useCounter } from "@/store/AnimationContext";
import SendButton from "../../../../../../public/chat/send-button.svg";
import ResoluteLogo from "../../../../../../public/chat/resolute-logo.svg";
import Sender from "../../../../../../public/chat/sender.jpg";

const images = {
  AnalyticsImage: "/home/analytics-image.svg",
  FaceGenAiImage: "/home/face-genai-image.png",
  ZodhaImage: "/home/zondha-image.svg",
  ChatIcon: "/home/chat-icon.svg",
  ZodhaLogo: "/home/nav-icons/products/zodha.svg",
  FaceGenaiLogo: "/home/nav-icons/products/faceGenai.svg",
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
  const [animationDiv, setAnimationDiv] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [showChatWindow, setShowChatWindow] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Check if animation has already played using sessionStorage
    const hasPlayed = sessionStorage.getItem("heroAnimationPlayed");

    if (!hasPlayed) {
      setAnimationDiv(1); // Show animation

      const timeout = setTimeout(() => {
        setAnimationDiv(0); // Hide animation after timeout
        // sessionStorage.setItem("heroAnimationPlayed", "true"); // Mark animation as played
      }, 8000);

      return () => clearTimeout(timeout);
    }
  }, []);

  const contentData = {
    ZodhaGPT: {
      heading: "GenAI-Powered, Effortlessly Scalable & Exceptionally Adaptive.",
      description:
        "The next-gen LLM with AgenticAI for adaptive, scalable, and intelligent decision-making.",
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
        {/* ANIMATED DIV (Only plays once per visit) */}
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
                <Image
                  src={images.GlobeImage}
                  alt="Globe"
                  width={450}
                  height={450}
                  layout="fixed"
                  priority
                />
              </div>
            </div>
          </div>
        )}

        <div className={Styles.flex}>
          {/* LEFT SECTION */}
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
                    <span>Watch Video</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
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
          <div
            className={Styles.chatWindow}
            style={{ visibility: `${showChatWindow ? "visible" : "hidden"}` }}
          >
            <div className={Styles.chatWindow2ndLayer}>
              <div
                className={Styles.crossButton1stLayer}
                style={{
                  visibility: `${showChatWindow ? "visible" : "hidden"}`,
                }}
              >
                <div
                  className={Styles.crossButton}
                  onClick={() => setShowChatWindow(false)}
                >
                  X
                </div>
              </div>
              <div className={Styles.chatWindow3rdLayer}>
                <div className={Styles.questionMessageBox}>
                  <div
                    className={Styles.senderPhoto}
                    style={{
                      visibility: `${showChatWindow ? "visible" : "hidden"}`,
                    }}
                  >
                    <Image
                      src={Sender}
                      alt="Sender Photo"
                      className={Styles.senderPhotoImageTag}
                      width={10}
                      height={10}
                    />
                  </div>
                  <div
                    className={Styles.questionMessageInput}
                    style={{
                      visibility: `${showChatWindow ? "visible" : "hidden"}`,
                    }}
                  >
                    What document types are supported?
                  </div>
                </div>
                <div className={Styles.answerMessageBox}>
                  <div
                    className={Styles.answerMessageInput}
                    style={{
                      visibility: `${showChatWindow ? "visible" : "hidden"}`,
                    }}
                  >
                    The module supports a wide range of document types,
                    including PDFs, Word documents, scanned images, and text
                    files.
                  </div>
                  <div
                    className={Styles.resoluteLogo}
                    style={{
                      visibility: `${showChatWindow ? "visible" : "hidden"}`,
                    }}
                  >
                    <Image
                      src={ResoluteLogo}
                      alt="Resolute Logo"
                      className={Styles.resoluteLogoImage}
                      width={10}
                      height={10}
                    />
                  </div>
                </div>
                <div
                  className={Styles.chatInputBox}
                  style={{
                    visibility: `${showChatWindow ? "visible" : "hidden"}`,
                  }}
                >
                  <div className={Styles.chatInput}>Type Here</div>
                  <div
                    className={Styles.sendButton}
                    style={{
                      visibility: `${showChatWindow ? "visible" : "hidden"}`,
                    }}
                  >
                    <Image
                      src={SendButton}
                      alt="Send Button"
                      className={Styles.sendButtonImage}
                      width={10}
                      height={10}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.chatWrapper}>
            <div className={Styles.message_box}>
              Do you need any Assistance ?
            </div>
            <button
              className={Styles.chatButton}
              onClick={() => setShowChatWindow(true)}
            >
              <Image
                src={images.ChatIcon}
                alt="ChatIcon"
                width={25}
                height={25}
                priority
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
