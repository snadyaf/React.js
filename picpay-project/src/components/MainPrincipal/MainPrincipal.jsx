import './MainPrincipal.css'

function MainPrincipal (){

    return (

        <>

                       
               <div id='secaoPrincipal'>

                    <img src="https://picpay.com/pt-br/media_1640c26f085d1d4187a4490a8a885f91c562b95ea.webp?width=2000&format=webp&optimize=medium" 
                    alt="Imagem Principal" className="imgPrincipal"/>        

                    <div className = "btnMainPrincipal">

                    <button className ="btnParaVoce active">Para você</button>
                    <button className = "btnParaVoce">Para sua empresa</button>

                    </div>

                    <div id='textPrincipal'>

                    <h1>PicPay. Seu próximo banco.</h1>
                    <h2>Tudo o que você precisa para <br/>
                        resolver a sua vida financeira <br/>
                        em um só lugar.</h2>
                    <button className='btnAbrirContaPrincipal'>Abrir Conta</button>
                    </div>

                
            </div>  

        </>

    )
}

export default MainPrincipal 