import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isOpenModal, filterArray } from "../../commons/store/recoil/store";
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

const FilteredPage = () => {
  const [news, setNews] = useState([]);
  const [isOpen] = useRecoilState(isOpenModal);
  const [filterArr] = useRecoilState(filterArray);

  const HEADLINE = filterArr[0];
  const DATE = filterArr[1];
  const COUNTRY = filterArr.slice(2, filterArr.length);

  const FilterAPI = async () => {
    const data = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&fq=headline:(${HEADLINE}) AND pub_date:(${DATE}) AND glocations.contains:(${COUNTRY}) &api-key=${API_KEY}`
    );
    setNews(data.data.response.docs);
  };

  // const GetAPI = async () => {
  //   if (filterArr) {
  //     const data = await axios.get(
  //       `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&fq=headline:(${HEADLINE}) AND pub_date:(${DATE}) AND glocations.contains:(${COUNTRY}) &api-key=${API_KEY}`
  //     );
  //     setNews(data.data.response.docs);
  //   } else {
  //     const data = await axios.get(
  //       `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${API_KEY}`
  //     );
  //     setNews(data.data.response.docs);
  //   }
  // };

  useEffect(() => {
    FilterAPI();
  }, [filterArr]);

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

export default FilteredPage;
