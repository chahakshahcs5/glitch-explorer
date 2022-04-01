import axios from "axios";
import { Teams } from "./interfaces";

const BASE_API = "https://api.glitch.com";

export const fetchTeamsApi = async (
  nextPage?: string
): Promise<Teams | undefined> => {
  try {
    return await axios.get(
      nextPage
        ? BASE_API + nextPage
        : BASE_API +
            "/v1/teams/?limit=100&orderKey=createdAt&orderDirection=DESC"
    );
  } catch (error) {
    console.log(error);
  }
};
