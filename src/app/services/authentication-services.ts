import { HttpClient } from '@angular/common/http';
export const login = async (http: HttpClient, user: any) =>
  await http.post(`https://localhost:7158/api/Authentication/Login`, { userName: user.userName, password: user.password }
  );