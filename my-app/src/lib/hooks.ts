import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { ModalFormData } from "../components/Modal";
import { Response } from "./types";

export const defaultRequestConfig = {
  headers: { "Content-Type": "application/json" },
};

export function useCreateAccount(onSuccess: (response: AxiosResponse<Response, any>) => any, onError: (error: AxiosError<Response, any>) => any) {
  return useMutation({
    mutationKey: ["create-account"],
    mutationFn: (data: ModalFormData) => {
      return axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/register`,
        data,
        defaultRequestConfig
      );
    },
    onSuccess,
    onError
  });
}
