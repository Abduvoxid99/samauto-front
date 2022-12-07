import { Container } from "@mui/material";
import List from "../List";
import BannerComponent from "../BannerComponent";
import cards, { images, numbers } from "./data";
import cls from "./About.module.scss";
import Card from "./Card";
import Image from "next/image";

const About = () => {
  return (
    <section className={cls.section}>
      <Container>
        <BannerComponent image="/images/aboutus.png">
          <div className={cls.section__banner__text}>
            <h2>SamAuto — надёжные автомобили для каждого!</h2>
            <p>
              Самаркандский Автомобильный Завод" - Ташкентское представительство
            </p>
          </div>
        </BannerComponent>
        <div className={cls.section__textwrapper}>
          <h2 className={cls.section__title}>Что такое Samauto?</h2>
          <p className={cls.section__desc}>
            Наша компания основана в 2012 году. Сегодня – это официальный дилер
            ООО «СамАвто». Мы предлагаем всю серию транспортных средств ISUZU,
            производимых в Узбекистане, а также оригинальных запасных частей к
            приобретению для физических и юридических лиц.
          </p>
          <p className={cls.section__desc}>
            В 2021 году японская компания Isuzu прекращает выпуск автомобилей
            поколения 729 по всему миру и переходит на более экологичные и
            комфортабельные конфигурации поколения 700P.
          </p>
          <p className={cls.section__desc}>
            В Узбекистане, где автобусы, грузовики и спецтранспорт на базе шасси
            Isuzu выпускает Самаркандский автомобильный завод («СамАвто»,
            SamAuto), решение затронет модели грузовиков NPR 66PB, NQR 71PL, FVR
            33P и FVR 33G, а также автобусов SAZ HC 40 (городского типа) и SAZ
            NP26 (пригородного типа). Они в скором будущем будут сняты с
            производства, сообщили «Газете.uz» в пресс-службе «СамАвто».
          </p>
          <p className={cls.section__desc}>
            В 2021 году японская компания Isuzu прекращает выпуск автомобилей
            поколения 729 по всему миру и переходит на более экологичные и
            комфортабельные конфигурации поколения 700P.
          </p>
          <p className={cls.section__desc}>
            В Узбекистане, где автобусы, грузовики и спецтранспорт на базе шасси
            Isuzu выпускает Самаркандский автомобильный завод («СамАвто»,
            SamAuto), решение затронет модели грузовиков NPR 66PB, NQR 71PL, FVR
            33P и FVR 33G, а также автобусов SAZ HC 40 (городского типа) и SAZ
            NP26 (пригородного типа). Они в скором будущем будут сняты с
            производства, сообщили «Газете.uz» в пресс-службе «СамАвто».
          </p>
        </div>
        <BannerComponent image="/images/aboutus.png" />
        <div className={cls.section__cards__wrapper}>
          <List direction="column" gap="60">
            {cards.length > 0 &&
              cards.map((card, index) => (
                <Card
                  key={card.id}
                  index={index}
                  image={card.image}
                  title={card.title}
                  desc={card.desc}
                />
              ))}
          </List>
        </div>
      </Container>
      <div className={cls.section__numbers}>
        <Container className={cls.section__numbers__container}>
          <h2 className={cls.section__numbers__title}>Интересные цифры</h2>
          <div className={cls.section__numbers__cardwrapper}>
            {numbers?.length > 0 &&
              numbers.map((info, index) => (
                <div
                  key={index + "info"}
                  className={cls.section__numbers__card}
                >
                  <h4 className={cls.section__numbers__card__title}>
                    {info.number}
                  </h4>
                  <p className={cls.section__numbers__card__desc}>
                    {info.desc}
                  </p>
                </div>
              ))}
          </div>
        </Container>
      </div>
      <Container>
        <div className={cls.section__imageswrapper}>
          <h2 className={cls.section__images__title}>Галереи</h2>
          <div className={cls.section__images}>
            {images.length > 0 &&
              images.map((image) => (
                <div className={cls.section__images__item} key={image.id}>
                  <Image
                    src={image.image}
                    layout="fill"
                    objectFit="cover"
                    alt="img"
                  />
                </div>
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
