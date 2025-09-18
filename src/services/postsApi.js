
const API_URL = "https://jsonplaceholder.typicode.com";

async function handleResponce(res) {
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "error");
  }
  return res.json();
}
export const postsApi = {
  fetchAll: () => fetch(`${API_URL}/posts`).then(handleResponce),

  fetchById: (id) => fetch(`${API_URL}/posts/${id}`).then(handleResponce),

  create: (post) => {
   return fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then(handleResponce);
  },

  update: (id, patch) => {
   return fetch(`${API_URL}/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patch),
    }).then(handleResponce);
  },

  delete: (id) => {
    fetch(`${API_URL}/posts/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (!res.ok) {
        throw new Error("Delete failed");
      }
      return { id };
    });
  },
};
