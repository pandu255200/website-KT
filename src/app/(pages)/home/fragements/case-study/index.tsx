"use client";

import React, { useState } from "react";
import Styles from "./style.module.css";
import TopRightArrowIcon from "../../../../../../public/home/top-right-arrow.svg";
// import TopLeftArrowIcon from "../../../../../../public/home/case-study/top-left-arrow.svg";
import RedArrowIcon from "../../../../../../public/home/case-study/red-arrow.svg";
import WhiteArrowIcon from "../../../../../../public/home/case-study/white-arrow.svg";
import CalendarIcon from "../../../../../../public/home/case-study/calendar.svg";
import Blog1 from "../../../../../../public/home/case-study/blog-1.svg";
import Blog2 from "../../../../../../public/home/case-study/blog-2.svg";
import Blog3 from "../../../../../../public/home/case-study/blog-3.svg";
import Image from "next/image";
import { GoBackButton } from "@/components/common/go-back-button";

const CaseStudy = () => {
  const blogsData = [
    {
      image: Blog1,
      heading: "Blog Heading 1",
      description:
        "We believe in evolving together within teams and beyond. Through our mutual learning approach, we design an optimal solution based for you.",
    },
    {
      image: Blog2,
      heading: "Blog Heading 2",
      description:
        "We believe in evolving together within teams and beyond. Through our mutual learning approach, we design an optimal solution based for you.",
    },
    {
      image: Blog3,
      heading: "Blog Heading 3",
      description:
        "We believe in evolving together within teams and beyond. Through our mutual learning approach, we design an optimal solution based for you.",
    },
    {
      image: Blog2,
      heading: "Blog Heading 4",
      description:
        "We believe in evolving together within teams and beyond. Through our mutual learning approach, we design an optimal solution based for you.",
    },
    {
      image: Blog3,
      heading: "Blog Heading 5",
      description:
        "We believe in evolving together within teams and beyond. Through our mutual learning approach, we design an optimal solution based for you.",
    },
    {
      image: Blog1,
      heading: "Blog Heading 6",
      description:
        "We believe in evolving together within teams and beyond. Through our mutual learning approach, we design an optimal solution based for you.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < blogsData.length - 3;

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

  const currentBlogs = blogsData.slice(currentIndex, currentIndex + 3);

  return (
    <div className={Styles.container} id="case-study">
      <h1 className="globalHeaderStyle">
        <span className="title">CASE STUDY</span>
        <GoBackButton text={"Go Back"} type="prev" />
      </h1>

      <div className={Styles.slider}>
        <div
          className={Styles.mainCrousel}
        // style={{
        //   transform: `translateX(-${
        //     (currentIndex / blogsData.length) * 100
        //   }%)`,
        // }}
        >
          {currentBlogs.map((blog, index) => (
            <div className={Styles.item} key={index}>
              <div className={Styles.content}>
                <div className={Styles.imageContainer}>
                  <Image
                    src={blog.image}
                    className={Styles.image}
                    alt="Blog Image"
                    layout="fixed"
                    width={25}
                    height={25}
                  />
                </div>
                <h1 className='font-anta'>{blog.heading}</h1>
                <p>{blog.description}</p>
                <div className={Styles.details}>
                  <div className={Styles.date}>
                    <Image
                      src={CalendarIcon.src}
                      alt="CalendarIcon"
                      layout="fixed"
                      width={18}
                      height={18}
                    />
                    <span>23/01/2025</span>
                  </div>
                  <button className={Styles.readMore}>
                    <span>Read More</span>
                    <Image
                      src={TopRightArrowIcon}
                      alt="arrowIcon"
                      className={Styles.arrow}
                      layout="fixed"
                      width={25}
                      height={25}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`${Styles.previousButton} ${hasPrevious && Styles.active}`}
          onClick={handlePrevious}
        >
          <Image
            src={hasPrevious ? WhiteArrowIcon : RedArrowIcon}
            className={Styles.previousIcon}
            alt="arrowIcon"
            layout="fixed"
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
            layout="fixed"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
