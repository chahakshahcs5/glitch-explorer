import axios from "axios";
import { Collections } from "./interfaces";

const BASE_API = "https://api.glitch.com";

export const fetchCollectionsApi = async (
  nextPage?: string
): Promise<Collections | undefined> => {
  try {
    return await axios.get(
      nextPage
        ? BASE_API + nextPage
        : BASE_API +
            "/v1/collections/?limit=100&orderKey=createdAt&orderDirection=DESC"
    );
  } catch (error) {
    console.log(error);
  }
};
