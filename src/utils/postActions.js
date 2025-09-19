import { deletePost } from "@/store/slices/postsSlice";

export const handleDeletePost = async (dispatch, postId) => {
  try {
    await dispatch(deletePost(postId)).unwrap();
  } catch (err) {
    console.error("Error:", err);
  }
};
