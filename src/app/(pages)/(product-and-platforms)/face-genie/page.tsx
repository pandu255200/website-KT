"use client";

import Facegenie2 from "../../../../../public/products-kart/facegenie/facegenie2.svg";
import Facegenie3 from "../../../../../public/products-kart/facegenie/facegenie3.svg";
import Facegenie4 from "../../../../../public/products-kart/facegenie/facegenie4.svg";
import { ProductsKartSlider } from "@/components/layout/products-kart";

const facegenieData = [
  {
    id: 1,
    title: "Truck Dock Management",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Facegenie3,
  },
  {
    id: 2,
    title: "Defect Detection",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Facegenie2,
  },
  {
    id: 3,
    title: "Predicting Truck Delay",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Facegenie3,
  },
  {
    id: 4,
    title: "Textile ATC",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Facegenie3,
  },
  {
    id: 5,
    title: "Commodity Price Prediction",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Facegenie3,
  },
  {
    id: 6,
    title: "Label Detection",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Facegenie3,
  },
  {
    id: 7,
    title: "Monitor Stitching Activity",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Facegenie3,
  },
  {
    id: 8,
    title: "Manual Sewing Tracker",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Facegenie3,
  },
  {
    id: 9,
    title: "GSM Thickness",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Facegenie3,
  },
  {
    id: 10,
    title: "Visual Inspection",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Facegenie3,
  },
  {
    id: 11,
    title: "Plank & Pipe Counter",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Facegenie3,
  },
  {
    id: 12,
    title: "Bottle Counting",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Facegenie3,
  },
  {
    id: 13,
    title: "Barrel Verification During Oil Change",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Facegenie3,
  },
  {
    id: 14,
    title: "Reception Waiting Area",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Facegenie3,
  },
  {
    id: 15,
    title: "NICU Dashboard",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Facegenie3,
  },
  {
    id: 16,
    title: "Airport Vacant Seat Detection",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Facegenie3,
  },
  {
    id: 17,
    title: "Vehicle Tracking",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Facegenie3,
  },
  {
    id: 18,
    title: "Smart Parking Solution",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Facegenie4,
  },
];

export default function AnalyticsKartSlider() {
  return (
    <>
      <ProductsKartSlider data={facegenieData} pageTitle="FACEGENIE" />
    </>
  );
}
