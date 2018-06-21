"use strict";

(function () {


    function BookService (bookDal) {

        this.getBooks = function()
        {
        	return bookDal.getBooks();
        };

        this.deleteBook = function (id)
        {
          return bookDal.deleteBook(id);
        }

    }

    angular.module("BookApp").service("bookService", ['bookDal', BookService]);

}());
