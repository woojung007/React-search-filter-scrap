import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 608px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  background-color: #f0f1f4;
  border-radius: 0 0 30px 30px;
  position: relative;
  z-index: 1;
  padding-top: 20px;
  padding-bottom: 100px;
`;

export const ItemWrapper = styled.div`
  width: 335px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 8px;
`;

export const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 28px;
  font-size: 18px;
  .star {
    width: 14px;
    margin-top: 3px;
    color: #6d6d6d;
    cursor: pointer;
  }

  .star-fill {
    width: 14px;
    margin-top: 3px;
    cursor: pointer;
    color: #ffb800;
  }
`;

export const Title = styled.p`
  width: 90%;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  margin-right: 15px;
  letter-spacing: -0.05em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
`;

export const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.05em;
  color: #6d6d6d;
`;

export const BottomLeft = styled.div`
  display: flex;
  color: #000000;
`;

export const Company = styled.p`
  padding-right: 8px;
`;

export const Name = styled.p``;
