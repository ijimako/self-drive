import { directions } from "../../config/constants"
import { Button } from "reactstrap";
import { StyledNavigation } from "./StyledNavigation";

interface INavigationProps {
  report: Function
  cardinalDirection: string
}

const Navigation = ({report, cardinalDirection}: INavigationProps) => (
  <StyledNavigation>
    <h2>Navigation</h2>
    <Button className="nav-button"
      color="primary"
      onClick={() => {
        report(cardinalDirection, directions.LEFT)
      }}
    >
      Left
    </Button>
    <Button className="nav-button"
      color="primary"
      onClick={() => {
        report(cardinalDirection, directions.FORWARD)
      }}
    >
      Forward
    </Button>
    <Button className="nav-button"
      color="primary"
      onClick={() => {
        report(cardinalDirection, directions.RIGHT)
      }}
    >
      Right
    </Button>
  </StyledNavigation>
)

export default Navigation
