"use strict";

(function () {

    function BooksDal (dal) {

        this.getBooks = function () {
            return dal.http.GET("rest/Book/json");
        };

        this.saveBook = function (bookToSave) {
            return dal.http.POST("rest/Book/json", bookToSave);
        };

        this.updateBook = function (bookToUpdate) {
            return dal.http.PUT("rest/Book/json", bookToUpdate);
        };

        this.deleteBook = function (bookToDelete) {
            return dal.http.DELETE("rest/Book/json/", bookToDelete);
        };
    }

    angular.module("BookApp").service("bookDal", ["dal", BooksDal]);
}());
