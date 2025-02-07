"use client"

import { useState } from 'react';
import Styles from './style.module.css';
import Image from 'next/image';

import DownArrowIcon from "../../../../../../public/home/down-arrow.svg"
import VerticalsGif from "../../../../../../public/home/our-verticals/verticals.gif"

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
        image: VerticalsGif,
    },
    {
        id: 3,
        title: "Retail, E- commerce & Market Places",
        description:
            "Our solutions for FMCG help in optimizing the supply chain and monitoring product quality with real-time data.",
        image: VerticalsGif,
    },
    {
        id: 4,
        title: "Chemicals, Pharmaceuticals & Medical Devices",
        description:
            "Our solutions for FMCG help in optimizing the supply chain and monitoring product quality with real-time data.",
        image: VerticalsGif,
    },
    {
        id: 5,
        title: "Consumer Product & Electronic Goods",
        description:
            "Our solutions for FMCG help in optimizing the supply chain and monitoring product quality with real-time data.",
        image: VerticalsGif,
    },
    {
        id: 6,
        title: "Power, Energy & Industrial Automation",
        description:
            "Our solutions for FMCG help in optimizing the supply chain and monitoring product quality with real-time data.",
        image: VerticalsGif,
    },
    {
        id: 7,
        title: "Real Estate, Construction & Technology Parks",
        description:
            "Our solutions for FMCG help in optimizing the supply chain and monitoring product quality with real-time data.",
        image: VerticalsGif,
    },
    {
        id: 8,
        title: "Mining, Metals & Heavy Infrastructure",
        description:
            "Our solutions for FMCG help in optimizing the supply chain and monitoring product quality with real-time data.",
        image: VerticalsGif,
    },
    {
        id: 9,
        title: "Automotives, Ancillaries & Heavy Engineering",
        description:
            "Our solutions for FMCG help in optimizing the supply chain and monitoring product quality with real-time data.",
        image: VerticalsGif,
    },
    {
        id: 10,
        title: "Logistics, Warehousing & Transportation",
        description:
            "Our solutions for FMCG help in optimizing the supply chain and monitoring product quality with real-time data.",
        image: VerticalsGif,
    },
    {
        id: 11,
        title: "Hospitals & Healthcare",
        description:
            "Our solutions for FMCG help in optimizing the supply chain and monitoring product quality with real-time data.",
        image: VerticalsGif,
    },
    {
        id: 12,
        title: "Hotels, QSR & Hospitality",
        description:
            "Our solutions for FMCG help in optimizing the supply chain and monitoring product quality with real-time data.",
        image: VerticalsGif,
    },
    {
        id: 13,
        title: "Educational Institution",
        description:
            "Our solutions for FMCG help in optimizing the supply chain and monitoring product quality with real-time data.",
        image: VerticalsGif,
    },
    // Add more verticals here
];

export default function OurVerticals() {
    const [currentVertical, setCurrentVertical] = useState(0);

    const handleNext = () => {
        setCurrentVertical((prev) => (prev + 1) % verticalsData.length);
    };

    return (
        <>
            <div className={Styles.main} id='verticals'>

                <div className={Styles.container}>
                    <div className={Styles.header}>
                        <span className='font-anta'>
                            OUR VERTICALS
                        </span>
                        <div className={Styles.countSection}>
                            <div className={Styles.count}>{verticalsData[currentVertical].id}</div>
                            <div className='flex flex-col justify-center items-center'>
                                <button className={Styles.downArrow} onClick={handleNext}>
                                    <Image src={DownArrowIcon.src} alt="downArrowIcon" layout="fixed" width={35} height={35} />
                                </button>
                                <div className={Styles.remainingCount}>
                                    <span>
                                        {verticalsData.length - 1 - currentVertical}
                                    </span>
                                    {verticalsData.length - 1 - currentVertical > 0 && "more"}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.content}>
                        {/* LEFT SECTION */}
                        <div className={Styles.left}>
                            <Image src={VerticalsGif.src} className={Styles.image} alt="VerticalsGif" layout="fixed" width={600} height={350} />
                        </div>
                        {/* LEFT SECTION */}

                        {/* RIGHT SECTION */}
                        <div className={Styles.right}>
                            {/* <div className={Styles.count}>{verticalsData[currentVertical].id}</div> */}
                            <h2 className={`${Styles.title} font-anta`}>{verticalsData[currentVertical].title}</h2>
                            <p className={Styles.description}>
                                {verticalsData[currentVertical].description}
                            </p>
                            {/* <Button  className={Styles.exploreButton} text='Explore more' /> */}
                            <button className={Styles.exploreButton}>Explore More</button>
                        </div>
                        {/* RIGHT SECTION */}

                    </div>
                </div >
                <div className={Styles.footer}>
                    <div className={Styles.verticalTags}>
                        {verticalsData.map((vertical) => (
                            <span
                                key={vertical.id}
                                className={`${Styles.tag} ${currentVertical === vertical.id - 1 ? Styles.activeTag : ''
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
