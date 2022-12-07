import Image from "next/image";
import { useRouter } from "next/router";
import { NextCardIcon } from "../Icons";

import cls from "./ProductionCard.module.scss";

const ProductionCard = ({
  name = "",
  type = "",
  image = "",
  bgImage = "",
  hoverWithImage = false,
  categoryId = "1",
}) => {
  const router = useRouter();

  return (
    <figure
      className={`${cls.card} ${
        hoverWithImage ? cls.hoverWithImage : cls.hoverWithoutImage
      }`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {!hoverWithImage && (
        <figcaption className={`${cls.hover__elem}`}>
          <h4 className={cls.card__title}>{name}</h4>
          <h5 className={cls.card__subtitle}>{type}</h5>
        </figcaption>
      )}
      <div className={cls.card__imgWrapper}>
        <Image src={image} layout="fill" objectFit="cover" alt={name} />
      </div>
      <figcaption className={cls.card__info}>
        <h4 className={cls.card__title}>{name}</h4>
        <h5 className={cls.card__subtitle}>{type}</h5>
        {!hoverWithImage && (
          <button
            className={`${cls.hover__elem} ${cls.hover__btn}`}
            onClick={() => router.push(`/products/configurator/${categoryId}`)}
          >
            <span>Узнайте больше</span>
            <NextCardIcon />
          </button>
        )}
      </figcaption>
      {hoverWithImage && (
        <div className={cls.wrapper}>
          <div className={cls.wrapper__info}>
            <h4 className={cls.card__title}>{name}</h4>
            <h5 className={cls.card__subtitle}>{type}</h5>
          </div>
          <div className={cls.wrapper__btnList}>
            <button
              className={cls.wrapper__btn}
              onClick={() => router.push(`/products/${categoryId}`)}
            >
              <span>Узнайте больше</span>
              <NextCardIcon />
            </button>
            <span className={cls.line}></span>
            <button
              className={cls.wrapper__btn}
              onClick={() => router.push(`/configurator/${categoryId}`)}
            >
              <span>Конфигуратор</span>
              <NextCardIcon />
            </button>
          </div>
        </div>
      )}
    </figure>
  );
};

export default ProductionCard;
