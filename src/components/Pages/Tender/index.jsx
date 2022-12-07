import cls from "./styles.module.scss";
import TenderCompany from "components/UI/TenderCompany/TenderCompany";

export function Tender() {
  return (
    <main className={cls.main}>
      <TenderCompany />
    </main>
  );
}
