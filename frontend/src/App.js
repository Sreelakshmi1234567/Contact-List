import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contactform from './components/Contactform';
import Contactlist from './components/Contactlist';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Contactform/> }/>
        <Route path='/contact'element={<Contactlist/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
