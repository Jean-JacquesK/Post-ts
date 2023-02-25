import { CommentsProps } from "../../types/type";

function CommentItem({ comment }: CommentsProps) {
  return (
    <>
      <h6>Commentaires :</h6>
    <div>
        <p>{comment.name}</p>
        <p>{comment.email}</p>
      </div>
    </>
  );
}
export default CommentItem;
