'use client'

import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material'
import usePhake from './usePhake'
import TarjetaListItem from './TarjetaListItem'

const Phake: React.FC = () => {
  const { tarjetaArrayByList } = usePhake()
  return (
    <>
      <>
        {tarjetaArrayByList &&
          tarjetaArrayByList.map((tarjeta) => (
            <TarjetaListItem tarjeta={tarjeta}></TarjetaListItem>
          ))}
      </>
    </>
  )
}

export default Phake
