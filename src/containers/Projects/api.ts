import axios from "axios";
import { Projects } from "./interfaces";

const BASE_API = "https://api.glitch.com";

export const fetchProjectsApi = async (
  nextPage?: string
): Promise<Projects | undefined> => {
  try {
    return await axios.get(
      nextPage
        ? BASE_API + nextPage
        : BASE_API +
            "/v1/projects/?limit=100&orderKey=createdAt&orderDirection=DESC"
    );
  } catch (error) {
    console.log(error);
  }
};
