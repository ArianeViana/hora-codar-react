import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa'
import Frase from './components/Frase';
import List from './components/List';


function App() {
  const nome = "Simba"

  return (
    <div className="App">   
      <h1>Testando CSS</h1> 
      <Frase />

      <h1>Testando Props</h1>  
      <SayMyName nome="Ariane" />
      <SayMyName nome="Gustavo" />
      <SayMyName nome={nome}/>
      <Pessoa
        nome="Ariane"
        idade = {31}
        profissao = "Estudante" 
        foto = "https://via.placeholder.com/150" />   

      <List />
    </div>
  );
}

export default App;