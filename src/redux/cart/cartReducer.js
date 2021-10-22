const initialState = []

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            return state.find(item => item.id === action.payload.id) ?
                [...state.filter(item => item.id !== action.payload.id), action.payload] :
                [...state, action.payload]
        }
        default: return state
    }
}
export default cartReducer