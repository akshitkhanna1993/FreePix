import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import{catchError}  from 'rxjs/operators'


const httpOption = {
  headers:new HttpHeaders({
    'Authorization':'563492ad6f917000010000011a15731e9f4b42e486cbf7b2b9788ef1'
  })
}


@Injectable({
  providedIn: 'root'
})


export class PexelPhotosService {


baseUrl:'https://api.pexels.com/v1/search?query=nature&per_page=1'
 baseVideoUrl:  'https://api.pexels.com/videos/search?query=nature&per_page=1'

  constructor( private http:HttpClient ) { }

  getPhotos(search,perPage):Observable<any> {

    const url = "https://api.pexels.com/v1/search?query="+search+"&per_page="+perPage

    return this.http.get<any>(url,httpOption)
     .pipe(catchError(this.handleError));
  }

getVideos(search,perPage) {

const url = "https://api.pexels.com/videos/search?query="  +search+"&per_page="+perPage
return this.http.get<any>(url,httpOption)
.pipe(catchError(this.handleError));

}


  handleError(error) {
    return throwError(error.message || "There is some server side issue.Please try again after some time");

  }
}
