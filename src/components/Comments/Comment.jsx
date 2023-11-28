import { Box } from "@mui/material";
import CommentForm from "./CommentForm";
import { faker } from "@faker-js/faker";

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {
  const isEditing =
    activeComment &&
    activeComment._id === comment._id &&
    activeComment.type === "editing";
  const isReplying =
    activeComment &&
    activeComment._id === comment._id &&
    activeComment.type === "replying";
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canDelete =
    currentUserId === comment.userId && replies.length === 0 && !timePassed;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = parentId ? parentId : comment._id;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  return (
    <Box key={comment._id} className="comment">
      <Box className="comment-image-container">
        <img src={faker.image.avatar()} width={32} height={32} />
      </Box>
      <Box className="comment-right-part">
        <Box className="comment-content">
          <Box className="comment-author">{comment.username}</Box>
          <Box>{createdAt}</Box>
        </Box>
        {!isEditing && <Box className="comment-text">{comment.body}</Box>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => updateComment(text, comment._id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        <Box className="comment-actions">
          {canReply && (
            <Box
              className="comment-action"
              onClick={() =>
                setActiveComment({ _id: comment._id, type: "replying" })
              }
            >
              Reply
            </Box>
          )}
          {canEdit && (
            <Box
              className="comment-action"
              onClick={() =>
                setActiveComment({ _id: comment._id, type: "editing" })
              }
            >
              Edit
            </Box>
          )}
          {canDelete && (
            <Box
              className="comment-action"
              onClick={() => deleteComment(comment._id)}
            >
              Delete
            </Box>
          )}
        </Box>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <Box className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply._id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment._id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Comment;
