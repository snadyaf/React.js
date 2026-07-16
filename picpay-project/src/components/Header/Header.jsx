import './Header.css'

function Header (){

    return (

        <>
            <header>
                
                <img src="https://picpay.com/fragments/pt-br/pf/media_13996f8efd712b02b99ff6fc15e8750f498e63e37.webp?width=2000&format=webply&optimize=medium" alt="picpay logo"/>
                   
                <div>
                <button className = 'btnAreaCliente'>Área do Cliente</button>
                <button className = 'btnAbrirConta'>Abrir Conta</button>
                <button id = 'btnPesquisa'> <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg> </button>
                <button id = 'btnMenu'> <svg viewBox="0 0 100 80" width="16" height="16" fill="#333333"> 
                    <rect width="100" height="16" rx="8"></rect>
                    <rect y="32" width="100" height="16" rx="8"></rect>
                    <rect y="64" width="100" height="16" rx="8"></rect>
                </svg> </button>
                </div>

            </header>
        </>


    )
}

export default Header