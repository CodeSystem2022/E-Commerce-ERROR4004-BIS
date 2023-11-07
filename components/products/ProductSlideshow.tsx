import React, { FC } from 'react'
import { Slide } from 'react-slideshow-image'
import styles from './ProductSlideshow.module.css'
import 'react-slideshow-image/dist/styles.css'

interface ProductSlideshowProps {
  images: string[]
}

const ProductSlideshow: FC<ProductSlideshowProps> = ({ images }) => {
  return (
    <Slide
      easing='ease'
      duration={ 7000 }
      indicators
    >
      {
        images.map(image => {
          return (
            <div className={ styles['each-slide'] } key={ image }>
              <div
                style={ {
                  backgroundImage: `url(${ image })`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat'
                } }
              >

              </div>
            </div>
          )
        })
      }
    </Slide>
  )
}

export default ProductSlideshow
