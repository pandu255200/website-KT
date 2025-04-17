"use client";

import Facegenie2 from "../../../../../public/products-kart/facegenie/facegenie2.svg";
import Facegenie3 from "../../../../../public/products-kart/facegenie/facegenie3.svg";
import Facegenie4 from "../../../../../public/products-kart/facegenie/facegenie4.svg";
import { ProductsKartSlider } from "@/components/layout/products-kart";

const facegenieData = [
  {
    id: 1,
    title: "Android & iOS App for Counting Items",
    description:
      "FaceGenie’s mobile-based item counting solution enables users to scan and count objects with precision using Android and iOS devices. This eliminates the need for manual counting, reducing human error and improving efficiency. The app is user-friendly and seamlessly integrates with existing inventory and tracking systems.",
    image: Facegenie3,
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
    image: Facegenie3,
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
    image: Facegenie3,
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
    image: Facegenie3,
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
    image: Facegenie3,
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
    image: Facegenie3,
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
    image: Facegenie3,
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
    image: Facegenie3,
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
    image: Facegenie3,
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
    image: Facegenie3,
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
    image: Facegenie3,
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
    image: Facegenie3,
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
    image: Facegenie3,
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
    image: Facegenie3,
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
    image: Facegenie3,
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
    image: Facegenie3,
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
    image: Facegenie4,
    benefits: [
      "Aerial surveillance for enhanced security and monitoring",
      "Automated anomaly detection in large operational areas",
      "Reduced manual effort in asset tracking and inspection",
    ],
    impacts: ["Improved situational awareness with real-time analytics"],
  },
];

export default function AnalyticsKartSlider() {
  return (
    <>
      <ProductsKartSlider data={facegenieData} pageTitle="FACEGENIE" />
    </>
  );
}
