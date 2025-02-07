import React from "react";
import Image from "next/image";
import styles from "./achievements.module.css";
import RectangleImage from "../../../../../public/about-us/rectangle.svg";
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
              layout="fixed"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
      <div className={styles.illustration}>
        <Image src={RectangleImage} alt="rectangle" />
      </div>
    </div>
  );
};
