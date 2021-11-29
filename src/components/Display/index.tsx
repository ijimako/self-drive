import { StyledDisplay } from './StyledDisplay'
import { Table } from 'reactstrap'

interface IDisplayProps {
  xPos: number
  yPos: number
  cardinalDirection: string
}

const Display = ({ xPos, yPos, cardinalDirection }: IDisplayProps) => (
  <>
    <StyledDisplay>
      <Table borderless responsive>
        <tr>
          <td className="label">Position X</td>
          <td>{xPos}</td>
        </tr>
        <tr>
          <td className="label">Position Y</td>
          <td>{yPos}</td>
        </tr>
        <tr>
          <td className="label">Direction</td>
          <td>{cardinalDirection}</td>
        </tr>
      </Table>
    </StyledDisplay>
  </>
)

export default Display
