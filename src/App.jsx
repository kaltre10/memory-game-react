import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Modal from './components/modal/Modal';
import data from '../data';
import './App.css'

function App() {

  const [ modal, setModal ] = useState(false);
 
  // const rand = (max, min) =>  Math.random() * (max - min) + min;
  // const cards = [];

  // const init = () => {  
  //   data.forEach( () => {
  //     let numRand = Math.round(rand(1, 16));
  //     while(cards.map(card => card.id).includes(numRand)){
  //         numRand = Math.round(rand(1, 16));
  //     }
  //     cards.push( data[numRand - 1]);
  //   })
  // }
  // init();
 

  return (
    <div className="App">
      {modal 
        ? 
          <Modal setModal={setModal}/>
        :
          (<>
            <div>
              <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" className="logo" alt="Vite logo" />
              </a>
              <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <p>
                Memory Game
              </p>
              <button onClick={ () => { setModal(true)} }>
                Play Game
              </button>
            
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
          </>)}
    </div>
  )
}

export default App
