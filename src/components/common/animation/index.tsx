"use client";

import { useEffect, useRef } from "react";
import Styles from "./style.module.css";
import Image from "next/image";
import NavLogo from "../../../../public/home/nav-logo.png";

export const WordFlick = () => {
  const wordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = ["Empowering the future"];
    let wordIndex = 0;
    let offset = 0;
    const speed = 80;

    let intervalId: NodeJS.Timeout;

    intervalId = setInterval(() => {
      if (!wordRef.current) return;

      const currentWord = words[wordIndex];

      if (offset <= currentWord.length) {
        const part = currentWord.substring(0, offset);
        wordRef.current.textContent = part;
        offset++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={Styles.container}>
      <div className={Styles.word} ref={wordRef}></div>
      <Image
        src={NavLogo.src}
        alt="logo"
        className={Styles.logo}
        width={170}
        height={59}
      />
    </div>
  );
};

