import Image from "next/image";
import cls from "./Card.module.scss";

const Card = ({ title = "", desc = "", image = "", index = 0 }) => {
  return (
    <div className={`${cls.card} ${index % 2 ? "" : cls.reverse}`}>
      <div className={cls.card__img}>
        <Image src={image} layout="fill" objectFit="cover" alt={image} />
      </div>
      <div className={cls.card__info}>
        <h2 className={cls.card__info__title}>{title}</h2>
        <p className={cls.card__info__desc}>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
