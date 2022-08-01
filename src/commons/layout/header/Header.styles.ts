import styled from "styled-components";

export const Header = styled.header`
  width: 375px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 30px 30px 0 0;
`;

export const HeaderBar = styled.div`
  width: 100%;
  height: 44px;
  background-color: #fff;
  border-radius: 30px 30px 0 0;
`;

export const HeaderSearchBar = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #fff;
  border-bottom: 1.5px solid lightgray;
  padding-left: 20px;
  font-size: 14px;
  color: #6d6d6d;
`;

interface IPropsHeaderStyle {
  filterArray: any;
  isOpen: boolean;
}

export const HeaderDiv = styled.div`
  height: 34px;
  display: flex;
  align-items: center;
  padding: 6px 12px 4px;
  gap: 4px;

  border: ${(props: IPropsHeaderStyle) =>
    props.filterArray[0].length >= 2
      ? "1px solid #3478F6"
      : "1px solid #6D6D6D"};
  border-radius: 30px;
  color: ${(props: IPropsHeaderStyle) =>
    props.filterArray[0].length >= 2 ? "#3478F6" : "#6D6D6D"};

  cursor: pointer;
  :hover {
    border: 1px solid #82b0f4;
    color: #82b0f4;
  }

  .icon {
    width: 16px;
    :hover {
      color: #82b0f4;
    }
  }
`;
