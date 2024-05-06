export const url = process.env.REACT_APP_API_URL || '';

const getPosts = () =>
  fetch(`${url}/posts`).then((response) => response.json());

const createPost = (body) =>
  fetch(`${url}/posts`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

const getPostById = (id) =>
  fetch(`${url}/posts/${id}`).then((response) => response.json());

const api = {
  createPost,
  getPosts,
  getPostById,
};
export default api;
