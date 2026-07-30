import './Beneficios.css'

function Beneficios({ beneficios }) {
    return (

        <>
            <div className="sectionBeneficios">

                <div className="textMaisBotao">

                    <h1 className="textMais">
                        Mais de <br />
                        68 milhões de <br />
                        brasileiros <br />
                        escolhem PicPay <br />
                        todos os dias
                    </h1>

                    <button className='btnAbrirContaBeneficios'>Abrir Conta</button>

                </div>

                <div className="imgcards">

                    <img src="https://picpay.com/pt-br/media_13ebcbd46cd57276eb74cf059cf052cc44e06aedd.webp?width=2000&format=webp&optimize=medium"
                        alt="Imagem PicPay"
                    />

                </div>


                <div className="cards_beneficios">

                    {beneficios.map((beneficio) => (
                        <div className="cardsgrid" key={beneficio.nomebeneficio}>

                            <div className="icone">
                                {beneficio.icone}
                            </div>

                            <h3 className="nomebeneficio">{beneficio.nomebeneficio}</h3>

                            <p className="descricao">{beneficio.descricao}</p>

                        </div>
                    ))}

                </div>

            </div>

        </>

    )
}

export default Beneficios