import './App.css';
import ListaRend from './components/ListaRend';

function App() {

  const meusItens = ["react", "vue", "angular"]

  return (
    <div className="App">   
      <h1>Renderização de Listas</h1>
      <ListaRend itens={meusItens} />
      <h2>Lista vazia</h2>
      <ListaRend itens={[]}/>
      
    </div>
  )
}

export default App;