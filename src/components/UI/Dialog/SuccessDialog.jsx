import cls from "./Dialog.module.scss";
import { Dialog } from "@mui/material";
import { CloseIcon, SuccesIcon } from "../Icons";

function SuccessDialog({ open, setOpen = () => {} }) {
  return (
    <>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={cls.dialog}>
          <span onClick={() => setOpen(false)} className={cls.close}>
            <CloseIcon />
          </span>
          <div className={cls.body}>
            <span>
              <SuccesIcon />
            </span>
            <h3>Ваш отклик отправлен</h3>
            <p>Спасибо! ВАШЕ СООБЩЕНИЕ БЫЛО ОТПРАВЛЕНО УСПЕШНО</p>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default SuccessDialog;
