import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdmRestaurantes from './paginas/Adm/Restaurantes/AdmRestaurantes';
import FormularioRestaurante from './paginas/Adm/Restaurantes/FormularioRestaurante';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/adm/restaurantes" element={<AdmRestaurantes />} />
      <Route path="/adm/restaurantes/novo" element={<FormularioRestaurante />} />
    </Routes>
  );
}

export default App;
