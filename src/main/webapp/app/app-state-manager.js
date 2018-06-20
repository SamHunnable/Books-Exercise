"use strict";

(function () {

    angular.module('BookApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider.state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/feature/dashboard/dashboard.html"
        }).state("books", {
                url: "/books",
                templateUrl: "app/feature/books/books.html"
        }).state("about", {
                url: "/about",
                templateUrl: "app/feature/about/about.html"
        })
    });
}());
