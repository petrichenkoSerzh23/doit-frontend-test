"use client";
import CircularProgress from "@mui/material/CircularProgress";

import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";

export default function PostPreviewDialog({
  open,
  onClose,
  title,
  body,
  onEdit,
  onConfirm,
  submitting,
}) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Попереднiй перегляд</DialogTitle>
      <DialogContent
        dividers
        sx={{
          maxHeight: "60vh", // ограничение по высоте
          overflowY: "auto", // вертикальный скролл
          overflowX: "hidden", // без горизонтального
          display: "flex", // делаем flex-контейнер
          flexDirection: "column",
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">{title}</Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="body2"
            sx={{
              whiteSpace: "pre-wrap",
              mt: 1,
            }}
          >
            {body?.slice(0, 150)}
            {body?.length > 150 && "..."}
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onEdit} disabled={submitting}>
          Редагувати
        </Button>

        <Button variant="contained" onClick={onConfirm} disabled={submitting}>
          {submitting ? (
            <span style={{ display: "inline-flex", alignItems: "center" }}>
              <CircularProgress size={18} color="inherit" />
              &nbsp;Збереження...
            </span>
          ) : (
            "Пiдтвердити"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
