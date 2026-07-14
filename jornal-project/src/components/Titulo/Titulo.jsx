import './Titulo.css'

function Titulo (props){

    return (
        <>
            <header>
                
                <h1>Jornal do Dia: {props.dia}</h1>

            </header>
        
        </>
    )
}

export default Titulo