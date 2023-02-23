import { PostsData } from "../interfaces/PostsData";

export const PostApi = async (): Promise<PostsData[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);

  return data;
};
