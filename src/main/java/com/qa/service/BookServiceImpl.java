package com.qa.service;

import javax.inject.Inject;

import org.apache.log4j.Logger;

import com.qa.repository.BookRepository;

public class BookServiceImpl implements BookService {

	private static final Logger LOGGER = Logger.getLogger(BookServiceImpl.class);
	
	@Inject
	private BookRepository repo;
	
	public String getAllBooks() {
		return repo.getAllBooks();
	}

	public String createBook(String book) {
		return repo.createBook(book);
	}

	public String deleteBook(long id) {
		LOGGER.info("BookService delete book");
		return repo.deleteBook(id);
	}

}
