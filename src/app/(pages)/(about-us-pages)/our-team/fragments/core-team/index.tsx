"use client";

import { useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";

import SanjayJhaImage from "../../../../../../../public/core-team/sanjay-jha.png";
import PawanImage from "../../../../../../../public/core-team/pawan.png";
import LinkedinIcon from "../../../../../../../public/core-team/linkedin-icon.svg";
import Globe from "../../../../../../../public/core-team/globe.svg";
// import TopLeftArrow from "../../../../public/core-team/top-left-arrow.svg"
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
    },
    {
      name: "Preeti Joshi",
      title: "Assistant VP & Head - AI Lab",
      image: PawanImage,
      linkedin: "https://www.linkedin.com/in/pawankumar",
    },
    {
      name: "Jeenal Rajgor",
      title: "Assistant VP & Head - AI Lab",
      image: PawanImage,
      linkedin: "https://www.linkedin.com/in/pawankumar",
    },
    {
      name: "Nancy Philip",
      title: "Assistant VP & Head - AI Lab",
      image: PawanImage,
      linkedin: "https://www.linkedin.com/in/pawankumar",
    },
    {
      name: "Parikshit Bangde",
      title: "Assistant VP & Head - AI Lab",
      image: PawanImage,
      linkedin: "https://www.linkedin.com/in/pawankumar",
    },
    {
      name: "Kunal Verma",
      title: "Assistant VP & Head - AI Lab",
      image: PawanImage,
      linkedin: "https://www.linkedin.com/in/pawankumar",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically scroll to the next slide every 5 seconds
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       handleNext();
  //     }, 5000);

  //     return () => clearInterval(interval);
  //   }, [currentIndex]);

  console.log(currentIndex);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
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
        {/* Globe image */}

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
          {/* <button className={styles.backButton}>
                    <span>Go Back</span>
                    <Image
                        src={TopLeftArrow}
                        alt="TopLeftArrow"
                        className={styles.TopLeftArrow}
                        width={16}
                        height={16}
                    />
                </button> */}
        </div>

        <div className={styles.carousel}>
          <button
            disabled={currentIndex === 0}
            className={`${styles.navButton} ${
              currentIndex === 0 ? "disabled" : ""
            }`}
            onClick={handlePrev}
          >
            &lt;
          </button>

          <div className={styles.cardsContainer}>
            <div
              className={styles.cards}
              style={{
                transform: `translateX(-${currentIndex * 20.5}rem)`,
              }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`${styles.card} ${
                    index === currentIndex ? styles.activeCard : ""
                  }`}
                >
                  <div className={styles.imageContainer}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      className={styles.image}
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

          <button
            disabled={currentIndex === teamMembers.length - 1}
            className={`${styles.navButton} ${
              currentIndex === teamMembers.length - 1 ? "disabled" : ""
            }`}
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>

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
