import { HttpClient } from '@angular/common/http';
const jwt = localStorage.getItem("jwt")
  export const getPostByCategory = async (http: HttpClient, categoryName: any) =>
    await http.get(`https://localhost:7158/api/Post/Category`, {
    params:{name:categoryName},
    headers: { Authorization: 'Bearer ' + jwt },
  });

export const getPosts = async (http: HttpClient) =>
  await http.get(`https://localhost:7158/api/Post`, {
    headers: { Authorization: 'Bearer ' + jwt },
  });

export const getPostById = async (http: HttpClient,postId:any) =>
  await http.get(`https://localhost:7158/api/Post/${postId}`, {
    headers: { Authorization: 'Bearer ' + jwt },
  });