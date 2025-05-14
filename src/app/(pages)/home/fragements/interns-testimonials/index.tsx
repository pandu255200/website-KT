"use client";

import { useState } from "react";
import Styles from "./style.module.css";
import Image from "next/image";

import CardImage from "../../../../../../public/home/testimonials/card-image.svg";
import TopRightArrowIcon from "../../../../../../public/home/top-right-arrow.svg";
import RIghtAngleIcon from "../../../../../../public/home/right-angle-icon.svg";
import QuoteIcon from "../../../../../../public/home/quatation.svg";

const InternsTestimonials = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // State to track the current video

  const videos = [
    { id: 1, url: "/home/testimonials/people.mp4" }, // Corrected path
    { id: 2, url: "https://www.w3schools.com/html/movie.mp4" },
    { id: 3, url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const testimonials = [
    {
      name: "Mekala Sai Kiran Yadav",
      institute: "Sree Nidhi Institute Of Science And Technology",
      testimonial:
        "Completed a four-month internship at ResoluteAI in AI & Machine Learning. This month was by far my most fun learning experience. The team and everyone at the place have together built an amazing culture to make all feel welcomed.",
    },
    {
      name: "Rajesh Kumar",
      institute: "Indian Institute of Technology",
      testimonial:
        "This internship gave me practical exposure to machine learning and AI. It helped me bridge the gap between academics and industry.",
    },
    {
      name: "Aarohi Gupta",
      institute: "Birla Institute of Technology",
      testimonial:
        "The supportive team and enriching projects made my learning curve steep. Highly recommend it to anyone interested in AI.",
    },
    {
      name: "Mekala Sai Kiran Yadav",
      institute: "Sree Nidhi Institute Of Science And Technology",
      testimonial:
        "Completed a four-month internship at ResoluteAI in AI & Machine Learning. This month was by far my most fun learning experience. The team and everyone at the place have together built an amazing culture to make all feel welcomed.",
    },
    {
      name: "Rohan Sharma",
      institute: "Vellore Institute of Technology",
      testimonial:
        "Collaborating on live projects and receiving guidance from experts made this internship truly valuable.",
    },
    {
      name: "Sneha Patel",
      institute: "National Institute of Technology",
      testimonial:
        "The work culture and challenging tasks enhanced my problem-solving skills and confidence.",
    },
    {
      name: "Mekala Sai Kiran Yadav",
      institute: "Sree Nidhi Institute Of Science And Technology",
      testimonial:
        "Completed a four-month internship at ResoluteAI in AI & Machine Learning. This month was by far my most fun learning experience. The team and everyone at the place have together built an amazing culture to make all feel welcomed.",
    },
    {
      name: "Aryan Mishra",
      institute: "Delhi Technological University",
      testimonial:
        "One of the best decisions I made was joining this internship. It helped me understand AI from a practical standpoint.",
    },
  ];

  // Duplicate testimonials for smooth scrolling
  const duplicateTestimonials = [...testimonials, ...testimonials];

  return (
    <div className={Styles.container} id="testimonials">
      <h1 className={`${Styles.heading} font-anta`}>AI INTERNS TESTIMONIALS</h1>
      <div className={Styles.grid}>
        {duplicateTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`${Styles.card} ${
              index % 2 === 0 ? Styles.cardEven : Styles.cardOdd
            }`}
          >
            <Image
              src={QuoteIcon.src}
              className={Styles.image}
              alt="CardImage"
              // layout="fixed"
              width={30}
              height={30}
              style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
            />

            <div className={Styles.profile}>
              <div className={Styles.profileImgDiv}>
                <Image
                  src={CardImage.src}
                  className={Styles.image}
                  alt="CardImage"
                  // layout="fixed"
                  width={10}
                  height={10}
                />
              </div>
              <div className={Styles.profileContentDiv}>
                <span className={Styles.name}>{testimonial.name}</span>
                <span className={Styles.institute}>
                  {testimonial.institute}
                </span>
              </div>
            </div>
            <p className={Styles.testimonial}>{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
      <button className={Styles.button}>
        <span>Apply Now</span>
        <Image
          src={TopRightArrowIcon.src}
          alt="arrowIcon"
          // layout="fixed"
          width={28}
          height={20}
        />
      </button>

      {/* <div className={Styles.videoSlider}>
        <button onClick={prevVideo} className={Styles.navButton}>
          <Image
            src={RIghtAngleIcon.src}
            alt="Previous"
            style={{ transform: "rotate(180deg" }}
            width={20}
            height={20}
          />
        </button>

        <div className={Styles.videoContainer}>
          <video loop autoPlay muted className={Styles.video}>
            <source src={videos[currentVideoIndex].url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <button onClick={nextVideo} className={Styles.navButton}>
          <Image src={RIghtAngleIcon.src} alt="Next" width={20} height={20} />
        </button>
      </div> */}
    </div>
  );
};

export default InternsTestimonials;
