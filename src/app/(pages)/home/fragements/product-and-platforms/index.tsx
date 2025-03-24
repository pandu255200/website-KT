"use client";

import React, { useState } from "react";
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
        ZodhaGPT is an Open AI platform which leverages state-of-the-art Large
        Language Model (LLM) technology. It offers unparalleled abilities in
        understanding and generating human-like text and speech across various
        subjects and contexts. Whether it is complex tasks, creative
        brainstorming, or engaging storytelling, it harnesses the power of NLP &
        LLM technology with Gen AI to deliver personalized and contextually
        relevant responses.
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
        FaceGenie Dynamic is a computer vision-powered 360-degree tracking
        software for human faces, assets & objects - their movements, any events
        & incidents, process automation & compliances - with real-time alerts,
        analytics & reports for proactive action thus making campuses across
        industries - safe, secure, hygienic, and touchless.
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
        AnalyticsKart is a powerful SAAS-enabled, end-to-end pipeline tool
        offering you an in-depth advanced analysis (Descriptive, Diagnostic &
        Predictive) of your business data.
      </p>
    </div>
  ),
};

const ProductAndPlatforms = () => {
  const [content, setContent] = useState(zodhaGPTContent);
  const [button1, setButton1] = useState(facegenieContent);
  const [button2, setButton2] = useState(analyticsContent);

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
        <div className={Styles.leftSection}>
          <div>
            {content.content}

            <button className={`${Styles.exploreBtn} flex items-center gap-1`}>
              <Link href={content.link || "/"}>Explore More</Link>
              <Image
                src={RedTopRightArrowIcon.src}
                className={Styles.arrow}
                alt="arrowIcon"
                layout="fixed"
                width={28}
                height={20}
              />
            </button>
          </div>
          <div className={Styles.contactSection}>
            <p>Curious to see how our solutions can benefit you?</p>
            <button className={`${Styles.contactBtn} flex items-center gap-1`}>
              <Link href="#partner-with-us">Contact us today</Link>
              <Image
                src={RedTopRightArrowIcon.src}
                className={Styles.arrow}
                alt="arrowIcon"
                layout="fixed"
                width={28}
                height={20}
              />
            </button>
          </div>
        </div>

        <div className={Styles.rightSection}>
          <Image
            src={
              content.label == "ZodhaGPT"
                ? RobotGif
                : content.label === "FaceGenie"
                ? FacegenieGif
                : AnalyticsKartGif
            }
            alt={
              content.label == "ZodhaGPT"
                ? "zodhaGPT Illustration"
                : content.label === "FaceGenie"
                ? "FaceGenie Illustration"
                : "Analytics Kart Illustration"
            }
            className={Styles.robotImg}
            width={1200}
            height={450}
            layout="fixed"
          />
        </div>
        <div className={Styles.buttonGroup}>
          <button
            className={`${Styles.facegenieBtn}`}
            onClick={() => handleButtonClick(button1, setButton1)}
          >
            {button1.label}
          </button>
          <button
            className={`${Styles.analyticskartBtn}`}
            onClick={() => handleButtonClick(button2, setButton2)}
          >
            {button2.label}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductAndPlatforms;
