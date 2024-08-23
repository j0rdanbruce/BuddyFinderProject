import axios, { AxiosRequestConfig } from "axios";

const convertData = (axiosData: any[]): PetInfo[] => {
  const petData: PetInfo[] = [];


  return petData;
}

export const getAllPetData = async () => {
  const allPetData: PetInfo[] = [];
  const baseUrl = "http://127.0.0.1:8000";
  const petUrl = "/get_all_pets/";
  const axiosGetPetDataConfig: AxiosRequestConfig = {
    baseURL: baseUrl,
    url: petUrl,
    method: 'get',
  };

  try {
    const response = await axios(axiosGetPetDataConfig);
    const { data } = response;
    console.log(data);
    return data;
    
  } catch (error) {
    console.log(error);
  }
}
