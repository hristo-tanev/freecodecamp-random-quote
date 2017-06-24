import React from 'react'
import { connect } from 'react-redux'

import { fetchQuote } from '../actions/quoteActions'

@connect((store) => {
  return {
    quotes: store.quotes
  }
})

export default class Quote extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchQuote())
  }

  getNewQuote() {
    this.props.dispatch(fetchQuote())
    setTimeout(() => {}, 1000)
  }

  render() {
    const { text, author } = this.props.quotes

    return (
      <div>
        <div>{text}</div>
        <div>{author}</div>
        <button type="button" class="btn btn-primary" onClick={this.getNewQuote.bind(this)}>New quote</button>
      </div>
    )
  }
}
