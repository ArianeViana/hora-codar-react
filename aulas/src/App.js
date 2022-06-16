import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from "./components/layout/Navbar"
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/empresa" element={<Empresa />}></Route>
        <Route exact path="/contato" element={<Contato />}></Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;