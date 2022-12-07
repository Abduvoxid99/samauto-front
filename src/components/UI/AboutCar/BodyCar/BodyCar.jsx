import cls from "./BodyCar.module.scss";
import { Container } from "@mui/material";
import { bodyData, featuresData } from "./data";

export default function BodyCar() {
  return (
    <div className={cls.BodyCar}>
      <Container>
        <h2 className={cls.title}>​Преимущества кузова</h2>
        <div className={cls.bodyContainer}>
          {bodyData.map((item, index) => (
            <div
              key={index + "row"}
              className={`${cls.row} ${item.position && cls.rowReverse}`}
            >
              <div className={cls.firstCard}>
                <h3>{item.title}</h3>
                <p className={cls.description}>{item.description}</p>
                <div className={cls.properties}>
                  {item?.properties &&
                    item?.properties?.map((el, i) => (
                      <p key={i + "el"}>&nbsp; &#x2022; &nbsp; {el}</p>
                    ))}
                </div>
              </div>
              <div className={cls.secondCard}>
                <img className={cls.img} src={item.imgUrl} alt={item.imgUrl} />
              </div>
            </div>
          ))}
        </div>
        <h2 className={cls.title} style={{ marginTop: "80px" }}>
          ​Особенностей{" "}
        </h2>
        <div className={cls.bodyContainer}>
          {featuresData.map((item, index) => (
            <div
              key={index + "row-2"}
              className={`${cls.row} ${item.position && cls.rowReverse}`}
            >
              <div className={cls.firstCard}>
                <h3>{item.title}</h3>
                <p className={cls.description}>{item.description}</p>
                <div className={cls.properties}>
                  {item?.properties &&
                    item?.properties?.map((el, i) => (
                      <p key={i + "el-2"}>&nbsp; &#x2022; &nbsp; {el}</p>
                    ))}
                </div>
              </div>
              <div className={cls.secondCard}>
                <img className={cls.img} src={item.imgUrl} alt={item.imgUrl} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
