import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  nanoid,
} from "@reduxjs/toolkit";
import { postsApi } from "@/services/postsApi";

const postsAdapter = createEntityAdapter({
  selectId: (post) => post.id,
});

const initialState = postsAdapter.getInitialState({
  status: "idle",
  error: null,
  items: [],
});

const postsSelectors = postsAdapter.getSelectors((state) => state.posts);

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, { rejectWithValue }) => {
    try {
      return await postsApi.fetchAll();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchPostById = createAsyncThunk(
  "posts/fetchPostById",
  async (id, { rejectWithValue }) => {
    try {
      return await postsApi.fetchById(id);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (post, { rejectWithValue }) => {
    try {
      const res = await postsApi.create(post);
      return { ...post, id: res.id ?? nanoid() };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const selectPostById = (state, postId) =>
  postsSelectors.selectById(state, postId);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({ id, patch }, { rejectWithValue }) => {
    try {
      return await postsApi.update(id, patch);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, { rejectWithValue }) => {
    try {
      await postsApi.delete(id);

      return { id };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        postsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        postsAdapter.addOne(state, action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        postsAdapter.updateOne(state, action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        postsAdapter.removeOne(state, action.payload.id);
      });
  },
});

export default postsSlice.reducer;
export const { selectAll: selectAllPosts } = postsAdapter.getSelectors(
  (state) => state.posts
);
