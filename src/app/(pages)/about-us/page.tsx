import React from "react";
import styles from "./page.module.css";

import { Navbar } from "../../../components/layout/navbar";
import { OurMission } from "./fragments/our-mission";
import { Achievements } from "./fragments/achievements";
import { Vision } from "./fragments/vision";
import { Mission } from "./fragments/mission";
import OurValues from "./fragments/our-values";
import CoreTeam from "../our-team/fragments/core-team";
import { PartnerWIthUs } from "@/components/layout/partner-with-us";

export default function AboutUs() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className={styles.container}>
        <OurMission />
        <Achievements />
        <Vision />
        <Mission />
        <OurValues />
        <CoreTeam />
        <PartnerWIthUs />
      </div>
    </div>
  );
}
