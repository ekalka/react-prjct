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
export const DynamicPagination = () => {
  const { universitiesData, loading, ref } = useDynamicPagination();

  return (
    <>
      <div>
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
