import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

// import ZodhaImage from "../../../../../../public/home/nav-icons/products/zodha.svg";
// import FaceGenaiImage from "../../../../../../public/home/nav-icons/products/faceGenai.svg";
// import AnalyticsImage from "../../../../../../public/home/nav-icons/products/analytics-kart.svg";
import Biocon from "../../../../../../public/home/nav-icons/products/biocon.png";
import MilkyMist from "../../../../../../public/home/nav-icons/products/milkymist.png";
import NVIDIA from "../../../../../../public/home/nav-icons/products/nvidia.png";
import PESITM from "../../../../../../public/home/nav-icons/products/pesitm.jpg";
import Welspun from "../../../../../../public/home/nav-icons/products/welspun.png";

const slideImages = [
  { icon: Welspun, width: 300, height: 120 },
  { icon: MilkyMist, width: 300, height: 100 },
  { icon: NVIDIA, width: 330, height: 80 },
  { icon: Biocon, width: 300, height: 90 },
  { icon: PESITM, width: 270, height: 90 },
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
              src={image.icon}
              className={styles.scrollImages}
              alt="Partners Images"
              width={image.width}
              height={image.height}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartner;
