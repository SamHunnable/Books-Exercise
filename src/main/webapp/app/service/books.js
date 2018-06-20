"use strict";

(function () {


    function BookService (bookDal) {

        this.getBooks = function()
        {
        	return bookDal.getBooks();
        };

    }

    angular.module("BookApp").service("bookService", ['bookDal', BookService]);

}());
