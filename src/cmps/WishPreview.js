import React from 'react';
import { Component } from 'react';


export default function WishList(props) {

    return <div className="flex">
        <div className="wishlist-item-decoration"></div>
        <li className="wishlist-item flex justify-between">
            {props.book.title.length > 23 ? props.book.title.slice(0, 23) + "..." : props.book.title}
            <button className="remove-book-btn" onClick={() => props.onRemoveFromWishList(props.book.title)}><strong>X</strong></button>
        </li>

    </div>
}