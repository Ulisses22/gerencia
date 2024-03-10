// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from './components/Menu';
import CadastroFornecedor from './components/cadastros/CadastroFornecedor';
import CadastroProduto from './components/cadastros/CadastroProduto';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/cadastros/fornecedor" element={<CadastroFornecedor />} />
          <Route path="/cadastros/produto" element={<CadastroProduto />} />
          {/* Outras rotas */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
