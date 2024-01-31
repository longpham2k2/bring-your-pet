"use client";

import { Fragment, useState } from "react";
import { PieChartFilled, ContactsFilled, PhoneFilled } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import bg from "../../../public/dog-lifestyle-care-with-owner-scaled.jpg";
import bg2 from "../../../public/portrait-samoyed-dog-grooming-with-tools-grooming-around-hair-dryer-comb-scissors-scaled.jpg";

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [current, setCurrent] = useState("mail");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="p-5 z-[999]">
      <div
        className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-lg xl:max-w-screen-xl mx-auto flex"
        aria-label="Global"
      >
        <div className="w-1/2 flex content-center items-center p-[10px] relative flex-wrap">
          <div className="mb-[20px]">
            <h1 className="font-ohbaby text-[#1c164b] font-normal text-4xl tracking-[1.6px] mb-[20px]">
              Your Pet Our Care
            </h1>
            <p className="font-barlow text-[#1c164b] text-5xl font-bold uppercase">
              Chăm sóc toàn diện <br className="hidden md:block" /> Tâm huyết
              trọn vẹn!
            </p>
          </div>
          <div className="font-barlow text-[#1c164b] text-xl">
            <p>Hãy để chúng tôi thay bạn chăm sóc “BOSS” một cách tốt nhất</p>
          </div>
        </div>
        <div className="w-[28%]">
          <div
            className="bg-cover bg-no-repeat bg-center rounded-[100px] mt-[60px] mb-[20px] mx-[20px]"
            style={{ backgroundImage: `url(${bg.src})` }}
          >
            <div className="h-[500px]"></div>
          </div>
        </div>
        <div className="w-[21%]">
          <div
            className="bg-cover bg-no-repeat bg-center rounded-[100px] mt-[10px] mb-[90px] mx-[10px]"
            style={{ backgroundImage: `url(${bg2.src})` }}
          >
            <div className="h-[500px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
