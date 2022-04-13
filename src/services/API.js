import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/photos";
// https://jsonplaceholder.typicode.com/photos?albumId=[album_id]

export const getPhotos = async (id) => {
  const res = await axios.get(`?albumId=${id}`);
  return res;
};
