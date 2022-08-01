import { useRecoilState } from "recoil";
import { filterArray } from "../../commons/store/recoil/store";
import styled from "styled-components";
import NonFilteredPage from "./nonFilteredPage";
import FilteredPage from "./filteredPage";

export const Wrapper = styled.div`
  width: 375px;
  height: 608px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  background-color: #f0f1f4;
  border-radius: 0 0 30px 30px;
`;

export const Background = styled.div`
  width: 375px;
  height: 708px;
  position: absolute;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0 0 30px 30px;
`;

const HomePage = () => {
  const [filterArr] = useRecoilState(filterArray);

  return (
    <>
      {" "}
      <NonFilteredPage />
    </>
  );
};

export default HomePage;
