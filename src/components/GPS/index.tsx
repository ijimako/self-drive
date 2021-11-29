import { useState } from "react"
import { directions, cardinalDirections } from "../../config/constants"
import Navigation from '../Navigation'
import Display from '../Display'
import { StyledGPS } from './StyledGPS'

const GPS = () => {
  const [xPos, setXPos] = useState(0)
  const [yPos, setYPos] = useState(0)
  const [cardinalDirection, setCardinalDirection] = useState(
    cardinalDirections.NORTH
  )

  // @ts-expect-error
  const report = (cardinalDirection: string, direction: string): string => {
    switch (cardinalDirection) {
      case cardinalDirections.NORTH:
        switch (direction) {
          case directions.LEFT:
            setCardinalDirection(cardinalDirections.WEST)
            setXPos((currXPos) => currXPos - 1)
            break
          case directions.RIGHT:
            setCardinalDirection(cardinalDirections.EAST)
            setXPos((currXPos) => currXPos + 1)
            break
          case directions.FORWARD:
            setYPos((currYPos) => currYPos + 1)
            break
        }
        break
      case cardinalDirections.EAST:
        switch (direction) {
          case directions.LEFT:
            setCardinalDirection(cardinalDirections.NORTH)
            setYPos((currYPos) => currYPos + 1)
            break
          case directions.RIGHT:
            setCardinalDirection(cardinalDirections.SOUTH)
            setYPos((currYPos) => currYPos - 1)
            break
          case directions.FORWARD:
            setXPos((currXPos) => currXPos + 1)
            break
        }
        break
      case cardinalDirections.SOUTH:
        switch (direction) {
          case directions.LEFT:
            setCardinalDirection(cardinalDirections.EAST)
            setXPos((currXPos) => currXPos + 1)
            break
          case directions.RIGHT:
            setCardinalDirection(cardinalDirections.WEST)
            setXPos((currXPos) => currXPos - 1)
            break
          case directions.FORWARD:
            setYPos((currYPos) => currYPos - 1)
            break
        }
        break
      case cardinalDirections.WEST:
        switch (direction) {
          case directions.LEFT:
            setCardinalDirection(cardinalDirections.SOUTH)
            setYPos((currYPos) => currYPos - 1)
            break
          case directions.RIGHT:
            setCardinalDirection(cardinalDirections.NORTH)
            setYPos((currYPos) => currYPos + 1)
            break
          case directions.FORWARD:
            setXPos((currXPos) => currXPos - 1)
            break
        }
        break
    }
  }

  return (
    <StyledGPS className="container">
      <h1>GPS</h1>
      <Display xPos={xPos} yPos={yPos} cardinalDirection={cardinalDirection} />
      <Navigation report={report} cardinalDirection={cardinalDirection}/>
    </StyledGPS>
  )
}

export default GPS
