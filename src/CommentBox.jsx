import { useId, useState } from "react";
import Comments from "./Comments";

const CommentBox = () => {
  const [comments, setComments] = useState([
    {
      id: Math.floor(Math.random() * 1000) + useId(),
      message: "Hello Word",
      user: "Amit Chauhan",
      children: [
        {
          id: Math.floor(Math.random() * 1000) + useId(),
          message: "Hello babe",
          user: "Shivani Chauhan",
          children: [
            {
              id: Math.floor(Math.random() * 1000) + useId(),
              message: "Hello Mom",
              user: "Nimit Chauhan",
              children: [
                {
                  id: Math.floor(Math.random() * 1000) + useId(),
                  message: "Hello Beta",
                  user: "Amit Chauhan",
                  children: [],
                },
                {
                  id: Math.floor(Math.random() * 1000) + useId(),
                  message: "Hello My world",
                  user: "Shivani Chauhan",
                  children: [],
                },
              ],
            },
            {
              id: Math.floor(Math.random() * 1000) + useId(),
              message: "Whatsup babe",
              user: "Amit Chauhan",
              children: [
                {
                  id: Math.floor(Math.random() * 1000) + useId(),
                  message: "Nothing sweetheart",
                  user: "Shivani Chauhan",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: Math.floor(Math.random() * 1000) + useId(),
          message: "Itni der tak kya kar rahe ho?",
          user: "Shivani Chauhan",
          children: [],
        },
      ],
    },
  ]);

  let update = (id, text) => (obj) => {
    if (obj.id === id) obj.children.push();
    else if (obj.children) obj.children.forEach(update(id, text));
  };

  const modifyComment = (comments, scomment) => {
    comments.forEach((comment, index) => {
      if (comment.id == scomment.id) {
        comment.children.push({
          id: Math.random() * 1009,
          message: scomment.value.reply,
          user: scomment.value.name,
          children: [],
        });
      }
      if (comment.children.length) {
        modifyComment(comment.children, scomment);
      }
    });
    return comments;
  };

  const deleteComment = (comments, commentId) => {
    comments.forEach((comment, index) => {
      if (comment.id == commentId) {
        comments.splice(index, 1);
      }
      if (comment.children.length) {
        deleteComment(comment.children, commentId);
      }
    });
    return comments;
  };

  const replyHandler = (values) => {
    let newComments = modifyComment(comments, values);
    setComments([...newComments]);
  };
  const deleteHandler = (commentId) => {
    const newComments = deleteComment(comments, commentId);
    setComments([...newComments]);
  };
  return (
    <div className="comment-box">
      <div className="comment-header">
        <h2>Comment Box</h2>
      </div>
      <div className="comment-body">
        {comments.length ? (
          <ol>
            <Comments
              comments={comments}
              replyHandler={replyHandler}
              deleteHandler={deleteHandler}
            />
          </ol>
        ) : (
          <h5 style={{ textAlign: "left" }}>No Comments</h5>
        )}
      </div>
      <div className="comment-footer"></div>
    </div>
  );
};
export default CommentBox;
