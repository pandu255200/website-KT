"use client";

import Zodha1 from "../../../../../public/products-kart/zodhaGPT/zodha1.svg";
import Zodha2 from "../../../../../public/products-kart/zodhaGPT/zodha2.svg";
import Zodha3 from "../../../../../public/products-kart/zodhaGPT/zodha3.svg";
import { ProductsKartSlider } from "@/components/layout/products-kart";

const zondhaGptData = [
  {
    id: 1,
    title: "Data Visualization",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Zodha1,
  },
  {
    id: 2,
    title: "Records Management Application",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Zodha2,
  },
  {
    id: 3,
    title: "Sales & Marketing",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Zodha3,
  },
  {
    id: 4,
    title: "Product Recommendation",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Zodha3,
  },
  {
    id: 5,
    title: "Conversational Bots",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Zodha3,
  },
  {
    id: 6,
    title: "Social Media Content Creation",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Zodha3,
  },
  {
    id: 7,
    title: "Brand Awareness",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Zodha3,
  },
  {
    id: 8,
    title: "Personalized Marketing Content",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Zodha3,
  },
  {
    id: 9,
    title: "E-commerce Product Description",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Zodha3,
  },
  {
    id: 10,
    title: "Product Catalogues",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Zodha3,
  },
  {
    id: 11,
    title: "Customer Segmentation",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Zodha3,
  },
  {
    id: 12,
    title: "Influencer Marketing",
    description:
      "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
    image: Zodha3,
  },
];

export default function AnalyticsKartSlider() {
  return (
    <>
      <ProductsKartSlider data={zondhaGptData} pageTitle="ZODHA GPT" />
    </>
  );
}
