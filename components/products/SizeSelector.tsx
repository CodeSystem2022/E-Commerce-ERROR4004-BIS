import React, { FC } from 'react'

import { Box, Button } from '@mui/material'

import { ISize } from '../../interfaces'

interface SizeSelectorProps {
  selectedSize?: ISize
  sizes: ISize[]
}

const SizeSelector: FC<SizeSelectorProps> = ({
  selectedSize,
  sizes
}) => {
  return (
    <Box>
      {
        sizes.map(size => (
          <Button
            key={ size }
            size='small'
            sx={ {
              color: `${ selectedSize === size ? ' #3A64D8' : 'black' }`,
              border: `${ selectedSize === size ? '2px solid #3A64D8' : '2px solid black' }`,
              margin: '4px',
              fontWeight: '800'
            } }
          >
            { size }
          </Button>
        ))
      }
    </Box>
  )
}

export default SizeSelector 