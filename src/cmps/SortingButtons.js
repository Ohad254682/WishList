import React from 'react';
import { Component } from 'react';

export default class SortingButtons extends Component {
    state = {
        isAscending: true,
        sortBy: '',
        prevSortBy: ''
    }

    onSort = (sortBy) => {
        if (this.state.prevSortBy === sortBy) {
            this.setState({ isAscending: !this.state.isAscending },
                this.setState({ prevSortBy: sortBy },
                    () => this.props.sorting(this.state.isAscending, sortBy)))
        }
        else {
            this.setState({ isAscending: true },
                this.setState({ prevSortBy: sortBy },
                    () => this.props.sorting(this.state.isAscending, sortBy))
            )
        }
    }

    render() {
        return <div className="sorting-btns">
            <button onClick={() => this.onSort('title')}>Title</button>
            <button onClick={() => this.onSort('price')}>Price</button>
            <button onClick={() => this.onSort('rating')}>Rating</button>
        </div>
    }
}

