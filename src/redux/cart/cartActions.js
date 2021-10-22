export const addToCart = (product) => {
    return (dispatch, getState) => {
        dispatch({ type: "ADD_TO_CART", payload: product })
    }
}
