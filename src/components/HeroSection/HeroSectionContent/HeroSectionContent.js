"use client";

import { Link } from "react-scroll";
import { cities } from "./citiesArray";
import TopLeftBorder from "@/components/icons/TopLeftBorder";
import TopRightBorder from "@/components/icons/TopRightBorder";
import BottomRightBorder from "@/components/icons/BottomRightBorder";
import BottomLeftBorder from "@/components/icons/BottomLeftBorder";
import textData from "@/text/textData.json";

export default function HeroSectionContent() {
  return (
    <div className="div bg-bgColor w-[100%] h-[642px] sm:h-[531px] md:h-[763px] absolute">
      <div className="container max-w-[280px] md:max-w-[1280px] sm:max-w-[704px] md:gap-[281px] md:px-[24px] flex flex-col relative pt-[0] pb-[0]  mt-[191px] sm:mt-[124px] md:mt-[130px] mx-[auto] mb-[0] sm:flex-row sm:gap-[48px] sm:pb-[64px] md:pb-[104px]">
        <div className="sm:gap-[68px] sm:flex sm:flex-col md:gap-[148px]">
          <h1 className="font-thin uppercase text-white text-[40px] leading-[56px] sm:text-[67px] sm:leading-[81px] sm:tracking-[-0.04em] md:text-[98px] md:leading-[119px] md:tracking-[-0.04em]">
            <span className="font-medium">Uncover</span> carpathian&#39;s
            secrets
          </h1>
          <p className="font-extralight text-[10px] text-white w-[166px] leading-[16px] mt-[24px] sm:mt-[0] sm:tracking-[1.26px] sm:w-[270px] sm:text-[14px] md:w-[630px] md:leading-[24px] md:tracking-[1.44px] md:text-[16px]">
            {cities}
          </p>
        </div>
        <div className="order-[0] md:flex md:flex-col md:justify-between">
          <h2 className="flex flex-col  sm:relative absolute top-[0] right-[0] items-end uppercase text-white text-[37px] mt-[-81px] sm:mt-[-10px] md:mt-[-15px]">
            <span className="relative">
              <span className="font-bold text-[37px] sm:text-[67px] md:text-[98px]">
                7
              </span>
              <span className="font-thin text-[37px] sm:text-[67px] sm:leading-[81px] sm:tracking-[0.13em] md:text-[98px] md:tracking-[0]">
                days
              </span>
            </span>
            <span className="text-[12px] top-[40px] right-[-4px] tracking-[8.6px] absolute text-justify font-light sm:text-[14px] sm:top-[80px] sm:right-[-11px] sm:leading-[17px] sm:tracking-[24.9px] md:right-[-30px] md:text-[16px] md:top-[120px] md:leading-[19px] md:tracking-[36.48px]">
              journey
            </span>
          </h2>
          <div className="flex flex-col gap-[24px] sm:gap-[28px]">
            <p className="text-white font-extralight text-[14px] leading-[20px] pt-[24px] text-justify sm:pt-[56px] sm:text-[16px] w-[280px] sm:w-[230px] md:w-[294px] md:text-[18px] md:leading-[24px]">
              {textData[0]}
            </p>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              duration={700}
              className="text-center uppercase text-white font-bold text-[18px] leading-[48px] bg-inputFocusBg w-[100%] relative sm:leading-[22px] sm:py-[14px] md:py-[16px] md:text-[32px] md:leading-[39px] hover:bg-buttonBg hover:shadow-lg cursor-pointer transition duration-300 ease-in-out"
              activeClass="active"
            >
              Join now
              <TopLeftBorder className="absolute top-0 left-0" />
              <TopRightBorder className="absolute top-0 right-0" />
              <BottomRightBorder className="absolute bottom-0 right-0" />
              <BottomLeftBorder className="absolute bottom-0 left-0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
