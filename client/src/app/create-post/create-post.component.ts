import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  model: any ={}

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
  }

  createPost() {
    this.model.date = new Date();
    this.http.post('http://localhost:5223/api/posts', this.model).subscribe(
      response => { this.home(), console.log(response) },
      error => { console.log(error)}
    );
  }

  cancel() {
    console.log("cancel create post");
  }

  home() {
    this.route.navigate(["/"]);
  }

}
