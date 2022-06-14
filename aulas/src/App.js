import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = "Ariane"
  const newName = name.toUpperCase(name)

  function sum(a,b){
    return a + b
  }

  const url = "https://www.skoob.com.br/"

  const urlImagem = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá {newName}</p>
      <p>Soma: {sum(2,3)}</p>
      <p><a href={url} target="_blank">Skoob</a></p>
      <img src={urlImagem} alt="Minha imagem"/>
      <HelloWorld />
    </div>
  );
}

export default App;