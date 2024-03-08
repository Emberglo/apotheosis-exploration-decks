import './App.css';

export default function Card({ id, type, title, image, rulesText1, rulesText2, rulesText3 }) {
  return (
    <div id="card">
      <h3>{ type }</h3>
      <h4>{ title }</h4>
      <img src={image} alt="placeholder" />
      <p>{ rulesText1 }</p>
      <p>{ rulesText2 }</p>
      <p>{ rulesText3 }</p>
    </div>
  )
}
