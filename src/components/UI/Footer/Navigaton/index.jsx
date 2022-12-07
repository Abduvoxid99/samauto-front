import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

import cls from "./navigation.module.scss";

const Navigation = ({ links = [], title = "" }) => {
  const { t } = useTranslation("common");

  return (
    <div className={cls.navigation}>
      <h4 className={cls.navigation__title}>{title}</h4>
      <ul className={cls.navigation__list}>
        {links.length > 0 &&
          links.map((link, index) => (
            <Link href={link.href} key={index} passHref>
              <span className={cls.navigation__link}>{link.name}</span>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default Navigation;
