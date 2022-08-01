import * as S from "../home/homeItem/HomeItem.styles";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isScrapNews } from "../../commons/store/recoil/store";
import { Modal } from "antd";

const ScrapPage = () => {
  const [scrapArr, setScrapArr] = useState([]);
  const [, setIsScrap] = useRecoilState(isScrapNews);

  const onClickDelScrap = (item: any) => () => {
    const scrapArr = JSON.parse(localStorage.getItem("scrap") || "[]");
    const deleteScrapArr = scrapArr.filter(
      (scrapItem: any) => scrapItem._id !== item._id
    );
    console.log(deleteScrapArr);

    localStorage.setItem("scrap", JSON.stringify(deleteScrapArr));
    setIsScrap((prev: boolean) => !prev);
    Modal.error({ content: "스크랩을 취소하였습니다." });
  };

  const scraps = JSON.parse(localStorage.getItem("scrap") || "[]");
  const idArr = scrapArr.map((el: any) => el._id);

  useEffect(() => {
    setScrapArr(scraps);
    console.log(scrapArr);
  }, []);

  return (
    <S.Wrapper>
      {scrapArr.map((scrap: any) => (
        <S.ItemWrapper key={scrap._id}>
          <S.TopDiv>
            <S.Title>{scrap.headline.main}</S.Title>
            {idArr.includes(scrap._id) ? (
              <BsStarFill
                className="star-fill"
                onClick={onClickDelScrap(scrap)}
              />
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
