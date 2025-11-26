"use client";

import { useState, useEffect } from "react";
import styles from "./style.module.css";
import Image from "next/image";

import SanjayJhaImage from "../../../../../../../public/core-team/sanjay-jha.png";
import Jeenal from "../../../../../../../public/core-team/jeenal.png";
import Nancy from "../../../../../../../public/core-team/nancy.png";
import Parikshit from "../../../../../../../public/core-team/parikshit.png";
import Preeti from "../../../../../../../public/core-team/preeti.png";
import Rishika9 from "../../../../../../../public/core-team/rishika9.png";
import abhijit from "../../../../../../../public/core-team/abhijit1.png";
import abhishek from "../../../../../../../public/core-team/abhiji1.png";
import aghil from "../../../../../../../public/core-team/aghil1.png";
import harshita from "../../../../../../../public/core-team/harshita1.png";
import nishi1 from "../../../../../../../public/core-team/nishii1.png";
import prasanna from "../../../../../../../public/core-team/prasanna1.png";
import sahil from "../../../../../../../public/core-team/sahil1.png";
import sakchi from "../../../../../../../public/core-team/sakchi1.png";
import anusha from "../../../../../../../public/core-team/anusha.png";
import LinkedinIcon from "../../../../../../../public/core-team/linkedin-icon.svg";
import Globe from "../../../../../../../public/core-team/globe.svg";
import { GoBackButton } from "@/components/common/go-back-button";

interface CoreTeamProps {
  goback: boolean;
}

export const CoreTeam: React.FC<CoreTeamProps> = ({ goback }) => {
  const teamMembers = [
    {
      name: "Sanjay Jha",
      title: "Founder & CEO",
      image: SanjayJhaImage,
      linkedin: "https://www.linkedin.com/in/sanjayjha",
      style: "0px",
    },
    {
      name: "Preeti Joshi",
      title: "Chief Business & Operating Officer (Vice President)",
      image: Preeti,
      linkedin: "https://www.linkedin.com/in/preeti-j-a4433219a/",
      style: "50px",
    },
    {
      name: "Jeenal Rajgor",
      title: "Vice President & Head- HR, Operations & Shared Services",
      image: Jeenal,
      linkedin: "https://www.linkedin.com/in/jeenal-rajgor/",
      style: "20px",
    },
    {
      name: "Rishika Agarwala",
      title: "Associate Director - Pre Sales & Marketing",
      image: Rishika9,
      linkedin: "https://www.linkedin.com/in/rishika-agarwala-204297190/",
      style: "65px",
    },
    {
      name: "Sahil Patial",
      title: "Technical Lead – AI Solutions & Services",
      image: sahil,
      linkedin: "#",
      style: "30px",
    },
    {
      name: "Harshita Kothari",
      title: "Senior Manager- Accounts & Operations",
      image: harshita,
      linkedin: "#",
      style: "15px",
    },
    {
      name: "Abhijit Sutar",
      title: "Technical Lead – AI Solutions & Services",
      image: abhijit,
      linkedin: "#",
      style: "20px",
    },
    {
      name: "Abhishek Tripathy",
      title: "Associate Machine Learning Engineer",
      image: abhishek,
      linkedin: "#",
      style: "40px",
    },
    {
      name: "Sakchi Agrawal",
      title: "Associate Director - Accounts & HR Operations",
      image: sakchi,
      linkedin: "#",
      style: "10px",
    },
    {
      name: "Anusha BaiKourampet",
      title: "Senior Business Analyst",
      image: anusha,
      linkedin: "#",
      style: "30px",
    },
    {
      name: "Nishi Maheshwari",
      title: "Senior Business Analyst",
      image: nishi1,
      linkedin: "#",
      style: "65px",
    },
    {
      name: "Aghil Menon U",
      title: "Project Manager - AI Products, Platforms & Solutions",
      image: aghil,
      linkedin: "#",
      style: "65px",
    },
    {
      name: "Prasanna Varpe",
      title: "Senior AI Solution Engineer",
      image: prasanna,
      linkedin: "#",
      style: "65px",
    },
  ];

  const [currentSet, setCurrentSet] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardsToShow = 4;

  // Calculate total sets
  const totalSets = Math.ceil(teamMembers.length / cardsToShow);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleNext = () => {
    setCurrentSet((prevSet) => (prevSet + 1) % totalSets);
  };

  const handlePrev = () => {
    setCurrentSet((prevSet) => (prevSet - 1 + totalSets) % totalSets);
  };

  const getVisibleCards = () => {
    // On mobile, return all cards
    if (isMobile) {
      return teamMembers;
    }

    // On desktop, return current set of 4 cards
    const startIndex = currentSet * cardsToShow;
    const visibleCards = [];
    
    for (let i = 0; i < cardsToShow; i++) {
      const index = startIndex + i;
      if (index < teamMembers.length) {
        visibleCards.push(teamMembers[index]);
      }
    }
    return visibleCards;
  };

  const visibleCards = getVisibleCards();

  const handleIndicatorClick = (setIndex: number) => {
    setCurrentSet(setIndex);
  };

  return (
    <div className={styles.container}>
      <section className={styles.coreTeamSection}>
        {/* Globe image */}
        <Image
          src={Globe}
          alt="Globe"
          className={styles.globe}
          layout="fixed"
          width={100}
          height={100}
        />

        <div className={styles.header}>
          <h1 className="font-anta">CORE TEAM</h1>
          {goback && <GoBackButton text={"Go Back"} type="prev" />}
          {!goback && (
            <div>
              <p>
                We are a team of skilled and passionate professionals who work
                across the company and beyond to help chart the right course of
                action for our clients.
              </p>
            </div>
          )}
        </div>

        <div className={styles.carousel}>
          {/* Hide navigation buttons on mobile */}
          {!isMobile && (
            <button className={styles.navButton} onClick={handlePrev}>
              &lt;
            </button>
          )}

          <div className={styles.cardsContainer}>
            <div className={styles.cards}>
              {visibleCards.map((member, index) => (
                <div
                  key={`${member.name}-${currentSet}-${index}`}
                  className={styles.card}
                >
                  <div className={styles.imageContainer}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      className={styles.image}
                      style={{ marginTop: `${member.style}` }}
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.infoContent}>
                      <h2>{member.name}</h2>
                      <div className="flex items-center gap-2">
                        <p>{member.title}</p>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={LinkedinIcon}
                            alt="LinkedIn"
                            width={20}
                            height={20}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hide navigation buttons on mobile */}
          {!isMobile && (
            <button className={styles.navButton} onClick={handleNext}>
              &gt;
            </button>
          )}
        </div>

        {/* Hide indicators on mobile */}
        {!isMobile && (
          <div className={styles.carouselIndicators}>
            {Array.from({ length: totalSets }).map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  currentSet === index ? styles.activeIndicator : ""
                }`}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </div>
        )}

        <div className={styles.description}>
          {goback && (
            <p>
              We are a team of skilled and passionate professionals who work
              across the company and beyond to help chart the right course of
              action for our clients.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};