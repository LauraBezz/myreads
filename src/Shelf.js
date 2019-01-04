import React, {Component} from 'react'
import Book from './Book'

class Shelf extends Component {
	render() {
		const {books, shelf, moveTo} = this.props
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{shelf.title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{
							books.filter((book) => book.shelf === shelf.id).map((book) => (
									<Book key={book.id} book={book} shelf={shelf}moveTo={moveTo} myBooks={books} />
								)
							)}
					</ol>
				</div>
			</div>
		)
	}
}

export default Shelf;
