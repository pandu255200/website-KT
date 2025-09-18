"use client";

import { useState } from "react";
import Styles from "./style.module.css";
import Image from "next/image";

import DownArrowIcon from "../../../../../../public/home/down-arrow.svg";
import Verticals1 from "../../../../../../public/home/our-verticals/verticals-1.png";
import Verticals2 from "../../../../../../public/home/our-verticals/verticals-2.png";
import Verticals3 from "../../../../../../public/home/our-verticals/verticals-3.png";
import Verticals4 from "../../../../../../public/home/our-verticals/verticals-4.png";
import Verticals5 from "../../../../../../public/home/our-verticals/verticals-5.png";
import Verticals6 from "../../../../../../public/home/our-verticals/verticals-6.png";
import Verticals7 from "../../../../../../public/home/our-verticals/verticals-7.png";
import Verticals8 from "../../../../../../public/home/our-verticals/verticals-8.png";
import Verticals9 from "../../../../../../public/home/our-verticals/verticals-9.png";
import Verticals10 from "../../../../../../public/home/our-verticals/verticals-10.png";
import Verticals11 from "../../../../../../public/home/our-verticals/verticals-11.png";
import Verticals12 from "../../../../../../public/home/our-verticals/verticals-12.png";
import Verticals13 from "../../../../../../public/home/our-verticals/verticals-13.png";
import Verticals14 from "../../../../../../public/home/our-verticals/verticals-14.png";
import Verticals15 from "../../../../../../public/home/our-verticals/verticals-15.png";
import RedArrowIcon from "../../../../../../public/home/blogs/red-arrow.svg";
import { GoBackButton } from "@/components/common/go-back-button";
import Link from "next/link";

interface OurVerticalsProps {
  goback: boolean;
  vertical: number;
}

