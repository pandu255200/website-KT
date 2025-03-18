"use client";

import { useState } from "react";
import Styles from "./style.module.css";
import Image from "next/image";

import DownArrowIcon from "../../../../../../public/home/down-arrow.svg";
import VerticalsGif from "../../../../../../public/home/our-verticals/verticals.gif";
import Verticals2Gif from "../../../../../../public/home/our-verticals/verticals-2.gif";
import Verticals3Gif from "../../../../../../public/home/our-verticals/verticals-3.gif";
import RedArrowIcon from "../../../../../../public/home/blogs/red-arrow.svg";

// Vertical data array
const verticalsData = [
  {
    id: 1,
    title: "Textile, Fabric & Yarn",
    description:
      "With our cutting-edge computer vision technology, we are able to provide our clients with a comprehensive analysis of their employees' work efficiency. You are enabled to track any and all events or activities, so you can make data-driven decisions about your business.",
    image: VerticalsGif,
  },
  {
    id: 2,
    title: "FMCG",
    description:
      "Our solutions for FMCG help in optimizing the supply chain and monitoring product quality with real-time data.",
    image: Verticals2Gif,
  },
  {
    id: 3,
    title: "Retail, E- commerce & Market Places",
    description:
      "With our cutting-edge computer vision technology, we are able to provide our clients with a comprehensive analysis of their employees' work efficiency. You are enabled to track any and all events or activities, so you can make data-driven decisions about your business.",
    image: Verticals3Gif,
  },
  {
    id: 4,
    title: "Chemicals Pharmaceuticals & Medical Devices",
    description:
      "With our cutting-edge computer vision technology, we are able to provide our clients with a comprehensive analysis of their employees' work efficiency. You are enabled to track any and all events or activities, so you can make data-driven decisions about your business.",
    image: Verticals2Gif,
  },
  {
    id: 5,
    title: "Consumer Product & Electronic Goods",
    description:
      "With our cutting-edge computer vision technology, we are able to provide our clients with a comprehensive analysis of their employees' work efficiency. You are enabled to track any and all events or activities, so you can make data-driven decisions about your business.",
    image: Verticals3Gif,
  },
  {
    id: 6,
    title: "Power, Energy & Industrial Automation",
    description:
      "With our cutting-edge computer vision technology, we are able to provide our clients with a comprehensive analysis of their employees' work efficiency. You are enabled to track any and all events or activities, so you can make data-driven decisions about your business.",
    image: Verticals3Gif,
  },
  {
    id: 7,
    title: "Real Estate, Construction & Technology Parks",
    description:
      "With our cutting-edge computer vision technology, we are able to provide our clients with a comprehensive analysis of their employees' work efficiency. You are enabled to track any and all events or activities, so you can make data-driven decisions about your business.",
    image: Verticals3Gif,
  },
  {
    id: 8,
    title: "Mining, Metals & Heavy Infrastructure",
    description:
      "With our cutting-edge computer vision technology, we are able to provide our clients with a comprehensive analysis of their employees' work efficiency. You are enabled to track any and all events or activities, so you can make data-driven decisions about your business.",
    image: Verticals3Gif,
  },
  {
    id: 9,
    title: "Automotives, Ancillaries & Heavy Engineerings",
    description:
      "With our cutting-edge computer vision technology, we are able to provide our clients with a comprehensive analysis of their employees' work efficiency. You are enabled to track any and all events or activities, so you can make data-driven decisions about your business.",
    image: Verticals3Gif,
  },
  {
    id: 10,
    title: "Logistics, Warehousing & Transportation",
    description:
      "With our cutting-edge computer vision technology, we are able to provide our clients with a comprehensive analysis of their employees' work efficiency. You are enabled to track any and all events or activities, so you can make data-driven decisions about your business.",
    image: Verticals3Gif,
  },
  {
    id: 11,
    title: "Hospitals & Healthcare",
    description:
      "With our cutting-edge computer vision technology, we are able to provide our clients with a comprehensive analysis of their employees' work efficiency. You are enabled to track any and all events or activities, so you can make data-driven decisions about your business.",
    image: Verticals3Gif,
  },
  {
    id: 12,
    title: "Hotels, QSR & Hospitality",
    description:
      "With our cutting-edge computer vision technology, we are able to provide our clients with a comprehensive analysis of their employees' work efficiency. You are enabled to track any and all events or activities, so you can make data-driven decisions about your business.",
    image: Verticals3Gif,
  },
  {
    id: 13,
    title: "Educational Institution",
    description:
      "With our cutting-edge computer vision technology, we are able to provide our clients with a comprehensive analysis of their employees' work efficiency. You are enabled to track any and all events or activities, so you can make data-driven decisions about your business.",
    image: Verticals3Gif,
  },
];

