import cls from "./Management.module.scss";
import { Container } from "@mui/material";
import PageNavigation from "../PageNavigation";
import PersonCard from "./PersonCard";
import { managementData } from "./data";

function Management() {
  const items = [
    {
      label: "Главная",
    },
    {
      label: "О компании",
    },
    {
      label: "Руководство",
    },
  ];
  return (
    <section className={cls.root}>
      <PageNavigation title="Руководство" items={items} />
      <div className={cls.managementBody}>
        <Container>
          <img
            className={cls.image}
            src="/images/management/management.jpg"
            alt="bannerManagement"
          />
          <div className={cls.cards}>
            {managementData.map((item, index) => (
              <PersonCard key={index + "person"} data={item} />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Management;
