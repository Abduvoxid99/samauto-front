import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import Headroom from "react-headroom";
import cls from "./Header.module.scss";
import {
  LogoSamAutoWhite,
  SearchIcon,
  ArrowBottomIcon,
  HamburgerIcon,
} from "../Icons";
import { links, activeLinks } from "./data";

export function Header() {
  const [activeLink, setActiveLink] = useState("/");
  const router = useRouter();
  const { t } = useTranslation("common");

  useEffect(() => {
    if (activeLinks.includes(router.asPath)) {
      setActiveLink(router.asPath?.slice(1));
    }
  }, [router.asPath]);

  return (
    <Headroom>
      <header className={cls.header}>
        <Container className={cls.container}>
          <div className={cls.left}>
            <span className={cls.hamburger}>
              <HamburgerIcon />
            </span>
            <span className={cls.logo}>
              <Link href="/">
                <a>
                  <LogoSamAutoWhite />
                </a>
              </Link>
            </span>
          </div>
          <div className={cls.row}>
            <nav>
              <ul className={cls.navMenu}>
                {links.map((item) => (
                  <li
                    className={`${cls.navLink} 
                    ${item.url === activeLink ? cls.active : ""}
                    ${item.children ? cls.hasChild : ''}
                      `}
                    key={item.name + "link"}
                  >
                    {
                      item.url ? (
                        <Link href={`/${item.url}`}>
                          <a
                            className={cls.navLinkText}
                            onClick={() => setActiveLink(item.url)}
                          >
                            {item.name}
                          </a>
                        </Link>
                      ) : (
                        <span
                          className={cls.navLinkText}
                          onClick={() => setActiveLink(item.url)}
                        >
                          {item.name}
                        </span>
                      )
                    }
                    {item.children && (
                      <span className={cls.arrowBottom}>
                        <ArrowBottomIcon />
                      </span>
                    )}
                    <ul className={cls.innerUl}>
                      {item.children &&
                        item.children.map((el, i) => (
                          <li key={i + "inner-li"} className={cls.innerLi} onClick={() => setActiveLink(item.url)}>
                            <Link href={el.link}>
                              <a>{el.name}</a>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={cls.right}>
              <div className={cls.language}>
                Ру <ArrowBottomIcon />
              </div>
              <div className={cls.search}>
                <SearchIcon />
              </div>
            </div>
          </div>
        </Container>
      </header>
    </Headroom>
  );
}