export default function OurVerticals() {
  const [currentVertical, setCurrentVertical] = useState(0);

  const handleNext = () => {
    if (currentVertical < verticalsData.length - 1) {
      setCurrentVertical((prev) => (prev + 1) % verticalsData.length);
    }
  };

  const handlePrevious = () => {
    if (currentVertical > 0) {
      setCurrentVertical((prev) => (prev - 1) % verticalsData.length);
    }
  };

  return (
    <>
      <div className={Styles.main} id="verticals">
        <div className={Styles.container}>
          <div className={Styles.header}>
            <span className="font-anta">OUR VERTICALS</span>
            <div className={Styles.countSection}>
              <div className={Styles.count}>
                {verticalsData[currentVertical].id}
              </div>
              <div className="flex flex-col justify-center items-center">
                <button
                  className={`${Styles.downArrow} ${Styles.rotateArrow} ${
                    currentVertical === 0 && Styles.notActiveArrow
                  }`}
                  onClick={handlePrevious}
                >
                  <Image
                    src={
                      currentVertical === 0 ? RedArrowIcon : DownArrowIcon.src
                    }
                    alt="upArrowIcon"
                    layout="fixed"
                    width={35}
                    height={35}
                  />
                </button>
                <button
                  className={`${Styles.downArrow} ${
                    currentVertical === verticalsData.length - 1 &&
                    Styles.notActiveArrow
                  }`}
                  onClick={handleNext}
                >
                  <Image
                    src={
                      currentVertical === verticalsData.length - 1
                        ? RedArrowIcon
                        : DownArrowIcon.src
                    }
                    alt="downArrowIcon"
                    layout="fixed"
                    width={35}
                    height={35}
                  />
                </button>
                <div className={Styles.remainingCount}>
                  <span>{verticalsData.length - 1 - currentVertical}</span>
                  {verticalsData.length - 1 - currentVertical > 0 && "more"}
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.content}>
            {/* LEFT SECTION */}
            <div className={Styles.left}>
              <Image
                src={verticalsData[currentVertical].image}
                className={Styles.image}
                alt="VerticalsGif"
                layout="fixed"
                width={600}
                height={370}
              />
            </div>
            {/* LEFT SECTION */}

            {/* RIGHT SECTION */}
            <div className={Styles.right}>
              {/* <div className={Styles.count}>{verticalsData[currentVertical].id}</div> */}
              <h2 className={`${Styles.title} font-anta`}>
                {verticalsData[currentVertical].title}
              </h2>
              <p className={Styles.description}>
                {verticalsData[currentVertical].description}
              </p>
              {/* <Button  className={Styles.exploreButton} text='Explore more' /> */}
              <button className={Styles.exploreButton}>Explore More</button>
            </div>
            {/* RIGHT SECTION */}
          </div>
        </div>
        <div className={Styles.footer}>
          <div className={Styles.verticalTags}>
            {verticalsData.map((vertical) => (
              <span
                key={vertical.id}
                className={`${Styles.tag} ${
                  currentVertical === vertical.id - 1 ? Styles.activeTag : ""
                }`}
              >
                {vertical.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
