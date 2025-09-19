"use client";
import React, { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Stack,
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { createPost } from "../../store/slices/postsSlice";
import PostPreviewDialog from "../../components/posts/PostPreviewDialog";
import CustomSnackbar from "../common/CustomSnackbar";

const steps = ["Заголовок", "Тіло", "Попередній перегляд"];

export default function PostForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [activeStep, setActiveStep] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const validateStep = (step) => {
    const e = {};
    if (step === 0 && !title.trim()) e.title = "Заголовок обов'язковий";
    if (step === 1 && !body.trim()) e.body = "Текст обов'язковий";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleBack = () => setActiveStep((prev) => Math.max(prev - 1, 0));

  const handleNext = () => {
    if (!validateStep(activeStep)) return;
    if (activeStep === steps.length - 1) setPreviewOpen(true);
    else setActiveStep((s) => s + 1);
  };

  const onConfirm = async () => {
    if (!title.trim() || !body.trim()) return;
    setSubmitting(true);
    try {
      const payload = { title: title.trim(), body: body.trim(), userId: 1 };
      await dispatch(createPost(payload)).unwrap();

      // показываем Snackbar
      setSnackbarOpen(true);
      setSubmitting(false);
    } catch (err) {
      console.error("Помилка створення:", err);
      setSubmitting(false);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    router.push(`/posts`);
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} sx={{ mb: 3 }} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel sx={{ "& .MuiStepIcon-root": { color: "#2196f3" } }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && (
        <Box sx={{ mb: 4 }}>
          <TextField
            label="Заголовок"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={!!errors.title}
            helperText={errors.title}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <strong>Т</strong>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      )}

      {activeStep === 1 && (
        <Box sx={{ mb: 4 }}>
          <TextField
            label="Текст"
            fullWidth
            multiline
            minRows={6}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            error={!!errors.body}
            helperText={errors.body}
          />
        </Box>
      )}

      <Stack direction="row" spacing={2}>
        <Button onClick={handleBack} disabled={activeStep === 0 || submitting}>
          Назад
        </Button>

        <Box sx={{ flex: 1 }} />
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={submitting}
          endIcon={<SaveIcon />}
          sx={{
            backgroundColor: "#2196f3",
            color: "#fff",
            "&:hover": { backgroundColor: "#1976d2" },
          }}
        >
          {activeStep === steps.length - 1 ? "Зберегти" : "Далі"}
        </Button>
      </Stack>

      <PostPreviewDialog
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        title={title}
        body={body}
        onEdit={() => {
          setPreviewOpen(false);
          setActiveStep(0);
        }}
        onConfirm={() => {
          setPreviewOpen(false);
          onConfirm();
        }}
        submitting={submitting}
      />

      {/* Snackbar */}
      <CustomSnackbar
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        message="Пост успішно створено!"
        severity="success"
      />
    </Box>
  );
}
