import { identifierModuleUrl } from '@angular/compiler/src/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Post } from '../../../Models/Post';
import { PostService } from '../../../Services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  @ViewChild('input') inputBox: ElementRef;
  foundPost: Post;
  constructor(private _postService: PostService) { }

  ngOnInit() {
  
  }
  handleClick(): void{
    const id = Number(this.inputBox.nativeElement.value)

    this._postService.getPostById(id).subscribe(
      unpackedPost => this.foundPost = unpackedPost
    );
  }

}