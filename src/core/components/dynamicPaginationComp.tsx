import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDynamicPagination } from "../hooks/useDPagination";
import UniversityCard from "./funcComponents/universityCard";

export const ObserverBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 50px;
  background-color: red;
`;

const CountryCounts = ({ universities }) => {
  const [countryCounts, setCountryCounts] = useState({});

  useEffect(() => {
    const counts = universities.reduce((acc, university) => {
      const country = university.country;
      acc[country] = (acc[country] || 0) + 1;
      return acc;
    }, {});
    setCountryCounts(counts);
  }, [universities]);

  return (
    <div>
      {Object.entries(countryCounts).map(([country, count]) => (
        <div key={country}>
          {country}: {count}
        </div>
      ))}
    </div>
  );
};

export const DynamicPagination = () => {
  const { universitiesData, loading, ref } = useDynamicPagination();

  return (
    <>
      <div>
        {universitiesData?.length > 0 && <CountryCounts universities={universitiesData} />}
        <div>
          {universitiesData?.length > 0 &&
            universitiesData.map((university, index) => <UniversityCard key={index} data={university} />)}
          {!loading && <ObserverBlock ref={ref} />}
        </div>
        {loading && "loading..."}
      </div>
    </>
  );
};

export default DynamicPagination;
