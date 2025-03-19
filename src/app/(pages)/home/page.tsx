"use client";

import { useState, useEffect } from "react";
import { useCounter } from "@/store/AnimationContext";
import { Navbar } from "../../../components/layout/navbar";
import HeroSection from "@/app/(pages)/home/fragements/hero-section";
import OurPartner from "./fragements/our-partners";
import ProductAndPlatforms from "./fragements/product-and-platforms";
import EngineeringSolutions from "./fragements/ai-engineering-solutions";
import OurVerticals from "./fragements/our-verticals";
import InternsTestimonials from "./fragements/interns-testimonials";
import { StartingAnimationSection } from "@/components/common/starting-animation-section";
import { PartnerWIthUs } from "@/components/layout/partner-with-us";
import { WordFlick } from "@/components/common/animation";
import OurMilestones from "./fragements/our-milestones";
import { Footer } from "@/components/layout/footer";
// import Blogs from "./fragements/blogs";
// import Videos from "./fragements/videos";
// import CaseStudy from "./fragements/case-study";
// import Career from "./fragements/career";
// import { usePathname } from "next/navigation";

export default function Home() {
  const { counter, setCounter } = useCounter();

  // const pathname = usePathname();
  const [rightDivWidth, setRightDivWidth] = useState(800); // Controls width animation
  const [animation, setAnimation] = useState(1); // Controls fade-out effect
  const showAnimation = counter <= 1 ? true : false;

  useEffect(() => {
    const newCounter = counter + 1;
    if (counter > 2) {
      setCounter(newCounter);
    }
  }, [setCounter, counter]);

  // useEffect(() => {
  //   // Check if animation has already played (stored in localStorage)
  //   const hasShownAnimation = localStorage.getItem("animationShown");

  //   if (!hasShownAnimation) {
  //     setShowAnimation(true); // Show animation on first load
  //     setAnimation(1);
  //     const timeout = setTimeout(() => {
  //       localStorage.setItem("animationShown", "true"); // Prevent replaying on reload
  //     }, 12000); // Hides after 6 seconds

  //     return () => clearTimeout(timeout);
  //   }
  // }, []);

  useEffect(() => {
    // if (showAnimation) {
    const timeout = setTimeout(() => {
      setRightDivWidth(0); // Animate width to 0
    }, 6000); // Hides after 6 seconds

    return () => clearTimeout(timeout);
    // }
    // }, [showAnimation]);
  }, []);

  useEffect(() => {
    // if (showAnimation) {
    const timeout = setTimeout(() => {
      setAnimation(0); // Fade-out effect
    }, 4000); // Hides after 4 seconds

    return () => clearTimeout(timeout);
    // }
    // }, [showAnimation]);
  }, []);

  return (
    <>
      <div className="flex overflow-hidden">
        {/* ANIMATION SECTION */}
        {showAnimation && (
          <section
            className="flex items-center"
            style={{
              background: "rgba(250, 38, 9, 1)",
              transition: "0.8s linear",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 10,
              width: "100%",
              height: "100vh",
              opacity: animation,
              visibility: animation > 0 ? "visible" : "hidden",
            }}
          >
            <WordFlick />
          </section>
        )}
        <div>
          <Navbar />
          <HeroSection />
        </div>

        {showAnimation && (
          <section
            style={{
              height: "100vh",
              width: `${rightDivWidth}px`,
              transition: "0.8s linear",
            }}
          >
            <StartingAnimationSection />
          </section>
        )}
      </div>
      <OurPartner />
      <ProductAndPlatforms />
      <EngineeringSolutions />
      <OurVerticals />
      <InternsTestimonials />
      <OurMilestones />
      {/* <Blogs />
      <Videos />
      <CaseStudy />
      <Career /> */}
      <PartnerWIthUs />

      <div>
        <Footer />
      </div>
    </>
  );
}
