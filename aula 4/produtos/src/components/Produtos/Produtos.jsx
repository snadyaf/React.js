import { useState, useEffect } from 'react'
import './Produtos.css'

export default function Produtos() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchProducts() {
            try {
                setLoading(true)
                const response = await fetch('https://fakestoreapi.com/products?limit=4')
                const data = await response.json()
                setProducts(data)
            } catch (err) {
                setError(err.message)
            }

        }
        fetchProducts()
    }, [])

    const pesquisa = products.filter(product => product.category === 'jewelery', 'mens clothing');

    return (

        <div className="containerCards">

            {products.map((product) => (
                <div className="cardsProdutos" key={product.id}>

                    <img src={product.image} alt={product.title} />
                    <p>R$ {product.price}</p>
                    <h4>{product.title}</h4>
                </div>
            ))}

        </div>


    )

}
