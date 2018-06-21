"use strict";

(function () {


    function BookService (bookDal) {

        this.getBooks = function()
        {
        	return bookDal.getBooks();
        };

        this.deleteBook = function(bookToDelete)
        {
          return bookDal.deleteBook(bookToDelete);
        }

        this.saveBook = function(bookToSave)
        {
          return bookDal.deleteBook(bookToDelete);
        }

    }

    angular.module("BookApp").service("bookService", ['bookDal', BookService]);

}());
