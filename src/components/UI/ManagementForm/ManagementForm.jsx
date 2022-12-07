import cls from "./ManagementForm.module.scss";
import PageNavigation from "../PageNavigation";
import Input from "../Forms/Input";
import RedButton from "../Buttons/RedButton";
import { useForm } from "react-hook-form";
import { formData } from "./data";
import SuccessDialog from "../Dialog/SuccessDialog";
import { useState } from "react";

function ManagementForm() {
  const [open, setOpen] = useState(false);

  const items = [
    {
      label: "Главная",
    },
    {
      label: "О компании",
    },
    {
      label: "Руководство",
    },
  ];
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
    setOpen(true);
  };

  return (
    <>
      <section className={cls.root}>
        <PageNavigation title="Руководство" items={items} />
        <div className={cls.box}>
          <div className={cls.formWrapper}>
            <h3>Задать вопрос</h3>
            <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
              {formData.map((item, index) => (
                <Input
                  key={index + "form-input"}
                  className={cls.input}
                  name={item.name}
                  labelName={item.label}
                  register={register}
                  watch={watch}
                  errors={errors}
                  required
                />
              ))}
              <RedButton type="submit" fullWidth>
                Отправить
              </RedButton>
            </form>
          </div>
        </div>
      </section>
      <SuccessDialog open={open} setOpen={setOpen} />
    </>
  );
}

export default ManagementForm;
