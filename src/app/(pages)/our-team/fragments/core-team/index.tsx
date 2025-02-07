"use client";

import { useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";

import SanjayJhaImage from "../../../../../../public/core-team/sanjay-jha.png";
import PawanImage from "../../../../../../public/core-team/pawan.png";
import LinkedinIcon from "../../../../../../public/core-team/linkedin-icon.svg";
import Globe from "../../../../../../public/core-team/globe.svg";
// import TopLeftArrow from "../../../../public/core-team/top-left-arrow.svg"
import { GoBackButton } from "@/components/common/go-back-button";

const CoreTeam = () => {
  const teamMembers = [
    {
      name: "Sanjay Jha",
      title: "Founder & CEO",
      image: SanjayJhaImage,
      linkedin: "https://www.linkedin.com/in/sanjayjha",
    },
    {
      name: "Pawan Kumar",
      title: "Assistant VP & Head - AI Lab",
      image: PawanImage,
      linkedin: "https://www.linkedin.com/in/pawankumar",
    },
    {
      name: "Pawan Kumar",
      title: "Assistant VP & Head - AI Lab",
      image: PawanImage,
      linkedin: "https://www.linkedin.com/in/pawankumar",
    },
    {
      name: "Pawan Kumar",
      title: "Assistant VP & Head - AI Lab",
      image: PawanImage,
      linkedin: "https://www.linkedin.com/in/pawankumar",
    },
    {
      name: "Pawan Kumar",
      title: "Assistant VP & Head - AI Lab",
      image: PawanImage,
      linkedin: "https://www.linkedin.com/in/pawankumar",
    },
    {
      name: "Pawan Kumar",
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
        <GoBackButton text={"Go Back"} type="prev" />
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
        <p>
          We&apos;re on a long-term mission. Our leadership team works across
          every part of the company and beyond to help chart the right course.
        </p>
      </div>
    </section>
  );
};

export default CoreTeam;
