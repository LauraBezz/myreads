import React, {Component} from 'react'
import {Link} from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

class SearchBooks extends Component {

	state = {
		error: "",
		books: [],
		query: ""
	}

	searchBooks = (query) => {
		this.setState({ books: [] })
		BooksAPI.search(query).then((data) => {
			//console.log("filter "+query);
			console.log("result ", data);

			if (typeof data === "undefined") {
				this.setState({ error: "" })
				this.setState({ books: [] })
			} else if (data.error) {
				this.setState({ error: data.error })
				this.setState({ books: [] })
			} else {
				this.setState({ error: "" })
				this.setState({ books: data })
			}
			this.setState({ query: query.trim() })

		})
	}

	render() {
		const {moveTo, myBooks} = this.props
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to='/'>Close</Link>
					<div className="search-books-input-wrapper">
						{/*
						 NOTES: The search from BooksAPI is limited to a particular set of search terms.
						 You can find these search terms here:
						 https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

						 However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
						 you don't find a specific author or title. Every search is limited by search terms.
						 */}
						<input type="text" placeholder="Search by title or author" onChange={(event) => this.searchBooks(event.target.value)} />

					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{
							this.state.books.map((book) => (
								<Book key={book.id} book={book} myBooks={myBooks} shelf={"none"} moveTo={moveTo} />
							))
						}
					</ol>
				</div>
			</div>
		)
	}
}

export default SearchBooks;
