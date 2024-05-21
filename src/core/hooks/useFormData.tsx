import { useState } from "react";
import { IPdfData } from "../interfaces/pdfform-type";
import { useForm } from "react-hook-form";

export const useFormData = () => {
  const [formData, setFormData] = useState<IPdfData | null>(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IPdfData>({
    mode: "onBlur",
  });

  const generatePdfFile = (data: IPdfData) => {
    setFormData(data);
  };

  return { handleSubmit, generatePdfFile, register, errors, formData };
};
