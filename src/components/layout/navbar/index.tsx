"use client";

import React, { useState, useEffect, useRef } from "react";
import Styles from "./style.module.css";
import Image, { StaticImageData } from "next/image";
import NavLogo from "../../../../public/home/nav-logo.png";
import TopRightArrowIcon from "../../../../public/home/top-right-arrow.svg";
import RemoveIcon from "../../../../public/home/removeIcon.svg";
import AddIcon from "../../../../public/home/add-icon.svg";

import ZondhaImage from "../../../../public/home/nav-icons/products/zodha.svg";
import FaceGenaiImage from "../../../../public/home/nav-icons/products/facegenie.svg";
import AnalyticsImage from "../../../../public/home/nav-icons/products/analytics-kart.svg";

import VerticalsImage from "../../../../public/home/verticals-image.svg";
import AboutUsImage from "../../../../public/home/about-us-image.svg";
import SolutionsImage from "../../../../public/home/solutions-image.svg";

import TextileIcon from "../../../../public/home/nav-icons/verticals/textile.svg";
import FMCGIcon from "../../../../public/home/nav-icons/verticals/fmcg.svg";
import RetailIcon from "../../../../public/home/nav-icons/verticals/carrier.svg";
import ChemicalsIcon from "../../../../public/home/nav-icons/verticals/chemical.svg";
import ConsumerIcon from "../../../../public/home/nav-icons/verticals/consumer.svg";
import PowerIcon from "../../../../public/home/nav-icons/verticals/power.svg";
import RealEstateIcon from "../../../../public/home/nav-icons/verticals/real-estate.svg";
import MiningIcon from "../../../../public/home/nav-icons/verticals/mining.svg";
import AutomotiveIcon from "../../../../public/home/nav-icons/verticals/automotives.svg";
import LogisticsIcon from "../../../../public/home/nav-icons/verticals/logistics.svg";
import HospitalsIcon from "../../../../public/home/nav-icons/verticals/hospitals.svg";
import HotelsIcon from "../../../../public/home/nav-icons/verticals/hotels.svg";
import EducationalIcon from "../../../../public/home/nav-icons/verticals/educational.svg";

import AutomationIcon from "../../../../public/home/nav-icons/solution-and-services/automation.svg";
import EhsIcon from "../../../../public/home/nav-icons/solution-and-services/ehs.svg";
import DigitalIcon from "../../../../public/home/nav-icons/solution-and-services/digital.svg";
import DataLakeIcon from "../../../../public/home/nav-icons/solution-and-services/data-lake.svg";
import CloudIcon from "../../../../public/home/nav-icons/solution-and-services/cloud.svg";
import AndroidIcon from "../../../../public/home/nav-icons/solution-and-services/android.svg";
import FlutterIcon from "../../../../public/home/nav-icons/solution-and-services/flutter.svg";
import AiIcon from "../../../../public/home/nav-icons/solution-and-services/ai.svg";
import MediaIcon from "../../../../public/home/nav-icons/solution-and-services/media.svg";

import TeamsIcon from "../../../../public/home/nav-icons/about-us/teams.svg";
import Blogs from "../../../../public/home/nav-icons/about-us/blogs.svg";
import VideosIcon from "../../../../public/home/nav-icons/about-us/videos.svg";
import InternshipIcon from "../../../../public/home/nav-icons/about-us/internships.svg";
import CareerIcon from "../../../../public/home/nav-icons/about-us/careers.svg";
import NewsIcon from "../../../../public/home/nav-icons/about-us/news.svg";
import TestimonialsIcon from "../../../../public/home/nav-icons/about-us/terstimonials.svg";
import PrivacyIcon from "../../../../public/home/nav-icons/about-us/privacy.svg";
import CaseIcon from "../../../../public/home/nav-icons/about-us/case.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface MenuItem {
  icon: StaticImageData;
  href: string;
  text?: string;
}

interface NavLink {
  text: string;
  href: string;
  menuItems: MenuItem[];
  title: string;
}

const products: MenuItem[] = [
  { icon: ZondhaImage, href: "zodha-gpt" },
  { icon: FaceGenaiImage, href: "face-genie" },
  { icon: AnalyticsImage, href: "analyticskart" },
];

const verticals: MenuItem[] = [
  { icon: TextileIcon, text: "Textile, Fabric & Yarn", href: "#verticals" },
  { icon: FMCGIcon, text: "FMCG", href: "#fmcg" },
  {
    icon: RetailIcon,
    text: "Retail, E- commerce & Market Places",
    href: "#retail",
  },
  {
    icon: ChemicalsIcon,
    text: "Chemicals & Pharmaceuticals",
    href: "#chemicals",
  },
  {
    icon: ConsumerIcon,
    text: "Consumer Goods, Electronics & Medical Devices",
    href: "#consumer",
  },
  {
    icon: PowerIcon,
    text: "Power, Energy, Oil & Gas",
    href: "#power",
  },
  {
    icon: RealEstateIcon,
    text: "Heavy Infrastructure, Real Estate, Construction & Tech Parks",
    href: "#real-estate",
  },
  {
    icon: MiningIcon,
    text: "Mining, Metal & Industrial Automation",
    href: "#mining",
  },
  {
    icon: AutomotiveIcon,
    text: "Automotive, Ancillaries & Heavy Engineering",
    href: "#automotive",
  },
  {
    icon: LogisticsIcon,
    text: "Logistics, Warehousing & Transportation",
    href: "#logistics",
  },
  { icon: HospitalsIcon, text: "Hospitals & Healthcare", href: "#hospitals" },
  { icon: HotelsIcon, text: "Hotels, QSR & Hospitality", href: "#hotels" },
  {
    icon: EducationalIcon,
    text: "Educational Institute",
    href: "#educational",
  },
];

