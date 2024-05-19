import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./funcComponents/MyDocuments";
import { useFormData } from "../hooks/useFormData";

const PdfForm = () => {
  const { handleSubmit, generatePdfFile, register, errors, formData } = useFormData();
  return (
    <>
      <form onSubmit={handleSubmit(generatePdfFile)}>
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
          type="file"
          accept="image/*"
          {...register("picture", {
            required: "Загрузите картинку!",
          })}
        />
        {errors && <div>{errors?.name?.message}</div>}
        <button type="submit">Сохранить</button>
      </form>
      {formData && (
        <PDFDownloadLink
          document={<MyDocument name={formData.name} picture={formData.picture} />}
          fileName={`${formData.name}.pdf`}
        >
          {({ loading }) => (loading ? "Загрузка..." : "Скачать")}
        </PDFDownloadLink>
      )}
    </>
  );
};

export default PdfForm;
