"use client";

import React, { useState } from "react";
import Styles from "./style.module.css";
import Image from "next/image";

import SlideImg from "../../../../../../public/home/ai-engineering/slide-img1.svg";
import SlideImg2 from "../../../../../../public/home/ai-engineering/slide-img-2.svg";
// import BgDesign from "../../../../../../public/home/ai-engineering/bg-design.svg";
import RIghtAngleIcon from "../../../../../../public/home/right-angle-icon.svg";
import TopLeftArrow from "../../../../../../public/core-team/top-left-arrow.svg"


const slides = [
    {
        title: "Permit to Work Automation",
        description:
            "With our cutting-edge computer vision technology, we are able to provide our clients with a comprehensive analysis of their employees' work efficiency.",
        image: SlideImg2,
        alt: "Work Permit Automation",
    },
    {
        title: "EHS Digitalization",
        description:
            "With our advanced technology, we help clients streamline processes and improve workplace safety and compliance.",
        image: SlideImg,
        alt: "EHS Digitalization",
    },
    {
        title: "Data Management",
        description:
            "Harness the power of AI to manage and analyze large-scale data for improved decision-making.",
        image: SlideImg2,
        alt: "Data Management",
    },
];

const EngineeringSolutions = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [translateX, setTranslateX] = useState(500);
    const [bgImageRotation, setBgImageRotation] = useState(0); // Added state for bgImage rotation

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTranslateX((prev) => prev - 500);
        setBgImageRotation((prev) => prev + 180); // Rotate bgImage on x-axis by 180 degrees
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setTranslateX((prev) => prev + 500);
        setBgImageRotation((prev) => prev - 180); // Rotate bgImage on x-axis by -180 degrees
    };

    return (
        <div className={Styles.container}>
            <h1 className={`${Styles.header} font-anta`}>AI ENGINEERING SOLUTIONS & IT SERVICES</h1>
            <div
                className={Styles.slider}
                style={{
                    transform: `translateX(${translateX}px)`,
                    transition: "transform 0.5s ease-in-out", // Smooth transition
                }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`${Styles.slide} ${index === currentSlide ? Styles.centerSlide : ""
                            }`}
                    >
                        <div className={Styles.rightSection}>
                            <Image
                                src={slide.image.src}
                                alt="SlideImg"
                                layout="fixed"
                                width={300}
                                height={600}
                            />
                        </div>
                        <div className={Styles.leftSection}>
                            <h2 className='font-anta'>{slide.title}</h2>
                            <p>{slide.description}</p>
                            <button className={Styles.exploreBtn}>
                                <span>
                                    Explore more
                                </span>
                                <Image
                                    src={TopLeftArrow}
                                    alt="TopLeftArrow"
                                    style={{ background: "white", borderRadius: "50%", transform: "rotate(90deg)" }}
                                    width={30}
                                    height={30}
                                />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className={Styles.navigation}>
                <button disabled={currentSlide === 0} className={`${Styles.navBtn} ${currentSlide === 0 ? "disabled" : ""}`} onClick={handlePrev}>
                    <Image
                        src={RIghtAngleIcon.src}
                        alt="Previous"
                        style={{ transform: "rotate(180deg" }}
                        width={20}
                        height={20}
                    />
                </button>
                <button disabled={currentSlide === slides.length - 1} className={`${Styles.navBtn} ${currentSlide === slides.length - 1 ? "disabled" : ""}`} onClick={handleNext}>
                    <Image src={RIghtAngleIcon.src} alt="Next" width={20} height={20} />
                </button>
            </div>
            <div className={Styles.bgImage} style={{ opacity: currentSlide % 2 === 0 ? 1 : 0 }}></div>

            <div className={Styles.bgImage} style={{ transform: `rotateY(${bgImageRotation}deg)`, transition: "transform 0.5s ease-in-out" }}>
                {/* <Image
                    src={BgDesign.src}
                    alt="SlideImg"
                    layout="fixed"
                    width={300}
                    height={600}
                /> */}
            </div>
        </div>
    );
};

export default EngineeringSolutions;
