import './App.css';
import { useState } from 'react';

import dice1 from "./images/dice-six-faces-one.png";
import dice2 from "./images/dice-six-faces-two.png";
import dice3 from "./images/dice-six-faces-three.png";
import dice4 from "./images/dice-six-faces-four.png";
import dice5 from "./images/dice-six-faces-five.png";
import dice6 from "./images/dice-six-faces-six.png";
//https://www.youtube.com/watch?v=u-o30eBK3xs
//https://game-icons.net/1x1/delapouite/dice-six-faces-six.html#download
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  let diceFaces=[
    dice1,
    dice2,
    dice3,
    dice4,
    dice5,
    dice6
  ]

  const [image1, setImage] = useState(diceFaces[0]);
  const [image2, setImage2] = useState(diceFaces[1]);
  const [diceValue1, setDiceValue1] = useState(1);
  const [diceValue2, setDiceValue2] = useState(2);
  
  function rollDice(){
    let i = 0;
    let n = 12
    const interval = setInterval(() => {
      const randomnum1 = Math.floor(Math.random()*6);
      const randomnum2 = Math.floor(Math.random()*6);
      setDiceValue1(randomnum1+1);
      setDiceValue2(randomnum2+1);
      setImage(diceFaces[randomnum1]);
      setImage2(diceFaces[randomnum2]);
      i++;

      if(i>=n){

        clearInterval(interval);
        const finalRandomnum1 = Math.floor(Math.random()*6);
        const finalRandomnum2 = Math.floor(Math.random()*6);
        setDiceValue1(randomnum1+1);
        setDiceValue2(randomnum2+1);
        setImage(diceFaces[finalRandomnum1]);
        setImage2(diceFaces[finalRandomnum2]);
      }
    }, 50);
      
        
        
  }

  return (
    <div className="App">
      <h1>Dice roller</h1>
      <div className="container">
        <img className="square" src={image1}></img>
        <div style={{width:"1rem",display:"inline-block"}}></div>
        <img className="square" src={image2}></img>
      </div>
      <h2>{diceValue1}+{diceValue2} = {diceValue1 + diceValue2}</h2>
      {diceValue1+diceValue2==2 && <h2><em>Snake Eyes!</em></h2>}
      <button className="btn btn-primary" onClick={()=>rollDice()}>Roll Dice</button>

    </div>
  );
}

export default App;


