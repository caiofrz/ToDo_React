// import logo from './logo.svg';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import './App.css';
import Images from './components/Images';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  return (
    <div className="App">

        <h1>Minha primeira aplicação REACT</h1>
        <FirstComponent />
        <SecondComponent />
        <Images />
        <Hooks />
        <List />
        <RenderCond x={2}/>
        <Fragment />
        <Container>
          <h1>Filho do Container</h1>
        </Container>

    </div>
  );
}

export default App;

