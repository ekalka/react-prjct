import React from "react";
import {useTable} from "../hooks/useTable";
import {Button, Table} from "antd";
import {columns} from "../сonstants/constants";



export const Home: React.FC = () => {
    const { data, isLoading, handlePrevPage, handleNextPage, page, offset} = useTable();
    return(
<div>
    <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        loading={isLoading}
    />

    <Button
        onClick={handlePrevPage}
        disabled={!offset || isLoading}
    >
        Назад
    </Button>

    <Button
        onClick={handleNextPage}
        disabled={isLoading}
    >
        Вперед
    </Button>

    <span>Страница: {page}</span>
</div>
    );
};