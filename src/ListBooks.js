import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class ListBooks extends Component {
	render() {
		const {books, shelfs, moveTo} = this.props
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					{shelfs.map((shelf) =>
						<Shelf key={shelf.id}
							   shelf={shelf}
							   books={books}
							   moveTo={moveTo} />
					)}
				</div>
				<div className="open-search">
					<Link to='/search'>Add a book</Link>
				</div>
			</div>
		)
	}
}

export default ListBooks;
