import { Component, OnInit } from '@angular/core';
import { getPostById } from 'src/app/services/services';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.css']
})
export class DetailsPostComponent implements OnInit {
  post: any
  postId:any

  constructor(private http:HttpClient ,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      if (params["id"]) {
        this.postId = params["id"]
        const response = await getPostById(this.http, this.postId)
        response.subscribe((res: any) => this.post = res)
      }
    })
  }

}
