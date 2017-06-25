import React from 'react'
import { connect } from 'react-redux'

import { fetchQuotes, tweetQuotes } from '../actions/quoteActions'
import { removeTags } from '../../utils/utils'

@connect((store) => {
  return {
    quotes: store.quotes
  }
})

export default class Quote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quoteText: '',
      quoteAuthor: ''
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchQuotes())
    setTimeout(() => {}, 1000)
  }

  getNewQuote() {
    const quoteNumber = Math.floor((Math.random() * 10))
    const quote = this.props.quotes.quotes[quoteNumber]
    this.setState({
      quoteText: removeTags(quote.content, '<p>', '</p>'),
      quoteAuthor: quote.title
    })
  }

  tweetQuote(quoteText) {
    this.props.dispatch(tweetQuotes(quoteText))
  }

  render() {
    const { quoteText, quoteAuthor } = this.state

    return (
      <div class="panel panel-default">
        <div class="panel-body">
          <i class="fa fa-quote-left fa-3x"></i>
          <span>{quoteText}</span>
          <i class="fa fa-quote-right fa-3x"></i>
          <br />
          <div class="author">{quoteAuthor}</div>
          <button type="button" class="btn btn-primary" onClick={this.getNewQuote.bind(this)}>New quote</button>
          <button type="button" class="btn btn-primary" onClick={this.tweetQuote.bind(this, quoteText)}>
            <i class="fa fa-twitter"></i>
          </button>
        </div>
      </div>
    )
  }
}
