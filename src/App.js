import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeApp from './components/home';
import Smart from './components/smart';


function App() {
  return (
    <>
      {/* <NavbarComponent /> */}
      <Routes>
        <Route exact path='/' element={<HomeApp />} />
        <Route path='/smart' element={<Smart />} />
        {/* Agrega la ruta para Smart */}
        {/* Otras rutas comentadas pueden ir aquí */}
      </Routes>
    </>
  );
}

export default App;
