import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getPosts } from 'src/app/services/services';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  posts:any
  constructor(private http:HttpClient) { }
  async ngOnInit() {
    const response = await getPosts(this.http)
      response.subscribe((res:any)=>this.posts= res)
  }
}
