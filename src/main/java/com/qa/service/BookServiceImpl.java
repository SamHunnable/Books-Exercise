package com.qa.service;

import javax.inject.Inject;

import com.qa.repository.BookRepository;

public class BookServiceImpl implements BookService {

	@Inject
	private BookRepository repo;
	
	public String getAllBooks() {
		return repo.getAllBooks();
	}

	public String createBook(String book) {
		return repo.createBook(book);
	}

	public String deleteBook(Long id) {
		return repo.deleteBook(id);
	}

}
