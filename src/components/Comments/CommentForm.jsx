import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            type="text"
            name="Post"
            variant="outlined"
            color="secondary"
            label="Post"
            className="comment-form-textarea"
            onChange={(e) => setText(e.target.value)}
            value={text}
            multiline
            rows={5}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            className="comment-form-button"
            disabled={isTextareaDisabled}
            type="submit"
          >
            {submitLabel}
          </Button>
          {hasCancelButton && (
            <Button
              variant="contained"
              className="comment-form-button comment-form-cancel-button"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  );
};

export default CommentForm;
