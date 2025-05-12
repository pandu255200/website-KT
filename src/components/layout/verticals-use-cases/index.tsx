"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { GoBackButton } from "@/components/common/go-back-button";
import { useRouter } from "next/navigation";
import Facegenie1 from "../../../../public/products-kart/facegenie/facegenie1.svg";
import Facegenie2 from "../../../../public/products-kart/facegenie/facegenie2.svg";
import Facegenie3 from "../../../../public/products-kart/facegenie/facegenie3.svg";
import Facegenie4 from "../../../../public/products-kart/facegenie/facegenie4.svg";
import Facegenie5 from "../../../../public/products-kart/facegenie/facegenie5.svg";
import Facegenie6 from "../../../../public/products-kart/facegenie/facegenie6.svg";
import Facegenie7 from "../../../../public/products-kart/facegenie/facegenie7.svg";
import Facegenie8 from "../../../../public/products-kart/facegenie/facegenie8.svg";
import Facegenie9 from "../../../../public/products-kart/facegenie/facegenie9.svg";
import Facegenie10 from "../../../../public/products-kart/facegenie/facegenie10.svg";
import Facegenie11 from "../../../../public/products-kart/facegenie/facegenie11.svg";
import Facegenie12 from "../../../../public/products-kart/facegenie/facegenie12.svg";
import Facegenie13 from "../../../../public/products-kart/facegenie/facegenie13.svg";
import Facegenie14 from "../../../../public/products-kart/facegenie/facegenie14.svg";
import Facegenie15 from "../../../../public/products-kart/facegenie/facegenie15.svg";
import Facegenie16 from "../../../../public/products-kart/facegenie/facegenie16.svg";
import Facegenie17 from "../../../../public/products-kart/facegenie/facegenie17.svg";
import Facegenie18 from "../../../../public/products-kart/facegenie/facegenie18.svg";
import Facegenie19 from "../../../../public/products-kart/facegenie/facegenie19.svg";
import AnalyticsKart1 from "../../../../public/products-kart/analyticsKart/analyticsKart1.svg";
import AnalyticsKart2 from "../../../../public/products-kart/analyticsKart/analyticsKart2.svg";
import AnalyticsKart3 from "../../../../public/products-kart/analyticsKart/analyticsKart3.svg";
import AnalyticsKart4 from "../../../../public/products-kart/analyticsKart/analyticsKart4.svg";
import AnalyticsKart5 from "../../../../public/products-kart/analyticsKart/analyticsKart5.svg";
import AnalyticsKart6 from "../../../../public/products-kart/analyticsKart/analyticsKart6.svg";
import AnalyticsKart7 from "../../../../public/products-kart/analyticsKart/analyticsKart7.svg";
import AnalyticsKart8 from "../../../../public/products-kart/analyticsKart/analyticsKart8.svg";
import AnalyticsKart9 from "../../../../public/products-kart/analyticsKart/analyticsKart9.svg";
import AnalyticsKart10 from "../../../../public/products-kart/analyticsKart/analyticsKart10.svg";
import SlideImg from "../../../../public/home/ai-engineering/slide-img1.svg";
import SlideImg3 from "../../../../public/home/ai-engineering/slide-img-3.svg";
import Solutions3 from "../../../../public/home/ai-engineering/solutions-3.svg";
import Solutions4 from "../../../../public/home/ai-engineering/solutions-4.svg";
import Solutions5 from "../../../../public/home/ai-engineering/solutions-5.svg";
import Solutions6 from "../../../../public/home/ai-engineering/solutions-6.svg";
import Solutions7 from "../../../../public/home/ai-engineering/solutions-7.svg";
import Solutions8 from "../../../../public/home/ai-engineering/solutions-8.svg";

interface SliderData {
  id: number;
  title: string;
  description: string;
  image: string;
  benefits?: string[];
  impacts?: string[];
}

interface OptionsData {
  value: string;
  title: string;
}

