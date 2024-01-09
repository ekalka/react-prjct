import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --dark: black;
        --light: white;
        --transition: all .25s;
        --buttonColor: lightgrey;
        --buttonColorDisabled: rgba(124, 124, 124, 0.73);
    }

    html, body {
        background-color: var(--theme);
        color: var(--text-color);
        font-family: Arial, sans-serif; /* Добавили шрифт */
    }

    *[data-theme=light] {
        transition: var(--transition);
        --theme: var(--light);
        --text-color: var(--dark);

        a {
            color: var(--dark);
            text-decoration: underline; /* Добавили подчеркивание для ссылок */

            &:hover {
                color: darkblue; /* Изменили цвет при наведении на ссылку */
            }
        }

        button {
            background: var(--buttonColor);
            color: var(--dark);
            border-radius: 4px; /* Добавили скругление углов для кнопок */
            padding: 8px 16px; /* Изменили отступы кнопок */

            &:disabled {
                background: var(--buttonColorDisabled);
            }
        }

        svg path {
            fill: var(--dark);
        }

        thead, tbody, .ant-table-cell {
            background-color: var(--light) !important;
            color: var(--dark) !important;
            border: 1px solid lightgrey; /* Добавили границу для ячеек таблицы */
            padding: 8px; /* Изменили отступы ячеек таблицы */
        }
    }

    *[data-theme=dark] {
        transition: var(--transition);
        --theme: var(--dark);
        --text-color: var(--light);

        a {
            color: var(--light);
            text-decoration: none; /* Убрали подчеркивание для ссылок */

            &:hover {
                color: lightblue; /* Изменили цвет при наведении на ссылку */
            }
        }

        button {
            background: var(--buttonColorDisabled);
            color: var(--light);
            border-radius: 8px; /* Добавили более круглое скругление углов для кнопок */
            padding: 12px 24px; /* Изменили отступы кнопок */

            &:disabled {
                background: var(--buttonColor);
            }
        }

        svg path {
            fill: var(--light);
        }

        thead, tbody, .ant-table-cell {
            background-color: var(--dark) !important;
            color: var(--light) !important;
            border: none; /* Убрали границу для ячеек таблицы */
            padding: 12px; /* Изменили отступы ячеек таблицы */
        }
    }
`;