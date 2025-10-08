"use client";

import React, { useState, useEffect } from "react";
import Styles from "./style.module.css";
import Image from "next/image";
import PauseIcon from "../../../../../public/home/videos/pauseIcon.svg";
import WhiteArrowIcon from "../../../../../public/home/case-study/white-arrow.svg";
import RedArrowIcon from "../../../../../public/home/case-study/red-arrow.svg";
import { GoBackButton } from "@/components/common/go-back-button";

const TECHIE_PLAYLIST_ID = "PLWSTIwybJ4wWiM649HAk24T2gI9WCeHC_";
const NYBBLES_PLAYLIST_ID = "PLWSTIwybJ4wVKlpxAKtfp5URdMJJSG_-I";
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

const Videos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentOption, setCurrentOption] = useState("AI Nybbles");
  const [techieBytesData, setTechieBytesData] = useState<any[]>([]);
  const [nybblesData, setNybblesData] = useState<any[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // ----------------- Fetch playlist videos with pagination -----------------
  const fetchAllVideos = async (playlistId: string, setter: any) => {
    let allItems: any[] = [];
    let nextPageToken = "";
    try {
      do {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${API_KEY}&pageToken=${nextPageToken}`
        );
        if (!res.ok) throw new Error("Failed to fetch playlist videos");
        const data = await res.json();
        allItems = [...allItems, ...(data.items || [])];
        nextPageToken = data.nextPageToken || "";
      } while (nextPageToken);
      setter(allItems);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllVideos(TECHIE_PLAYLIST_ID, setTechieBytesData);
    fetchAllVideos(NYBBLES_PLAYLIST_ID, setNybblesData);
  }, []);

  // ----------------- Detect mobile -----------------
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 480);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const currentData = currentOption === "AI Nybbles" ? nybblesData : techieBytesData;
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < currentData.length - 3;

  const handlePrevious = () => hasPrevious && setCurrentIndex(currentIndex - 1);
  const handleNext = () => hasNext && setCurrentIndex(currentIndex + 1);

  const currentBlogs = currentData.slice(currentIndex, currentIndex + 3);

  const getImageUrl = (item: any) => item?.snippet?.thumbnails?.medium?.url ?? "";
  const getDescription = (item: any) => item?.snippet?.title ?? "";
  const getVideoUrl = (item: any) => `https://www.youtube.com/watch?v=${item?.snippet?.resourceId?.videoId ?? ""}`;
  const getCurrentVideoTitle = () => currentBlogs[1]?.snippet?.title ?? "No video selected";

  return (
    <div className={Styles.container} id="videos">
      <h1 className="globalHeaderStyle">
        <span className="title">VIDEOS</span>
        <GoBackButton text="Go Back" type="prev" />
      </h1>

      <div className={Styles.optionToggle}>
        {["AI Nybbles", "Techie Bytes"].map((option) => (
          <div
            key={option}
            className={`${Styles.optionItem} ${currentOption === option ? Styles.activeOption : ""}`}
            onClick={() => {
              setCurrentOption(option);
              setCurrentIndex(0);
            }}
          >
            {option}
          </div>
        ))}
      </div>

      {!isMobile ? (
        <>
          {/* Desktop carousel */}
          <div className={Styles.slider}>
            <div className={Styles.sliderMain}>
              <div className={Styles.mainCrousel}>
                {/* Left Image */}
                <div className={Styles.item}>
                  <div className={Styles.leftContent}>
                    <div className={Styles.leftBlurCurtain}></div>
                    <div className={Styles.leftRightImageContainer}>
                      {getImageUrl(currentBlogs[0]) && (
                        <Image
                          src={getImageUrl(currentBlogs[0])}
                          className={Styles.leftRightImage}
                          alt="Blog Image"
                          layout="fill"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Middle Content */}
                <div className={Styles.item}>
                  <div className={Styles.content}>
                    <div
                      className={Styles.watchVideo}
                      onClick={() => {
                        const url = getVideoUrl(currentBlogs[1]);
                        url && (setSelectedVideoUrl(url), setIsDialogOpen(true));
                      }}
                    >
                      <span>Watch Video</span>
                      <div className={Styles.pauseVideo}>
                        <Image src={PauseIcon} alt="Pause Icon" layout="fixed" width={18} height={18} />
                      </div>
                    </div>
                    <div className={Styles.imageContainer}>
                      {getImageUrl(currentBlogs[1]) && (
                        <Image src={getImageUrl(currentBlogs[1])} className={Styles.image} alt="Main Blog" layout="fill" priority />
                      )}
                    </div>
                    <div className={Styles.videoDescription}>{getDescription(currentBlogs[1])}</div>
                  </div>
                </div>

                {/* Right Image */}
                <div className={Styles.item}>
                  <div className={Styles.rightContent}>
                    <div className={Styles.rightBlurCurtain}></div>
                    <div className={Styles.leftRightImageContainer}>
                      {getImageUrl(currentBlogs[2]) && (
                        <Image src={getImageUrl(currentBlogs[2])} className={Styles.leftRightImage} alt="Blog Image" layout="fill" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${Styles.previousButton} ${hasPrevious ? Styles.active : ""}`} onClick={handlePrevious}>
              <Image src={hasPrevious ? WhiteArrowIcon : RedArrowIcon} className={Styles.previousIcon} alt="Previous" width={20} height={20} />
            </div>
            <div className={`${Styles.nextButton} ${hasNext ? Styles.active : ""}`} onClick={handleNext}>
              <Image src={hasNext ? WhiteArrowIcon : RedArrowIcon} className={Styles.nextIcon} alt="Next" width={20} height={20} />
            </div>
          </div>

          <div className={Styles.videoTitle}>
            <div className={Styles.videoTitleContent}>{getCurrentVideoTitle()}</div>
            <div className={Styles.previousNumber} onClick={handlePrevious}>
              {String(currentIndex + 1).padStart(2, "0")}
            </div>
            <div className={Styles.nextNumber} onClick={handleNext}>
              {hasNext ? String(currentIndex + 3).padStart(2, "0") : ""}
            </div>
          </div>
        </>
      ) : (
        <div style={{ width: "100%", margin: "0 auto", marginTop: "1rem" }}>
          {/* Mobile: full list */}
          {currentData.map((item: any, idx: number) => (
            <div
              key={item?.id || idx}
              style={{
                marginBottom: "2rem",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                padding: "1rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "180px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  marginBottom: "0.75rem",
                  background: "#eee",
                }}
                onClick={() => {
                  const url = getVideoUrl(item);
                  url && (setSelectedVideoUrl(url), setIsDialogOpen(true));
                }}
              >
                {getImageUrl(item) && (
                  <Image src={getImageUrl(item)} alt={getDescription(item)} layout="fill" objectFit="cover" />
                )}
                <div
                  style={{
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                    background: "#fa2609",
                    borderRadius: "50%",
                    width: 36,
                    height: 36,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image src={PauseIcon} alt="Pause Icon" width={18} height={18} />
                </div>
              </div>
              <div style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem", color: "#fa2609", textAlign: "left" }}>
                {getDescription(item)}
              </div>
              <button
                style={{
                  background: "#fa2609",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  padding: "0.5rem 1.2rem",
                  fontWeight: 500,
                  fontSize: "1rem",
                  cursor: "pointer",
                  marginTop: "0.5rem",
                  width: "100%",
                }}
                onClick={() => {
                  const url = getVideoUrl(item);
                  url && (setSelectedVideoUrl(url), setIsDialogOpen(true));
                }}
              >
                Watch Video
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Video Modal */}
      {isDialogOpen && selectedVideoUrl && (
        <div className={Styles.dialogBackdrop} onClick={() => setIsDialogOpen(false)}>
          <div className={Styles.dialogContent} onClick={(e) => e.stopPropagation()}>
            <button className={Styles.closeButton} onClick={() => setIsDialogOpen(false)}>
              ×
            </button>
            <iframe
              width="100%"
              height="400"
              src={selectedVideoUrl.replace("watch?v=", "embed/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
