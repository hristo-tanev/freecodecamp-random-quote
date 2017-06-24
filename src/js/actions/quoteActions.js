import axios from 'axios'

export const fetchQuotesRequest = () => ({ type: 'QUOTE_REQUEST' })
export const fetchQuotesSuccess = (quotes) => ({ type: 'QUOTE_SUCCESS', payload: { quotes } })
export const fetchQuotesFail = () => ({ type: 'QUOTE_FAIL' })

export function fetchQuotes() {
  return (dispatch) => {
    dispatch(fetchQuotesRequest())
    axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10')
         .then((response) => {
           dispatch(fetchQuotesSuccess(response.data))
         })
         .catch((error) => {
           dispatch(fetchQuotesFail())
         })
  }
}
