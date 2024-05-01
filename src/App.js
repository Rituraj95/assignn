
import './App.css';

import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'
import HeroSecond from './components/herosecond/herosecond';
import Herothird from './components/herothird/herothird'
import Footer from './components/footer/footer';




function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <HeroSecond></HeroSecond>
      <Herothird></Herothird>
      <Footer></Footer>
   
      
   
   
    </div>
  );
}

export default App;
