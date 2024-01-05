import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import DataType from '../interfaces/data-type';
import { useLoading } from '../hooks/useLoading';

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

const PaginationComponent: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const limit: number = 10;
  const {setLoading} = useLoading();

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    const offset = (page - 1) * limit;
    try {
      setLoading(true);
      const response = await axios.get(`http://universities.hipolabs.com/search?offset=${offset}&limit=${limit}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setLoading(false)
    } finally {
      setLoading(false);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const offset = (page - 1) * limit;

  return (
    <>
      <Table dataSource={data} columns={columns} pagination={false} />
      <Button onClick={handlePrevPage} disabled={!offset}>Назад</Button>
      <Button onClick={handleNextPage}>Вперед</Button>
      <span>Страница: {page}</span>
    </>
  );
};

export default PaginationComponent;
