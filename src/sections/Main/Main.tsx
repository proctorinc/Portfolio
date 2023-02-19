import { RefObject, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion"
import { Background, ProfilePicture, SocialMediaCluster, SubTitle, Title } from "./components";
import "./main.css"

type MainSectionProps = {
  innerRef: RefObject<HTMLDivElement>
}

export const Main = (props: MainSectionProps) => {
  const { innerRef } = props;
  const { scrollYProgress } = useScroll({
    target: innerRef,
    offset: ["end end", "end start"]
  })
  const scrollProgress = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <section
      ref={innerRef}
      className="relative flex flex-col items-center justify-center w-full h-screen bg-cover p-28 #bg-slate-900/70 overflow-clip"
    >
      <Background scrollModifier={scrollProgress} />
      <div className="grid grid-cols-2 w-full">
        <div className="flex flex-col justify-center">
          <Title />
          <SubTitle />
          <SocialMediaCluster />
        </div>
        <div className="flex justify-center">
          <ProfilePicture />
        </div>
      </div>
    </section>
  )
}
