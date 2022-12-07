import cls from "./DealerMap.module.scss";
import useTranslation from "next-translate/useTranslation";
import { useWindowWidth } from "hooks/useWindowWith";
import DMap from "./DMap/DMap";

export default function DealerMap() {
  const { t } = useTranslation("common");
  const windowWidth = useWindowWidth();

  return (
    <section className={cls.DealerMap}>
      {windowWidth > 768 ? <DMap /> : <></>}
    </section>
  );
}
