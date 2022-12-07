import useTranslation from "next-translate/useTranslation";
import { Container } from "@mui/material";

import { FooterLogo } from "../Icons";
import Contacts from "./Contacts";
import Navigation from "./Navigaton";
import cls from "./Footer.module.scss";
import { navigations, socialMedias } from "./data";

export function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className={cls.footer}>
      <Container>
        <div className={cls.box}>
          <Contacts
            Logo={() => <FooterLogo />}
            phone="+998 (55) 701-87-00"
            socialMedias={socialMedias}
          />

          <div className={cls.navigations__box}>
            {navigations.map((navigation, index) => (
              <Navigation
                key={index}
                title={navigation.title}
                links={navigation.links}
              />
            ))}
          </div>
        </div>
        <div className={cls.footer__info}>SamAuto.uz - Все права защищены.</div>
      </Container>
    </footer>
  );
}
