
import './App.css'
import Header from './components/Header/Header.jsx'
import MainPrincipal from './components/MainPrincipal/MainPrincipal.jsx'
import MainServices from './components/MainServices/MainServices.jsx'
import Beneficios from './components/Beneficios/Beneficios.jsx'
import Cartoes from './components/Cartoes/Cartoes.jsx'
import { CircleDollarSign, CreditCard, ArrowLeftRight, HandCoins, Shield, SmartphoneNfc, ChartColumn, MessageCircleMore } from "lucide-react";

const servicos = [
  {
    icone: <CircleDollarSign />,
    nomeservico: "Conta Digital",
    descricao: "Aqui seu dinheiro rende 102% do CDI nos dias úteis"
  }, {
    icone: <CreditCard />,
    nomeservico: "Cartão de Crédito",
    descricao: "Construa o limite que é do seu número."
  }, {
    icone: <ArrowLeftRight />,
    nomeservico: "Parcele seus Pix e Boletos",
    descricao: "Em até 36x com toda tranquilidade."
  }, {
    icone: <HandCoins />,
    nomeservico: "Empréstimo",
    descricao: "Análise simples e dinheiro na sua conta rapidinho."
  }

]

const beneficio = [{
  icone: <Shield />,
  nomebeneficio: "Modo Seguro",
  descricao: "Proteção com múltiplas camadas de tecnologia."

}, {
  icone: <SmartphoneNfc />,
  nomebeneficio: "A Conta das Contas",
  descricao: "Conecte suas contas de outros bancos aqui."

}, {
  icone: <ChartColumn />,
  nomebeneficio: "Assistente de Pagamentos",
  descricao: "Receba alertas e pague boletos em um só lugar."
}, {
  icone: <MessageCircleMore />,
  nomebeneficio: "Pix no Whatsapp",
  descricao: "Faça Pix por áudio ou mensagem com PicPay."
}

]

const cartoes = [{
  nome: "Picpay Gold",
  img: "https://publish-p153277-e1666050.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--c8f4da62-3c99-47db-a9dd-77bc26b9e055/picpay_gold_card_image.webp",
  limite: "Limite de até R$4 mil",
  vantagens: ["Anuidade zero", "Pix e Boletos em 24x", "Parcelamento de compras feitas à vista"]
}, {
  nome: "Picpay Platinum",
  img: "https://publish-p153277-e1666050.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--37c19e1f-33b9-475b-bc99-8474c4fde4b7/picpay_platinum_card_image.webp",
  limite: "Limite de até R$10 mil",
  vantagens: ["0,5% de cashback que rende 102% do CDI", "Seguro médico em viagens", "Até 3 cartões adicionais"]
}, {
  nome: "Picpay Black",
  img: "https://publish-p153277-e1666050.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--37c19e1f-33b9-475b-bc99-8474c4fde4b7/picpay_platinum_card_image.webp",
  limite: "Consulte limites",
  vantagens: ["1,2% de cashback que rende 102% do CDI", "Sala VIP em aeroportos", "Até 5 cartões adicionais"]
}, {
  nome: "Picpay Epic",
  img: "https://publish-p153277-e1666050.adobeaemcloud.com…e9af-bd9d-4293-a43e-b4a91d2d6e24/cartao_epic.webp",
  limite: "Consulte limites",
  vantagens: ["Até 4% de cashback", "Até 3x sem juros nas compras internacionais", "Cofrinho Turbinado com rendimento diário de 121% do CDI"]
}


]



function App() {

  return (

    <>

      <Header />
      <MainPrincipal />
      <MainServices servicos={servicos} />
      <Beneficios beneficios={beneficio} />
      <Cartoes cartoes={cartoes} />

    </>
  )
}

export default App
