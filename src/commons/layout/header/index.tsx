import { useRecoilState } from "recoil";
import { isOpenModal, filterArray } from "../../store/recoil/store";
import * as S from "./Header.styles";
import { BsCalendarCheck, BsSearch } from "react-icons/bs";

const Header = () => {
  const [isOpen, setIsOpen] = useRecoilState(isOpenModal);
  const [filterArr] = useRecoilState(filterArray);

  const showModal = () => {
    setIsOpen((prev) => !prev);
  };

  const countryLength = filterArr.slice(2, filterArr.length).length;

  return (
    <S.Header>
      <S.HeaderBar></S.HeaderBar>

      <S.HeaderSearchBar>
        <S.HeaderDiv
          onClick={showModal}
          filterArray={filterArr}
          isOpen={isOpen}
        >
          <BsSearch className="icon" />

          <div> {filterArr[0] ? filterArr[0] : "전체 헤드라인"}</div>
        </S.HeaderDiv>

        <S.HeaderDiv
          onClick={showModal}
          filterArray={filterArr}
          isOpen={isOpen}
        >
          <BsCalendarCheck />
          <div>{filterArr[1] ? filterArr[1] : "전체 날짜"}</div>
        </S.HeaderDiv>

        <S.HeaderDiv
          onClick={showModal}
          filterArray={filterArr}
          isOpen={isOpen}
        >
          <div>
            {filterArr[2]
              ? `${filterArr[2]}외 ${countryLength - 1}개`
              : "전체 국가"}
          </div>
        </S.HeaderDiv>
      </S.HeaderSearchBar>
    </S.Header>
  );
};

export default Header;
