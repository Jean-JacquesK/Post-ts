import { CommentsProps } from "../../types/type";
import CommentItem from "../Comment/CommentItem";

function Comments({ comment }: CommentsProps) {
  return <CommentItem comment={comment} />;
}
export default Comments;
