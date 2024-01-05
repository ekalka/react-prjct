import React from 'react';
import { Navbar } from "./core/components/navbarComp";
import { MainRouter } from "./core/routing/MainRouter";
import { Table, Button } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import DataType from './core/interfaces/data-type';
import { useTable } from './core/hooks/useTable';

const App: React.FC = () => {
  const { data, isLoading, handlePrevPage, handleNextPage, page, offset} = useTable();
  const columns: ColumnsType<DataType> = [
    {
      title: 'Страна',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Название школы',
      dataIndex: 'name',
      key: 'name',
    },
  ];

  return (
    <>
      <Navbar />
      <MainRouter />
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
    </>
  );
};

export default App;
