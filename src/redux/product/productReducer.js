const todoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'READ_PRODUCT': {
            return action.payload
        }
        case 'REMOVE_PRODUCT': return {}
        default: return state
    }
}
export default todoReducer