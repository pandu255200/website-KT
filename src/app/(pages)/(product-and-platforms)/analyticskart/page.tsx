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
    title: "Document Information Extraction",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: AnalyticsKart1,
  },
  {
    id: 2,
    title: "Asset Management",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: AnalyticsKart2,
  },
  {
    id: 3,
    title: "Gen AI Led Chatbot",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: AnalyticsKart3,
  },
  {
    id: 4,
    title: "Demand & Price Forecasting",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: AnalyticsKart4,
  },
  {
    id: 5,
    title: "Social Media Analytics",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: AnalyticsKart5,
  },
  {
    id: 6,
    title: "Market & Competition Analytics",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: AnalyticsKart6,
  },
  {
    id: 7,
    title: "Route Optimization",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: AnalyticsKart7,
  },
  {
    id: 8,
    title: "Attrition Analytics",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: AnalyticsKart8,
  },
  {
    id: 9,
    title: "Tracking & Traceability",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: AnalyticsKart9,
  },
];

export default function AnalyticsKartSlider() {
  return (
    <>
      <ProductsKartSlider data={analyticsData} pageTitle="ANALYTICSKART" />
      {/* <ProductsKartSlider data={facegenieData} pageTitle='FACEGENIE' />
    <ProductsKartSlider data={zondhaGptData} pageTitle='ZODHA GPT' /> */}
    </>
  );
}
