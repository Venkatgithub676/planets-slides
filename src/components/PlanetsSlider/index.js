// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const items = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  }
  return (
    <div className="bg-container" data-testid="planets">
      <h1 className="planets-heading">PLANETS</h1>
      <Slider {...items}>
        {planetsList.map(each => (
          <PlanetItem eachItem={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
