import * as S from "./HomeItem.styles";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useEffect } from "react";
import { Modal } from "antd";
import { useState } from "react";

interface IPropsHomeItem {
  news: any;
}

const HomeItem = (props: IPropsHomeItem) => {
  const [isScrap, setIsScrap] = useState(false);

  const onClickScrap = (item: any) => () => {
    const scrapArr = JSON.parse(localStorage.getItem("scrap") || "[]");
    const temp = scrapArr.filter(
      (scrapItem: any) => scrapItem._id === item._id
    );
    if (temp.length === 1) {
      Modal.error({ content: "이미 스크랩 하셨습니다." });
      return;
    }

    const {
      abstract,
      document_type,
      keywords,
      multimedia,
      lead_paragraph,
      news_desk,
      print_page,
      print_section,
      snippet,
      subsection_name,
      type_of_material,
      uri,
      web_url,
      word_count,
      ...newEl
    } = item;

    scrapArr.push(newEl);
    localStorage.setItem("scrap", JSON.stringify(scrapArr));
    setIsScrap((prev: boolean) => !prev);
    Modal.success({ content: "기사를 스크랩 하였습니다." });
  };

  const onClickDelScrap = (item: any) => () => {
    const scrapArr = JSON.parse(localStorage.getItem("scrap") || "[]");
    const deleteScrapArr = scrapArr.filter(
      (scrapItem: any) => scrapItem._id !== item._id
    );
    localStorage.setItem("scrap", JSON.stringify(deleteScrapArr));
    setIsScrap((prev: boolean) => !prev);
    Modal.error({ content: "스크랩을 취소하였습니다." });
  };

  useEffect(() => {}, [props.news]);

  const scrapedArr = JSON.parse(localStorage.getItem("scrap") || "[]");
  const idArr = scrapedArr.map((el: any) => el._id);

  return (
    <S.Wrapper>
      {props.news.map((news: any) => (
        <S.ItemWrapper key={news._id}>
          <S.TopDiv>
            <S.Title>{news.headline.main}</S.Title>
            {idArr.includes(news._id) ? (
              <BsStarFill
                onClick={onClickDelScrap(news)}
                className="star-fill"
              />
            ) : (
              <BsStar onClick={onClickScrap(news)} className="star" />
            )}
          </S.TopDiv>
          <S.BottomDiv>
            <S.BottomLeft>
              <S.Company>{news.source}</S.Company>
              <S.Name>{news.byline?.person[0]?.firstname}</S.Name>
            </S.BottomLeft>
            <div>{news.pub_date?.slice(0, 10)}</div>
          </S.BottomDiv>
        </S.ItemWrapper>
      ))}
    </S.Wrapper>
  );
};

export default HomeItem;
