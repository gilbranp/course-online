import {Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <div className="footer py-5">
      <Container>
       <Row className="d-flex justify-content-between">
        <Col lg="5">
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
        <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
         <h5 className="fw-bold">Menu</h5>
         <Link to="">Home</Link>
         <Link to="kelas">Kelas</Link>
         <Link to="testimonial">Testimonial</Link>
         <Link to="faq">FAQ</Link>
         <Link to="syaratketen">Syarat & Ketentuan</Link>
        </Col>
        <Col lg="4" className="mt-lg-0 mt-5">
        <h5 className="fw-bold">Subscribe untuk info menarik</h5>
        <div className="subscribes">
          <input type="text" placeholder="Subscribe..." />
          <button className="btn btn-danger rounded-end rounded-0">Subscribe</button>
        </div>
        <div className="social mt-3">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
        </Col>
       </Row>
       <Row>
        <Col>
        <p className="text-center px-md-0 px-3">&copy; {new Date().getFullYear()} by <Link target="_blank" className="text-decoration-none text-dark" to={"https://instagram.com/gilbran_id"}><span className="fw-bold">GilbranID</span></Link>, All Rights Reserved.</p>
        </Col>
       </Row>
      </Container>
      </div>
  )
}