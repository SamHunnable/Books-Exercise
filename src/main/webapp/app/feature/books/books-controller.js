"use strict";

(function() {

    var BookController =  function(bookService, $log) {
    	var vm = this;

      vm.formData = {};

        vm.isHidden = false;
        vm.inputState = true;
        vm.editState = false;

        vm.showUpdate = function(book)
        {
          vm.titleEdit = book.bookTitle;
          vm.genreEdit = book.genre;
          vm.yearEdit = book.yearPublished;
          vm.idToEdit = book.id;
          vm.editState = !vm.editState;
        }

        vm.showCreate = function()
        {
          vm.inputState = !vm.inputState
        }

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
         location.reload();
       }

       vm.myDelete = function(bookToDelete)
       {
         bookService.deleteBook(bookToDelete);
         console.log("myDelete ran");
         location.reload();
       }

       vm.myUpdate = function()
       {
         console.log("UPDATE RAN");
         var bookToUpdate = {
           "id" : vm.idToEdit,
           "bookTitle" : vm.titleEdit,
           "genre" : vm.genreEdit,
           "yearPublished" : vm.yearEdit
         }
         bookService.updateBook(bookToUpdate);
         console.log(bookToUpdate);
         location.reload();
       }




    };

    angular.module('BookApp').controller('bookController', ['bookService','$log', BookController]);
}());
