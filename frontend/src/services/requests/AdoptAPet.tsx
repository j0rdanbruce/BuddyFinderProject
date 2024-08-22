import axios, { AxiosResponse } from "axios";

export const getAllPetData = async (): Promise<AxiosResponse> => {
  const petUrl = "/get_all_pets/";
  const response = await axios.get(petUrl);

  return response;
}
