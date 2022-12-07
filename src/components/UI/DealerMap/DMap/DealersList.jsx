import { dealersList } from "../data";
import { RightMapIcon } from "components/UI/Icons";
import cls from "./DMap.module.scss";

export default function DealersList() {
  return (
    <div className={cls.dealersList}>
      {dealersList.map((item, index) => (
        <div key={index + "dealer"} className={cls.dealerItem}>
          <div>
            <h3>{item.name}</h3>
            <p className={cls.phone}>{item.phone}</p>
            <p className={cls.address}>{item.address}</p>
          </div>
          <span>
            <RightMapIcon />
          </span>
        </div>
      ))}
    </div>
  );
}
