import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map,catchError ,tap} from 'rxjs/operators';
import { Subject ,throwError} from 'rxjs';


@Injectable({providedIn :'root'})
export class PostsService {


  error = new Subject<string>();

    constructor(private http :HttpClient){}

    createAndStorePosts(title :string ,content:string){
        const postData :Post={title :title ,content:content}

        this.http.post<{ name:string }>('https://angularbackends.firebaseio.com/posts.json',
        postData,
        {
           observe: 'response'

        }
     ).subscribe(responseData =>{
       console.log(responseData);

     },error =>{
       this.error.next(error.message);
     });

    }

    fetchPost(){
      let searchParams = new HttpParams();
      searchParams = searchParams.append('print' ,'pretty')
      searchParams = searchParams.append('custom' ,'key') // this not supported by firebase

       return this.http.get<{ [key:string] :Post }>('https://angularbackends.firebaseio.com/posts.json',
       {
         headers :new HttpHeaders({'Custom-Header' :'Hello'}),
         params :searchParams,
         responseType :'json'
        // params : new HttpParams().set('print' ,'pretty')
       })
        .pipe(map(responseData =>{
          const postArray: Post[] =[] ;
      
          for (const key in responseData){
            if (responseData.hasOwnProperty[key])
            {
            postArray.push({ ...responseData[key], id:key })
            }
          }
          return postArray
        }),
        catchError(errorRes =>{
          // send to analytics sever
          return throwError(errorRes);

        })
        )

    }
    deletePost(){
      return  this.http.delete('https://angularbackends.firebaseio.com/posts.json',
      {
        observe:'events',
        responseType: 'text'
      }
      ).pipe(tap(event=>{
        console.log(event);
        if (event.type === HttpEventType.Sent){
          //
        }
        if (event.type === HttpEventType.Response)
        {
          console.log(event.body);
        }
      }))
    }

}