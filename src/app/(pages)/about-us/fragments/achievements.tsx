import React from "react";
import Image from "next/image";
import styles from "./achievements.module.css";

export const Achievements = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1 className="font-anta">ALLIANCES & ACHIEVEMENTS</h1>
        </div>

        <div>
          <button>
            Get in touch{" "}
            <Image
              src="/home/top-right-arrow.svg"
              alt="arrowIcon"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      <div className={styles.collageContainer}>
        <div className={styles.grid}>
          <div className={`${styles.box} ${styles.left}`}>
            <Image
              src="/about-us/achievement-1.png"
              alt="Achievement 1"
              width={320}
              height={360}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className={styles.box}>
            <Image
              src="/about-us/achievement-2.png"
              alt="Achievement 2"
              width={320}
              height={190}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className={styles.box}>
            <Image
              src="/about-us/achievement-3.png"
              alt="Achievement 3"
              width={250}
              height={190}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className={styles.box}>
            <Image
              src="/about-us/achievement-4.png"
              alt="Achievement 4"
              width={320}
              height={240}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className={styles.box} style={{ overflow: "hidden" }}>
            <Image
              src="/about-us/achievement-5.png"
              alt="Achievement 5"
              width={240}
              height={190}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
