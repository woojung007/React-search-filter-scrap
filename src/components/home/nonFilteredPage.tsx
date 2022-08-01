import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isOpenModal } from "../../commons/store/recoil/store";
import HomeItem from "./homeItem/HomeItem";
import styled from "styled-components";
import FilterModal from "../modal";

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

const API_KEY = "42ao5DkjuCk61oEePoEK7KwbUFwYlb9P";

const NonFilteredPage = () => {
  const [news, setNews] = useState([]);
  const [isOpen] = useRecoilState(isOpenModal);

  const GetAPI = async () => {
    const data = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${API_KEY}`
    );
    setNews(data.data.response.docs);
  };

  useEffect(() => {
    GetAPI();
  }, []);

  return (
    <>
      {isOpen ? (
        <Wrapper>
          <FilterModal />
          <Background />
          <HomeItem news={news} />
        </Wrapper>
      ) : (
        <Wrapper>
          <HomeItem news={news} />
        </Wrapper>
      )}
    </>
  );
};

export default NonFilteredPage;
