import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "ce15a7bd95e2f375730a2b02ba1497a5",
    language: "ko-KR",
  },
});
export default instance;
