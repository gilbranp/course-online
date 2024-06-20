import {Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <div className="footer py-5">
      <Container>
       <Row>
        <Col>
         <h3 className="fw-bold">GilbranID</h3>
         <p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio nemo ad voluptas. Quisquam, odit architecto! Id dolore ipsam atque molestiae.</p>
        <div className="no mb-1 mt-4">
          <Link className="text-decoration-none">
          <i className="fa-brands fa-whatsapp"></i>
          <p className="m-0">+6281268477296</p>
          </Link>
        </div>
        <div className="mail">
          <Link className="text-decoration-none">
          <i className="fa-regular fa-envelope"></i>
          <p className="m-0">gilbranbambimboo@gmail.com</p>
          </Link>
        </div>
        </Col>
        <Col className="d-flex flex-column col-lg-2 col">
         <h5>Menu</h5>
         <Link to="">Home</Link>
         <Link to="kelas">Kelas</Link>
         <Link to="testimonial">Testimonial</Link>
         <Link to="faq">FAQ</Link>
         <Link to="syaratketen">Syarat & Ketentuan</Link>
        </Col>
        <Col></Col>
       </Row>
      </Container>
      </div>
  )
}
