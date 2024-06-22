import AppRouter from './components/AppRouter';
import Navbar from './components/UI/Navbar/Navbar';
import BackToTop from './components/UI/backToTop/BackToTop';
import Footer from './components/UI/footer/Footer';
import './styles/App.scss';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className='content'>
          <AppRouter />
        </div>
        <BackToTop/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
