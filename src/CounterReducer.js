const counterReducer = (state, action) => {
    switch (action) {
      case 'DECREMENT':
        return state - 1
    }
  }

  export default counterReducer;