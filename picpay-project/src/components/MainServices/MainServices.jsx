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

      <div className="imgcards">

      <h1 className="textMais">
        Mais de <br />
        68 milhões de <br />
        brasileiros <br />
        escolhem PicPay <br />
        todos os dias
      </h1>

      
        <img
          src="https://picpay.com/pt-br/media_13ebcbd46cd57276eb74cf059cf052cc44e06aedd.webp?width=2000&format=webp&optimize=medium"
          alt="Imagem PicPay"
        />

       <div className="cards_img"> 

        {beneficios.map((beneficio) => (
          <div className="card" key={beneficio.nomebeneficio}>

            <div className="icone">
              {beneficio.icone}
            </div>

            <h3>{beneficio.nomebeneficio}</h3>

            <p>{beneficio.descricao}</p>

          </div>
        ))}

      </div>

      </div>

    </div>
  );
}

export default MainServices