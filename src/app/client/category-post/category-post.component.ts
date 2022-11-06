import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {getPostByCategory} from 'src/app/services/services';

@Component({
  selector: 'app-category-post',
  templateUrl: './category-post.component.html',
  styleUrls: ['./category-post.component.css']
})
export class CategoryPostComponent implements OnInit {
posts: any
  name: any
  constructor(private route: ActivatedRoute , private http:HttpClient) {
  }
  ngOnInit() {
    this.route.params.subscribe(async params => {
      this.name = params["name"]
      const response = await getPostByCategory(this.http,this.name)
      response.subscribe((res: any) =>  this.posts = res
      )
    })
  }
}
