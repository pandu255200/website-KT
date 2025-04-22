"use client";

import AnalyticsKart1 from "../../../../../public/products-kart/analyticsKart/analyticsKart1.svg";
import AnalyticsKart2 from "../../../../../public/products-kart/analyticsKart/analyticsKart2.svg";
import AnalyticsKart3 from "../../../../../public/products-kart/analyticsKart/analyticsKart3.svg";
import AnalyticsKart4 from "../../../../../public/products-kart/analyticsKart/analyticsKart4.svg";
import AnalyticsKart5 from "../../../../../public/products-kart/analyticsKart/analyticsKart5.svg";
import AnalyticsKart6 from "../../../../../public/products-kart/analyticsKart/analyticsKart6.svg";
import AnalyticsKart7 from "../../../../../public/products-kart/analyticsKart/analyticsKart7.svg";
import AnalyticsKart8 from "../../../../../public/products-kart/analyticsKart/analyticsKart8.svg";
import AnalyticsKart9 from "../../../../../public/products-kart/analyticsKart/analyticsKart9.svg";
import { ProductsKartSlider } from "@/components/layout/products-kart";

// Slider data array
const analyticsData = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
    title: "Recommendation Engine",
    description:
      "AnalyticsKart’s Recommendation Engine personalised user experiences by suggesting relevant products, content, or services based on browsing behavior, purchase history, and preferences. This module enhances customer engagement, boosts conversions, and increases customer retention rates.",
    image: AnalyticsKart9,
    benefits: [
      "AI-driven personalized recommendations for improved engagement",
      "Increased sales and revenue through higher conversion rates",
      "Enhanced customer satisfaction with tailored content and offers",
      "Scalable solution for large datasets and dynamic product catalogs",
    ],
    impacts: ["Boosted customer satisfaction and sales growth"],
  },
];

export default function AnalyticsKartSlider() {
  return (
    <>
      <ProductsKartSlider
        data={analyticsData}
        pageTitle="ANALYTICSKART"
        link="/analyticskart"
      />
      {/* <ProductsKartSlider data={facegenieData} pageTitle='FACEGENIE' />
    <ProductsKartSlider data={zondhaGptData} pageTitle='ZODHA GPT' /> */}
    </>
  );
}
