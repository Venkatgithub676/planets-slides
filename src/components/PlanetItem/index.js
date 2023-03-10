// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachItem} = props
  const {name, imageUrl, description} = eachItem
  return (
    <div className="each-planet-dtls" alt={name}>
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="name">{name}</h1>
      <p className="desc">{description}</p>
    </div>
  )
}

export default PlanetItem
