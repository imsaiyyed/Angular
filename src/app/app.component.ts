import { Component } from '@angular/core';

import { LibraryRecord } from './LibraryRecord';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  isHidden:boolean=false;
  books:string[]=["Wings of fire","Time history","End of the day","Harry Potter","Gravity","Intersteller"];
  libraryRecord:LibraryRecord=new LibraryRecord("","");
  records:LibraryRecord []=[];
  constructor(){
    /*this.records=[new LibraryRecord("Ismail","Wings of fire"),
    new LibraryRecord("Abdul","Connection"),
    new LibraryRecord("Abbas","C++")];*/
  }
  addDetails() {
    this.records.push(this.libraryRecord);
    this.libraryRecord=new LibraryRecord("","");
  }
}
