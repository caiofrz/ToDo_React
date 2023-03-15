// import logo from './logo.svg';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import './App.css';
import Images from './components/Images';
import Hooks from './components/Hooks';

function App() {
  return (
    <div className="App">

        <h1>Minha primeira aplicação REACT</h1>
        <FirstComponent />
        <SecondComponent />
        <Images />
        <Hooks />

    </div>
  );
}

export default App;

