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
        
      <h1 id="textMais">Mais de  <br /> 68 milhões de  <br /> brasileiros <br /> escolhem PicPay  <br />todos os dias</h1>

      <div id="imgcards">
        <img src="https://picpay.com/pt-br/media_13ebcbd46cd57276eb74cf059cf052cc44e06aedd.webp?width=2000&format=webply&optimize=medium" alt="imagemcards" />
      </div> 

    </div>
  );
}

export default MainServices