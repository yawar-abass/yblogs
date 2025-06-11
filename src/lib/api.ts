import axios from "axios";
import { PostData } from "./types";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = () => axios.get(API_URL).then((res) => res.data);

export const fetchPost = (id: string | number) =>
  axios.get(`${API_URL}/${id}`).then((res) => res.data);

export const createPost = (data: PostData) =>
  axios.post(API_URL, data).then((res) => res.data);

export const updatePost = (id: string | number, data: PostData) =>
  axios.put(`${API_URL}/${id}`, data).then((res) => res.data);

export const deletePost = (id: string | number) =>
  axios.delete(`${API_URL}/${id}`).then((res) => res.data);
