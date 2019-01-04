import React, {Component} from 'react'

class Menu extends Component {

	handleChange = (event) => {
		event.preventDefault()
		if (this.props.moveTo)
			this.props.moveTo(this.props.book, event.target.value)
	}

	render() {
		let shelf = this.props.book.shelf;

		if (typeof shelf === "undefined") {
			this.props.myBooks.filter((myBook) => myBook.id === this.props.book.id).map((book) => (
				shelf = book.shelf
			))
		}

		if (typeof shelf === "undefined") {
			shelf = "none"
		}
		//console.log("shelf "+shelf);
		return (
			<div className="book-shelf-changer">
			<select defaultValue={shelf} onChange={this.handleChange}>
					<option value="move" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		)
	}
}

export default Menu;
