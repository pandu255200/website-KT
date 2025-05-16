"use client";

import React, { useState, useEffect } from "react";
import Styles from "./style.module.css";
import RedArrowIcon from "../../../../../public/home/case-study/red-arrow.svg";
import WhiteArrowIcon from "../../../../../public/home/case-study/white-arrow.svg";
import PauseIcon from "../../../../../public/home/videos/pauseIcon.svg";
import Blog1 from "../../../../../public/home/case-study/blog-1.svg";
import AINybbles from "../../../../../public/home/videos/ai-nybbles.png";
import Image from "next/image";
import { GoBackButton } from "@/components/common/go-back-button";

const TECHIE_PLAYLIST_ID = "PLWSTIwybJ4wWiM649HAk24T2gI9WCeHC_";
const NYBBLES_PLAYLIST_ID = "PLWSTIwybJ4wVKlpxAKtfp5URdMJJSG_-I";
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;;

const Videos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentOption, setCurrentOption] = useState("AI Nybbles");
  const [techieBytesData, setTechieBytesData] = useState([]);
  const [nybblesData, setNybblesData] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);


  useEffect(() => {
    const fetchVideos = async (playlistId: string, setter: any) => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${API_KEY}`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setter(data.items);
      } catch (error) {
        console.error("Failed to fetch playlist videos", error);
      }
    };

    fetchVideos(TECHIE_PLAYLIST_ID, setTechieBytesData);
    fetchVideos(NYBBLES_PLAYLIST_ID, setNybblesData);
  }, []);

  const currentData = currentOption === "AI Nybbles" ? nybblesData : techieBytesData;
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < currentData.length - 3;

  const handlePrevious = () => {
    if (hasPrevious) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (hasNext) setCurrentIndex(currentIndex + 1);
  };

  const currentBlogs = currentData.slice(currentIndex, currentIndex + 3);

  const getImageUrl = (item: any) => {
    return item?.snippet?.thumbnails?.medium?.url || null;
  };
  
  const getDescription = (item: any) => {
    return item?.snippet?.title || "";
  };
  

  const getVideoUrl = (item: any) => {
      const videoId = item?.snippet?.resourceId?.videoId;
      return `https://www.youtube.com/watch?v=${videoId}`;
  };

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
                    const selectedItem = currentBlogs[1];
                    const url = getVideoUrl(selectedItem);
                    if (url) {  
                      setSelectedVideoUrl(url);
                      setIsDialogOpen(true);
                    }
                  }}
                  // onClick={() => {
                  //   const selectedItem = currentBlogs[1];
                  //   const url = getVideoUrl(selectedItem);
                  //   if (url) window.open(url, "_blank");
                  // }}
                >
                  <span>Watch Video</span>
                  <div className={Styles.pauseVideo}>
                    <Image
                      src={PauseIcon}
                      alt="Pause Icon"
                      layout="fixed"
                      width={18}
                      height={18}
                    />
                  </div>
                </div>

                <div className={Styles.imageContainer}>
                  {getImageUrl(currentBlogs[1]) && (
                    <Image
                      src={getImageUrl(currentBlogs[1])}
                      className={Styles.image}
                      alt="Main Blog"
                      layout="fill"
                    />
                  )}
                </div>
                <div className={Styles.videoDescription}>
                  {getDescription(currentBlogs[1])}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className={Styles.item}>
              <div className={Styles.rightContent}>
                <div className={Styles.rightBlurCurtain}></div>
                <div className={Styles.leftRightImageContainer}>
                  {getImageUrl(currentBlogs[2]) && (
                    <Image
                      src={getImageUrl(currentBlogs[2])}
                      className={Styles.leftRightImage}
                      alt="Blog Image"
                      layout="fill"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${Styles.previousButton} ${hasPrevious ? Styles.active : ""}`}
          onClick={handlePrevious}
        >
          <Image
            src={hasPrevious ? WhiteArrowIcon : RedArrowIcon}
            className={Styles.previousIcon}
            alt="Previous"
            width={20}
            height={20}
          />
        </div>

        <div
          className={`${Styles.nextButton} ${hasNext ? Styles.active : ""}`}
          onClick={handleNext}
        >
          <Image
            src={hasNext ? WhiteArrowIcon : RedArrowIcon}
            className={Styles.nextIcon}
            alt="Next"
            width={20}
            height={20}
          />
        </div>
      </div>

      <div className={Styles.videoTitle}>
        <div className={Styles.videoTitleContent}>VIDEO TITLE HERE</div>
        <div className={Styles.previousNumber} onClick={handlePrevious}>
          {String(currentIndex + 1).padStart(2, "0")}
        </div>
        <div className={Styles.nextNumber} onClick={handleNext}>
          {hasNext ? String(currentIndex + 3).padStart(2, "0") : ""}
        </div>
      </div>


      {isDialogOpen && selectedVideoUrl && (
  <div className={Styles.dialogBackdrop} onClick={() => setIsDialogOpen(false)}>
    <div className={Styles.dialogContent} onClick={(e) => e.stopPropagation()}>
      <button className={Styles.closeButton} onClick={() => setIsDialogOpen(false)}>×</button>
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
