import { CommentsProps } from "../../types/type";

function CommentItem({ comment }: CommentsProps) {
  return (
    <div>
      <h6>Commentaires :</h6>
      <div>
        <p>{comment.name}</p>
      </div>
    </div>
  );
}
export default CommentItem;
