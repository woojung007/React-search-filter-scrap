import * as S from "./Modal.style";
import DatePickerPage from "../../commons/libraries/DatePicker";
import { ChangeEvent, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { filterArray, isOpenModal } from "../../commons/store/recoil/store";

const COUNTRY_ARRAY = [
  { country: "대한민국", id: 0, isClick: false, ENG: "SouthKorea" },
  { country: "중국", id: 1, isClick: false, ENG: "China" },
  { country: "일본", id: 2, isClick: false, ENG: "Japan" },
  {
    country: "미국",
    id: 3,
    isClick: false,
    ENG: "United States Politics and Government",
  },
  { country: "북한", id: 4, isClick: false, ENG: "NorthKorea" },
  { country: "러시아", id: 5, isClick: false, ENG: "Russia" },
  { country: "프랑스", id: 6, isClick: false, ENG: "France" },
  { country: "영국", id: 7, isClick: false, ENG: "England" },
];

const FilterModal = () => {
  const [headline, setHeadline] = useState("");
  const [date, setDate] = useState("");
  const [countryArr, setCountryArr] = useState(COUNTRY_ARRAY);
  const [clickCountry, setClickCountry] = useState(false);

  const [, setFilter] = useRecoilState(filterArray);
  const [, setIsOpen] = useRecoilState(isOpenModal);

  const onChangeHeadline = (event: ChangeEvent<HTMLInputElement>) => {
    setHeadline(event.target.value);
  };

  const onClickCountry = (event: any) => {
    for (let i = 0; i < countryArr.length; i++) {
      if (event.target.id === String(countryArr[i].id)) {
        countryArr[i]["isClick"] = !countryArr[i]["isClick"];
        setCountryArr(countryArr);
      }
    }
    setClickCountry((prev) => !prev);
  };

  useEffect(() => {}, [clickCountry]);

  const onClickFilter = () => {
    const selectCountry = countryArr
      .filter((el) => el.isClick)
      .map((el) => el.ENG);

    setFilter([headline, String(date), ...selectCountry]);
    setIsOpen((prev) => !prev);
  };

  return (
    <S.Wrapper>
      <div>
        <S.Title>헤드라인</S.Title>
        <S.Input
          onChange={onChangeHeadline}
          type="text"
          placeholder="검색하실 헤드라인을 입력해주세요."
        />
      </div>

      <div>
        <S.Title>날짜</S.Title>
        <DatePickerPage setDate={setDate} />
      </div>

      <S.CountryDiv>
        <S.Title>국가</S.Title>
        <S.CountryWrapper>
          {countryArr.map((el) => (
            <div key={el.id}>
              <S.Country
                onClick={onClickCountry}
                isClick={Boolean(el.isClick)}
                id={String(el.id)}
              >
                {el.country}
              </S.Country>
            </div>
          ))}
        </S.CountryWrapper>
      </S.CountryDiv>

      <S.Button onClick={onClickFilter}>필터 적용하기</S.Button>
    </S.Wrapper>
  );
};

export default FilterModal;
