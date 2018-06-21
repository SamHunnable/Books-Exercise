package com.qa.intergration;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import org.apache.log4j.Logger;

import com.qa.service.BookService;

@Path("/Book")
public class BookEndpoint {
	
	private static final Logger LOGGER = Logger.getLogger(BookEndpoint.class);
	
	@Inject
	BookService service;
	
	@Path("/json")
	@POST
	@Produces({ "application/json" })
	public String createBook(String book) {
		LOGGER.info("Intergration create book");
		return service.createBook(book);	
	}
	
	
	@Path("/json")
	@GET
	@Produces({ "application/json" })
	public String getAllBooks() {
		return service.getAllBooks();
	}
	
	
	@Path("/json/{id}")
	@DELETE
	@Produces({ "application/json" })
	public String deleteBook(@PathParam("id") long id) {
		LOGGER.info("Intergration delete book");
		return service.deleteBook(id);
	}
	
	@Path("/json")
	@PUT
	@Produces({ "application/json" })
	public String updateBook(String book) {
		return service.updateBook(book);
	}
	

}
