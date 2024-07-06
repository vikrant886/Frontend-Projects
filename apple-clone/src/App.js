import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Higlight from './components/Higlight';
import Threemodel from './components/Threemodel';

function App() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Higlight/>
      <Threemodel/>
    </main>
  );
}

export default App;
