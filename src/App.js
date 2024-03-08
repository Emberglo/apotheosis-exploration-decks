import './App.css';
import fakeDB from './FakeDB';
import Card from './Card';
import { useState } from 'react';

function App() {

  const cards = fakeDB;
  const [card, setCard] = useState({});

  function drawCard() {
    let randomNumber = Math.floor(Math.random() * (4-0) + 0);
    setCard(cards[randomNumber]);
    console.log(card);
  }

  return (
    <div className="App">
      <Card 
        key={card?.id} 
        id={card?.id} 
        type={card?.type} 
        title={card?.title} 
        rulesText1={card?.rulesText1}
        rulesText2={card?.rulesText2}
        rulesText3={card?.rulesText3}
      />
      <button onClick={drawCard}>
        Draw Card
      </button>
    </div>
  );
}

export default App;