interface VerticalsUseCasesSliderProps {
  dataIds: number[];
  pageTitle: string;
  link: string;
}

const data: SliderData[] = [
  {
    id: 1,
    title: "Android & iOS App for Counting Items",
    description:
      "FaceGenie’s mobile-based item counting solution enables users to scan and count objects with precision using Android and iOS devices. This eliminates the need for manual counting, reducing human error and improving efficiency. The app is user-friendly and seamlessly integrates with existing inventory and tracking systems.",
    image: Facegenie1,
    benefits: [
      "Faster and more reliable item counting",
      "Reduced dependency on manual labor",
      "Easy mobile accessibility for real-time tracking",
    ],
    impacts: [
      "Improved operational accuracy and significant time savings in inventory management",
    ],
  },
  {
    id: 2,
    title: "Defect Detection & Counting on High-Speed Conveyors",
    description:
      "FaceGenie’s AI-powered system detects defects and counts products moving at high speeds on conveyor belts. This ensures quality control by identifying faulty items in real time, preventing defective products from reaching customers.",
    image: Facegenie2,
    benefits: [
      "Automated quality checks for defect-free products",
      "Reduced waste and rework costs",
      "Improved production efficiency with minimal manual intervention",
    ],
    impacts: [
      "Higher product quality, fewer recalls, and better customer satisfaction.Retail Store Analytics",
    ],
  },
  {
    id: 3,
    title: "Retail Store Analytics",
    description:
      "FaceGenie leverages advanced video analytics to monitor customer behavior, footfall patterns, staff interactions and many more in real time. This empowers retail businesses to make data-driven decisions that enhance store layout, improve customer engagement, and boost overall sales performance.",
    image: Facegenie3,
    benefits: [
      "Optimized store layout based on heatmaps and dwell time",
      "Improved customer service through staff allocation analytics",
      "Real-time insights into peak hours and footfall trends",
    ],
    impacts: [
      "Increased sales conversion and customer satisfaction through data-backed retail strategy",
    ],
  },
  {
    id: 4,
    title: "Time & Motion Analysis",
    description:
      "By analyzing worker movements and task durations, FaceGenie provides valuable insights into process efficiency. It helps businesses identify inefficiencies and optimize workflows for maximum productivity.",
    image: Facegenie4,
    benefits: [
      "Enhanced workforce management through data-driven insights",
      "Reduced idle time and improved operational efficiency",
      "Better resource allocation for optimized workflows",
    ],
    impacts: ["Increased productivity and optimized labor costs"],
  },
  {
    id: 5,
    title: "Volumetric Box Analysis",
    description:
      "FaceGenie accurately measures the dimensions of packages in real time, ensuring proper space utilization in warehouses, shipping, and logistics. This helps businesses optimize packaging strategies and reduce transportation costs.",
    image: Facegenie5,
    benefits: [
      "Precise package dimension measurement for efficient logistics",
      "Minimized shipping costs through optimized space utilization",
      "Reduced packaging errors and rework",
    ],
    impacts: ["Efficient space management and reduced shipping expenses"],
  },
  {
    id: 6,
    title: "Shelf Occupancy Analytics",
    description:
      "FaceGenie continuously monitors retail shelves to detect product availability and gaps. This helps retailers manage inventory effectively and prevent stockouts, ensuring products are always available for customers.",
    image: Facegenie6,
    benefits: [
      "Real-time shelf monitoring for optimized inventory control",
      "Automated restocking alerts for better supply chain efficiency",
      "Increased sales through enhanced product availability",
    ],
    impacts: [
      "Increased sales, improved inventory turnover, and enhanced customer experience",
    ],
  },
  {
    id: 7,
    title: "Label Print Verification",
    description:
      "Ensuring accurate labeling is crucial for compliance and branding. FaceGenie verifies printed labels to detect misprints, incorrect barcodes, and labeling errors before products reach customers.",
    image: Facegenie7,
    benefits: [
      "Reduced compliance risks and regulatory penalties",
      "Prevention of labeling errors that affect product integrity",
      "Assurance of accurate barcode and product information",
    ],
    impacts: ["Enhanced brand reputation and reduced compliance risks"],
  },
  {
    id: 8,
    title: "Entry and Exit Movement Detection",
    description:
      "FaceGenie tracks and records the movement of individuals and assets in various premises, improving security and operational monitoring. It provides real-time alerts for unauthorized access and helps businesses maintain a secure environment.",
    image: Facegenie8,
    benefits: [
      "Strengthened security with automated access monitoring",
      "Reduced unauthorized movement and asset loss",
      "Improved workforce and visitor tracking for compliance",
    ],
    impacts: ["Enhanced safety and regulatory compliance"],
  },
  {
    id: 9,
    title: "Work Efficiency & Productivity Tracking",
    description:
      "FaceGenie enables businesses to monitor workforce productivity by analyzing task completion times and efficiency levels. It helps in performance evaluation and optimizing workforce allocation.",
    image: Facegenie9,
    benefits: [
      "Real-time tracking of workforce efficiency",
      "Enhanced productivity through data-driven insights",
      "Better decision-making for resource optimization",
    ],
    impacts: ["Higher efficiency and better resource utilization"],
  },
  {
    id: 10,
    title: "Smart Parking Solution for Airports & Other Sectors",
    description:
      "FaceGenie’s AI-powered parking solution helps optimize space utilization in high-traffic areas like airports, malls, and corporate buildings. It detects available parking spots and provides real-time updates, reducing congestion.",
    image: Facegenie10,
    benefits: [
      "Efficient parking space detection for reduced congestion",
      "Faster parking availability updates for improved user experience",
      "Optimized space utilization in large parking area",
    ],
    impacts: [
      "Better user experience and improved efficiency in parking operations",
    ],
  },
  {
    id: 11,
    title: "Clean Room Analytics for Pharma Industry",
    description:
      "Maintaining hygiene in clean rooms is critical for pharmaceutical manufacturing. FaceGenie monitors personnel movements, contamination risks, and compliance with hygiene protocols, ensuring a controlled environment.",
    image: Facegenie11,
    benefits: [
      "Automated compliance monitoring for strict regulatory adherence",
      "Real-time alerts for contamination risks",
      "Enhanced hygiene control in sensitive production areas",
    ],
    impacts: [
      "Improved regulatory adherence and reduced chances of contamination-related losses",
    ],
  },
  {
    id: 12,
    title: "Barrel Verification During Oil Change",
    description:
      "FaceGenie verifies barrel authenticity and count during oil changes, ensuring proper inventory management and preventing fraud. This helps businesses maintain transparency and accountability in oil distribution and usage.",
    image: Facegenie12,
    benefits: [
      "Accurate tracking of barrels to prevent inventory discrepancies",
      "Improved compliance with safety and regulatory guidelines",
      "Reduced losses through automated verification",
    ],
    impacts: ["Reduced losses and improved operational integrity"],
  },
  {
    id: 13,
    title: "Face Recognition and Voice-Based Access Control",
    description:
      "FaceGenie provides a seamless and secure access control system using AI-powered facial recognition and voice authentication. It eliminates the need for traditional access methods like keycards or PINs, ensuring only authorized personnel can enter restricted areas. The system enhances security while offering a touchless and efficient user experience.",
    image: Facegenie13,
    benefits: [
      "Secure and frictionless entry with AI-driven authentication",
      "Eliminates the risk of stolen or duplicated access cards",
      "Enhanced compliance with access control policies",
    ],
    impacts: ["Improved operational efficiency with quick, touchless entry"],
  },
  {
    id: 14,
    title: "Geofencing and Perimeter Safety",
    description:
      "FaceGenie enables businesses to establish virtual boundaries (geofences) and monitor perimeter security in real-time. The system provides instant alerts if unauthorized movement is detected, ensuring safety in high-risk areas.",
    image: Facegenie14,
    benefits: [
      "Real-time perimeter security monitoring",
      "Instant alerts for unauthorized breaches or intrusions",
      "Improved compliance with safety regulations",
    ],
    impacts: ["Reduced security threats and unauthorized access incidents"],
  },
  {
    id: 15,
    title: "Fire and Violence Detection",
    description:
      "FaceGenie’s AI-driven system detects fire hazards and acts of violence in real-time, enabling immediate response and minimizing damage. The system integrates with security protocols to trigger alarms and alert emergency responders instantly.",
    image: Facegenie15,
    benefits: [
      "Early detection of fire and violent incidents for proactive response",
      "Automated alerts to emergency personnel for faster action",
      "Reduced property damage and safety risks",
    ],
    impacts: ["Increased safety with reduced casualties and property loss"],
  },
  {
    id: 16,
    title: "Face ID, Name, Age, and Gender Detection",
    description:
      "FaceGenie accurately identifies individuals and extracts key demographic details like age and gender for security and analytics purposes. This feature enhances identity verification and customer insights in various industries.",
    image: Facegenie16,
    benefits: [
      "Enhanced security with accurate identity verification",
      "Improved customer experience through personalized services",
      "Streamlined user authentication for secure transactions",
    ],
    impacts: ["Increased engagement through data-driven personalization"],
  },
  {
    id: 17,
    title: "Crowd Detection",
    description:
      "FaceGenie’s crowd detection technology analyzes the density and movement of people in real-time. It helps manage crowd control, prevent congestion, and ensure safety in public spaces and commercial establishments.",
    image: Facegenie17,
    benefits: [
      "Real-time monitoring of crowd density for better space management",
      "Enhanced safety by preventing overcrowding",
      "Improved resource allocation for managing high footfall areas",
    ],
    impacts: ["Optimized staffing and crowd control measures"],
  },
  {
    id: 18,
    title: "Person Fall or Trip Detection",
    description:
      "FaceGenie uses AI to detect falls or trips in real-time, enabling quick assistance and reducing injury risks. This is crucial for elderly care, hospitals, and high-risk workplaces.",
    image: Facegenie18,
    benefits: [
      "Instant fall detection and alerting for quick response",
      "Reduced risks for elderly and vulnerable individuals",
      "Enhanced workplace safety and compliance",
    ],
    impacts: ["Increased safety compliance in high-risk environments"],
  },
  {
    id: 19,
    title: "Drone Video Analytics",
    description:
      "FaceGenie integrates AI-powered analytics with drone footage to monitor large-scale operations, security, and compliance in real time. This enables automated surveillance, asset tracking, and incident detection from an aerial perspective.",
    image: Facegenie19,
    benefits: [
      "Aerial surveillance for enhanced security and monitoring",
      "Automated anomaly detection in large operational areas",
      "Reduced manual effort in asset tracking and inspection",
    ],
    impacts: ["Improved situational awareness with real-time analytics"],
  },
  {
    id: 20,
    title: "Warehouse Management System",
    description:
      "AnalyticsKart’s Warehouse Management System (WMS) provides end-to-end automation for inventory control, order fulfillment, and warehouse operations. It ensures real-time inventory visibility, optimizes storage space, and improves order accuracy through AI-driven analytics. The system also supports barcode and RFID tracking, minimizing human errors and boosting productivity.",
    image: AnalyticsKart1,
    benefits: [
      "Real-time inventory tracking for improved stock accuracy",
      "Optimized space utilization to reduce storage costs",
      "Faster and error-free order processing through automation",
      "Seamless integration with supply chain management systems",
    ],
    impacts: ["Reduced operational costs and increased warehouse efficiency"],
  },
  {
    id: 21,
    title: "Employee Tracking System (Using BLE-Lora)",
    description:
      "AnalyticsKart’s Employee Tracking System leverages BLE and LoRa technology to monitor workforce movement in real-time across large facilities. It enhances workplace safety, ensures compliance with work schedules, and provides insights into employee efficiency. The system is particularly useful in high-risk environments, allowing for quick incident response and access control.",
    image: AnalyticsKart2,
    benefits: [
      "Real-time monitoring for improved safety and security",
      "Enhanced workforce productivity through movement insights",
      "Automated attendance tracking and compliance management",
      "Customizable alerts for unauthorized access or inactivity",
    ],
    impacts: ["Increased workplace safety and workforce efficiency"],
  },
  {
    id: 22,
    title: "Control Tower – A Real-Time Centralized Dashboard",
    description:
      "AnalyticsKart’s Control Tower offers a single-window, real-time view of business operations, helping organizations gain actionable insights and improve supply chain visibility. It consolidates data from various sources, detects anomalies, and provides predictive analytics to enhance decision-making. The system is ideal for businesses looking to optimize logistics, production, and resource allocation.",
    image: AnalyticsKart3,
    benefits: [
      "Centralized data visualization for enhanced decision-making",
      "Real-time alerts for proactive issue resolution",
      "AI-powered analytics for predictive planning",
      "Seamless integration with ERP and supply chain systems",
    ],
    impacts: ["Enhanced operational agility and decision-making accuracy"],
  },
  {
    id: 23,
    title: "Predictive Maintenance",
    description:
      "AnalyticsKart’s Predictive Maintenance module employs AI-powered analytics to detect potential failures in machinery and equipment before they occur. It helps businesses transition from reactive to proactive maintenance, reducing unexpected downtimes and maintenance costs. The system leverages IoT sensors, machine learning models, and historical data to forecast component wear and schedule maintenance efficiently.",
    image: AnalyticsKart4,
    benefits: [
      "Early detection of equipment issues to prevent failures",
      "Reduced maintenance costs through predictive servicing",
      "Extended equipment lifespan and improved reliability",
      "Increased operational efficiency with AI-driven insights",
    ],
    impacts: ["Increased equipment uptime and cost savings"],
  },
  {
    id: 24,
    title: "Asset Management (Using RFID, BLE, etc.)",
    description:
      "AnalyticsKart’s Asset Management solution provides real-time tracking and monitoring of valuable assets using RFID, BLE, and IoT technology. It helps organizations prevent asset loss, optimize asset utilization, and improve operational efficiency. The system enables automated asset tagging, real-time location tracking, and predictive analytics for asset lifecycle management.",
    image: AnalyticsKart5,
    benefits: [
      "Automated asset tracking for improved visibility",
      "Enhanced security through real-time monitoring and alerts",
      "Optimized asset utilization for better ROI",
      "Reduced asset loss and unauthorized access",
    ],
    impacts: ["Reduced asset loss and improved resource efficiency"],
  },
  {
    id: 25,
    title: "Sentiment Analysis",
    description:
      "AnalyticsKart’s Sentiment Analysis module uses advanced AI algorithms to analyze customer feedback, social media mentions, and product reviews. It provides businesses with deep insights into customer satisfaction, brand perception, and emerging trends. This helps brands enhance customer experience, manage their reputation, and tailor marketing strategies effectively.",
    image: AnalyticsKart6,
    benefits: [
      "Real-time analysis of customer sentiments across multiple platforms",
      "Improved brand reputation management and crisis handling",
      "Personalized marketing strategies based on audience emotions",
      "Enhanced customer experience through actionable insights",
    ],
    impacts: ["Strengthened customer relationships and brand loyalty"],
  },
  {
    id: 26,
    title: "Primary and Secondary Sales – Prediction and Forecasting",
    description:
      "AnalyticsKart’s AI-powered sales forecasting module provides precise predictions for both primary and secondary sales. It enables businesses to optimize inventory levels, streamline distribution, and refine their pricing strategies. By leveraging historical data, external market trends, and demand patterns, this module minimizes stockouts and overstocking, ensuring efficient supply chain management.",
    image: AnalyticsKart7,
    benefits: [
      "AI-driven demand forecasting for improved inventory management",
      "Optimized supply chain planning and distribution efficiency",
      "Reduced wastage from overstocking and lost sales due to stockouts",
      "Data-driven pricing and promotion strategies",
    ],
    impacts: ["Increased sales efficiency and revenue optimization"],
  },
  {
    id: 27,
    title: "Document Information Intelligence",
    description:
      "AnalyticsKart’s Document Information Intelligence module automated document processing by extracting key data from invoices, purchase orders, and compliance forms. Using GenAI and OCR technology, it eliminates manual data entry, enhances accuracy, and speeds up decision-making. It is particularly beneficial for industries dealing with large volumes of documentation.",
    image: AnalyticsKart8,
    benefits: [
      "AI-powered automation for error-free document processing",
      "Faster decision-making through instant data extraction",
      "Compliance assurance with built-in regulatory checks",
      "Seamless integration with ERP and workflow systems",
    ],
    impacts: ["Faster processing times and improved data accuracy"],
  },
  {
    id: 28,
    title: "Commodity Price Prediction",
    description:
      "AnalyticsKart’s Commodity Price Prediction module leverages AI to forecast fluctuations in commodity prices based on historical trends, demand-supply metrics, and economic indicators. This enables businesses to make informed procurement, investment, and pricing decisions, minimizing risks associated with volatile markets.",
    image: AnalyticsKart9,
    benefits: [
      "AI-driven price predictions for better financial planning",
      "Reduced risks of market fluctuations and price shocks",
      "Optimized procurement decisions based on accurate forecasts",
      "Competitive advantage through strategic pricing",
    ],
    impacts: ["Improved profitability with strategic pricing and procurement"],
  },
  {
    id: 29,
    title: "Recommendation Engine",
    description:
      "AnalyticsKart’s Recommendation Engine personalised user experiences by suggesting relevant products, content, or services based on browsing behavior, purchase history, and preferences. This module enhances customer engagement, boosts conversions, and increases customer retention rates.",
    image: AnalyticsKart10,
    benefits: [
      "AI-driven personalized recommendations for improved engagement",
      "Increased sales and revenue through higher conversion rates",
      "Enhanced customer satisfaction with tailored content and offers",
      "Scalable solution for large datasets and dynamic product catalogs",
    ],
    impacts: ["Boosted customer satisfaction and sales growth"],
  },
  {
    id: 30,
    title: "Permit to Work Automation",
    description:
      "Our AI-led Permit to Work Automation streamlines the process of managing work permits, ensuring compliance and safety across industrial and operational environments. The system automates permit creation, tracking, and approvals while integrating with exist...",
    image: SlideImg,
    benefits: [
      "AI-driven automation of permit requests and approvals",
      "Real-time compliance monitoring and alerts",
      "Seamless integration with safety and operational systems",
    ],
    impacts: [
      "30% faster permit processing and approvals",
      "Enhanced safety compliance and reduced human error",
    ],
  },
  {
    id: 31,
    title: "EHS Digitalization",
    description:
      "Our EHS Digitalization solution leverages AI to automate safety inspections, incident reporting, and compliance tracking. The platform provides real-time insights into safety metrics, ensuring proactive risk mitigation and improving workplace safety standards.",
    image: SlideImg3,
    benefits: [
      "AI-powered incident detection and reporting",
      "Automated safety inspections and compliance checks",
      "Real-time alerts and corrective action recommendations",
    ],
    impacts: [
      "40% reduction in safety incidents",
      "Improved compliance and safety culture",
    ],
  },
  {
    id: 32,
    title: "Digital Logbook",
    description:
      "Our Digital Logbook replaces traditional paper-based logbooks with an AI-enabled digital platform. It captures operational data, maintenance records, and shift handovers in real time, ensuring accurate and secure data storage and retrieval.",
    image: Solutions3,
    benefits: [
      "AI-led data logging and analysis",
      "Real-time operational insights",
      "Secure and searchable data repository",
    ],
    impacts: [
      "35% faster data retrieval and record-keeping",
      "Improved operational transparency and accountability",
    ],
  },
  {
    id: 33,
    title: "Data Lake Management",
    description:
      "Our Data Lake Management solution organizes and manages large volumes of structured and unstructured data using AI and machine learning. It automates data ingestion, classification, and retrieval, providing actionable insights and enhancing data-driven decision-making.",
    image: Solutions4,
    benefits: [
      "AI-based data classification and indexing",
      "Automated data ingestion and cleansing",
      "Real-time data access and insights",
    ],
    impacts: [
      "50% improvement in data processing speed",
      "Enhanced data accuracy and availability",
    ],
  },
  {
    id: 34,
    title: "Cloud Engineering Services",
    description:
      "Our Cloud Engineering Services provide end-to-end cloud infrastructure management, including deployment, monitoring, and optimization. AI-driven automation ensures scalability, security, and high availability of cloud-based applications.",
    image: Solutions5,
    benefits: [
      "AI-led cloud resource allocation and scaling",
      "Real-time monitoring and anomaly detection",
      "Enhanced data security and compliance",
    ],
    impacts: [
      "40% reduction in cloud infrastructure costs",
      "Improved application performance and uptime",
    ],
  },
  {
    id: 35,
    title: "Android/iOS Application Development",
    description:
      "Our AI-enabled Android and iOS application development services deliver user-centric mobile apps with advanced features like real-time data processing, personalized recommendations, and seamless user experience.",
    image: Solutions6,
    benefits: [
      "AI-driven user behavior analysis and personalization",
      "High-performance, secure app architecture",
      "Cross-platform compatibility",
    ],
    impacts: [
      "30% faster app development cycle",
      "Increased user engagement and retention",
    ],
  },
  {
    id: 36,
    title: "Flutter based Application Development",
    description:
      "Our Flutter-based application development leverages AI to create high-performance, cross-platform apps from a single codebase. The platform ensures consistent UI/UX, rapid deployment, and real-time feature updates.",
    image: Solutions6,
    benefits: [
      "AI-powered user interface optimization",
      "Single codebase for Android and iOS",
      "Faster updates and reduced development time",
    ],
    impacts: ["Improved app performance and user satisfaction"],
  },
  {
    id: 37,
    title: "AI Trainings",
    description:
      "Our AI Training programs equip businesses and teams with the knowledge and skills needed to implement and scale AI-driven solutions. The training covers AI model development, deployment, and performance optimization across industries.",
    image: Solutions7,
    benefits: [
      "Customized AI training for business-specific use cases",
      "Hands-on workshops and real-world simulations",
      "Expert-led sessions with industry best practices",
    ],
    impacts: [
      "30% faster AI adoption and implementation",
      "Improved team capability and business performance",
    ],
  },
  {
    id: 38,
    title: "Tech Support & AMC",
    description:
      "Our Tech Support & AMC services ensure the smooth functioning and long-term performance of your deployed systems, platforms, and infrastructure. From proactive maintenance to rapid issue resolution, our expert team provides round-the-cl...",
    image: Solutions8,
  },
];

