import React from "react";
import styles from "./our-mission.module.css";
import Image from "next/image";
import FaceGenie from "../../../../../public/home/nav-icons/products/faceGenai.svg";
import Zodha from "../../../../../public/home/nav-icons/products/zodha.svg";
import PolygonImage from "../../../../../public/about-us/polygon.gif";
import AnalyticsKart from "../../../../../public/home/nav-icons/products/analytics-kart.svg";

export const OurMission = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.introduction}>
          <div className={`${styles.title}`}>
            <h2 className="font-anta" style={{ fontFamily: "Anta, serif" }}>
              We Are
            </h2>
            <h1 className="font-anta" style={{ fontFamily: "Anta, serif" }}>
              RESOLUTE<span>AI</span> SOFTWARE
            </h1>
          </div>
          <div className={styles.description}>
            <p>
              ResoluteAI Software, founded in 2018, was built on a
              transformative vision — "To enhance trust with AI for a safer,
              smarter, and happier world."
            </p>

            <p>
              Today, we stand as a next-generation Enterprise AI & GenAI
              Engineering Company, enabling organizations to unlock exponential
              value through Agentic AI ecosystems, Autonomous Workflows, and
              Intelligent Digital Transformation.With a multidisciplinary team
              of AI innovators, enterprise architects, full-stack engineers,
              data scientists, product strategists, and domain experts,
              ResoluteAI Software accelerates enterprise modernization through
              state-of-the-art artificial intelligence.
            </p>

            <h3>🌐 What We Do</h3>

            <p>
              We empower enterprises and high-growth industries with end-to-end
              AI capabilities, combining:
            </p>

            <ul>
              <li>Generative AI & Agentic AI Systems</li>
              <li>Large Language Models (LLMs) & Multimodal LLMs</li>
              <li>
                Vision Intelligence (Computer Vision, Machine Vision, Edge
                Vision)
              </li>
              <li>Diagnostic, Predictive & Prescriptive Analytics</li>
              <li>Autonomous AI Agents & Workflow Orchestration</li>
              <li>NLP, Speech AI, Conversational AI Platforms</li>
              <li>IoT, Edge AI & Industry 4.0 Modernization</li>
              <li>AI-Augmented Decision Systems</li>
              <li>
                Enterprise Data Engineering & Real-Time Analytics Pipelines
              </li>
              <li>MLOps, LLMOps & AI Observability</li>
              <li>Responsible and Ethical AI</li>
            </ul>

            <p>
              Our solutions help organizations solve high-stakes challenges,
              improve operational efficiency, strengthen compliance, enhance
              customer experience, and drive measurable ROI and business impact.
            </p>

            <h3>⚙️ How We Deliver Impact</h3>

            <p>
              At ResoluteAI, we build plug-and-play AI accelerators, custom
              enterprise-grade AI products, and domain-specific GenAI
              applications tailored to your business.
            </p>

            <p>Our technology accelerators combine:</p>

            <ul>
              <li>Fine-tuned LLMs on proprietary enterprise data</li>
              <li>RAG pipelines with semantic search & knowledge graphs</li>
              <li>
                Agentic AI workflows that self-learn, reason & execute tasks
              </li>
              <li>
                AI-driven automation across operations, safety, security, supply
                chain & CX
              </li>
              <li>Edge-to-Cloud AI orchestration for real-time intelligence</li>
            </ul>

            <p>
              We ensure that every AI solution adheres to Responsible AI,
              enterprise governance, security-first architecture, and scalable
              cloud-native engineering.
            </p>

            <h3>📈 Our Purpose</h3>

            <p>
              Our purpose is simple yet powerful: to democratize AI and make
              intelligent technologies accessible, explainable, and actionable
              for organizations of every size.
            </p>

            <p>
              As your strategic technology partner, ResoluteAI Software brings
              the perfect blend of innovation, reliability, and industry
              intelligence — enabling your business to scale confidently in the
              era of AI-native enterprises.
            </p>

            <p>
              <strong>
                Move forward with the power of trustworthy, autonomous, and
                future-ready AI.
              </strong>
            </p>
            <p>
              <strong>Move forward with ResoluteAI Software.</strong>
            </p>
          </div>
        </div>
        <div className={styles.products}>
          <h1 className="font-anta">Our Products, Solutions & Services</h1>
          <div className={styles.logos}>
            <Image src={Zodha} alt="zodhaGPT" />
            <Image src={FaceGenie} width={175} alt="faceGenie" />
            <Image src={AnalyticsKart} alt="analytics_kart" />
          </div>
        </div>
      </div>
    </div>
  );
};
