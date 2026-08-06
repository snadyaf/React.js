import { useState, useEffect } from 'react'
import './Produtos.css'

export default function Produtos() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [mostrarFiltro, setMostrarFiltro] = useState(false)

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

    function abreFiltro() {
        setMostrarFiltro(true)
    }

    // const pesquisa = products.filter(product => product.category === 'jewelery', 'mens clothing');


    return (


        <>

            <div className="containerFiltro">

                <button onClick={abreFiltro} className="filtros">Filtrar</button>

                {mostrarFiltro && (
                <div className="popupFiltro">

                    <h3>Filtrar por categoria</h3>
                    <input type="checkbox" name="jewelery" id="jewelery" />
                    <label htmlFor="jewelery">Jewelery</label>
                    <input type="checkbox" name="mens clothing" id="mens clothing" />
                    <label htmlFor="mens clothing">Mens Clothing</label>

                    <button className="mostraItem">Mostrar Itens</button>

       </div> )}

        </div>

        <div className="containerCards">

            {products.map((product) => (
                <div className="cardsProdutos" key={product.id}>

                    <img src={product.image} alt={product.title} />
                    <p>R$ {product.price}</p>
                    <h4>{product.title}</h4>
                </div>
            ))}

        </div>

        </>


            )

}
