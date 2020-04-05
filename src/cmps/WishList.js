import React from 'react';
import { Component } from 'react';
import WishPreview from './WishPreview'


export default function WishList(props) {

    return<>
        <ul>
            {props.wishList.map((book) => <WishPreview key={book.title} book={book} onRemoveFromWishList={props.onRemoveFromWishList}></WishPreview>)}
            {props.wishList.length === 0 && <div className="wishlist-placeholder"></div>}
        </ul>
        <h2 className="total-price">Total Price: ${props.wishList.reduce((sum, book) => {
            return sum + +book.price;
        }, 0).toFixed(2)}</h2>
    </>
}