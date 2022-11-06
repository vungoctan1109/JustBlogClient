import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getCategories } from '../services/services';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  categories:any
  id: any
  isLogin: any = localStorage.getItem("jwt")

  handleLogout=function() {
    localStorage.removeItem("jwt")
    window.location.href ="/authentication/login"
  }

  constructor(private http: HttpClient) {
    if (!this.isLogin) {
      window.location.href="/authentication/login"
    }
  }

  async ngOnInit() {
    const category = await getCategories(this.http)
    category.subscribe((res:any)=>this.categories=res)
  }
}
