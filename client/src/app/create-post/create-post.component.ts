import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  model: any ={}

  constructor() { }

  ngOnInit(): void {
  }

  createPost() {
    console.log(this.model);
  }

  cancel() {
    console.log("cancel create post");
  }

}