const optionsData: OptionsData[] = [
  { title: "Textile, Fabric & Yarn", value: "/our-verticals/0" },
  {
    title: "FMCG",
    value: "/our-verticals/1",
  },
  {
    title: "Retail, E-commerce & Market Places",
    value: "/our-verticals/2",
  },
  {
    title: "Chemicals & Pharmaceuticals",
    value: "/our-verticals/3",
  },
  {
    title: "Consumer, Electronics & Medical Devices",
    value: "/our-verticals/4",
  },
  {
    title: "Power, Energy, Oil & Gas",
    value: "/our-verticals/5",
  },
  {
    title: "Real Estate & Heavy Infrastructure",
    value: "/our-verticals/6",
  },
  {
    title: "Mining, Metals & Industrial Automation",
    value: "/our-verticals/7",
  },
  {
    title: "Automotives, Ancillaries & Heavy Machineries",
    value: "/our-verticals/8",
  },
  {
    title: "Logistics, Warehousing & Transportation",
    value: "/our-verticals/9",
  },
  {
    title: "Hospitals, Healthcare & Lifesciences",
    value: "/our-verticals/10",
  },
  {
    title: "Hotels, QSR & Hospitality",
    value: "/our-verticals/11",
  },
  {
    title: "BFSI",
    value: "/our-verticals/12",
  },
  {
    title: "Educational Institutes",
    value: "/our-verticals/13",
  },
  {
    title: "Telecom, Media & Entertainment",
    value: "/our-verticals/14",
  },
];

