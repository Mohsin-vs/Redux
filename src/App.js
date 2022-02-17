import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import MovieDetial from './components/MovieDetail';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MovieDetial/:id" element={<MovieDetial />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
