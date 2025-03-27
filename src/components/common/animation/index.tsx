"use client"

import { useEffect } from 'react';
import Styles from './style.module.css';

import NavLogo from "../../../../public/home/nav-logo.png";
import Image from 'next/image';


export const WordFlick = () => {
  useEffect(() => {
    const words = [
      'Empowering the future',
    ];
    let part = '';
    let i = 0;
    let offset = 0;
    const len = words.length;
    let forwards = true;
    let skipCount = 0;
    const skipDelay = 5;
    const speed = 170;

    const wordflick = () => {
      const interval = setInterval(() => {
        if (forwards) {
          if (offset >= words[i].length) {
            ++skipCount;
            if (skipCount === skipDelay) {
              forwards = false;
              skipCount = 0;
            }
          }
        } else {
          if (offset === 0) {
            forwards = true;
            i++;
            offset = 0;
            if (i >= len) {
              i = 0;
            }
          }
        }
        part = words[i].substr(0, offset);
        if (skipCount === 0) {
          if (forwards) {
            offset++;
          } else {
            offset--;
          }
        }
        const wordElement = document.querySelector(`.${Styles.word}`);
        if (wordElement) {
          wordElement.textContent = part;
        }
      }, speed);

      return () => clearInterval(interval);
    };

    wordflick();
  }, []);

  return (
    <div className={Styles.container}>
      <div className={Styles.word}>
      </div>
      <Image src={NavLogo.src} alt="logo" className={Styles.logo} layout="fixed" width={170} height={59} />

    </div>
  )
};

