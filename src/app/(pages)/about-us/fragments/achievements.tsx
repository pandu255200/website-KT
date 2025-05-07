import React from "react";
import Image from "next/image";
import styles from "./achievements.module.css";
import RectangleImage from "../../../../../public/about-us/rectangle.svg";
import Achievement1 from "../../../../../public/about-us/achievement-1.png";
import Achievement2 from "../../../../../public/about-us/achievement-2.png";
import Achievement3 from "../../../../../public/about-us/achievement-3.png";
import Achievement4 from "../../../../../public/about-us/achievement-4.png";
import Achievement5 from "../../../../../public/about-us/achievement-5.png";
import Achievement6 from "../../../../../public/about-us/achievement-6.png";
import TopRightArrowIcon from "../../../../../public/home/top-right-arrow.svg";

export const Achievements = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1 className="font-anta">ALLIANCES & ACHIEVEMENTS</h1>
          <p>Details Section</p>
        </div>
        <div>
          <button>
            Get in touch{" "}
            <Image
              src={TopRightArrowIcon.src}
              alt="arrowIcon"
              // layout="fixed"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
      <div className={styles.collageContainer}>
        <div className={styles.grid}>
          <div className={styles.box + " " + styles.left}>
            <Image
              src={Achievement1}
              alt="Achievement 1"
              style={{ marginTop: "35px" }}
              height={320}
              width={370}
            />
          </div>
          <div className={styles.box}>
            <Image
              src={Achievement2}
              alt="Achievement 2"
              style={{ marginTop: "5px" }}
              height={190}
              width={350}
            />
          </div>
          <div className={styles.box}>
            <Image
              src={Achievement3}
              alt="Achievement 3"
              width={240}
              height={190}
              style={{ marginTop: "5px" }}
            />
          </div>
          <div className={styles.box}>
            <Image
              src={Achievement4}
              alt="Achievement 4"
              width={350}
              height={190}
              style={{ marginTop: "5px" }}
            />
          </div>
          <div className={styles.box}>
            <Image
              src={Achievement5}
              alt="Achievement 5"
              width={240}
              height={190}
              style={{ marginTop: "5px" }}
            />
          </div>
        </div>
      </div>
      {/* <Image src={RectangleImage} alt="rectangle" /> */}
    </div>
  );
};
