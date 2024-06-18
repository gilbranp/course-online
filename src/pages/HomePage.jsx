import {Container, Row, Col} from "react-bootstrap";
import HeroImage from '../assets/img/hero.png'

export default function HomePage() {
  return (
    <div className="home">
      <header className="w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1>
              Temukan <br/><span>Bakat Kreatifmu</span><br/>  Bersama Kami !
              </h1>
              <p>l</p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100"></div>
    </div>
  )
}
