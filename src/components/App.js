import { useState } from "react";
import TopPlayers from "./TopPlayers";
import {
  Nav,
  Navbar,
  Card,
  DropdownButton,
  Dropdown,
  Container,
  Row,
  Col,
  NavDropdown,
} from "react-bootstrap";
import planetsideWorlds from "../services/planetsideWorlds";

import "../styles/App.css";

export default function App() {
  const [worldId, setWorldId] = useState(17);

  const worldItems = planetsideWorlds.worlds.map((world) => {
    const isActive = worldId === world.id;

    return (
      <NavDropdown.Item
        key={world.id}
        eventKey={world.id}
        onSelect={updateWorldId}
        active={isActive}
      >
        {world.name}
      </NavDropdown.Item>
    );
  });

  function updateWorldId(newWorldId) {
    setWorldId(Number.parseInt(newWorldId));
  }

  return (
    <div>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">squittal.LivePlanetmans</Navbar.Brand>
          <Navbar.Toggle aria-controls="site navigation" />
          <Navbar.Collapse id="site-navbar">
            <Nav>
              <NavDropdown
                id="nav-dropdown-world"
                title="Server"
                menuvariant="dark"
              >
                {worldItems}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container variant="dark" style={{ 'margin-top': '1em' }}>
        <Row>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Top Players for {planetsideWorlds.getWorldFromId(worldId)?.name}
                </Card.Title>
                <TopPlayers worldId={worldId} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
