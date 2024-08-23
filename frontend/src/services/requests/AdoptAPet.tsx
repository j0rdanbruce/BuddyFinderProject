import axios, { AxiosResponse } from "axios";

export const getAllPetData = async () => {
  const petUrl = "http://127.0.0.1:8000/get_all_pets/";
  const { data } = await axios.get(petUrl);

  return data;
}
