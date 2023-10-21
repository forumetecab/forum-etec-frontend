import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as S from "./slides.styled";
import imgCrono from "../../assets/banners/img-crono.jpeg";
import img26 from "../../assets/banners/img-26.jpeg";
import img27 from "../../assets/banners/img-27.jpeg";
import img272 from "../../assets/banners/img-27-2.jpeg";
import img28 from "../../assets/banners/img-28.jpeg";
import img29 from "../../assets/banners/img-29.jpeg";

const images: { [key: string]: string[] } = {
  "25": [img26],
  "26": [img26],
  "27": [img27, img272],
  "28": [img28],
  "29": [img29],
  crono: [imgCrono],
  all: [imgCrono, img26, img27, img272, img28, img29],
};

interface Props {
  day: keyof typeof images;
}

const Slides = ({ day }: Props) => {
  return (
    <S.Container>
      <Carousel
        autoPlay
        swipeable
        showStatus={false}
        infiniteLoop
        emulateTouch
        interval={8000}
      >
        {images[day].map((img, index) => (
          <S.Image src={img} key={index} />
        ))}
      </Carousel>
    </S.Container>
  );
};

export default Slides;
