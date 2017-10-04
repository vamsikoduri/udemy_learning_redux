import React, { Component } from 'react';

import { connect } from 'react-redux';


class BookDetail extends Component {

    render() {

        if (!this.props.book) {
            return (<div> Select a book to get Started </div>)
        }



        return (

            <div>
                <h1> Selected Book Details </h1>
                <div>{this.props.book.title}</div>
            </div>


        )
    }

}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }

}

export default connect(mapStateToProps)(BookDetail);