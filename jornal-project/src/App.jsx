
import './App.css'
import Titulo from './components/Titulo/Titulo'
import Noticias from './components/Noticias/Noticias'
import Rodape from './components/Rodape/Rodape'


function App() {
  
  
  return (
    <>
     
     <Titulo dia= 'Segunda'/>
     <Titulo dia= 'Terça'/>
     <Titulo dia = 'Quarta'/>
     <Noticias/>
     <Rodape/>

    </>
  )
}

export default App
