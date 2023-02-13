import { Button, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Controller } from "swiper";

import { COLORS } from "@/constants";

import NextBack from "./BackNext";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

const UserInfo: React.FC = () => {
  const [step, setStep] = useState(1);
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const swiper = useSwiper();

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
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
        <Step1 />
      </SwiperSlide>
      <SwiperSlide>
        <Step2 />
      </SwiperSlide>
      <SwiperSlide>
        <Step3 />
      </SwiperSlide>
      <SwiperSlide>
        <Step4 />
      </SwiperSlide>
      <SwiperSlide>
        <Step5 />
      </SwiperSlide>
    </Swiper>
  );
};

export default UserInfo;
