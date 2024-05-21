import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDynamicPagination } from "../hooks/useDPagination";
import UniversityCard from "./funcComponents/universityCard";
import { IUniversityData } from "../сonstants/constants";

export const ObserverBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 50px;
  background-color: red;
`;

export const counterFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 50px;
  background-color: red;
`;

const CountryCounts = ({ universities }: { universities: IUniversityData[] }) => {
  const [countryCounts, setCountryCounts] = useState({});

  useEffect(() => {
    const counts = universities.reduce(
      (acc: { [key: string]: number }, university: IUniversityData) => {
        const country = university.country;
        acc[country] = (acc[country] || 0) + 1;
        return acc;
      },
      {}
    );
    setCountryCounts(counts);
  }, [universities]);

  return (
    <div>
      {Object.entries(countryCounts).map(([country, count]) => (
        <>
            {country}: {count + " "} 
        </>
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
