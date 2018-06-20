package com.qa.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Book {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String bookTitle;
	private String genre;
	private String yearPublished;

	
	public Book(long id, String bookTitle, String genre, String yearPublished) {
		this.bookTitle = bookTitle;
		this.genre = genre;
		this.yearPublished = yearPublished;
	}

	public Book() {
		
	}

	public long getId() {
		return id;
	}

	public String getBookTitle() {
		return bookTitle;
	}


	public void setBookTitle(String bookTitle) {
		this.bookTitle = bookTitle;
	}


	public String getGenre() {
		return genre;
	}


	public void setGenre(String genre) {
		this.genre = genre;
	}


	public String getYearPublished() {
		return yearPublished;
	}


	public void setYearPublished(String yearPublished) {
		this.yearPublished = yearPublished;
	}
	
}
