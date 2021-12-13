import { getApiClient } from "src/utils/axios";

export const GetDevelopers = () => {
  return getApiClient().get("/developers");
};
