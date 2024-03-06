import React from 'react'
import { SliderContainer, Image } from './Slider'

const Slider = ({image}) => {
  return (
    <SliderContainer>
      {/* <Text>Shop more than 100 million+ products with every product of your choice for you favorite person.</Text> */}
      <Image src={image}></Image>
    </SliderContainer>
  )
}

export default Slider