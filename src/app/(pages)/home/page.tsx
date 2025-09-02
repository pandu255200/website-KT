"use client";

import { useState, useEffect } from "react";
// import { useCounter } from "@/store/AnimationContext";
import { Navbar } from "../../../components/layout/navbar";
import HeroSection from "@/app/(pages)/home/fragements/hero-section";
import OurPartner from "./fragements/our-partners";
import ProductAndPlatforms from "./fragements/product-and-platforms";
import EngineeringSolutions from "./fragements/ai-engineering-solutions";
import { OurVerticals } from "./fragements/our-verticals";
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
  // const { counter, setCounter } = useCounter();

  // const pathname = usePathname();
  const [rightDivWidth, setRightDivWidth] = useState(0); // Controls width animation
  const [animation, setAnimation] = useState(0); // Controls fade-out effect
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const played = sessionStorage.getItem("heroAnimationPlayed");
      setHasPlayed(!!played); // Convert to boolean
    }
  }, []);

  useEffect(() => {
  if (!hasPlayed) {
    setRightDivWidth(800);
    const timeout = setTimeout(() => {
      setRightDivWidth(0);
    }, 7000); // ⬅ increased from 4000 to 6000

    return () => clearTimeout(timeout);
  }
}, [hasPlayed]);


useEffect(() => {
  if (!hasPlayed) {
    setAnimation(1);
    const timeout = setTimeout(() => {
      setAnimation(0);
    }, 5000); // ⬅ increased from 4000 to 6000

    return () => clearTimeout(timeout);
  }
}, [hasPlayed]);


  useEffect(() => {
    if (!hasPlayed && typeof window !== "undefined") {
      setTimeout(() => {
        sessionStorage.setItem("heroAnimationPlayed", "true");
      }, 101000);
    }
  }, [hasPlayed]);

  return (
    <>
      <div className="flex overflow-hidden">
        {/* ANIMATION SECTION */}
        {!hasPlayed && (
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

        {!hasPlayed && (
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
      {/* <OurPartner /> */}
      <ProductAndPlatforms />
      <EngineeringSolutions goback={false} solution={0} />
      <OurVerticals goback={false} vertical={0} />
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
