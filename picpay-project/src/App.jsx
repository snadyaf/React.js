
import './App.css'
import Header from './components/Header/Header.jsx'
import MainPrincipal from './components/MainPrincipal/MainPrincipal.jsx'
import MainServices from './components/MainServices/MainServices.jsx'
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
    },  {
      icone: <ArrowLeftRight />,
      nomeservico: "Parcele seus Pix e Boletos", 
      descricao: "Em até 36x com toda tranquilidade."
    },  {
      icone: <HandCoins />,
      nomeservico: "Empréstimo", 
      descricao: "Análise simples e dinheiro na sua conta rapidinho."
    }

]

const beneficio = [{ 
      icone: <Shield />,
      nomevantagem: "Modo Seguro",
      descricao: "Proteção com múltiplas camadas de tecnologia."

    }, {
      icone: <SmartphoneNfc />,
      nomevantagem: "A Conta das Contas",
      descricao: "Conecte suas contas de outros bancos aqui."

    }, {
      icone: <ChartColumn />,
      nomevantagem: "Assistente de Pagamentos",
      descricao: "Receba alertas e pague boletos em um só lugar."
    }, {
      icone: <MessageCircleMore />, 
      nomevantagem: "Pix no Whatsapp",
      descricao: "Faça Pix por áudio ou mensagem com PicPay."
    }
  
  ]



function App() {
  
 return ( 
 
    <>

    <Header/>
    <MainPrincipal/>
    <MainServices servicos={servicos}/>
    <MainServices beneficios={beneficio}/>

    </>
  )
}

export default App
