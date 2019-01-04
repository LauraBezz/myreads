import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";

const shelfs = [
	{id: "currentlyReading", title: "Currently reading"},
	{id: "wantToRead", title: "Want to read"},
	{id: "read", title: "Read"},
]

class BooksApp extends React.Component {
	/**
	 * TODO: Instead of using this state variable to keep track of which page
	 * we're on, use the URL in the browser's address bar. This will ensure that
	 * users can use the browser's back and forward buttons to navigate between
	 * pages, as well as provide a good URL they can bookmark and share.
	 */
	state = {
		books: []
	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			//console.info("state ", books);
			this.setState({books})
		})
	}

	moveTo = (book, shelf) => {
		console.log("moveTo "+shelf ,book)
		book.shelf = shelf;
		BooksAPI.update(book, shelf).then(res => {
			this.setState(state => {
				return {
					books: state.books.filter((b) => b.id !== book.id).concat([book])
				}
			})
		})
	}

	render() {
		return (
			<div className="app">
				<Route path='/search' render={({ history }) => (
					<SearchBooks  moveTo={this.moveTo} myBooks={this.state.books} />
				)}/>
				<Route exact path='/' render={({ history }) => (
					<ListBooks books={this.state.books} shelfs={shelfs} moveTo={this.moveTo} />
				)}/>
			</div>
		)
	}
}

export default BooksApp
