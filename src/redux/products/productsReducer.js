const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'READ_PRODUCTS': return [...action.payload]
        default: return state
    }
}
export default productsReducer
