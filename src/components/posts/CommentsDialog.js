"use client";

import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchCommentsByPostId,
  selectCommentsByPostId,
} from "@/store/slices/postsSlice";

export default function CommentsDialog({ open, onClose, postId }) {
  const dispatch = useDispatch();
  const comments = useSelector((state) =>
    selectCommentsByPostId(state, postId)
  );

  React.useEffect(() => {
    if (open && postId) {
      dispatch(fetchCommentsByPostId(postId));
    }
  }, [dispatch, open, postId]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Коментарі</DialogTitle>
      <DialogContent dividers>
        <List>
          {(comments || []).map((comment) => (
            <ListItem key={comment.id} alignItems="flex-start">
              <ListItemText
                primary={comment.name}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {comment.email}
                    </Typography>
                    {" — "}
                    {comment.body}
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Закрити</Button>
      </DialogActions>
    </Dialog>
  );
}
