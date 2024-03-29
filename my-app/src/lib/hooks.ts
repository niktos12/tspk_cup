import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { ModalFormData } from "../components/Modal";
import { SuccessResponse } from "./types";

export const defaultRequestConfig = {
  headers: { "Content-Type": "application/json" },
};

export function useCreateAccount(onSuccess: (response: AxiosResponse<SuccessResponse, any>) => any, onError: (error: AxiosError<SuccessResponse, any>) => any) {
  const backendUrl = window.env.REACT_APP_BACKEND_URL;

  return useMutation({
    mutationKey: ["create-account"],
    mutationFn: (data: ModalFormData) => {
      return axios.post(
        `${backendUrl}/api/v1/register`,
        data,
        defaultRequestConfig
      );
    },
    onSuccess,
    onError
  });
}
