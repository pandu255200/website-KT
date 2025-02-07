// components/DesignComponent.js
import Image from 'next/image';
import styles from './style.module.css';

import ZondhaImage from "../../../../public/home/nav-icons/products/zodha.svg"
import FaceGenaiImage from "../../../../public/home/nav-icons/products/facegenie.svg"
import AnalyticsImage from "../../../../public/home/nav-icons/products/analytics-kart.svg"


export const StartingAnimationSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h1 className={styles.title}>
          Easily Integrateable, Swifty Deployable & Highly Customisable.
        </h1>

        <Image
          src={ZondhaImage.src}
          className={styles.ZodhaLogo}
          alt={"ZondhaImage"}
          width={180}

          height={50}
          layout="fixed"
        />
      </div>
      <div className={styles.rightSection}>
        <div className={styles.topRightBox}>
          <p className={styles.infoText}>Safe, Secure, Hygienic, Automated & Touchless</p>
          <Image
            src={FaceGenaiImage.src}
            className={styles.logo}
            alt={"ZondhaImage"}
            width={130}

            height={50}
            layout="fixed"
          />
        </div>
        <div className={styles.bottomRightBox}>
          <p className={styles.repeatedText}>Easily Integrateable, Swifty Deployable & Highly Customisable.</p>
          <Image
            src={AnalyticsImage.src}
            className={styles.logo}
            alt={"ZondhaImage"}
            width={130}

            height={50}
            layout="fixed"
          />
        </div>
      </div>
    </div>
  );
};

