import React from 'react';
import { Component } from 'react';


export default class BookPreview extends Component {


  render() {
    let { currBook } = this.props;
    return <div className="preview-container flex justify-center align-center">
      <button className="arrow left" onClick={this.props.moveBackwards}></button>
      <div>
        <div className="flex align-center justify-between">
          <h2 className="book-title">{currBook.title}</h2>
          <input type="checkbox" className="preview-checkbox" checked={currBook.isChecked ? true : false} onChange={() => this.props.toggleBook(!currBook.isChecked, currBook)}></input>
        </div>
        <hr></hr>
        <h2 className="preview-author">{currBook.author}</h2>
        <p className="preview-description">{currBook.description}</p>
        <div className="flex">
          <div className={currBook.rating >= 1 ? "star-on" : "star-off"}></div>
          <div className={currBook.rating >= 2 ? "star-on" : "star-off"}></div>
          <div className={currBook.rating >= 3 ? "star-on" : "star-off"}></div>
          <div className={currBook.rating >= 4 ? "star-on" : "star-off"}></div>
          <div className={currBook.rating >= 5 ? "star-on" : "star-off"}></div>
        </div>
        <h5><strong>Price: </strong>${currBook.price}</h5>
      </div>
      <button className="arrow right" onClick={this.props.moveForward}></button>
    </div>
  }
}