const solutionAndServices: MenuItem[] = [
  {
    icon: AutomationIcon,
    text: "Permit to Work Automation",
    href: "#automation",
  },
  { icon: EhsIcon, text: "EHS Digitalization", href: "#ehs" },
  { icon: DigitalIcon, text: "Digital Logbook", href: "#digital" },
  { icon: DataLakeIcon, text: "Data Lake Management", href: "#data-lake" },
  { icon: CloudIcon, text: "Cloud Engineering Services", href: "#cloud" },
  {
    icon: AndroidIcon,
    text: "Android/iOS application development",
    href: "#android",
  },
  {
    icon: FlutterIcon,
    text: "Flutter based application development",
    href: "#flutter",
  },
  { icon: AiIcon, text: "AI Trainings", href: "#ai" },
  {
    icon: MediaIcon,
    text: "Media, Entertainment & Technology",
    href: "#media",
  },
];

const aboutUs: MenuItem[] = [
  { icon: TeamsIcon, text: "Meet our Team", href: "our-team" },
  { icon: Blogs, text: "Blogs", href: "#blogs" },
  { icon: VideosIcon, text: "Videos", href: "#videos" },
  { icon: InternshipIcon, text: "Internships", href: "#internships" },
  { icon: CareerIcon, text: "Careers", href: "#careers" },
  { icon: NewsIcon, text: "News & Press Coverage", href: "news" },
  { icon: TestimonialsIcon, text: "Testimonials", href: "#testimonials" },
  { icon: PrivacyIcon, text: "Privacy Policy", href: "#privacy" },
  { icon: CaseIcon, text: "Case Studies", href: "#case-study" },
];

const navLinks: NavLink[] = [
  {
    text: "Products & Platforms",
    href: "#aiProductsPlatforms",
    menuItems: products,
    title: "Our Products & Platforms",
  },
  {
    text: "Solutions & Services",
    href: "#solutionsAndServices",
    menuItems: solutionAndServices,
    title: "Our Solutions & Services",
  },
  {
    text: "Verticals",
    href: "#verticals",
    menuItems: verticals,
    title: "Our Verticals",
  }, // Add anchor for "Verticals"
  {
    text: "About Us",
    href: "/about-us",
    menuItems: aboutUs,
    title: "About Resolute AI Software Pvt Ltd",
  },
];

export function Navbar() {
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null); // Track the active menu item
  const [menuItem, setMenuItem] = useState<MenuItem[]>([]);
  const [heading, setHeading] = useState<string>("");
  const navRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenuIndex(null);
        setMenuItem([]);
        setHeading("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChangeMenuItems = (
    selectItem: MenuItem[],
    title: string,
    index: number
  ) => {
    if (activeMenuIndex === index) {
      // If the same menu item is clicked, close it
      setActiveMenuIndex(null);
      setMenuItem([]);
      setHeading("");
    } else {
      // Open the selected menu item
      setActiveMenuIndex(index);
      setMenuItem(selectItem);
      setHeading(title);
    }
  };

  return (
    <div className={Styles.container} ref={navRef}>
      {/* Header Section */}
      <header className={Styles.navbar}>
        <Link href="/home">
          <Image
            src={NavLogo.src}
            alt="logo"
            className={Styles.logo}
            layout="fixed"
            width={170}
            height={59}
          />
        </Link>
        <nav className={Styles.navLinks}>
          {navLinks.map((link, index) => (
            <div className={Styles.links} key={link.text}>
              <Link
                href={link.href}
                onMouseEnter={(e) => {
                  e.preventDefault();
                  handleChangeMenuItems(link.menuItems, link.title, index);
                }}
              >
                {link.text}
              </Link>
              <Image
                src={activeMenuIndex === index ? RemoveIcon.src : AddIcon.src}
                alt={activeMenuIndex === index ? "Remove" : "Add"}
                layout="fixed"
                width={24}
                height={24}
              />
            </div>
          ))}
        </nav>
        <button
          onClick={() => router.push("#partner-with-us")}
          className={Styles.partnerButton}
        >
          <span>Partner with us</span>
          <Image
            src={TopRightArrowIcon.src}
            className={Styles.arrow}
            alt="arrowIcon"
            layout="fixed"
            width={24}
            height={24}
          />
        </button>
      </header>

      {/* Main Content */}
      {menuItem.length > 0 && (
        <div
          className={Styles.content}
          style={{
            width:
              activeMenuIndex !== null && activeMenuIndex > 0
                ? "70rem"
                : "fit-content",
          }}
          id="verticals-section"
        >
          {/* Dynamic Heading */}
          <div className={Styles.verticals}>
            <h2>{heading}</h2>
            <div className={Styles.grid}>
              {menuItem.map((item, index) => (
                <Link href={item.href} className={Styles.item} key={index}>
                  <Image
                    src={item.icon.src}
                    alt={item.text || "icon"}
                    width={
                      activeMenuIndex !== null && activeMenuIndex > 0 ? 20 : 170
                    }
                    height={
                      activeMenuIndex !== null && activeMenuIndex > 0 ? 20 : 110
                    }
                  />
                  {item.text && <span>{item.text}</span>}
                </Link>
              ))}
            </div>
          </div>

          {/* Image Section */}
          {activeMenuIndex !== null && activeMenuIndex > 0 ? (
            <div className={Styles.imageContainer}>
              <Image
                src={
                  activeMenuIndex == 1
                    ? SolutionsImage.src
                    : activeMenuIndex == 2
                    ? VerticalsImage.src
                    : AboutUsImage.src
                }
                alt="Verticals"
                layout="fixed"
                width={500}
                height={300}
              />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
