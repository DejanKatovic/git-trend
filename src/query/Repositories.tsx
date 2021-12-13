import { getApiClient } from "src/utils/axios";

export const GetRepositories = () => {
  return getApiClient().get("/repositories");
};
