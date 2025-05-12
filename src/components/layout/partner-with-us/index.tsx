import Image from "next/image";
import Styles from "./style.module.css";

import PartnerImage from "../../../../public/home/partner-with-us/partner.svg";
import WaveImage from "../../../../public/home/partner-with-us/wave.svg";
import GodRays from "../../../../public/home/partner-with-us/god_rays.svg";

export const PartnerWIthUs = () => {
  return (
    <div className={Styles.partnerSection} id="partner-with-us">
      {/* Background Video */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className={Styles.backgroundVideo}
        style={{ zIndex: 10 }}
      >
        <source src="/home/partner-with-us/bg-lights.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <Image
        src={GodRays}
        alt="SlideImg"
        className={Styles.bgImage}
        // layout="fixed"
        width={10}
        height={10}
      />

      {/* Content Section */}
      <div className={Styles.content}>
        {/* Left Panel */}
        <div className={Styles.leftPanel}>
          <div className={Styles.leftContent}>
            <h1>Contact Us</h1>
            <Image
              src={PartnerImage}
              alt="PartnerImage"
              width={300}
              height={300}
              className={Styles.illustration}
            />
          </div>
        </div>

        {/* Right Panel */}
        <div className={Styles.rightPanel}>
          <form className={Styles.form}>
            <div className={Styles.formGroup}>
              <input
                type="text"
                placeholder="First Name"
                className={Styles.input}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className={Styles.input}
                required
              />
            </div>
            <div className={Styles.formGroup}>
              <input
                type="text"
                placeholder="Country"
                className={Styles.input}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className={Styles.input}
                required
              />
            </div>
            <div className={Styles.formGroup}>
              <input
                type="email"
                placeholder="Email"
                className={Styles.input}
                required
              />
            </div>
            <div className={Styles.formGroup}>
              <input
                type="text"
                placeholder="Company"
                className={Styles.input}
                required
              />
            </div>
            <div className={Styles.formGroup}>
              <textarea
                placeholder="Message"
                className={Styles.textarea}
                required
              ></textarea>
            </div>
            <button type="submit" className={Styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* design components */}
      <div className={Styles.styleDiv1}></div>
      <div className={Styles.styleDiv2}></div>
      <div className={Styles.circle}></div>
      <Image
        src={WaveImage}
        alt="WaveImage"
        width={600}
        height={250}
        className={Styles.wave}
      />
    </div>
  );
};
