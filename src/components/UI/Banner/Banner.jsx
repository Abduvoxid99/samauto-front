import cls from "./Banner.module.scss";
import Image from "next/image";
import { SamplePrevArrow, SampleNextArrow } from "../Arrows/Arrows";
import Slider from "react-slick";
import RedButton from "../Buttons/RedButton";

export default function Banner() {
  const images = [
    {
      imgUrl: "/images/isuzu.jpg",
    },
    {
      imgUrl: "/images/isuzu.jpg",
    },
    {
      imgUrl: "/images/isuzu.jpg",
    },
    {
      imgUrl: "/images/isuzu.jpg",
    },
    {
      imgUrl: "/images/isuzu.jpg",
    },
  ];

  return (
    <section className={cls.Banner} id="banner">
      <Slider
        autoplay
        dots={true}
        lazyLoad={true}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
        customPaging={() => <span className={cls.sliderDots}></span>}
        appendDots={(dots) => (
          <span className={cls.controls}>
            <ul className={cls.controls__dotsList}>{dots}</ul>
          </span>
        )}
        adaptiveHeight={true}
      >
        {images.map((item, i) => (
          <div key={i + "img"} className={cls.slideItem}>
            <div className={cls.img}>
              <Image
                priority={true}
                src={item.imgUrl}
                alt="banner"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className={cls.content}>
        <h3>V-cross</h3>
        <h2>ISUZU</h2>
        <RedButton fullWidth className={cls.btn}>
          Тест-драйв
        </RedButton>
      </div>
    </section>
  );
}
