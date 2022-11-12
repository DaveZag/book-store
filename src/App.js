import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header/Header';
import Categories from './Pages/Categories';

const App = () => (
  <div className="app limit lmt-block">
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </div>
);

export default App;
