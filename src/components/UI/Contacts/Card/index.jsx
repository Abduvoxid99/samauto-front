import cls from "./Card.module.scss";

const Card = ({ title = "", items = [] }) => {
  return (
    <div className={cls.card}>
      <h2>{title}</h2>
      <div>
        {items.length > 0 &&
          items.map((item, index) => (
            <span key={index + "contact-1"}>
              <div></div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </span>
          ))}
      </div>
    </div>
  );
};

export default Card;
