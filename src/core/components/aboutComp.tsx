import { SubmitHandler, useForm } from "react-hook-form";
import { IMyForm } from "../interfaces/form-type";
import { useForms } from "../hooks/useForms";
import styled from "styled-components";


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
                <input
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
                <input
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
                <input
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
                <input
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
            <button disabled={!isValid} type="submit">Сохранить</button>
            {tasks.map((task) => (
                <p>
                    {task.name} - {task.age}
                </p>
            ))}
        </form>
    );
};
