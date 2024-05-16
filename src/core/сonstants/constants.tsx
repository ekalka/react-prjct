import { ColumnsType } from "antd/lib/table";
import DataType from "../interfaces/data-type";

export const columns: ColumnsType<DataType> = [
  {
    title: "Страна",
    dataIndex: "country",
    key: "country",
  },
  {
    title: "Название школы",
    dataIndex: "name",
    key: "name",
  },
];

export interface IUniversityData {
  name: string;
  country: string;
}

export const LIMIT_LIST_SCHOOL = 15;
