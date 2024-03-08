import logo from './logo.svg';
import './App.css';
import fakeDB from './FakeDB';
import Card from './Card';

function App() {

  const cards = fakeDB;
  let card = undefined;

  function drawCard() {
    let randomNumber = Math.floor(Math.random() * 4);
    card = cards[randomNumber];
    console.log(card);
  }

  return (
    <div className="App">
      <Card key={card?.id} id={card?.id} type={card?.type} title={card?.title} />
      <div onClick={drawCard}>
        Click to Draw
      </div>
    </div>
  );
}

export default App;
