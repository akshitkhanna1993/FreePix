import { Component,OnInit } from '@angular/core';
import { PexelPhotosService } from './services/pexel-photos.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'freePics';
  search:any;
  perPage=60; 
  photoData:any;
  pexPhotos:any;
  videoData:any;
  pexVideos:any;
  showPhotoSection = 0;
  showVideoSection = 0;

  constructor( private pexelService:PexelPhotosService  ){
this.pexelService.getPhotos(this.search,this.perPage)

  }

  ngOnInit() {

  }

  getRequestType(val){
    debugger
    console.log(val);

    if(val=="photo"){
      this.showPhotoSection=1;
      this.showVideoSection=0;
    }

    else if(val=="video"){
      this.showPhotoSection=0;
      this.showVideoSection=1;
    }

  }

  searchPhotos() {
    this.pexelService.getPhotos(this.search,this.perPage).subscribe( (res)=>{
      this.photoData = res;
      this.search='';
      this.pexPhotos = this.photoData.photos;
      console.log(this.photoData);
    },(error)=>{
      console.log(error)
    })
  }

  searchVideos() {
    this.pexelService.getVideos(this.search,this.perPage).subscribe( (res)=>{
      this.videoData = res;
      this.search='';
      this.pexVideos = this.videoData.videos;
      console.log(this.videoData);
    },(error)=>{
      console.log(error)
    })
  }
}
