const initialState = {
  quotes: [],
  busy: false,
  tweeted: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'QUOTE_REQUEST': {
      return Object.assign({}, state, { busy: true })
    }
    case 'QUOTE_SUCCESS': {
      const { quotes } = action.payload
      return Object.assign({}, state, { quotes, busy: false })
    }
    case 'QUOTE_FAIL': {
      return initialState
    }
    case 'TWEET_REQUEST': {
      return Object.assign({}, state, { busy: true })
    }
    case 'TWEET_SUCCESS': {
      return Object.assign({}, state, { busy: false, tweeted: true })
    }
    case 'TWEET_FAIL': {
      return initialState
    }
  }
  return state
}
