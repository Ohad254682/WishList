import React from 'react';
import { Component } from 'react';
import './App.css';
import {
  getBook, getListLength, addToWishList, removeFromWishList
  , setAsUnchecked, setAsChecked
} from './services/service'
import BookPreview from './cmps/BookPreview'
import WishList from './cmps/WishList'
import SortingButtons from './cmps/SortingButtons'




export default class App extends Component {
  state = {
    currBook: {
      title: "",
      description: "",
      rating: "",
      author: "",
      price: "",
      isChecked: false
    },
    bookIndex: 0,
    listLength: null,
    wishList: []
  }

  async componentDidMount() {
    let currBook = await getBook(0);
    let listLength = await getListLength();
    this.setState({ currBook },
      this.setState({ listLength }));
  }

  moveForward = async () => {
    if (this.state.bookIndex === this.state.listLength - 1) {
      this.setState({ bookIndex: 0 }, async () => {
        let currBook = await getBook(this.state.bookIndex)
        this.setState({ currBook })
      })
    }
    else {
      this.setState({ bookIndex: this.state.bookIndex + 1 }, async () => {
        let currBook = await getBook(this.state.bookIndex);
        this.setState({ currBook })
      })
    }
  }

  moveBackwards = async () => {
    if (this.state.bookIndex === 0)
      this.setState({ bookIndex: this.state.listLength - 1 }, async () => {
        let currBook = await getBook(this.state.bookIndex)
        this.setState({ currBook })
      })
    else {
      this.setState({ bookIndex: this.state.bookIndex - 1 }, async () => {
        let currBook = await getBook(this.state.bookIndex);
        this.setState({ currBook });
      })
    }
  }

  toggleBook = async (isChecked, book) => {
    if (isChecked) {
      let currBook = await setAsChecked(book.title)
      this.setState({ currBook }, async () => {
        let wishList = await addToWishList(book);
        this.setState({ wishList })
      })
    }
    else {
      let currBook = await setAsUnchecked(book.title);
      this.setState({ currBook }, async () => {
        let wishList = await removeFromWishList(book.title);
        this.setState({ wishList })
      })
    }
  }

  onRemoveFromWishList = async (bookTitle) => {
    await setAsUnchecked(bookTitle);
    let wishList = await removeFromWishList(bookTitle);
    this.setState({ wishList })
  }


  sorting=(sortOrder, sortBy)=> {
    let wishList = this.state.wishList.sort(function (book1, book2) {
      const firstBook = (typeof book1[sortBy] === 'string') ? book1[sortBy].toUpperCase() : book1[sortBy];
      const secondBook = (typeof book2[sortBy] === 'string') ? book2[sortBy].toUpperCase() : book2[sortBy];
      return firstBook > secondBook ? 1 : firstBook < secondBook ? -1 : 0;
    })
    if (!sortOrder) {
      wishList = wishList.reverse();
    }
    this.setState({ wishList })
  }

  render() {
    return <div className="container flex justify-center align-center">
      <div className="flex content-container">
        <BookPreview currBook={this.state.currBook} toggleBook={this.toggleBook} moveBackwards={this.moveBackwards} moveForward={this.moveForward}></BookPreview>
        <div className="flex column">
          <SortingButtons sorting={this.sorting}></SortingButtons>
          <WishList wishList={this.state.wishList} onRemoveFromWishList={this.onRemoveFromWishList}></WishList>
        </div>
      </div>
    </div>
  }
}









