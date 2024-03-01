import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import NewsItem from './components/NewsItem';



function App() {
  return (
    <div>
      <NavBar/>
      <NewsBoard/>
      <NewsItem/>
    </div>
  );
}

export default App;
