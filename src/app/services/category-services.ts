import { HttpClient } from '@angular/common/http';
const jwt = localStorage.getItem("jwt")
export const getCategories = async (http: HttpClient) =>
  await http.get('https://localhost:7158/api/Category', {
    headers: { Authorization: 'Bearer ' + jwt },
  });