import { SubmitHandler, useForm } from "react-hook-form";
import { IMyForm } from "../interfaces/form-type";
import { useForms } from "../hooks/useForms";
import styled from "styled-components";

const FormInput = styled.input`
  color: --text-color;
  padding: 0.5rem 1.5rem;
`

const FormButton = styled.button`
  color: --text-color;
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 5px;
`

export const About: React.FC = () => {
    const {tasks, setTasks} = useForms();
    const saveElement: SubmitHandler<IMyForm> = data => {
        setTasks((prev) => [...prev, data]);
        reset();
    }
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<IMyForm>({
        mode: "onBlur",
    });
    console.log(isValid)
    return (
        <form onSubmit={handleSubmit(saveElement)}>
            <label>
                Имя:
                <FormInput
                    placeholder="Введите ваше имя"
                    type="text"
                    {...register("name", {
                        required: "Обязательно к заполнению",
                        minLength: {
                            value: 8,
                            message: "Больше слов",
                        },
                    })}
                />
            </label>
            <label>
                Возраст:
                <FormInput
                    placeholder="Введите ваш возраст"
                    type="number"
                    {...register("age", {
                        required: "Обязательно к заполнению",
                        minLength: {
                            value: 2,
                            message: "Больше цифр",
                        },
                    })}
                />
            </label>
            <label>
                Почта:
                <FormInput
                    placeholder="Введите вашу почту"
                    type="email"
                    {...register("email", {
                        required: "Обязательно к заполнению",
                        pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        minLength: {
                            value: 10,
                            message: "Введите почту форма example@site.ru",
                        },
                    })}
                />
            </label>
            <label>
                Номер телефона:
                <FormInput
                    placeholder="Введите номер вашего телефона"
                    {...register("phoneNumber", {
                        required: "Обязательно к заполнению",
                        pattern: /^(8|\+7)?\d{10}$/,
                        maxLength: {
                            value: 12,
                            message: "Введите номер телефона без +",
                        },
                    })}
                />
            </label>
            <p>{errors.name?.message}</p>
            <FormButton disabled={!isValid} type="submit">Сохранить</FormButton>
            {tasks.map((task) => (
                <p>
                    {task.name} - {task.age}
                </p>
            ))}
        </form>
    );
};
