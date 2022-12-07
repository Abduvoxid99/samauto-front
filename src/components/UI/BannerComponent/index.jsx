import Image from "next/image";
import cls from "./BannerComponent.module.scss";

const BannerComponent = ({ image = "", children }) => {
  return (
    <div className={cls.banner}>
      <Image src={image} layout="fill" objectFit="cover" alt={image} />
      {children}
    </div>
  );
};

export default BannerComponent;
