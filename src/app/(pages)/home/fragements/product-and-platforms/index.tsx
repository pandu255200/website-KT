"use client";

import React, { useState, useEffect } from "react";
import Styles from "./style.module.css";
import Image from "next/image";

import RedTopRightArrowIcon from "../../../../../../public/home/red-top-right-arrow.svg";
import RobotGif from "../../../../../../public/home/product-and-platforms/robot.gif";
import FacegenieGif from "../../../../../../public/home/product-and-platforms/facegenie.gif";
import AnalyticsKartGif from "../../../../../../public/home/product-and-platforms/analyticsKart.gif";
import Link from "next/link";

const zodhaGPTContent = {
  label: "ZodhaGPT",
  link: "/zodha-gpt",
  content: (
    <div>
      <h2 className="font-anta">ZODHAGPT</h2>
      <p>
        <span style={{ color: "#000", fontWeight: 500 }}>ZodhaGPT</span> is a
        Gen AI/Agentic AI platform which leverages state-of-the-art Large
        Language Model (LLM) technology. It offers unparalleled abilities in
        understanding and generating human-like text and speech across various
        subjects and contexts. Whether it is complex tasks, creative
        brainstorming, proactive problem-solving or engaging storytelling, it
        harnesses the power of NLP & LLM technology to deliver personalized and
        contextually relevant responses. Agentic AI layers in the platform
        leverage advanced reasoning, goal-driven behavior, and real-world
        adaptability to complete complex workflows.
      </p>
    </div>
  ),
};

const facegenieContent = {
  label: "FaceGenie",
  link: "/face-genie",
  content: (
    <div>
      <h2 className="font-anta">FACEGENIE</h2>
      <p>
        <span style={{ color: "#000", fontWeight: 500 }}>
          FaceGenie Dynamic
        </span>{" "}
        is a Gen AI led computer vision-powered 360-degree tracking software for
        human faces, assets & objects - their movements, any events & incidents,
        process automation & compliances - with real-time alerts, text and
        speech driven analytics & reports for proactive action thus making
        campuses across industries - safe, secure, hygienic, and touchless.
      </p>
    </div>
  ),
};

const analyticsContent = {
  label: "AnalyticsKart",
  link: "/analyticskart",
  content: (
    <div>
      <h2 className="font-anta">ANALYTICSKART</h2>
      <p>
        <span style={{ color: "#000", fontWeight: 500 }}>AnalyticsKart</span> is
        a data driven Gen AI led analytics platform offering you an in-depth
        advanced analysis (Descriptive, Diagnostic & Predictive) of your
        business data.
      </p>
    </div>
  ),
};

const ProductAndPlatforms = () => {
  const [content, setContent] = useState(zodhaGPTContent);
  const [button1, setButton1] = useState(facegenieContent);
  const [button2, setButton2] = useState(analyticsContent);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleButtonClick = (
    target: { label: string; link: string; content: React.JSX.Element },
    setTarget: (val: {
      label: string;
      link: string;
      content: React.JSX.Element;
    }) => void
  ) => {
    const previousContent = content;
    setContent(target);
    setTarget(previousContent);
  };

  return (
    <div className={Styles.aiProductsPlatforms} id="aiProductsPlatforms">
      <div className={Styles.aiHeader}>
        <h1 className="font-anta">AI - PRODUCTS & PLATFORMS</h1>
      </div>
      <div className={Styles.contentContainer}>
        <div
          className={Styles.leftSection}
          style={{
            width: isMobile ? "100%" : "60%",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <div>
            {content.content}
            <Link href={content.link || "/"}>
              <button
                className={`${Styles.exploreBtn} flex items-center gap-1`}
                style={{
                  padding: isMobile ? "8px 16px" : "10px 20px",
                  fontSize: isMobile ? "12px" : "14px",
                }}
              >
                Explore More
                <Image
                  src={RedTopRightArrowIcon.src}
                  className={Styles.arrow}
                  alt="arrowIcon"
                  width={isMobile ? 20 : 28}
                  height={isMobile ? 14 : 20}
                />
              </button>
            </Link>
          </div>
          <div
            className={Styles.contactSection}
            style={{ fontSize: isMobile ? "12px" : "14px" }}
          >
            <p style={{ marginBottom: isMobile ? "0.5rem" : "1rem" }}>
              Curious to see how our solutions can benefit you?
            </p>
            <button
              className={`${Styles.contactBtn} flex items-center gap-1`}
              style={{
                padding: isMobile ? "8px 16px" : "10px 20px",
                fontSize: isMobile ? "12px" : "14px",
              }}
            >
              <Link href="#partner-with-us">Contact us today</Link>
              <Image
                src={RedTopRightArrowIcon.src}
                className={Styles.arrow}
                alt="arrowIcon"
                width={isMobile ? 20 : 28}
                height={isMobile ? 14 : 20}
              />
            </button>
          </div>
        </div>

        <div
          className={Styles.rightSection}
          style={{
            width: isMobile ? "100%" : "50%",
            marginBottom: isMobile ? "1rem" : "3rem",
          }}
        >
          <Image
            src={
              content.label === "ZodhaGPT"
                ? RobotGif
                : content.label === "FaceGenie"
                ? FacegenieGif
                : AnalyticsKartGif
            }
            alt={
              content.label === "ZodhaGPT"
                ? "zodhaGPT Illustration"
                : content.label === "FaceGenie"
                ? "FaceGenie Illustration"
                : "Analytics Kart Illustration"
            }
            className={Styles.robotImg}
            width={isMobile ? 300 : 1200}
            height={isMobile ? 150 : 450}
            layout="responsive"
          />
        </div>
        <div
          className={Styles.buttonGroup}
          style={{
            position: isMobile ? "relative" : "absolute",
            bottom: isMobile ? "auto" : 0,
            right: isMobile ? "auto" : 0,
            padding: isMobile ? "1rem" : "1.5rem 1.5rem 0 1.5rem",
            width: isMobile ? "100%" : "auto",
            justifyContent: isMobile ? "center" : "flex-end",
            // Removed flexDirection: "column" to allow default row behavior
            gap: isMobile ? "0.5rem" : "10px",
          }}
        >
          <button
            className={`${Styles.facegenieBtn}`}
            onClick={() => handleButtonClick(button1, setButton1)}
            style={{
              width: isMobile ? "100%" : "12rem",
              maxWidth: isMobile ? "200px" : "12rem",
              padding: isMobile ? "12px 0" : "20px 0",
              fontSize: isMobile ? "1.2rem" : "1.6rem",
            }}
          >
            {button1.label}
          </button>
          <button
            className={`${Styles.analyticskartBtn}`}
            onClick={() => handleButtonClick(button2, setButton2)}
            style={{
              width: isMobile ? "100%" : "12rem",
              maxWidth: isMobile ? "200px" : "12rem",
              padding: isMobile ? "12px 0" : "20px 0",
              fontSize: isMobile ? "1.2rem" : "1.6rem",
            }}
          >
            {button2.label}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductAndPlatforms;