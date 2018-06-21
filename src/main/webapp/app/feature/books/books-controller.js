"use strict";

(function() {

    var BookController =  function(bookService, $log) {
    	var vm = this;

      vm.formData = {};

        vm.isHidden = false;

        vm.hideTable = function()
        {
        	vm.isHidden = !vm.isHidden
        };

        function init() {
        	bookService.getBooks().then(function (results) {
           	vm.books = results;
           	$log.log("In the book controller the value of the result promise is ");
        	$log.log(JSON.stringify(vm.books));
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
       }

       init();

       vm.saveBook = function()
       {
        var bookToSave = {
          "bookTitle" : vm.formData.newTitle,
          "genre" : vm.formData.newGenre,
          "yearPublished" : vm.formData.newYear
        }
         bookService.saveBook(bookToSave);
       }

       vm.myDelete = function(bookToDelete)
       {
         bookService.deleteBook(bookToDelete);
         console.log("myDelete ran");
         bookService.getBooks().then(function (results) {
           vm.books = results;
         });
       }


    };

    angular.module('BookApp').controller('bookController', ['bookService','$log', BookController]);
}());
