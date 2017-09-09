import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';


import { DataService } from '../data/data.service';
@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
    providers:[DataService]
})

export class TablesComponent implements OnInit, OnDestroy {
private req:any;
  List:any;

  constructor(private _data:DataService) {}
  

  ngOnInit() {
    // this.todayDate = new Date()
    this.req = this._data.list().subscribe(data=>{
      this.List = data;
    })

  }

  ngOnDestroy(){
    this.req.unsubscribe()
  }
}
/*

import { Component, OnInit, OnDestroy } from '@angular/core';

import { VideoItem } from '../videos/video';
import { VideoService } from '../videos/videos.service';



@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [DAtaService]
})
export class VideoListComponent implements OnInit, OnDestroy {
    private req: any;
    title = "Video List";
    // someItem = "<h1>Hi there</h1>"
    // todayDate; // https://angular.io/docs/ts/latest/guide/pipes.html
    List:any;
  constructor(private _data:DataService) {}


  ngOnInit() {
    // this.todayDate = new Date()
    this.req = this._data.list().subscribe(data=>{
      this.List = data;
    })

  }

  ngOnDestroy(){
    this.req.unsubscribe()
  }

}
*/