// Vertical data array
const verticalsData = [
  {
    id: 1,
    title: "Textiles, Fabric & Yarn",
    description:
      "Textile manufacturing today demands precision, consistency, and speed. With our AI-led ecosystem, textile companies are automating quality checks, reducing wastage, and enabling real-time decision-making across production and supply chain functions. Our solutions use computer vision, Agentic AI, and LLMs to transform traditional operations into intelligent, adaptive systems—reducing human error and accelerating go-to-market cycles.",
    image: Verticals1,
  },
  {
    id: 2,
    title: "Fast-Moving Consumer Goods",
    description:
      "In an industry driven by volume and velocity, FMCG brands use our AI stack to accurately sense demand, automate distribution strategies, and extract real-time insights from consumer behavior. We deploy GenAI agents to simulate market scenarios, while predictive analytics ensures optimal stock levels and reduced wastage across channels.",
    image: Verticals2,
  },
  {
    id: 3,
    title: "Retail, E-commerce & Market Places",
    description:
      "From personalized shopping journeys to intelligent operations, our AI and GenAI platforms empower retailers and online marketplaces to deliver unmatched customer experiences while minimizing operational inefficiencies. We enable hyper-personalization, real-time insights, and automation at every digital and physical touchpoint.",
    image: Verticals3,
  },
  {
    id: 4,
    title: "Chemicals & Pharmaceuticals",
    description:
      "Precision and compliance are non-negotiable in pharma and chemical industries. Our solutions leverage LLMs for document intelligence, GenAI for R&D optimization, and predictive models for process stability. From lab to launch, we bring intelligence and traceability to every stage.",
    image: Verticals4,
  },
  {
    id: 5,
    title: "Consumer, Electronics & Medical Devices",
    description:
      "In this high-precision, fast-evolving sector, we integrate AI into design, manufacturing, and compliance workflows. With intelligent inspection, digital twins, and predictive fault detection, companies unlock both operational agility and compliance at scale.",
    image: Verticals5,
  },
  {
    id: 6,
    title: "Power, Energy, Oil & Gas",
    description:
      "We help energy-intensive sectors achieve safety, efficiency, and compliance through scalable AI. GenAI agents drive remote asset inspections, predictive maintenance prevents downtime, and LLMs automate risk and safety documentation across sites.",
    image: Verticals6,
  },
  {
    id: 7,
    title: "Real Estates & Heavy Infrastructure",
    description:
      "Our platform empowers infrastructure firms to digitally transform project execution—automating project tracking, enabling predictive resource planning, and ensuring safety at scale. With Agentic AI and IoT insights, we deliver measurable project certainty.",
    image: Verticals7,
  },
  {
    id: 8,
    title: "Mining, Metals & Industrial Automation",
    description:
      "Safety, scale, and uptime are everything in this sector. With AI-powered surveillance, predictive machine analytics, and autonomous agents, we help companies reduce hazards, maximize throughput, and ensure round-the-clock operational intelligence.",
    image: Verticals8,
  },
  {
    id: 9,
    title: "Automotives, Ancillaries & Heavy Machineries",
    description:
      "From smart factories to intelligent aftermarket services, our AI stack powers process automation, quality analytics, and supply chain agility. GenAI copilots enhance design simulations, and LLMs fast-track documentation and vendor coordination.",
    image: Verticals9,
  },
  {
    id: 10,
    title: "Logistics, Warehousing & Transportation",
    description:
      "Efficiency at every node is what we deliver. AI-led route planning, warehouse intelligence, and real-time analytics help logistics networks scale without chaos. LLMs automate documentation while Agentic AI handles exception management in real time.",
    image: Verticals10,
  },
  {
    id: 11,
    title: "Hospitals, Healthcare & Lifesciences",
    description:
      "Whether hospitals or hospitality chains, delivering seamless service and safety is critical. Our GenAI and AI-led automation solutions empower staff, reduce administrative load, and improve patient and guest satisfaction through intelligent personalization and planning.",
    image: Verticals11,
  },
  {
    id: 12,
    title: "Hotels, QSR & Hospitality",
    description:
      "AI and GenAI are redefining guest experiences across hotels, QSR chains, and the broader hospitality sector. From hyper-personalized services enabled by LLMs to intelligent staff allocation through Agentic AI, operations are becoming frictionless and guest satisfaction is soaring. Real-time analytics and voice-based GenAI agents offer actionable insights that empower faster decision-making and create memorable customer journeys.",
    image: Verticals12,
  },
  {
    id: 13,
    title: "Banking, Financial Services and Insurance",
    description:
      "We help financial institutions shift from reactive to proactive. From underwriting to fraud detection, our GenAI and LLM models enable faster decisions, lower risk, and smarter client engagement across the lifecycle.",
    image: Verticals13,
  },
  {
    id: 14,
    title: "Educational Institutes",
    description:
      "AI transforms learning and governance in academic institutions. Our solutions help educators track outcomes, personalize learning, and streamline campus operations—using GenAI and cognitive automation.",
    image: Verticals14,
  },
  {
    id: 15,
    title: "Telecom, Media & Entertainment",
    description:
      "We help media and telco giants reimagine content, customer interactions, and network insights. From GenAI-driven creation to LLM-powered discovery, we help unlock value across the entertainment ecosystem.",
    image: Verticals15,
  },
];

