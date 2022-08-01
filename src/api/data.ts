import axios from "axios";
import { useRecoilState } from "recoil";
import { filterArray, getNews } from "../commons/store/recoil/store";

const API_KEY = "42ao5DkjuCk61oEePoEK7KwbUFwYlb9P";

// export const GetAPI = async () => {
//   const [, setNews] = useRecoilState(getNews);

//   const data = await axios.get(
//     `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${API_KEY}`
//   );
//   setNews(data.data.response.docs);
// };

// export const FilterAPI = async () => {
//   const [, setNews] = useRecoilState(getNews);
//   const [filterArr] = useRecoilState(filterArray);

//   const HEADLINE = filterArr[0];
//   const DATE = filterArr[1];
//   const COUNTRY = filterArr.slice(2, filterArr.length);

//   const data = await axios.get(
//     `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&fq=headline:(${HEADLINE}) AND pub_date:(${DATE}) AND glocations.contains:(${COUNTRY}) &api-key=${API_KEY}`
//   );
//   setNews(data.data.response.docs);
// };
