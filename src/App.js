//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Homepage from './components/pages/Homepage';
import DaftarMahasiswa from './components/pages/DaftarMahasiswa';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <Header/>
    <Router>
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/myprofile' exact component={Homepage}/>
        <Route path='/listmahasiswa' exact component={DaftarMahasiswa}/>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
    </>
  );
}

export default App;
