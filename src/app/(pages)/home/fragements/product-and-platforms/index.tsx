"use client"

import React, { useState } from 'react';
import Styles from './style.module.css';
import Image from 'next/image';

import RedTopRightArrowIcon from "../../../../../../public/home/red-top-right-arrow.svg";
import RobotGif from "../../../../../../public/home/product-and-platforms/robot.gif"


const ProductAndPlatforms = () => {
    const [activeTab, setActiveTab] = useState('Facegenie'); // Default tab

    const facegenieContent = (
        <div>
            <h2 className='font-anta'>Facegenie</h2>
            <p>
                Facegenie is our cutting-edge AI solution designed for seamless face recognition, real-time
                monitoring, and enhanced security. Leveraging advanced algorithms, it ensures high accuracy
                and rapid identification across diverse use cases.
            </p>
        </div>
    );

    const analyticsContent = (
        <div>
            <h2 className='font-anta'>AnalyticsKart</h2>
            <p>
                AnalyticsKart is a powerful SAAS-enabled, end-to-end pipeline tool offering you an in-depth advanced analysis (Descriptive, Diagnostic & Predictive) of your business data.
            </p>
        </div>
    );

    return (
        <div className={Styles.aiProductsPlatforms}>
            <div className={Styles.aiHeader}>
                <h1 className='font-anta'>AI - PRODUCTS & PLATFORMS</h1>
            </div>
            <div className={Styles.contentContainer}>
                <div className={Styles.leftSection}>
                    {activeTab === 'Facegenie' ? facegenieContent : analyticsContent}

                    <button className={`${Styles.exploreBtn} flex items-center gap-1`}>
                        <span>
                            Explore More
                        </span>
                        <Image src={RedTopRightArrowIcon.src} className={Styles.arrow} alt="arrowIcon" layout="fixed" width={28} height={20} />
                    </button>
                    <div className={Styles.contactSection}>
                        <p>Curious to see how our solutions can benefit you?</p>
                        <button className={`${Styles.contactBtn} flex items-center gap-1`}>
                            <span>
                                Contact us today
                            </span>
                            <Image src={RedTopRightArrowIcon.src} className={Styles.arrow} alt="arrowIcon" layout="fixed" width={28} height={20} />
                        </button>
                    </div>
                </div>

                <div className={Styles.rightSection}>
                    <Image
                        src={activeTab === 'Facegenie' ? RobotGif : RobotGif}
                        alt={activeTab === 'Facegenie' ? 'Facegenie Illustration' : 'Analytics Kart Illustration'}
                        className={Styles.robotImg}
                        width={900}
                        height={400}
                        layout='fixed'
                    />
                </div>
                <div className={Styles.buttonGroup}>
                    <button
                        className={`${Styles.facegenieBtn} ${activeTab === 'Facegenie' ? Styles.active : ''}`}
                        onClick={() => setActiveTab('Facegenie')}
                    >
                        Facegenie
                    </button>
                    <button
                        className={`${Styles.analyticskartBtn} ${activeTab === 'Analytics Kart' ? Styles.active : ''}`}
                        onClick={() => setActiveTab('Analytics Kart')}
                    >
                        Analytics Kart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductAndPlatforms;
