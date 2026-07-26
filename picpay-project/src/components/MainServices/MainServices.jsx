import './MainServices.css'

function MainServices({servicos}) {

  return (
    <div id="telaServicos">

      <h2 id="textServicos">Tudo o que o seu dinheiro precisa está aqui</h2>

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

        
      <h1 id="textMais">Mais de 68 milhões de brasileiros escolhem PicPay todos os dias</h1>

    </div>
  );
}

export default MainServices