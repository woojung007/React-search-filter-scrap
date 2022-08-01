import { atom } from "recoil";
import { v1 } from "uuid";

export const getNews = atom({ key: `getNews/${v1()}`, default: [] });

export const isOpenModal = atom({ key: `isOpenModal/${v1()}`, default: false });

export const filterArray = atom({
  key: `filterArray/${v1()}`,
  default: ["", "", []],
});

// export const isScrapNews = atom({ key: `isScrapNews/${v1()}`, default: false });