export function VerticalsUseCasesSlider({
  dataIds,
  pageTitle,
  link,
}: VerticalsUseCasesSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  let newData = data.filter((item) => dataIds.includes(item.id));

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % newData.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + newData.length) % newData.length);
  };

  const { title, description, image, benefits, impacts, id } =
    newData[currentSlide];

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const path = e.target.value;
    if (path) {
      router.push(path);
    }
  };

  return (
    <div className={styles.sliderContainer}>
      {/* Header */}
      <header className="globalHeaderStyle">
        <h1 className="title" style={{ fontSize: "3.4rem" }}>
          {pageTitle}
        </h1>
        {/* <button className={styles.goBackButton}>Go Back</button> */}
        <GoBackButton text={"Go Back"} type="prev" />
      </header>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.getInTouch}>
            <select
              className={styles.selectField}
              onChange={handleSelectChange}
              value={link}
            >
              {optionsData.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.title}
                </option>
              ))}
            </select>
            <GoBackButton
              text={"Get in Touch"}
              type={"next"}
              linkUrl="/home#partner-with-us"
            />
          </div>

          <div className={styles.leftContent}>
            <h2 className={`${styles.slideTitle} font-anta`}>{title}</h2>
            <p className={styles.slideDescription}>{description}</p>
            {benefits && (
              <h1 className={`${styles.benefits_impact_title} font-anta`}>
                Benefits
              </h1>
            )}
            {benefits?.map((benefit, index) => (
              <p className={styles.benefits_impact_description} key={index}>
                - {benefit}
              </p>
            ))}
            {impacts && (
              <h1 className={`${styles.benefits_impact_title} font-anta`}>
                Impact
              </h1>
            )}
            {impacts?.map((impact, index) => (
              <p className={styles.benefits_impact_description} key={index}>
                - {impact}
              </p>
            ))}
            <div className={styles.navigation}>
              <span className={styles.pagination}>
                {currentSlide + 1}/{newData.length}
              </span>

              <div className="flex items-center gap-4">
                <button
                  className={`${styles.navButton} ${
                    currentSlide === 0 && styles.notActiveNavButton
                  }`}
                  onClick={handlePrev}
                  disabled={currentSlide === 0}
                >
                  &#x3c;
                </button>
                <button
                  className={`${styles.navButton} ${
                    currentSlide === newData.length - 1 &&
                    styles.notActiveNavButton
                  }`}
                  onClick={handleNext}
                  disabled={currentSlide === newData.length - 1}
                >
                  &#x3e;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <Image
            src={image}
            alt={title}
            className={styles.image}
            width={550}
            height={380}
          />
        </div>
      </div>

      {/* Footer Tags */}
      <div className={styles.footer}>
        {newData.map((slide, index) => (
          <span
            key={slide.id}
            className={`${styles.tag} ${
              slide.id == id ? styles.activeTag : ""
            }`}
            onClick={() => {
              setCurrentSlide(index);
            }}
          >
            {slide.title}
          </span>
        ))}

        {/* {tags.map((tag, index) => (
          <span
            key={index}
            className={`${styles.tag} ${index === currentSlide ? styles.activeTag : ''}`}
          >
            {tag}
          </span>
        ))} */}
      </div>
    </div>
  );
}
