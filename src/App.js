import Feature from './component/Feature';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Portfolio from './component/Portfolio';
import Resume from './component/Resume/Resume';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Footer from './component/Footer';
import {  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Header/>
       <Routes>
     
      <Route  path='/about' element={<Home/>}/>
      <Route  path='/feat' element={<Feature/>}/>
      <Route  path='/port' element={<Portfolio/>}/>
      <Route  path='/res' element={<Resume/>}/>
      <Route  path='/skil' element={<Skills/>}/>
      <Route  path='/cont' element={<Contact/>}/> 
      
      </Routes>
      <Footer/>
      </div>
  );
}

export default App;
