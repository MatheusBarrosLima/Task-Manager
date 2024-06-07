import { useQuery } from "@tanstack/react-query";
import { AxiosPromise } from "axios";
import { API } from "../configs/api";
import { UserDataTypes } from "../@types/userData";

export function useQueryUser() {
  const query = useQuery({
    queryKey: ["userData"],
    queryFn: async (): AxiosPromise<UserDataTypes> =>
      await API.get<UserDataTypes>("/user"),
  });
  return {
    ...query,
    data: query.data?.data,
  };
}
