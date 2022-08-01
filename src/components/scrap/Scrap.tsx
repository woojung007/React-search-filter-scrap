import * as S from "../home/homeItem/HomeItem.styles";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const ScrapPage = () => {
  const [scrapArr, setScrapArr] = useState([]);
  const scraps = JSON.parse(localStorage.getItem("scrap") || "[]");
  const idArr = scrapArr.map((el: any) => el._id);

  useEffect(() => {
    setScrapArr(scraps);
  }, [scraps]);

  return (
    <S.Wrapper>
      {scrapArr.map((scrap: any) => (
        <S.ItemWrapper>
          <S.TopDiv>
            <S.Title>{scrap.headline.main}</S.Title>
            {idArr.includes(scrap._id) ? (
              <BsStarFill className="star-fill" />
            ) : (
              <BsStar className="star" />
            )}
          </S.TopDiv>
          <S.BottomDiv>
            <S.BottomLeft>
              <S.Company>{scrap.source}</S.Company>
              <S.Name>{scrap.byline?.person?.firstname}</S.Name>
            </S.BottomLeft>
            <div>{scrap.pub_date?.slice(0, 10)}</div>
          </S.BottomDiv>
        </S.ItemWrapper>
      ))}
    </S.Wrapper>
  );
};
export default ScrapPage;
