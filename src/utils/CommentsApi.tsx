import { CommentsData } from "../interfaces/CommentsData";

export const CommentsApi = async (): Promise<CommentsData[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  return data.slice(0, 10);
};
