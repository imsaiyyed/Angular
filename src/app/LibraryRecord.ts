export class LibraryRecord {
    name: string;
    bookName: string;
    returnDate: Date;
    constructor(name: string, bookName: string) {
      this.name = name;
      this.bookName = bookName;
      this.returnDate = new Date("yyyy/mm/dd");
    }
  
  }