import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { readProduct, removeProduct } from '../redux/product/productActions'
import { addToCart } from '../redux/cart/cartActions'
import Loading from "./Loading"

const Product = (props) => {
    let { product, cart } = useSelector(state => state)
    const dispatch = useDispatch()

    const goToProducts = () => {
        props.history.push('/')
    }

    useEffect(() => {
        dispatch(readProduct(props.match.params.x))
        return () => {
            dispatch(removeProduct())
        }
    }, [props.match.params.x, dispatch])

    let updateQuantity = (product) => {

        if (cart.find(item => item.id === product.id)) {
            let foundProduct = cart.filter(item => item.id === product.id)[0]
            console.log(cart, foundProduct, foundProduct.quantity)
            return { ...foundProduct, quantity: foundProduct.quantity + 1 }
        }
        else {
            return { ...product, quantity: 1 }
        }
    }

    const resultJsx = (Object.keys(product).length === 0) ? (
        <Loading text="loading product. please wait" imgSource="http://localhost:3000/images/loading.jpg" />
    ) : (
        <div className="d-grid d-grid-product-detail product-detail">
            <div className="image-container">
                <img src={product?.image} alt="" />
            </div>
            <div className="product-data d-flex justify-content-center align-items-center">
                <div>
                    <p className="product-description">{product?.description}</p>
                    <span>Category: {product.category}</span>
                    <span>Price: {product.price}</span>
                    <span>Rating: {product.rating.count}</span>
                    <div className="product-detail-buttons">
                        <button onClick={e => goToProducts()} className="text-upper">back to products</button>
                        <button onClick={e => dispatch(addToCart(updateQuantity(product)))} className="text-upper">add to cart</button>
                    </div>
                </div>
            </div>
        </div>)

    return <div className="container">{resultJsx}</div>
}
export default Product