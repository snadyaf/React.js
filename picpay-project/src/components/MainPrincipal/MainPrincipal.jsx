import './MainPrincipal.css'

function MainPrincipal (){

    return (

        <>

            
            <div id='imgPrincipal'>

                <div className = "btnMainPrincipal">

                    <button className ="active">Para você</button>
                    <button>Para sua empresa</button>

                </div>

                <div>

                    <h1>PicPay. Seu próximo banco.</h1><br/>
                    <h2>Tudo o que você precisa para <br/>
                        resolver a sua vida financeira <br/>
                        em um só lugar.</h2>
                        
                </div>

                <div>
                    <button className='btnAbrirContaPrincipal'>Abrir Conta</button>
                </div>

            </div>

        </>

    )
}

export default MainPrincipal 