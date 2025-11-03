"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Styles from "./style.module.css";
import { useCounter } from "@/store/AnimationContext";
import SendButton from "../../../../../../public/chat/send-button.svg";
import ResoluteLogo from "../../../../../../public/chat/resolute-logo.svg";
import Sender from "../../../../../../public/chat/sender.jpg";
import { chatbotData } from "./data";

const images = {
  AnalyticsImage: "/home/analytics-image.svg",
  FaceGenAiImage: "/home/face-genai-image.png",
  ZodhaImage: "/home/zondha-image.svg",
  ChatIcon: "/home/chat-icon.svg",
  ZodhaLogo: "/home/nav-icons/products/zodha.svg",
  FaceGenaiLogo: "/home/nav-icons/products/faceGenai.svg",
  AnalyticsLogo: "/home/nav-icons/products/analytics-kart.svg",
  TopRightArrowIcon: "/home/top-right-arrow.svg",
  WatchVideoIcon: "/home/watch-video.svg",
  ScannerGif: "/home/scanner.gif",
  GlobeImage: "/home/globe-image.svg",
};

type ButtonName = "ZodhaGPT" | "FaceGenie" | "AnalyticsKart";

type MessageType = {
  id: string;
  content: string;
  isUser: boolean;
  type: "text" | "list";
  title?: string;
  items?: string[];
};

type OptionType = {
  text: string;
  next_id: string;
};

