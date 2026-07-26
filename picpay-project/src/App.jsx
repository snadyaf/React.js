
import './App.css'
import Header from './components/Header/Header.jsx'
import MainPrincipal from './components/MainPrincipal/MainPrincipal.jsx'
import MainServices from './components/MainServices/MainServices.jsx'
import { CircleDollarSign, CreditCard, HandCoins } from "lucide-react";


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
      icone: <HandCoins />,
      nomeservico: "Parcele seus Pix e Boletos", 
      descricao: "Em até 36x com toda tranquilidade."
    },  {
      icone: <CircleDollarSign />,
      nomeservico: "Empréstimo", 
      descricao: "Análise simples e dinheiro na sua conta rapidinho."
    }

]




function App() {
  
 return ( 
 
    <>

    <Header/>
    <MainPrincipal/>
    <MainServices servicos={servicos}/>

    </>
  )
}

export default App
