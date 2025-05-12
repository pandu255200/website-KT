"use client";

import React, { useState } from "react";
import Styles from "./style.module.css";
// import TopLeftArrowIcon from "../../../../../../public/home/case-study/top-left-arrow.svg";
import RedArrowIcon from "../../../../../public/home/case-study/red-arrow.svg";
import WhiteArrowIcon from "../../../../../public/home/case-study/white-arrow.svg";
import PauseIcon from "../../../../../public/home/videos/pauseIcon.svg";
import Blog1 from "../../../../../public/home/case-study/blog-1.svg";
import AINybbles from "../../../../../public/home/videos/ai-nybbles.png";
import Image from "next/image";
import { GoBackButton } from "@/components/common/go-back-button";

const Videos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentOption, setCurrentOption] = useState("AI Nybbles");

  const AINybblesData = [
    {
      image: AINybbles,
      description:
        "Completed 1 a four-months long Internship at ResoluteAI.in as a Machine Learning Intern this month.",
    },
    {
      image: Blog1,
      description:
        "Completed 2 a four-months long Internship at ResoluteAI.in as a Machine Learning Intern this month.",
    },
    {
      image: AINybbles,
      description:
        "Completed 3 a four-months long Internship at ResoluteAI.in as a Machine Learning Intern this month.",
    },
    {
      image: Blog1,
      description:
        "Completed 4 a four-months long Internship at ResoluteAI.in as a Machine Learning Intern this month.",
    },
    {
      image: AINybbles,
      description:
        "Completed 5 a four-months long Internship at ResoluteAI.in as a Machine Learning Intern this month.",
    },
    {
      image: Blog1,
      description:
        "Completed 6 a four-months long Internship at ResoluteAI.in as a Machine Learning Intern this month.",
    },
  ];

  const TechyBytesData = [
    {
      image: Blog1,
      description:
        "Completed a four-months long Internship at ResoluteAI.in as a Machine Learning Intern this month.",
    },
    {
      image: Blog1,
      description:
        "Completed a four-months long Internship at ResoluteAI.in as a Machine Learning Intern this month.",
    },
    {
      image: Blog1,
      description:
        "Completed a four-months long Internship at ResoluteAI.in as a Machine Learning Intern this month.",
    },
    {
      image: Blog1,
      description:
        "Completed a four-months long Internship at ResoluteAI.in as a Machine Learning Intern this month.",
    },
    {
      image: Blog1,
      description:
        "Completed a four-months long Internship at ResoluteAI.in as a Machine Learning Intern this month.",
    },
    {
      image: Blog1,
      description:
        "Completed a four-months long Internship at ResoluteAI.in as a Machine Learning Intern this month.",
    },
  ];

  const hasPrevious = currentIndex > -1;
  const hasNext = currentIndex < AINybblesData.length - 2;

  const handlePrevious = () => {
    if (hasPrevious) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const data = currentOption === "AI Nybbles" ? AINybblesData : TechyBytesData;

  const currentBlogs =
    currentIndex === -1
      ? data.slice(0, 2)
      : data.slice(currentIndex, currentIndex + 3);

  return (
    <div className={Styles.container} id="videos">
      <h1 className="globalHeaderStyle">
        <span className="title">VIDEOS</span>
        <GoBackButton text={"Go Back"} type="prev" />
      </h1>

      <div className={Styles.optionToggle}>
        <div
          className={`${Styles.optionItem} ${
            currentOption === "AI Nybbles" && Styles.activeOption
          }`}
          onClick={() => setCurrentOption("AI Nybbles")}
        >
          AI Nybbles
        </div>
        <div
          className={`${Styles.optionItem} ${
            currentOption === "Techy Bytes" && Styles.activeOption
          }`}
          onClick={() => setCurrentOption("Techy Bytes")}
        >
          Techy Bytes
        </div>
      </div>

      <div className={Styles.slider}>
        <div className={Styles.sliderMain}>
          <div className={Styles.mainCrousel}>
            <div className={Styles.item}>
              <div className={Styles.leftContent}>
                <div className={Styles.leftBlurCurtain}></div>
                <div className={Styles.leftRightImageContainer}>
                  {currentIndex === -1 ? null : (
                    <Image
                      src={currentBlogs[0]?.image}
                      className={Styles.leftRightImage}
                      alt="Blog Image"
                      layout="fill"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className={Styles.item}>
              <div className={Styles.content}>
                <div className={Styles.watchVideo}>
                  <span>Watch Video</span>
                  <div className={Styles.pauseVideo}>
                    <Image
                      src={PauseIcon}
                      alt="arrowIcon"
                      layout="fixed"
                      width={18}
                      height={18}
                    />
                  </div>
                </div>

                <div className={Styles.imageContainer}>
                  <Image
                    src={
                      currentIndex === -1
                        ? currentBlogs[0]?.image
                        : currentBlogs[1]?.image
                    }
                    className={Styles.image}
                    alt="Blog Image"
                    layout="fill"
                  />
                </div>

                <div className={Styles.videoDescription}>
                  {currentIndex === -1
                    ? currentBlogs[0]?.description
                    : currentBlogs[1]?.description}
                </div>
              </div>
            </div>

            <div className={Styles.item}>
              <div className={Styles.rightContent}>
                <div className={Styles.rightBlurCurtain}></div>
                <div className={Styles.leftRightImageContainer}>
                  {currentIndex === data.length - 2 ? null : (
                    <Image
                      src={
                        currentIndex === -1
                          ? currentBlogs[1]?.image
                          : currentBlogs[2]?.image
                      }
                      className={Styles.leftRightImage}
                      alt="Blog Image"
                      layout="fill"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${Styles.previousButton} ${hasPrevious && Styles.active}`}
          onClick={handlePrevious}
        >
          <Image
            src={hasPrevious ? WhiteArrowIcon : RedArrowIcon}
            className={Styles.previousIcon}
            alt="arrowIcon"
            // layout="fixed"
            width={20}
            height={20}
          />
        </div>

        <div
          className={`${Styles.nextButton} ${hasNext && Styles.active}`}
          onClick={handleNext}
        >
          <Image
            src={hasNext ? WhiteArrowIcon : RedArrowIcon}
            className={Styles.nextIcon}
            alt="arrowIcon"
            // layout="fixed"
            width={20}
            height={20}
          />
        </div>
      </div>

      <div className={Styles.videoTitle}>
        <div className={Styles.videoTitleContent}>VIDEO TITLE HERE</div>

        <div className={Styles.previousNumber} onClick={handlePrevious}>
          {currentIndex === -1 ? "01" : `0${currentIndex + 2}`}
        </div>

        <div className={Styles.nextNumber} onClick={handleNext}>
          {currentIndex === data.length - 2
            ? ""
            : currentIndex === -1
            ? "02"
            : `0${currentIndex + 3}`}
        </div>
      </div>
    </div>
  );
};

export default Videos;
