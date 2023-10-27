import React, { FC } from 'react'

import { Box, IconButton, Typography } from '@mui/material'
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'

interface ItemCounterPorps {
  currentValue: number
  maxValue: number
  // Methods
  updatedQuantity: (newValue: number) => void
}

const ItemCounter: FC<ItemCounterPorps> = ({
  currentValue,
  maxValue,
  updatedQuantity
}) => {

  const addOrRemove = (value: number) => {
    if (value === -1) {
      if (currentValue === 1) return

      return updatedQuantity(currentValue - 1)
    }

    if (currentValue >= maxValue) return

    updatedQuantity(currentValue + 1)
  }

  return (
    <Box display='flex' alignItems='center'>
      <IconButton
        onClick={ () => addOrRemove(-1) }
        aria-label='remove one product'
      >
        <RemoveCircleOutline />
      </IconButton>
      <Typography sx={ { width: 40, textAlign: 'center' } }>
        { currentValue }
      </Typography>
      <IconButton
        onClick={ () => addOrRemove(+1) }
        aria-label='add one product'
      >
        <AddCircleOutline />
      </IconButton>
    </Box>
  )
}

export default ItemCounter