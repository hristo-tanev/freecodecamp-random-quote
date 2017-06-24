import React from 'react'
import { connect } from 'react-redux'

import { fetchQuotes } from '../actions/quoteActions'
import { removePTags } from '../../utils/utils'

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
      quoteText: removePTags(quote.content),
      quoteAuthor: quote.title
    })
  }

  render() {
    const { quoteText, quoteAuthor } = this.state

    return (
      <div>
        <i class="fa fa-quote-left fa-3x"></i>
        <span>{quoteText}</span>
        <i class="fa fa-quote-right fa-3x"></i>
        <div>{quoteAuthor}</div>
        <button type="button" class="btn btn-primary" onClick={this.getNewQuote.bind(this)}>New quote</button>
      </div>
    )
  }
}
