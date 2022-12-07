import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import GreyButton from "../Buttons/GreyButton";
import RedButton from "../Buttons/RedButton";
import Carousel from "../Carousel";
import { buttons, images } from "./data";

import cls from "./Products.module.scss";

const Products = () => {
  const [activeItem, setActiveItem] = useState(
    buttons?.length && buttons[0].id
  );
  const router = useRouter()

  return (
    <section className={cls.section} id="main_products">
      <h2 className={cls.section__title}>Продукция</h2>
      <div className={cls.section__btnList}>
        {buttons?.length > 0 &&
          buttons.map((btn) => (
            <GreyButton
              onClick={() => setActiveItem(btn.id)}
              className={`${cls.section__btn} ${
                btn.id !== activeItem ? cls.btn__disabled : ""
              }`}
              key={btn.name + "btn"}
            >
              {btn.name}
            </GreyButton>
          ))}
      </div>
      <div className={cls.section__carousel}>
        <Carousel
          options={{
            rewind: false,
            type: "slide",
            heightRatio: 0.5,
            padding: "210px",
            pagination: false,
            start: 1,
          }}
          hasTrack={false}
        >
          {images?.length > 0 &&
            images.map((img) => (
              <Image
                key={img.id}
                src={img.img}
                layout="fill"
                objectFit="cover"
                alt='carousel image'
              />
            ))}
        </Carousel>
      </div>
      <div className={cls.section__btnList}>
        <RedButton className={cls.section__btn} onClick={() => router.push('/products/configurator')}>Узнайте больше</RedButton>
        <GreyButton className={cls.section__btn} onClick={() => router.push('/configurator')}>Конфигуратор</GreyButton>
      </div>
    </section>
  );
};

export default Products;
