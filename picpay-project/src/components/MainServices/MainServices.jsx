import './MainServices.css'

function MainServices({ servicos }) {

  return (

  
    <div className="telaServicos">

      <h2 className="textServicos">
        Tudo o que o seu dinheiro precisa está aqui
      </h2>

      <div className="cards">

        {servicos.map((servico) => (
          <div className="card" key={servico.nomeservico}>

            <div className="icone">
              {servico.icone}
            </div>

            <h3>{servico.nomeservico}</h3>

            <p>{servico.descricao}</p>

          </div>
        ))}

      </div>

      </div>
      )
}

      export default MainServices