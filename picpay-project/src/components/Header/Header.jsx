import './Header.css'

function Header (){

    return (

        <>
            <header>
                
                <img src="https://picpay.com/fragments/pt-br/pf/media_13996f8efd712b02b99ff6fc15e8750f498e63e37.webp?width=2000&format=webply&optimize=medium" alt="picpay logo"/>
                <div className="nav-Header">
                <a href="">Conta Digital</a>
                <a href="">Cartões</a>
                <a href="Empréstimos"></a>
                <a href="">Investimentos</a>
                <a href="">Seguros</a>
                <a href="">O PicPay</a>                
                </div>
                <button id = 'btnPesquisa'> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 30 30">
<path d="M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z"></path>
</svg> </button>
                <button id = 'btnAreaCliente'>Área do Cliente</button>
                <button id = 'btnAbrirConta'>Abrir Conta</button>
            </header>
        </>


    )
}

export default Header