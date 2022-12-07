import GreyButton from "../Buttons/GreyButton";
import RedButton from "../Buttons/RedButton";
import Properties from "./Properties/Properties";
import cls from "./AboutCar.module.scss";
import { Container } from "@mui/material";
import { DownloadIcon } from "../Icons";
import BodyCar from "./BodyCar/BodyCar";
import PageNavigation from "../PageNavigation";

export default function AboutCar() {
  const items = [
    {
      label: "Главная",
    },
    {
      label: "Продукция",
    },
    {
      label: "Самосвал ISUZU FVR 71PL",
    },
  ];

  return (
    <section className={cls.AboutCar}>
      <PageNavigation title="Самосвал ISUZU FVR 71PL" items={items} />

      <div className={cls.row}>
        <Container>
          <div className={cls.content}>
            <div className={cls.card}>
              <p className={cls.description}>
                среди автомобилей isuzu с колесной формулой 4х2 forward 18.0
                является самым тяжелым и грузоподъемным шасси. кабина,
                обладающая высокими аэродинамическими показателями, мощный
                6-цилиндровый двигатель стандарта евро-5, работающий в паре с
                9-ти ступенчатой коробкой передач – всё это позволило isuzu
                forward 18.0 достичь отличных показателей динамики и топливной
                экономичности. при этом isuzu forward 18.0 способен перевозить
                до 12,5 тонны груза - это один из лучших показателей среди
                грузовых автомобилей 2-х осной компоновки.
              </p>
              <div className={cls.buttons}>
                <RedButton>Сравнить модели</RedButton>
                <GreyButton beforeIcon={<DownloadIcon />}>
                  Скачать характеристики
                </GreyButton>
              </div>
            </div>
            <div className={cls.card}>
              <div className={cls.image}>
                <img src="/images/isuzu.jpg" alt="isuzz" />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Properties />
      <BodyCar />
    </section>
  );
}
