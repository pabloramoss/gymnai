import { Button, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Controller } from "swiper";

import { COLORS } from "@/constants";
import { UserData, InitialUserData } from "@/lib/types";

import NextBack from "./BackNext";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Submit from "./Submit";

const UserInfo: React.FC = () => {
  const [userData, setUserData] = useState<UserData>(InitialUserData);

  return (
    <div>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        style={{ color: "white", width: "100%", background: COLORS.background, height: "100%" }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Step1 setUserData={setUserData} userData={userData} />
        </SwiperSlide>
        <SwiperSlide>
          <Step2 setUserData={setUserData} userData={userData} />
        </SwiperSlide>
        <SwiperSlide>
          <Step3 setUserData={setUserData} userData={userData} />
        </SwiperSlide>
        <SwiperSlide>
          <Step4 setUserData={setUserData} userData={userData} />
        </SwiperSlide>
        <SwiperSlide>
          <Step5 setUserData={setUserData} userData={userData} />
        </SwiperSlide>
      </Swiper>
      <Submit userData={userData} />
    </div>
  );
};

export default UserInfo;
