import cls from "./Management.module.scss";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import GreyButton from "../Buttons/GreyButton";
import { useRouter } from "next/router";

function PersonCard({ data = {} }) {
  const router = useRouter();
  return (
    <div className={cls.card}>
      <div className={cls.left}>
        <img src={`/images/management/${data.imgUrl}`} alt="person" />
      </div>
      <div className={cls.right}>
        <h3 className={cls.name}>{data.name}</h3>
        <p className={cls.rank}>{data.rank}</p>
        <div className={cls.rowText}>
          <span>
            <AccessTimeFilledIcon />
          </span>
          <p>{data.time}</p>
        </div>
        <div className={cls.rowText}>
          <span>
            <LocalPhoneIcon />
          </span>
          <p>{data.number}</p>
        </div>
        <div className={cls.rowText}>
          <span>
            <EmailIcon />
          </span>
          <p>
            <a href={`mailto:${data.mail}`}>{data.mail}</a>
          </p>
        </div>
        <GreyButton
          onClick={() => router.push("/about-company/management/23424")}
          className={cls.btn}
        >
          Записатья на приём
        </GreyButton>
      </div>
    </div>
  );
}

export default PersonCard;
