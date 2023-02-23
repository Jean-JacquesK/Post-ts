import { CommentsProps, PostProps } from "../../types/type";
import Post from "../Post/Post";

function Posts({ post }: PostProps) {
  return (
    <div className=''>
      <Post post={post} />
    </div>
  );
}
export default Posts;
