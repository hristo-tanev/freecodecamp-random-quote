const initialState = {
  quotes: [],
  busy: false
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
  }
  return state
}
