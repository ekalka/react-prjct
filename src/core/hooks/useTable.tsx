import { useState, useEffect } from 'react';
import axios from 'axios';
import  DataType  from '../interfaces/data-type';

export const useTable = () => {
    const [data, setData] = useState<DataType[]>([]);
    const [page, setPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const limit: number = 10;
  
    useEffect(() => {
      fetchData();
    }, [page]);
  
    const fetchData = async () => {
      setIsLoading(true); 
      try {
        const response = await axios.get(`http://universities.hipolabs.com/search?offset=${offset}&limit=${limit}`);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setIsLoading(false); 
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
  return ({
    data,
    isLoading,
    handlePrevPage,
    handleNextPage,
    page,
    offset
  });
};
