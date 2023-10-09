import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className='app__content'>
        <Navbar></Navbar>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
