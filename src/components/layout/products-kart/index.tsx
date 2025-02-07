'use client';

import { useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import { GoBackButton } from '@/components/common/go-back-button';


interface SliderData {
    id: number;
    title: string;
    description: string;
    image: string;
}

interface ProductsKartSliderProps {
    data: SliderData[];
    pageTitle: string;
}

export function ProductsKartSlider({ data, pageTitle }: ProductsKartSliderProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % data.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + data.length) % data.length);
    };

    const { title, description, image } = data[currentSlide];

    return (
        <div className={styles.sliderContainer}>
            {/* Header */}
            <header className="globalHeaderStyle">
                <h1 className="title">{pageTitle}</h1>
                {/* <button className={styles.goBackButton}>Go Back</button> */}
                <GoBackButton text={"Go Back"} type="prev" />
            </header>

            {/* Main Content */}
            <div className={styles.mainContent}>

                {/* Left Section */}
                <div className={styles.leftSection}>
                    <div className={styles.getInTouch}>
                        <select className={styles.selectField}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        <GoBackButton text={"Get in Touch"} type={"next"} linkUrl="/home#partner-with-us" />
                    </div>

                    <div className={styles.leftContent}>

                        <h2 className={`${styles.slideTitle} font-anta`}>{title}</h2>
                        <p className={styles.slideDescription}>{description}</p>
                        <div className={styles.navigation}>

                            <span className={styles.pagination}>
                                {currentSlide + 1}/{data.length}
                            </span>

                            <div className='flex items-center gap-4'>
                                <button className={styles.navButton} onClick={handlePrev}>
                                    &#x3c;
                                </button>
                                <button className={styles.navButton} onClick={handleNext}>
                                    &#x3e;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className={styles.rightSection}>
                    <Image src={image} alt={title} className={styles.image} width={500} height={300} />
                </div>
            </div>

            {/* Footer Tags */}
            <div className={styles.footer}>
                {data.map((slide) => (
                    <span
                        key={slide.id}
                        className={`${styles.tag} ${currentSlide === slide.id - 1 ? styles.activeTag : ''
                            }`}
                    >
                        {slide.title}
                    </span>
                ))}

                {/* {tags.map((tag, index) => (
          <span
            key={index}
            className={`${styles.tag} ${index === currentSlide ? styles.activeTag : ''}`}
          >
            {tag}
          </span>
        ))} */}
            </div>
        </div>
    );
}
