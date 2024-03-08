export default function Card({ id, type, title }) {
  return (
    <div>
      <h3>Type: { type }</h3>
      <h4>Title: { title }</h4>
    </div>
  )
}
