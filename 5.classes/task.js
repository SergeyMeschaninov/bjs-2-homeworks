class PrintEditionItem {
  constructor(name, releaseDate, pagesCount){
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  /* метод fix для починки издания */
  fix() {
      this.state *= 1.5;
  }

  /* геттер для возвращения 100 новому изданию */
  get state(){
    return this._state;
  }

  /* сеттер для присваивания нового значения state */
  set state(condition) {
      if (condition <= 0) {
        this._state = 0;
      } else if (condition >= 100) {
        this._state = 100;
      } else {
        this._state = condition;
      }
  }
}

/* наследование классом Magazine класса PrintEditionItem */
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

/* наследование классом Book класса PrintEditionItem */
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

/* класс романтических книг */
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount){
  super(author, name, releaseDate, pagesCount);
  this.type = 'novel';
  }
}
/* класс фантастических книг */
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount){
  super(author, name, releaseDate, pagesCount);
  this.type = 'fantastic';
  }
}
/* класс детективных книг */
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount){
  super(author, name, releaseDate, pagesCount);
  this.type = 'detective';
  }
}
/* создаем класс Library */
class Library {
  constructor(name){
  this.name = name;
  this.books = [];
  }
  /* Метод добавления книги */
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  /* Метод для поиска книги */
  findBookBy(key, value) {
    for (let book of this.books) {
      if (book[key] === value) {
        return book;
      }
    }
    return null;
  }

  /* Метод поиска запрашиваемой книги */
  giveBookByName(bookName) {
    let index = this.books.findIndex((book) => book.name === bookName);
    if (index !== -1) {
      return this.books.splice(index, 1)[0];
    }
    return null;
  }
}