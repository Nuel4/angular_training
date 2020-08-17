import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,OnDestroy {
  title = 'http';


  loadedPost :Post[]=[];
  isFetching= false;
  error =null;
  private errorSub :Subscription;

  constructor(private http: HttpClient ,private postService :PostsService){}

  ngOnInit(){
   this.errorSub= this.postService.error.subscribe(errorMessage=>{
      this.error = errorMessage;
    });


    this.isFetching =true;
    this.postService.fetchPost().subscribe(posts =>{
      this.isFetching =false;
      this.loadedPost =posts;
    },error =>{
      this.isFetching =false;
      this.error =error.message;
    });

  }

  onCreatePost(postData : Post)
  {
    this.postService.createAndStorePosts(postData.title ,postData.content)
     
  }
  onFetchPosts(){
    //this.isFetching =true;
    this.isFetching =true;
    this.postService.fetchPost().subscribe(posts =>{
      this.isFetching =false;
      this.loadedPost =posts;
     } ,error=>{
       this.isFetching =false;
       this.error = error.message;
       console.log(error);

     });
     }
  onClearPost(){
    this.postService.deletePost().subscribe(()=>{
      this.loadedPost=[];
    })

  }
onHandleError(){
  this.error=null;
}

  ngOnDestroy(){
    this.errorSub.unsubscribe();
  }

}
