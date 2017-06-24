import axios from 'axios'

export const fetchQuoteRequest = () => ({ type: 'QUOTE_REQUEST' })
export const fetchQuoteSuccess = (text, author) => ({ type: 'QUOTE_SUCCESS', payload: { text, author } })
export const fetchQuoteFail = () => ({ type: 'QUOTE_FAIL' })

export function fetchQuote() {
  return (dispatch) => {
    dispatch(fetchQuoteRequest())
    axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
         .then((response) => {
           dispatch(fetchQuoteSuccess(response.data[0].content, response.data[0].title))
         })
         .catch((error) => {
           dispatch(fetchQuoteFail())
         })
  }
}
