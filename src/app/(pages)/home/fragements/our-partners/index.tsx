import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

import ZodhaImage from "../../../../../../public/home/nav-icons/products/zodha.svg";
import FaceGenaiImage from "../../../../../../public/home/nav-icons/products/facegenie.svg";
import AnalyticsImage from "../../../../../../public/home/nav-icons/products/analytics-kart.svg";

const slideImages = [
  { icon: ZodhaImage },
  { icon: FaceGenaiImage },
  { icon: AnalyticsImage },
  { icon: ZodhaImage },
  { icon: FaceGenaiImage },
];

const OurPartner = () => {
  return (
    <div className={styles.container}>
      <h1 className={"font-anta"}>OUR PARTNERS</h1>
      <div className={styles.scrollContainer}>
        <div className={styles.scrollContent}>
          {slideImages.map((image, index) => (
            <Image
              key={index}
              src={image.icon.src}
              alt={image.icon}
              width={250}
              height={110}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartner;
