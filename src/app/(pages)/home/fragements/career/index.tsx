"use client";

// pages/news.js
// import { GoBackButton } from "@/components/common/go-back-button";
import Styles from "./style.module.css";
import { useState } from "react"; // Import useState to manage hover state
// import TopLeftArrowIcon from "../../../../../../public/home/case-study/top-left-arrow.svg";
import DownArrowIcon from "../../../../../../public/home/top-right-arrow.svg";
import JobBagIcon from "../../../../../../public/home/career/job-bag.svg";
import Image from "next/image";
import { GoBackButton } from "@/components/common/go-back-button";

export default function Career() {
    // State to track which article is hovered
    const [currentOption, setCurrentOption] = useState("Full Time Jobs");

    return (
        <div className={Styles.container} id="careers">
            <h1 className="globalHeaderStyle">
                <span className="title">CAREER at RESOLUTEAI SOFTWARE</span>
                <GoBackButton text={"Go Back"} type="prev" />
            </h1>

            <div className={Styles.secondContainer}>
                <div className={Styles.optionToggle}>
                    <div
                        className={`${Styles.optionItem} ${currentOption === "Full Time Jobs" && Styles.activeOption
                            }`}
                        onClick={() => setCurrentOption("Full Time Jobs")}
                    >
                        Full Time Jobs
                    </div>
                    <div
                        className={`${Styles.optionItem} ${currentOption === "Internships" && Styles.activeOption
                            }`}
                        onClick={() => setCurrentOption("Internships")}
                    >
                        Internships
                    </div>
                </div>

                <div className={Styles.thirdContainer}>
                    <div className={Styles.postings}>
                        <div className={Styles.heading}>
                            <Image
                                src={JobBagIcon}
                                alt="arrowIcon"
                                className={Styles.image}
                                layout="fixed"
                                width={20}
                                height={20}
                            />
                            <span>Business Development (Sales)</span>
                        </div>

                        <div className={Styles.optionsFooter}>
                            <div className={Styles.optionCollection}>
                                <div className={Styles.optionHeading}>Fulltime</div>
                                <div className={Styles.optionHeading}>Work From Home</div>
                                <div className={Styles.optionHeading}>Immediate</div>
                            </div>

                            <div className={Styles.knowMoreAndApply}>
                                <span>Know More & Apply</span>
                                <Image
                                    src={DownArrowIcon}
                                    className={Styles.downArrow}
                                    alt="arrowIcon"
                                    layout="fixed"
                                    width={25}
                                    height={25}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={Styles.postings}>
                        <div className={Styles.heading}>
                            <Image
                                src={JobBagIcon}
                                alt="arrowIcon"
                                className={Styles.image}
                                layout="fixed"
                                width={20}
                                height={20}
                            />
                            <span>Business Development (Sales)</span>
                        </div>

                        <div className={Styles.optionsFooter}>
                            <div className={Styles.optionCollection}>
                                <div className={Styles.optionHeading}>Fulltime</div>
                                <div className={Styles.optionHeading}>Work From Home</div>
                                <div className={Styles.optionHeading}>Immediate</div>
                            </div>

                            <div className={Styles.knowMoreAndApply}>
                                <span>Know More & Apply</span>
                                <Image
                                    src={DownArrowIcon}
                                    className={Styles.downArrow}
                                    alt="arrowIcon"
                                    layout="fixed"
                                    width={25}
                                    height={25}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={Styles.postings}>
                        <div className={Styles.heading}>
                            <Image
                                src={JobBagIcon}
                                alt="arrowIcon"
                                className={Styles.image}
                                layout="fixed"
                                width={20}
                                height={20}
                            />
                            <span>Business Development (Sales)</span>
                        </div>

                        <div className={Styles.optionsFooter}>
                            <div className={Styles.optionCollection}>
                                <div className={Styles.optionHeading}>Fulltime</div>
                                <div className={Styles.optionHeading}>Work From Home</div>
                                <div className={Styles.optionHeading}>Immediate</div>
                            </div>

                            <div className={Styles.knowMoreAndApply}>
                                <span>Know More & Apply</span>
                                <Image
                                    src={DownArrowIcon}
                                    className={Styles.downArrow}
                                    alt="arrowIcon"
                                    layout="fixed"
                                    width={25}
                                    height={25}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={Styles.postings}>
                        <div className={Styles.heading}>
                            <Image
                                src={JobBagIcon}
                                alt="arrowIcon"
                                className={Styles.image}
                                layout="fixed"
                                width={20}
                                height={20}
                            />
                            <span>Business Development (Sales)</span>
                        </div>

                        <div className={Styles.optionsFooter}>
                            <div className={Styles.optionCollection}>
                                <div className={Styles.optionHeading}>Fulltime</div>
                                <div className={Styles.optionHeading}>Work From Home</div>
                                <div className={Styles.optionHeading}>Immediate</div>
                            </div>

                            <div className={Styles.knowMoreAndApply}>
                                <span>Know More & Apply</span>
                                <Image
                                    src={DownArrowIcon}
                                    className={Styles.downArrow}
                                    alt="arrowIcon"
                                    layout="fixed"
                                    width={25}
                                    height={25}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={Styles.postings}>
                        <div className={Styles.heading}>
                            <Image
                                src={JobBagIcon}
                                alt="arrowIcon"
                                className={Styles.image}
                                layout="fixed"
                                width={20}
                                height={20}
                            />
                            <span>Business Development (Sales)</span>
                        </div>

                        <div className={Styles.optionsFooter}>
                            <div className={Styles.optionCollection}>
                                <div className={Styles.optionHeading}>Fulltime</div>
                                <div className={Styles.optionHeading}>Work From Home</div>
                                <div className={Styles.optionHeading}>Immediate</div>
                            </div>

                            <div className={Styles.knowMoreAndApply}>
                                <span>Know More & Apply</span>
                                <Image
                                    src={DownArrowIcon}
                                    className={Styles.downArrow}
                                    alt="arrowIcon"
                                    layout="fixed"
                                    width={25}
                                    height={25}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}