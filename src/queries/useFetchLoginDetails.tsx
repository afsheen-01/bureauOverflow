import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import Axios, { AxiosError } from "axios";
import { LoginDetails, LoginResponse } from "../types/login";

const config = {
  baseURL: "/",
};

export const useFetchLoginDetails = (
  loginDetails: LoginDetails
): UseQueryResult<LoginResponse, AxiosError> => {
  return useQuery("deviceData", getLoginDetails(loginDetails));
};

const getLoginDetails =
  (details: LoginDetails): (() => Promise<LoginResponse>) =>
  async () => {
    const { data: response } = await Axios.post(
      "http://192.168.4.179:8000/token",
      details,
      config
    );
    console.log(response);
    return new Promise<LoginResponse>((resolve) =>
      resolve(response as LoginResponse)
    );
  };
