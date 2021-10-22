import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { readProducts } from '../redux/products/productsActions';
import { Link } from 'react-router-dom'
import Loading from "./Loading";

const Products = () => {
    let state = useSelector(state => state)
    let { products } = state

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(readProducts())
    }, [dispatch])

    const productsJsx = (products.length > 0) ? (
        <div className="d-grid d-grid-product">
            {products.map((item) => {
                return <div key={item.id} className="grid-item text-center">
                    <div>
                        <img src={item.image} alt="" />
                    </div>
                    <h3 className="product-title">{item.title}</h3>
                    <span className="product-price">{item.price} euros</span>
                    <div className="d-flex justify-content-around product-buttons">
                        <Link to={`/Product/${item.id}`}><span className="text-upper">view</span></Link>
                    </div>
                </div>
            })
            }
        </div>
    ) : (
        <Loading text="Loading products. Please wait" imgSource="http://localhost:3000/images/loading.jpg" />
    )

    return <div className="container">{productsJsx}</div>

}
export default Products