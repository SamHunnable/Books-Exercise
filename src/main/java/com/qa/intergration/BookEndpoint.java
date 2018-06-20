package com.qa.intergration;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.qa.service.BookService;

@Path("/Book")
public class BookEndpoint {
	
	@Inject
	BookService service;
	
	@Path("/json")
	@POST
	@Produces({ "application/json" })
	public String createBook(String book) {
	return service.createBook(book);	
	}
	
	
	@Path("/json")
	@GET
	@Produces({ "application/json" })
	public String getAllBooks() {
		return service.getAllBooks();
	}
	
	
	@Path("/json")
	@DELETE
	@Produces({ "application/json" })
	public String deleteBook(long id) {
		return service.deleteBook(id);
	}
	

}