export const OurVerticals: React.FC<OurVerticalsProps> = ({
  goback,
  vertical,
}) => {
  const [currentVertical, setCurrentVertical] = useState(vertical);

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
            <h1 className="font-anta">OUR VERTICALS</h1>
            <div className={Styles.countSection}>
              <div className={Styles.count}>
                {verticalsData[currentVertical].id}
              </div>
              <div className={`flex flex-col items-center`}>
                <button
                  className={`${Styles.downArrow} ${Styles.rotateArrow} ${currentVertical === 0 && Styles.notActiveArrow
                    }`}
                  onClick={handlePrevious}
                >
                  <Image
                    src={
                      currentVertical === 0 ? RedArrowIcon : DownArrowIcon.src
                    }
                    alt="upArrowIcon"
                    // layout="fixed"
                    width={35}
                    height={35}
                  />
                </button>
                <button
                  className={`${Styles.downArrow} ${currentVertical === verticalsData.length - 1 &&
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
                    // layout="fixed"
                    width={35}
                    height={35}
                  />
                </button>
                <div className={Styles.remainingCount}>
                  <span style={{ fontWeight: 300 }}>
                    {verticalsData.length - 1 - currentVertical}
                  </span>
                  {verticalsData.length - 1 - currentVertical > 0 && "more"}
                </div>
              </div>
            </div>
            {goback && (
              <div className={Styles.goBackButtonRotate}>
                <GoBackButton text={"Go Back"} type="prev" />
              </div>
            )}
          </div>


          <div className={Styles.content}>
            {/* LEFT SECTION */}
            <div className={Styles.left}>
              <Image
                src={verticalsData[currentVertical].image}
                className={Styles.image}
                alt="VerticalsGif"
                // layout="fixed"
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
              <button className={Styles.exploreButton}>
                <Link
                  href={`/our-verticals/${verticalsData[currentVertical].id - 1
                    }`}
                >
                  Explore More
                </Link>
              </button>
            </div>
            {/* RIGHT SECTION */}
          </div>

          {/* MOBILE DEVICE CONTENT */}
          <div className={Styles.contentMobile}>
            {/* LEFT SECTION */}
            <div className={Styles.leftMobile} >
              <div className={Styles.count}>
                {verticalsData[currentVertical].id}
              </div>
            </div>
            {/* LEFT SECTION */}

            {/* RIGHT SECTION */}
            <div className={Styles.rightMobile}>
              <Image
                src={verticalsData[currentVertical].image}
                className={Styles.imageMobile}
                alt="VerticalsGif"
                layout="responsive"
                width={600}
                height={370}
              />
            </div>
            {/* RIGHT SECTION END*/}
          </div>

          <div className={Styles.right}>
            {/* <div className={Styles.count}>{verticalsData[currentVertical].id}</div> */}
            <h2 className={`${Styles.title} font-anta`}>
              {verticalsData[currentVertical].title}
            </h2>
            <p className={Styles.description}>
              {verticalsData[currentVertical].description}
            </p>
            {/* <Button  className={Styles.exploreButton} text='Explore more' /> */}
            <button className={Styles.exploreButton}>
              <Link
                href={`/our-verticals/${verticalsData[currentVertical].id - 1
                  }`}
              >
                Explore More
              </Link>
            </button>
          </div>


          <div className={` ${Styles.buttonGroup}`}>
            <button
              className={`${Styles.downArrowMobile} ${Styles.rotateArrowMobile1} ${currentVertical === 0 && Styles.notActiveArrowMobile
                }`}
              onClick={handlePrevious}
            >
              <Image
                src={
                  currentVertical === 0 ? RedArrowIcon : DownArrowIcon.src
                }
                className={Styles.arrow}

                alt="upArrowIcon"
                // layout="fixed"
                width={35}
                height={35}
              />
            </button>
            <button
              className={`${Styles.rotateArrowMobile2} ${Styles.downArrowMobile} ${currentVertical === verticalsData.length - 1 &&
                Styles.notActiveArrowMobile
                }`}
              onClick={handleNext}
            >
              <Image
                src={
                  currentVertical === verticalsData.length - 1
                    ? RedArrowIcon
                    : DownArrowIcon.src
                }
                className={Styles.arrow}
                alt="downArrowIcon"
                // layout="fixed"
                width={35}
                height={35}
              />
            </button>
            <div className={Styles.remainingCountMobile}>
              <span style={{ fontWeight: 300 }}>
                {verticalsData.length - 1 - currentVertical}
              </span>
              {verticalsData.length - 1 - currentVertical > 0 && "more"}
            </div>
          </div>

          {/* MOBILE DEVICE CONTENT */}


        </div>
        <div className={Styles.footer}>
          <div className={Styles.verticalTags}>
            {verticalsData.map((vertical, index) => (
              <span
                key={vertical.id}
                className={`${Styles.tag} ${currentVertical === vertical.id - 1 ? Styles.activeTag : ""
                  }`}
                onClick={() => {
                  setCurrentVertical(index);
                }}
              >
                {vertical.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
