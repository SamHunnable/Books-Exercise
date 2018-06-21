"use strict";

(function() {

    var BookController =  function(bookService, $log) {

    	var vm = this;

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

       vm.myDelete = function(id)
       {
         bookService.deleteBook(id);
         console.log("myDelete ran");
         bookService.getBooks().then(function (results) {
           vm.books = results;
         });
       }


    };

    angular.module('BookApp').controller('bookController', ['bookService','$log', BookController]);
}());
