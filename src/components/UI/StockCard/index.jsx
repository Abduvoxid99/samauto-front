import Image from "next/image";
import { useRouter } from "next/router";
import cls from "./StockCard.module.scss";
import { AccordionIcon } from "../Icons";

const StockCard = ({ image = "", title = "", desc = "", id = "" }) => {
  const router = useRouter();
  return (
    <div className={cls.card}>
      <div className={cls.card__img}>
        <Image src={image} layout="fill" objectFit="cover" alt={title} />
      </div>
      <div className={cls.card__info}>
        <h3 className={cls.card__info__title}>{title}</h3>
        <p className={cls.card__info__desc}>{desc}</p>
        <button
          className={cls.card__info__btn}
          onClick={() => router.push(`/special-offers/stock/${id}`)}
        >
          <span>Подробнее</span>
          <AccordionIcon color="currentColor" />
        </button>
      </div>
    </div>
  );
};

export default StockCard;
