"use client";

import Zodha1 from "../../../../../public/products-kart/zodhaGPT/zodha1.svg";
import Zodha2 from "../../../../../public/products-kart/zodhaGPT/zodha2.svg";
import Zodha3 from "../../../../../public/products-kart/zodhaGPT/zodha3.svg";
import Zodha4 from "../../../../../public/products-kart/zodhaGPT/zodha4.svg";
import Zodha5 from "../../../../../public/products-kart/zodhaGPT/zodha5.svg";
import Zodha6 from "../../../../../public/products-kart/zodhaGPT/zodha6.svg";
import Zodha7 from "../../../../../public/products-kart/zodhaGPT/zodha7.svg";
import Zodha8 from "../../../../../public/products-kart/zodhaGPT/zodha8.svg";
import Zodha9 from "../../../../../public/products-kart/zodhaGPT/zodha9.svg";
import Zodha10 from "../../../../../public/products-kart/zodhaGPT/zodha10.svg";
import Zodha11 from "../../../../../public/products-kart/zodhaGPT/zodha11.svg";
import { ProductsKartSlider } from "@/components/layout/products-kart";

const zondhaGptData = [
  {
    id: 1,
    title: "Multi-lingual Agentic AI-led HR Conversational Platform",
    description:
      "ZodhaGPT’s AI-led HR conversational platform revolutionizes human resource management by automating routine tasks and providing instant support to employees in multiple languages. The platform acts as a virtual HR assistant, handling employee queries, managing onboarding processes, tracking leave requests, and offering career guidance. Its agentic AI capabilities allow it to understand complex HR policies and deliver accurate, real-time responses, improving overall employee satisfaction and reducing the workload on HR teams.",
    image: Zodha1,
    benefits: [
      "24/7 AI-led employee support in multiple languages",
      "Automated leave management, onboarding, and payroll assistance",
      "Personalized career growth and training recommendations",
    ],
    impacts: [
      "Up to 40% reduction in HR query resolution time",
      "Enhanced employee satisfaction and engagement",
    ],
  },
  {
    id: 2,
    title: "Multi-lingual Agentic AI-led PSCM Conversational Platform",
    description:
      "ZodhaGPT’s PSCM platform enhances procurement and supply chain operations by providing AI-led, multi-lingual support for vendor communication, inventory tracking, and order management. It automates supplier negotiations, monitors real-time market fluctuations, and provides predictive insights to avoid supply chain disruptions. The platform helps procurement teams make data-driven decisions faster while maintaining supplier relationships and reducing costs.",
    image: Zodha2,
    benefits: [
      "Multi-lingual support for supplier engagement",
      "Automated order tracking and inventory management",
      "Real-time market analysis for better decision-making",
    ],
    impacts: [
      "Up to 30% cost savings through optimized procurement",
      "25% faster supplier response time",
    ],
  },
  {
    id: 3,
    title: "Multi-lingual Agentic AI-led Legal Conversational Platform",
    description:
      "ZodhaGPT’s LegalTech platform transforms legal operations by automating contract reviews, legal research, and compliance tracking. The AI understands complex legal language and regulations, providing quick insights and recommendations. It can analyze large volumes of legal documents, identify risks, and suggest actions, helping legal teams improve accuracy and speed in contract negotiation and case management.",
    image: Zodha3,
    benefits: [
      "Multi-lingual support for legal documentation and communication",
      "AI-assisted contract review and compliance tracking",
      "Instant legal research and case law references",
    ],
    impacts: [
      "30% faster contract review and approval",
      "Enhanced compliance and reduced legal risks",
    ],
  },
  {
    id: 4,
    title: "Agentic AI & LLM-based Quality Process Manual Automation",
    description:
      "ZodhaGPT automates quality management processes by analyzing production data and identifying patterns that indicate defects or process failures. The platform generates automated reports, suggests corrective actions, and ensures compliance with industry standards. It continuously monitors production lines, flags issues in real time, and automates root cause analysis to minimize downtime and improve product quality.",
    image: Zodha4,
    benefits: [
      "Automated quality audits and defect tracking",
      "AI-driven root cause analysis and corrective action recommendations",
      "Real-time monitoring of production standards",
    ],
    impacts: [
      "35% improvement in quality compliance",
      "40% faster issue resolution",
    ],
  },
  {
    id: 5,
    title: "Agentic AI-led Shared Services Conversational Platform",
    description:
      "ZodhaGPT’s shared services platform centralizes and automates enterprise-wide support functions, including IT, finance, and HR. It acts as a unified AI-powered helpdesk, handling employee queries, processing support tickets, and providing real-time resolutions. The platform’s agentic AI capabilities enable it to understand context, prioritize urgent requests, and improve overall response efficiency across departments.",
    image: Zodha5,
    benefits: [
      "Multi-lingual support for shared services across departments",
      "AI-driven ticketing, query handling, and resolution",
      "Personalized employee support for IT, finance, and HR",
    ],
    impacts: [
      "50% reduction in support ticket resolution time",
      "Enhanced employee satisfaction and faster response rates",
    ],
  },
  {
    id: 6,
    title: "Multi-domain/Agentic AI Conversational Platform",
    description:
      "ZodhaGPT’s multi-domain conversational platform offers intelligent, real-time support across various industries and functions. It leverages natural language understanding (NLU) and machine learning to automate complex queries, handle customer interactions, and provide actionable insights. The platform can be customized for industry-specific requirements and integrated with existing business systems to create a seamless conversational experience.",
    image: Zodha6,
    benefits: [
      "Domain-specific AI-driven automation",
      "Multi-lingual conversational support",
      "Seamless integration with existing business systems",
    ],
    impacts: [
      "60% increase in customer query resolution speed",
      "Enhanced user experience and reduced operational costs",
    ],
  },
  {
    id: 7,
    title: "Agentic AI/LLM-Led Data Visualization Platform",
    description:
      "ZodhaGPT’s data analytics and visualization platform converts complex datasets into clear, actionable insights. The platform uses AI to identify trends, generate predictive models, and create dynamic dashboards for real-time decision-making. Its agentic AI capabilities allow it to suggest strategies based on historical data and ongoing market conditions, helping businesses optimize performance.",
    image: Zodha7,
    benefits: [
      "Real-time data analysis and trend prediction",
      "Interactive dashboards with AI-generated insights",
      "Predictive modeling for better decision-making",
    ],
    impacts: [
      "40% improvement in data interpretation accuracy",
      "Faster decision-making and strategy planning",
    ],
  },
  {
    id: 8,
    title: "Agentic AI/LLM-Led Textile 3D Product Portfolio Management",
    description:
      "ZodhaGPT’s textile platform enables 3D product portfolio management, streamlining product design, production tracking, and inventory control. The platform generates 3D models, automates catalog updates, and forecasts demand based on market trends. It helps textile manufacturers reduce time to market, improve production efficiency, and minimize inventory waste.",
    image: Zodha8,
    benefits: [
      "AI-generated 3D product simulations",
      "Automated catalog management and production tracking",
      "Enhanced demand forecasting",
    ],
    impacts: [
      "30% reduction in design-to-market time",
      "20% increase in inventory turnover",
    ],
  },
  {
    id: 9,
    title: "Gen AI-led Health Records Management Platform",
    description:
      "ZodhaGPT’s healthcare platform automates patient record management, ensuring secure and efficient handling of clinical data. It consolidates patient records from different sources, identifies treatment gaps, and provides real-time insights for better diagnosis and care. The platform ensures compliance with healthcare regulations and improves overall patient experience.",
    image: Zodha9,
    benefits: [
      "AI-driven patient record consolidation and analysis",
      "Automated scheduling and diagnosis assistance",
      "Enhanced patient data privacy and security",
    ],
    impacts: [
      "25% faster patient record retrieval",
      "Improved patient outcomes and operational efficiency",
    ],
  },
  {
    id: 10,
    title: "Gen AI/LLM-Led Document Information Intelligence",
    description:
      "ZodhaGPT’s document intelligence platform automates data extraction from structured and unstructured documents. It leverages Gen AI and LLM to identify key information, validate data accuracy, and generate actionable insights. The platform supports various file formats and ensures compliance with data privacy regulations.",
    image: Zodha10,
    benefits: [
      "AI-based data extraction and validation",
      "Multi-format document processing",
      "Enhanced accuracy and compliance tracking",
    ],
    impacts: [
      "40% faster document processing",
      "30% improvement in data accuracy",
    ],
  },
  {
    id: 11,
    title: "Gen AI-led Social Media Analytics",
    description:
      "ZodhaGPT’s social media analytics platform monitors social channels in real time, analyzing audience sentiment, engagement patterns, and competitor performance. It provides AI-driven insights to enhance content strategy, target the right audience, and maximize reach. The platform also suggests content adjustments to improve brand visibility.",
    image: Zodha11,
    benefits: [
      "AI-driven sentiment analysis and trend detection",
      "Automated content performance tracking",
      "Competitor benchmarking and strategic recommendations",
    ],
    impacts: [
      "50% increase in engagement rate",
      "Improved content strategy and audience targeting",
    ],
  },
  // {
  //   id: 12,
  //   title: "Influencer Marketing",
  //   description:
  //     "Optimize operations with our Asset Management Module, offering real-time tracking for efficient monitoring. Our advanced technology ensures precise asset identification and a centralized database for seamless record-keeping and quick decision-making.",
  //   image: Zodha3,
  //   benefits: ["It's good"],
  //   impacts: ["Up to good"],
  // },
];

export default function AnalyticsKartSlider() {
  return (
    <>
      <ProductsKartSlider
        data={zondhaGptData}
        pageTitle="ZODHAGPT"
        link="/zodha-gpt"
      />
    </>
  );
}
