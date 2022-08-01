import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 85px;
  position: relative;
  left: 0;
  bottom: 85px;
  z-index: 15;

  display: flex;
  justify-content: space-between;

  padding: 20px 80px;
  background: #000;
  border-radius: 30px;

  color: #fff;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
`;

interface IPropsStyleHome {
  isOnHome: boolean;
}

export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  .home-icon {
    font-size: 28px;
  }
  :hover {
    color: #fff;
  }

  color: ${(props: IPropsStyleHome) => (props.isOnHome ? "#fff" : "#6d6d6d")};
`;

export const IconTitle = styled.span``;

interface IPropsStyleScrap {
  isOnScrap: boolean;
}

export const ScrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  .scrap-icon {
    font-size: 28px;
  }
  :hover {
    color: #fff;
  }

  color: ${(props: IPropsStyleScrap) => (props.isOnScrap ? "#fff" : "#6d6d6d")};
`;
