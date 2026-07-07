import './App.css'
import Tabela from './components/table'
import Footer from './components/Footer'

function App() {
  

  return (
    <>

      <h1>Introdução ao React</h1>
      <p>Passo a Passo para criar e rodar um projeto em React.js:</p>
      <ul>
        <li>Usar o comando npm create vite@latest</li>
        <li>Selecionar as opções desejadas</li>
        <li>Acessar a pasta do projeto</li>
        <li>Instalar as dependências com npm install</li>
        <li>Rodar o projeto com npm run dev</li>
      </ul>
      <Tabela/>
      <Footer/>
    </>
  )
}

export default App
