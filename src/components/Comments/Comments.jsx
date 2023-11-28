import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useGetNewsfeedQuery } from "@/state/api";
import { Box } from "@mui/material";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

const Comments = ({ user, currentUserId, addFeedback }) => {
  const dispatch = useDispatch();

  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);

  const [limit, setLimit] = useState(10); // Initial limit
  const [skip, setSkip] = useState(0); // Initial skip

  const { data, isLoading } = useGetNewsfeedQuery({
    limit,
    skip,
  });

  const rootComments = backendComments.filter((backendComment) => {
    return backendComment.parentId === null;
  });
  
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
    delay: 800,
  };

  // Intersection Observer setup
  const observer = useRef(null);
  const bottomElementRef = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // User has scrolled to the bottom
        setSkip((prevSkip) => prevSkip + limit); // Increase skip
      }
    }, options);

    if (!isLoading && bottomElementRef.current) {
      observer.current.observe(bottomElementRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [isLoading]);

  const removeDuplicates = (array, property) => {
    const seen = new Set();
    return array.filter((item) => {
      const key = item[property];
      if (!seen.has(key)) {
        seen.add(key);
        return true;
      }
      return false;
    });
  };


  useEffect(() => {
    {
      !isLoading &&
        getCommentsApi().then((data) => {
          // Merge new comments with existing ones and remove duplicates
          const mergedComments = [...backendComments, ...data];
          const uniqueRootComments = removeDuplicates(mergedComments, "_id");
          setBackendComments(uniqueRootComments);
        });
    }
  }, [isLoading, limit, skip, observer]);

  const mongoObjectId = () => {
    const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
    return (
      timestamp +
      "xxxxxxxxxxxxxxxx"
        .replace(/[x]/g, function () {
          return ((Math.random() * 16) | 0).toString(16);
        })
        .toLowerCase()
    );
  };

  const updateCommentApi = async (text) => {
    return { text };
  };

  const deleteCommentApi = async () => {
    return {};
  };

  const getCommentsApi = async () => {
    return data.map((comment) => ({
      _id: comment.data._id,
      body: comment.data.body,
      username:
        comment.userInformation.firstName +
        " " +
        comment.userInformation.lastName,
      userId: comment.data.userId,
      parentId: comment.data.parentId,
      createdAt: comment.data.createdOn,
    }));
  };

  const createCommentApi = async (text, parentId = null) => {
    return {
      _id: mongoObjectId(),
      username:
        user.userInformation.firstName + " " + user.userInformation.lastName,
      body: text,
      parentId,
      userId: currentUserId,
      createdAt: new Date().toISOString(),
    };
  };

  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);

      dispatch(
        addFeedback({
          _id: comment._id,
          body: comment.body,
          parentId: comment.parentId,
          userId: comment.userId,
        })
      );
    });
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment._id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };

  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment._id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  return (
    <Box className="comments">
      <h3 className="comments-title">POST</h3>
      <Box className="comment-form-title">Write comment</Box>
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <Box className="comments-container">
        {rootComments.map((rootComment, index) => (
          <Comment
            key={index}
            comment={rootComment}
            replies={getReplies(rootComment._id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
      </Box>
      <Box ref={bottomElementRef}></Box>
    </Box>
  );
};

export default Comments;
