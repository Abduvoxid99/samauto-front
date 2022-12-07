import cls from "./TenderCompany.module.scss";
import { Container } from "@mui/material";
import PageNavigation from "../PageNavigation/index";

export default function TenderCompany() {
  const items = [
    {
      label: "Главная",
    },
    {
      label: "Тендер компании",
    },
  ];
  return (
    <section className={cls.section}>
      <Container>
        <PageNavigation title="Тендер компании" items={items} />
      </Container>
      <div className={cls.section__body}>
        <Container>
          <div className={cls.row}>
            {[...Array(4).keys()].map((item, i) => (
              <div key={i} className={cls.card}>
                <p className={cls.date}>16 февраля 2022</p>
                <p className={cls.description}>
                  СП ООО . Самаркандский автомобильный завод объявляет отбор
                  наилучшего предложения на закупку Услуги по перевозки груза по
                  направлению Пизендорф, Австрия - Самарканд, Узбекистан.
                </p>
                <p className={cls.more}>
                  Более подробная информация по ссылке:
                </p>
                <a href="https://xt-xarid.uz/procedure/487022/core">
                  Link: https://xt-xarid.uz/procedure/487022/core
                </a>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
