import { Component, VERSION, OnInit } from '@angular/core';
import { Post } from '../Models/Post';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  dummyPost: Post = {userId: 0, id: 0, title: "df", body: "skdhb" };

  constructor(private _postService: PostService) {}

  ngOnInit() {
    this._postService
    .getPostById(11)
    .subscribe(
      (postWeb) => this.dummyPost = postWeb
    );

  }
}
