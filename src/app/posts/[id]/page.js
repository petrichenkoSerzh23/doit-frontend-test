"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostById,selectPostById } from "@/store/slices/postsSlice";
import CustomLoader from "@/components/common/CustomLoader";
import PostDetail from "@/components/posts/PostDetail";


export default function PostsByIdPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => selectPostById(state, Number(id)));
  const status = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (!post && status !== "loading") {
      dispatch(fetchPostById(Number(id)));
    }
  }, [id, post, dispatch, status]);

  if (status === "loading" || !post) {
    return <CustomLoader />;
  }

  return <PostDetail post={post} />;
}
