export class LibraryRecord {
    name: string;
    bookName: string;
    returnDate: string;
    email:string;
    constructor(name: string, bookName: string) {
      this.name = name;
      this.bookName = bookName;
      this.returnDate = "";
    }
  
  }