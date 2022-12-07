import { RightCarouseIcon } from "../Icons";
import cls from "./Arrows.module.scss";

export function SampleNextArrow(props) {
  const { className, styles = "", onClick } = props;
  return (
    <div
      className={`${className} ${cls.nextArrow} ${styles}`}
      onClick={onClick}
    >
      <RightCarouseIcon />
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { className, styles = "", onClick } = props;
  return (
    <div
      className={`${className} ${cls.prevArrow} ${styles}`}
      onClick={onClick}
    >
      <RightCarouseIcon />
    </div>
  );
}
