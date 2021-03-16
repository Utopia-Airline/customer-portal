import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import "./styles/App.scss";
import Header from './layout/Header';
import Footer from './layout/Footer';

const App = () => {
  const [count, setCount] = useState(5);
  useEffect(() => {
    console.log(count)
  });
  return (
    <>
        <Header/>
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Footer/>
    </>
  )
};

export default App;
