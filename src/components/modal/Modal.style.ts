import styled from "styled-components";

export const Wrapper = styled.div`
  width: 335px;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 20;
  margin-top: 60px;
  padding: 20px;
  background-color: #fff;
  border-radius: 16px;
`;

export const Title = styled.p`
  height: 24px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.05em;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 295px;
  height: 44px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 40px;
  border: 1px solid #c4c4c4;
  border-radius: 8px;

  ::placeholder {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.04em;
    color: #c4c4c4;
  }
`;

export const CountryDiv = styled.div`
  width: 295px;
`;

export const CountryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;

  padding-bottom: 40px;
`;

interface IPropsModalStyle {
  isClick: boolean;
}

export const Country = styled.div`
  height: 34px;
  display: flex;
  align-items: center;
  padding: 6px 12px 4px;
  margin-bottom: 2px;
  border: 1px solid #f2f2f2;
  border-radius: 30px;
  background-color: ${(props: IPropsModalStyle) =>
    props.isClick ? "#82b0f4" : "#fff"};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.04em;
  color: ${(props: IPropsModalStyle) => (props.isClick ? "#fff" : "#6d6d6d")};
  cursor: pointer;
`;

export const Button = styled.button`
  width: 295px;
  height: 60px;
  background: #3478f6;
  border-radius: 16px;

  color: #fff;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.05em;
  cursor: pointer;
`;
