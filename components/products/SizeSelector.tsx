import React, { FC } from 'react'
import { Box, Button } from '@mui/material'
import { ISize } from '../../interfaces'

interface SizeSelectorProps {
  selectedSize?: ISize
  sizes: ISize[]
  // Method
  onSelectedSize: (size: ISize) => void
}

export const SizeSelector: FC<SizeSelectorProps> = ({
  selectedSize,
  sizes,
  onSelectedSize
}) => {
  return (
    <Box>
      {
        sizes.map(size => (
          <Button
            aria-label='select a size product'
            key={ size }
            size='small'
            sx={ {
              color: `${ selectedSize === size ? ' #3A64D8' : 'black' }`,
              border: `${ selectedSize === size ? '3px solid #3A64D8' : '3px solid black' }`,
              margin: '4px',
              padding: '2px 4px',
              fontWeight: '800'
            } }
            onClick={ () => onSelectedSize(size) }
          >
            { size }
          </Button>
        ))
      }
    </Box>
  )
}

export default SizeSelector 