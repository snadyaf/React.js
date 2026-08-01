import './Cartoes.css'

function Cartoes({ cartoes }) {
    return (

        <>

            <section className="tituloCartoes">


                <p className="txtParaVoce">Para você</p>

                <div className="txtAproveitar">
                    <h1>Aproveitar mil <br /> possibilidades <br /> em um só cartão</h1>
                    <h3>Parcele suas compras em <br /> até 36x com PicPay Card.</h3>
                </div>

                <div className="containerCartoes">

                    <h2>Cartão de Crédito</h2>

                    <div className="containerCards">

                        {cartoes.map((cartao) => (
                            <div className="cardsCartoes" key={cartao.nome}>

                                <h4>{cartao.nome}</h4>
                                <div className="imgCartao">
                                    <img src={cartao.img} alt={cartao.nome} />
                                </div>
                                <h4>{cartao.limite}</h4>
                                <ul>
                                    {cartao.vantagens.map((vantagem, index) => (
                                        <li key={index}>{vantagem}</li>
                                    ))}
                                </ul>

                            </div>
                        ))}

                    </div>

                </div>

            </section>
        </>

    )
}

export default Cartoes