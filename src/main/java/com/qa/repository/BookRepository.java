package com.qa.repository;

public interface BookRepository {
	
	String getAllBooks();

	String createBook(String book);

	String deleteBook(long id);

}
