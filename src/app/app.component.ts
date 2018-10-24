import { Component, OnInit } from '@angular/core';

import { LibraryRecord } from './LibraryRecord';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,4}$"; 
  title = 'my-app';
  isHidden:boolean=false;
  isValidData:boolean=true;
  books:string[]=["Wings of fire","Time history","End of the day","Harry Potter","Gravity","Intersteller"];
  libraryRecord:LibraryRecord=new LibraryRecord("","");
  records:LibraryRecord []=[];
  constructor(){
    /*this.records=[new LibraryRecord("Ismail","Wings of fire"),
    new LibraryRecord("Abdul","Connection"),
    new LibraryRecord("Abbas","C++")];*/
  }
  addDetails() {
  if(this.libraryRecord.email=="" || this.libraryRecord.bookName=="" || this.libraryRecord.name=="" || this.libraryRecord.returnDate=="")
  {
      this.isValidData=false;
  }
  else
  {
    this.isValidData=true;
    this.records.push(this.libraryRecord);
    this.libraryRecord=new LibraryRecord("","");
  }
  }
}
