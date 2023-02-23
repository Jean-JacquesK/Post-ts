import { CommentsProps, PostProps } from "../../types/type";
import "./post.css";

function Post({ post }: PostProps) {
  return (
    <div className='container card m-3 justify-content-center'>
      <div className='card-body'>
        <h5 className='card-title'>{post.title}</h5>
        <p className='card-text'>{post.body}</p>
      </div>
    </div>
  );
}
export default Post;
