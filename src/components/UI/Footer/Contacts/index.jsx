import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import cls from "./Contacts.module.scss";

const Contacts = ({ Logo, phone = "", socialMedias = [] }) => {
  const { t } = useTranslation("common");

  return (
    <div className={cls.contacts}>
      <Link href="/" passHref>
        <span className={cls.contacts__logo}>
          <Logo />
        </span>
      </Link>
      <Link href={`tel:${phone?.replace(/[\s\-\(\)]+/g, "")}`} passHref>
        <span className={cls.contacts__phone}>{phone}</span>
      </Link>
      <div>
        <span style={{ color: "#CCCCCB" }}>Соц-сети:</span>
        <ul className={cls.contacts__socialList}>
          {socialMedias.length > 0 &&
            socialMedias.map((social, index) => (
              <li key={index}>
                <Link href={social.link} passHref>
                  {social.icon()}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
