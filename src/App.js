
import './App.css';
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Delivery from "./components/delivery/Delivery";
import Details from './components/details/Details';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Delivery/>
      <Details/>
      <Main/>
      
    </div>
  );
}

export default App;
