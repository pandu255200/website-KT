"use client";

import React from "react";
import Styles from "./our-values.module.css";
import Blog1 from "../../../../../public/home/blogs/blog-1.svg";
import Blog2 from "../../../../../public/home/blogs/blog-2.svg";
import Blog3 from "../../../../../public/home/blogs/blog-3.svg";
import Diamond from "../../../../../public/about-us/diamond.svg";
import BigRedDiamond from "../../../../../public/about-us/bigRedDiamond.svg";
import Image from "next/image";

const OurValues = () => {
  const blogsData = [
    {
      image: Blog1,
      heading: "Collaboration",
      description:
        "We believe in evolving together within teams and beyond. Through our mutual learning approach, we design an optimal solution based for you.",
    },
    {
      image: Blog2,
      heading: "Compassion",
      description:
        "We bring compassion into everything we do and for everyone we interact with. A great customer experience is something we deeply care for.",
    },
    {
      image: Blog3,
      heading: "Credibility",
      description:
        "We work to establish everlasting credibility and integrity. Our products and solutions are built to give real-world accuracy without any embellishment.",
    },
  ];

  const currentBlogs = blogsData;

  return (
    <div className={Styles.fullScreenContainer}>
      <div className={Styles.container} id="blogs">
        <div className={Styles.headerStyle}>
          <span className={Styles.title}>OUR VALUES</span>
          <Image
            src={Diamond}
            //   className={Styles.image}
            alt="Blog Image"
            layout="fixed"
            width={90}
            height={90}
          />
        </div>

        <div className={Styles.slider}>
          <div className={Styles.mainCrousel}>
            {currentBlogs.map((blog, index) => (
              <div className={Styles.item} key={index}>
                <div className={Styles.content}>
                  <h1 className="font-anta">{blog.heading}</h1>
                  <p>{blog.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={Styles.footerDiamond}>
          <Image
            src={Diamond}
            className={Styles.image}
            alt="Blog Image"
            layout="fixed"
            width={90}
            height={90}
          />
        </div>

        <Image
          src={BigRedDiamond}
          alt="Big Red Diamond"
          className={Styles.bgImage}
          layout="fixed"
          width={10}
          height={10}
        />
      </div>
    </div>
  );
};

export default OurValues;
