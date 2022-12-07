import cls from "./DMap.module.scss";
import { SearchMapIcon } from "components/UI/Icons";

export default function Input({
  className,
  type = "text",
  placeholder = "Введите регион...",
  ...restProps
}) {
  return (
    <div className={cls.inputBox}>
      <input
        type={type}
        placeholder={placeholder}
        className={`${cls.input} ${className}`}
        {...restProps}
      />
      <span className={cls.endAdorment}>
        <SearchMapIcon />
      </span>
    </div>
  );
}
