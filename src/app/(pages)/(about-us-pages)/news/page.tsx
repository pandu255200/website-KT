"use client"

// pages/news.js
import { GoBackButton } from '@/components/common/go-back-button';
import styles from './style.module.css';
import { useState } from 'react'; // Import useState to manage hover state

export default function News() {
  // State to track which article is hovered
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <header className="globalHeaderStyle">
        <h1 className="title">NEWS PRESS &amp; COVERANGE</h1>
        <GoBackButton text={"Go Back"} type="prev" />
      </header>
      <main className={styles.main}>
        {Array(4).fill(null).map((_, index) => (
          <div
            key={index}
            className={`${styles.article} ${hoveredIndex === index ? styles.hoveredArticle : ''}`} // Add a class for hovered article
            onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on hover
            onMouseLeave={() => setHoveredIndex(null)} // Clear hovered index on mouse leave
          >
            <h2 className={styles.articleTitle}>Insider</h2>
            <p className={styles.articleDate}>09/08/23</p>
            <hr className={styles.separator} />
            {/* Conditional rendering of the video or description */}
            {hoveredIndex === index && ( // Show the content only for the hovered article
              <div className={styles.hoverContent}>
                <video controls
                  className={styles.videoThumbnail}
                >
                  <source
                    src={"https://www.w3schools.com/html/movie.mp4"}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className={styles.textContent}>
                  <h2 className={styles.articleTitle}>Insider</h2>
                  <p>
                    With Our Cutting-Edge Computer Vision Technology, We Are
                    Able To Provide Our Clients With A Comprehensive Analysis
                    Of Their Employees &apos; Work Efficiency. You Are Enabled To
                    Track Any And All Events Or Activities, So You Can Make
                    Data-Driven Decisions About Your.
                  </p>
                  <p className={styles.articleDate}>09/08/23</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}
