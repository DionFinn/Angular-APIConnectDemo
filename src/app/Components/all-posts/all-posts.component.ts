import { Component, OnInit } from '@angular/core';
import { Post } from '../../../Models/Post';
import { PostService } from '../../../Services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  postList: Post[];
  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._postService.getAllPosts().subscribe(
      unpackedPosts => this.postList =unpackedPosts
    );
  }

}