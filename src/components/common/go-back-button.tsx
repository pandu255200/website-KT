"use client"

import React from 'react'

import Image from 'next/image';
import TopLeftArrow from "../../../public/core-team/top-left-arrow.svg"
import { useRouter } from 'next/navigation';


interface ButtonProps {
  text: string;
  type?: string;
  linkUrl?: string;
}


export const GoBackButton: React.FC<ButtonProps> = ({ text, type, linkUrl }) => {
  const router = useRouter()

  const handleGoBack = () => {
    if (type === "prev") {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = '/';
      }
    } else {
      router.push(linkUrl ? linkUrl :"")
    }
  }

  return (
    <button className="goBackButton" onClick={handleGoBack}>
      <span>{text}</span>
      <Image
        src={TopLeftArrow}
        className='arrow'
        style={{ transform: type === "next" ? "rotate(90deg)" : "" }}
        alt="TopLeftArrow"
        width={20}
        height={20}
      />
    </button>)
}

