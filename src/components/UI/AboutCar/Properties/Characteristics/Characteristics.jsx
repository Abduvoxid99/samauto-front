import { charasteristics } from "./data";
import cls from "./Characteristics.module.scss";

export default function Characteristics() {
  return (
    <div className={cls.Characteristics}>
      {charasteristics.map((item, index) => (
        <div key={index + "card"} className={cls.card}>
          <div className={cls.left}>{item.property}</div>
          <div className={cls.right}>{item.value}</div>
        </div>
      ))}
    </div>
  );
}
