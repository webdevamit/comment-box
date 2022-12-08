import { useState } from "react";
import Comments from "./Comments";
import Modal from "./Modal";

const Comment = ({ comment, replyHandler, deleteHandler }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const handleReply = () => {
    replyHandler({ id: comment.id, value });
    setOpen(false);
  };
  const showModal = () => {
    setOpen(!open);
  };
  return (
    <>
      <li>
        <div className="message">
          <p>{comment.message}</p>
          <i>{comment.user}</i>
          {!open && (
            <div className="actions">
              <button onClick={() => showModal(comment.id)}>Reply</button>
              <button onClick={() => deleteHandler(comment.id)}>Delete</button>
            </div>
          )}
        </div>
        <div id="inner-box">
          <Modal open={open}>
            <div className="modal-body">
              <label>Name</label>
              <input
                type="text"
                name="name"
                onChange={(e) =>
                  setValue({ ...value, [e.target.name]: e.target.value })
                }
              />
              <label>Message</label>
              <textarea
                name="reply"
                cols="20"
                rows="5"
                onChange={(e) =>
                  setValue({ ...value, [e.target.name]: e.target.value })
                }
              ></textarea>
            </div>
            <div className="modal-footer">
              <button type="button" onClick={handleReply}>
                Post
              </button>
              <button type="button" onClick={showModal}>
                Cancel
              </button>
            </div>
          </Modal>
        </div>
      </li>
      {comment.children.length ? (
        <ol>
          <Comments
            comments={comment.children}
            deleteHandler={deleteHandler}
            replyHandler={replyHandler}
          />
        </ol>
      ) : (
        ""
      )}
    </>
  );
};
export default Comment;
