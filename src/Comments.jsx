import Comment from "./Comment";

const Comments = ({ comments, replyHandler, deleteHandler }) => {
  return comments.map((comment) => {
    return (
      <Comment
        key={comment.id}
        comment={comment}
        replyHandler={replyHandler}
        deleteHandler={deleteHandler}
      />
    );
  });
};
export default Comments;
