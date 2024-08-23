import axios, { AxiosRequestConfig } from "axios";


export const getAllPetData = async () => {
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

export const getAdvancedSearch = async () => {
  const baseUrl = "http://127.0.0.1:8000";
  const petUrl = "/get_advanced_search/";
  const axiosGetPetDataConfig: AxiosRequestConfig = {
    baseURL: baseUrl,
    url: petUrl,
    method: 'get',
    params: {
      
    }
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