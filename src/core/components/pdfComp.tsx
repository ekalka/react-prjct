import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./funcComponents/MyDocuments";
import { useFormData } from "../hooks/useFormData";
import { useState } from "react";

const PdfForm = () => {
  const { handleSubmit, generatePdfFile, register, errors, formData } = useFormData();
  const [loading, setLoading] = useState(false);
  const [showLink, setShowLink] = useState(false);

  const onSubmit = (data: any) => {
    setLoading(true);
    setShowLink(false);
    generatePdfFile(data);
    setTimeout(() => {
      setLoading(false);
      setShowLink(true);
    }, 3000); // Задержка в 3 секунды
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          data-testid={"input-update"}
          placeholder={"Введите ваше имя"}
          alt={"test"}
          {...register("name", {
            required: "Поле обязательно для заполнения!",
            minLength: {
              value: 5,
              message: "Нужно больше символов",
            },
          })}
        />
        <input
          type="email"
          placeholder={"Введите ваш email"}
          {...register("email", {
            required: "Поле обязательно для заполнения!",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Введите корректный email",
            },
          })}
        />
        <input
          type="number"
          placeholder={"Введите ваш возраст"}
          {...register("age", {
            required: "Поле обязательно для заполнения!",
            min: {
              value: 0,
              message: "Возраст не может быть отрицательным",
            },
          })}
        />
        <input
          type="text"
          placeholder={"Введите ваш адрес"}
          {...register("address", {
            required: "Поле обязательно для заполнения!",
          })}
        />
        <input
          type="file"
          accept="image/*"
          {...register("picture", {
            required: "Загрузите картинку!",
          })}
        />
        {errors && <div>{errors?.name?.message}</div>}
        <button type="submit">Сохранить</button>
      </form>
      {formData && showLink && (
        <PDFDownloadLink
          document={
            <MyDocument
              name={formData.name}
              email={formData.email}
              age={formData.age}
              address={formData.address}
              picture={formData.picture}
            />
          }
          fileName={`${formData.name}.pdf`}
        >
          {({ loading: pdfLoading }) => (pdfLoading ? "Загрузка..." : "Скачать")}
        </PDFDownloadLink>
      )}
    </>
  );
};

export default PdfForm;