export default function HeroSection() {
  const router = useRouter();
  const { counter } = useCounter();
  const [activeButton, setActiveButton] = useState<ButtonName>("ZodhaGPT");
  const [animationDiv, setAnimationDiv] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [showChatWindow, setShowChatWindow] = useState(false);

  // Chatbot state
  const [currentStep, setCurrentStep] = useState("start");
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [options, setOptions] = useState<OptionType[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
    setAnimationDiv(1);

    const timeout = setTimeout(() => {
      setAnimationDiv(0);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initialize chatbot when chat window opens
  useEffect(() => {
    if (showChatWindow && messages.length === 0) {
      initializeChatbot();
    }
  }, [showChatWindow]);

  const initializeChatbot = () => {
    const startData = chatbotData.start;
    const newMessages: MessageType[] = startData.response.map(
      (resp, index) => ({
        id: `msg-${Date.now()}-${index}`,
        content: resp.content,
        isUser: false,
        type: resp.type as "text" | "list",
        title: (resp as any).title,
        items: (resp as any).items,
      })
    );

    setMessages(newMessages);
    setOptions(startData.options);
    setCurrentStep("start");
  };

  // Function to determine button style based on text content
  const getButtonStyle = (optionText: string) => {
    const navigationKeywords = [
      "go to main menu",
      "back to",
      "see other",
      "back",
      "return to",
      "main menu",
    ];

    const isNavigationButton = navigationKeywords.some((keyword) =>
      optionText.toLowerCase().includes(keyword.toLowerCase())
    );

    return isNavigationButton
      ? Styles.redOptionButton
      : Styles.whiteOptionButton;
  };

  const handleOptionClick = (nextId: string) => {
    // Check if this is a redirect step
    const nextStepData = chatbotData[nextId as keyof typeof chatbotData];

    if (nextStepData && nextStepData.redirect_url) {
      // Add redirect message
      const redirectMessages: MessageType[] = nextStepData.response.map(
        (resp, index) => ({
          id: `redirect-${Date.now()}-${index}`,
          content: resp.content,
          isUser: false,
          type: resp.type as "text" | "list",
          title: (resp as any).title,
          items: (resp as any).items,
        })
      );

      setMessages((prev) => [...prev, ...redirectMessages]);
      setOptions([]);
      setCurrentStep(nextId);

      // Redirect after a short delay to show the message
      setTimeout(() => {
        setShowChatWindow(false);
        router.push(nextStepData.redirect_url);
        // Reset chat after redirect
        setTimeout(() => {
          setMessages([]);
          setOptions([]);
          setCurrentStep("start");
        }, 1000);
      }, 1500);

      return;
    }

    // Add user's selection as a message
    const selectedOption = options.find((opt) => opt.next_id === nextId);
    if (selectedOption) {
      setMessages((prev) => [
        ...prev,
        {
          id: `user-${Date.now()}`,
          content: selectedOption.text,
          isUser: true,
          type: "text",
        },
      ]);
    }

    // Get next step data
    if (nextStepData) {
      // Add bot responses
      const botMessages: MessageType[] = nextStepData.response.map(
        (resp, index) => ({
          id: `bot-${Date.now()}-${index}`,
          content: resp.content,
          isUser: false,
          type: resp.type as "text" | "list",
          title: (resp as any).title,
          items: (resp as any).items,
        })
      );

      setMessages((prev) => [...prev, ...botMessages]);
      setOptions(nextStepData.options);
      setCurrentStep(nextId);
    }
  };

  const handleSendMessage = () => {
    const inputElement = document.querySelector(
      `.${Styles.chatInput}`
    ) as HTMLDivElement;
    if (inputElement && inputElement.textContent?.trim()) {
      const userMessage = inputElement.textContent.trim();

      setMessages((prev) => [
        ...prev,
        {
          id: `user-${Date.now()}`,
          content: userMessage,
          isUser: true,
          type: "text",
        },
      ]);

      // Clear input
      inputElement.textContent = "Type Here";

      // For now, redirect to main menu on manual input
      setTimeout(() => {
        handleOptionClick("start");
      }, 500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderMessageContent = (message: MessageType) => {
    if (message.type === "list" && message.items) {
      return (
        <div className={Styles.listContent}>
          {message.title && (
            <strong className={Styles.listTitle}>{message.title}</strong>
          )}
          <ul className={Styles.list}>
            {message.items.map((item, index) => (
              <li key={index} className={Styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return <div className={Styles.textContent}>{message.content}</div>;
  };

  const contentData = {
    ZodhaGPT: {
      heading: "GenAI-Powered, Effortlessly Scalable & Exceptionally Adaptive.",
      description:
        "The next-gen LLM with AgenticAI for adaptive, scalable, and intelligent decision-making.",
      image: images.ZodhaImage,
      logo: images.ZodhaLogo,
    },
    FaceGenie: {
      heading: "Safe, Secure, Hygienic, Automated & Touchless",
      description:
        "From Dynamic to Compact and Pro, we utilize the benefits of AI to the furthest extent possible to give you the competitive edge",
      image: images.FaceGenAiImage,
      logo: images.FaceGenaiLogo,
    },
    AnalyticsKart: {
      heading: "AnalyticsKart: Smarter Data, Better Decisions",
      description:
        "An AI-driven analytics platform that provides insights to streamline business operations and enhance decision-making.",
      image: images.AnalyticsImage,
      logo: images.AnalyticsLogo,
    },
  };

  const handleButtonClick = (buttonName: ButtonName) => {
    console.log("Button Clicked:", buttonName);
    setActiveButton(buttonName);
  };

  return (
    <div className="flex">
      <section className={Styles.hero}>
        {animationDiv > 0 && (
          <div className={Styles.animatedDiv}>
            <div className={Styles.innerAnimation}>
              <div className={Styles.content}>
                <div className={Styles.fadeInText}>
                  <h1 className={Styles.h1}>Empowering the future</h1>
                  <p className={Styles.para}>
                    Building a Future Where Enterprises Evolve Intelligently —
                    Powered by Agentic AI, Gen AI, and Advanced Analytics.
                  </p>
                </div>
              </div>
              <div className={`${Styles.imageSection} ${Styles.fadeInGlobe}`}>
                <Image
                  src={images.GlobeImage}
                  alt="Globe"
                  width={450}
                  height={450}
                  style={{ maxWidth: "100%", height: "auto" }}
                  priority
                />
              </div>
            </div>
          </div>
        )}

        <div className={Styles.flex}>
          {/* LEFT SECTION */}
          <div className={Styles.content} style={{ opacity: 1 }}>
            <h1 className={`${Styles.h1} font-anta`}>
              {contentData[activeButton].heading}
            </h1>
            <p className={Styles.para}>
              {contentData[activeButton].description}
            </p>

            <div className="flex flex-col gap-10">
              <Image
                src={contentData[activeButton].logo}
                className={Styles.logo}
                alt="logo"
                width={180}
                height={50}
                priority
              />
              <div className="flex gap-8">
                <button>
                  <span>Learn More</span>
                  <Image
                    src={images.TopRightArrowIcon}
                    alt="arrow"
                    width={28}
                    height={28}
                    priority
                  />
                </button>
                {activeButton === "FaceGenie" && (
                  <button className={Styles.watchVideo}>
                    <Image
                      src={images.WatchVideoIcon}
                      alt="WatchVideo"
                      width={15}
                      height={15}
                      priority
                    />
                    <span>Watch Video</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className={Styles.image} style={{ opacity: 1 }}>
            {activeButton === "FaceGenie" && (
              <Image
                src={images.ScannerGif}
                alt="Scanner"
                className={Styles.scanner}
                width={300}
                height={300}
                unoptimized
                layout="responsive"
              />
            )}
            <Image
              src={contentData[activeButton].image}
              alt="ProductImage"
              width={500}
              height={activeButton === "FaceGenie" ? 550 : 430}
              priority
              layout="responsive"
            />
          </div>
        </div>

        <div className={Styles.imageContainer}>
          <div className={Styles.tabs}>
            {Object.keys(contentData).map((button) => (
              <button
                key={button}
                className={`${Styles.tabButton} ${
                  activeButton === button ? Styles.activeTab : ""
                }`}
                onClick={() => handleButtonClick(button as ButtonName)}
              >
                {button}
              </button>
            ))}
          </div>
          <div
            className={Styles.chatWindow}
            style={{
              visibility: `${showChatWindow ? "visible" : "hidden"}`,
              opacity: `${showChatWindow ? "1" : "0"}`,
              transform: `${
                showChatWindow ? "translateY(0)" : "translateY(20px)"
              }`,
            }}
          >
            <div className={Styles.chatWindow2ndLayer}>
              <div className={Styles.chatHeader}>
                <div className={Styles.chatHeaderContent}>
                  <h2 className={Styles.chatHeaderTitle}>Chatbot</h2>
                  <p className={Styles.chatHeaderSubtitle}>
                    Ai Assistant to help you
                  </p>
                </div>
              </div>
              <div className={Styles.crossButton1stLayer}>
                <div
                  className={Styles.crossButton}
                  onClick={() => {
                    setShowChatWindow(false);
                    // Reset chat when closing
                    setTimeout(() => {
                      setMessages([]);
                      setOptions([]);
                      setCurrentStep("start");
                    }, 300);
                  }}
                >
                  ×
                </div>
              </div>
              <div className={Styles.chatWindow3rdLayer}>
                {/* Chat Messages - This contains BOTH messages and options */}
                <div className={Styles.chatMessages}>
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`${Styles.messageContainer} ${
                        message.isUser ? Styles.userMessage : Styles.botMessage
                      }`}
                    >
                      {!message.isUser && (
                        <div className={Styles.resoluteLogo}>
                          <Image
                            src={ResoluteLogo}
                            alt="Resolute Logo"
                            className={Styles.resoluteLogoImage}
                            width={20}
                            height={20}
                          />
                        </div>
                      )}
                      <div
                        className={`${Styles.messageBubble} ${
                          message.isUser ? Styles.userBubble : Styles.botBubble
                        }`}
                      >
                        {renderMessageContent(message)}
                      </div>
                      {message.isUser && (
                        <div className={Styles.senderPhoto}>
                          <Image
                            src={Sender}
                            alt="Sender Photo"
                            className={Styles.senderPhotoImageTag}
                            width={20}
                            height={20}
                          />
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Options Buttons - NOW INSIDE chatMessages */}
                  {options.length > 0 && (
                    <div className={Styles.optionsContainer}>
                      {options.map((option, index) => (
                        <button
                          key={index}
                          className={`${Styles.optionButton} ${getButtonStyle(
                            option.text
                          )}`}
                          onClick={() => handleOptionClick(option.next_id)}
                        >
                          {option.text}
                        </button>
                      ))}
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Chat Input Area (if you add one later) */}
              </div>
            </div>
          </div>
          {/* {animationDiv === 0 && ( */}
          <div className={Styles.chatWrapper}>
            <div className={Styles.message_box}>
              Do you need any Assistance ?
            </div>
            <button
              className={Styles.chatButton}
              onClick={() => setShowChatWindow(true)}
            >
              <Image
                src={images.ChatIcon}
                alt="ChatIcon"
                width={30}
                height={30}
                priority
              />
            </button>
          </div>
          {/* )} */}
        </div>
      </section>
    </div>
  );
}
