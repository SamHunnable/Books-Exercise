package com.qa.service;

public interface BookService {
	
	String getAllBooks();

	String createBook(String book);

	String deleteBook(Long id);

}
