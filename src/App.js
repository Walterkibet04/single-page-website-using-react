import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services'
import Contact from './Components/Contact'
import Policy from './Components/Policy'
import List from './Components/List';
import Footer from './Components/Footer';
function App() {
  return (
    <>
      <List/>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/services' Component={Services}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/policy' Component={Policy}/>
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
