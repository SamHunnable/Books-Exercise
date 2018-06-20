package com.qa.repository;

import static javax.transaction.Transactional.TxType.SUPPORTS;
import static javax.transaction.Transactional.TxType.REQUIRED;
import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Default;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import com.google.gson.Gson;
import com.qa.domain.Book;

@Default
@ApplicationScoped
@Transactional(SUPPORTS)
public class BookDBRepository implements BookRepository {

	@PersistenceContext(unitName = "primary")
	private EntityManager manager;
	
	public String getAllBooks() {	
		Query query = manager.createQuery("SELECT a FROM Book a");
		if (query != null) {
			return new Gson().toJson(query.getResultList());
		}
		else {
			return "{\"message\": \"No accounts found\"}";
		}		
	}
	@Transactional(REQUIRED)
	public String createBook(String book) {
		Book newBook = new Gson().fromJson(book, Book.class);
		manager.persist(newBook);
		return "{\"message\": \"Book added\"}";
	}

	@Transactional(REQUIRED)
	public String deleteBook(Long id) {
		manager.remove(id);
		return "{\"message\": \"Book deleted\"}";
	}

}
