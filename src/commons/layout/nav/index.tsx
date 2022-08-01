import * as S from "./Nav.styles";
import { CgMenuBoxed } from "react-icons/cg";
import { RiHome5Fill } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [isOnHome, setIsOnHome] = useState(false);
  const [isOnScrap, setIsOnScrap] = useState(false);
  // const onHome = JSON.parse(localStorage.getItem("onMenu") || "[]");
  // const onScrap = JSON.parse(localStorage.getItem("onMenu") || "[]");

  const onClickHome = () => {
    window.location.href = "/";
    setIsOnHome(true);
  };

  const onClickScrap = () => {
    setIsOnScrap(true);

    if (localStorage.getItem("scrap")?.length) {
      window.location.href = "/scrap";
    } else {
      window.location.href = "/empty-scrap";
    }
  };

  return (
    <S.Wrapper>
      <S.HomeDiv onClick={onClickHome} isOnHome={isOnHome}>
        {/* <S.HomeImg src="/images/home-on.png" alt="" /> */}
        <RiHome5Fill className="home-icon" />
        <S.IconTitle>홈</S.IconTitle>
      </S.HomeDiv>

      <S.ScrapDiv onClick={onClickScrap} isOnScrap={isOnScrap}>
        <CgMenuBoxed className="scrap-icon" />
        <S.IconTitle>스크랩</S.IconTitle>
      </S.ScrapDiv>
    </S.Wrapper>
  );
};

export default Nav;
