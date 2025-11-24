"use client";

import { useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";

import SanjayJhaImage from "../../../../../../../public/core-team/sanjay-jha.png";
import Jeenal from "../../../../../../../public/core-team/jeenal.png";
import Nancy from "../../../../../../../public/core-team/nancy.png";
import Parikshit from "../../../../../../../public/core-team/parikshit.png";
import Preeti from "../../../../../../../public/core-team/preeti.png";
// import Rishika from "../../../../../../../public/core-team/rishikaa.png";
// import Rishika1 from "../../../../../../../public/core-team/rishika1.png";
// import Rishika2 from "../../../../../../../public/core-team/rishika2.jpg";
// import Rishika3 from "../../../../../../../public/core-team/rishika3.png";
// import Rishika4 from "../../../../../../../public/core-team/rishika4.png";
// import Rishika6 from "../../../../../../../public/core-team/rishika6.png";
import Rishika9 from "../../../../../../../public/core-team/rishika9.png";
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
      style: "0px"
    },
    {
      name: "Preeti Joshi",
      title: "Chief Business & Operating Officer (Vice President)",
      image: Preeti,
      linkedin: "https://www.linkedin.com/in/preeti-j-a4433219a/",
      style: "30px"
    },
    {
      name: "Jeenal Rajgor",
      title: "Vice President & Head- HR, Operations & Shared Services",
      image: Jeenal,
      linkedin: "https://www.linkedin.com/in/jeenal-rajgor/",
      style: "5px"
    },
    {
      name: "Rishika Agarwala",
      title: "Associate Director - Pre Sales & Marketing",
      image: Rishika9,
      linkedin: "https://www.linkedin.com/in/rishika-agarwala-204297190/",
      style: "65px"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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
            <div className={styles.cards}>
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`${styles.card} ${
                    index === currentIndex ? styles.activeCard : styles.inactiveCard
                  }`}
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