"use client";

import { useState, useEffect } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { GoBackButton } from "@/components/common/go-back-button";

interface CoreTeamProps {
  goback: boolean;
}

export const CoreTeam: React.FC<CoreTeamProps> = ({ goback }) => {
  const teamMembers = [
    {
      name: "Sanjay Jha",
      title: "Founder & CEO",
      image: "/core-team/sanjay-jha.png",
      linkedin: "https://www.linkedin.com/in/sanjayjha",
      style: "0px",
    },
    {
      name: "Preeti Joshi",
      title: "Chief Business & Operating Officer (Vice President)",
      image: "/core-team/preeti.png",
      linkedin: "https://www.linkedin.com/in/preeti-j-a4433219a/",
      style: "50px",
    },
    {
      name: "Jeenal Rajgor",
      title: "Vice President & Head- HR, Operations & Shared Services",
      image: "/core-team/jeenal.png",
      linkedin: "https://www.linkedin.com/in/jeenal-rajgor/",
      style: "20px",
    },
    {
      name: "Rishika Agarwala",
      title: "Associate Director - Pre Sales & Marketing",
      image: "/core-team/rishika9.png",
      linkedin: "https://www.linkedin.com/in/rishika-agarwala-204297190/",
      style: "65px",
    },
    {
      name: "Sahil Patial",
      title: "Technical Lead – AI Solutions & Services",
      image: "/core-team/sahil1.png",
      linkedin: "https://www.linkedin.com/in/sahil-patial-a6ab69240/",
      style: "30px",
    },
    {
      name: "Harshita Kothari",
      title: "Senior Manager- Accounts & Operations",
      image: "/core-team/harshita1.png",
      linkedin: "https://www.linkedin.com/in/harshita-kothari1997/",
      style: "15px",
    },
    {
      name: "Abhijit Sutar",
      title: "Technical Lead – AI Solutions & Services",
      image: "/core-team/abhijit1.png",
      linkedin: "https://www.linkedin.com/in/abhijit-sutar/",
      style: "20px",
    },
    {
      name: "Abhishek Tripathy",
      title: "Associate Machine Learning Engineer",
      image: "/core-team/abhiji1.png",
      linkedin: "https://www.linkedin.com/in/abhishek-tripathy-aimlcv/",
      style: "40px",
    },
    {
      name: "Sakchi Agrawal",
      title: "Associate Director - Accounts & HR Operations",
      image: "/core-team/sakchi1.png",
      linkedin: "https://www.linkedin.com/in/sakchiagrawal/",
      style: "10px",
    },
    {
      name: "Anusha BaiKourampet",
      title: "Senior Business Analyst",
      image: "/core-team/anusha.png",
      linkedin: "https://www.linkedin.com/in/anusha-bai-kourampet-39815ba9/",
      style: "30px",
    },
    {
      name: "Nishi Maheshwari",
      title: "Senior Business Analyst",
      image: "/core-team/nishi.png",
      linkedin: "https://www.linkedin.com/in/nishi-maheshwari-99b013128/",
      style: "10px",
    },
    {
      name: "Aghil Menon U",
      title: "Project Manager - AI Products, Platforms & Solutions",
      image: "/core-team/aghil1.png",
      linkedin: "https://www.linkedin.com/in/aghilmenonudayakumaran/",
      style: "65px",
    },
    {
      name: "Prasanna Varpe",
      title: "Senior AI Solution Engineer",
      image: "/core-team/prasanna1.png",
      linkedin: "https://www.linkedin.com/in/prasanna-varpe-628693215/",
      style: "65px",
    },
  ];

  const [currentSet, setCurrentSet] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardsToShow = 4;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const totalSets = Math.ceil(teamMembers.length / cardsToShow);

  const handleNext = () => setCurrentSet((prev) => (prev + 1) % totalSets);
  const handlePrev = () => setCurrentSet((prev) => (prev - 1 + totalSets) % totalSets);

  const visibleCards = isMobile
    ? teamMembers
    : teamMembers.slice(currentSet * cardsToShow, currentSet * cardsToShow + cardsToShow);

  return (
    <div className={styles.container}>
      <section className={styles.coreTeamSection}>
        <Image
          src="/core-team/globe.svg"
          alt="Globe"
          className={styles.globe}
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
                across the company and beyond to help chart the right course of action for our clients.
              </p>
            </div>
          )}
        </div>

        <div className={styles.carousel}>
          {!isMobile && <button className={styles.navButton} onClick={handlePrev}>&lt;</button>}

          <div className={styles.cardsContainer}>
            <div className={styles.cards}>
              {visibleCards.map((member, index) => (
                <div key={`${member.name}-${index}`} className={styles.card}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={styles.image}
                      style={{ marginTop: member.style }}
                    />
                  </div>

                  <div className={styles.info}>
                    <div className={styles.infoContent}>
                      <h2>{member.name}</h2>
                      <div className="flex items-center gap-2">
                        <p>{member.title}</p>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Image src="/core-team/linkedin-icon.svg" alt="LinkedIn" width={20} height={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {!isMobile && <button className={styles.navButton} onClick={handleNext}>&gt;</button>}
        </div>

        {goback && (
          <div className={styles.description}>
            <p>
              We are a team of skilled and passionate professionals who work
              across the company and beyond to help chart the right course of action for our clients.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};
