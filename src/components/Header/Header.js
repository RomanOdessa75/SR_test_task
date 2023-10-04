"use client";
import { Link } from "react-scroll";
import Image from "next/image";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { linksArray } from "./linksArray";

export default function Header() {
  return (
    <>
      <header className="header  pt-[36px] sm:pt-[25px] text-white absolute left-1/2 top-0 z-10 flex w-screen -translate-x-1/2 transform justify-between px-5 pt-9 md:w-full md:px-8 md:pt-[25px] xl:w-[1235px] xl:justify-center xl:px-0 xl:pt-6;">
        <div className="container md:px-[24px] flex justify-between mx-[auto] my-[0] max-w-[280px] md:max-w-[1280px] sm:max-w-[704px]">
          <a href="#">
            <Image
              src="/img/Log.png"
              alt="Logo"
              width={59}
              height={21}
              priority={true}
            ></Image>
            <p className="logo">CarpTravel</p>
          </a>
          <nav className="sm:block hidden">
            <ul className="flex flex-row gap-14 sm:text-[14px] sm:leading-[17px] sm:tracking-[0.1em]">
              {linksArray.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass="active"
                    className="cursor-pointer relative overflow-hidden before:content-[''] before:absolute before:w-full before:h-0 before:border-b-2 before:border-opacity-80 before:border-white before:bg-buttonBg before:bottom-0 before:left-0 before:transform before:scale-x-0 before:transform-origin-left before:transition-transform before:transition-duration-300 before:transition-timing-linear before:hover:scale-x-100"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <BurgerMenu />
        </div>
      </header>
    </>
  );
}
