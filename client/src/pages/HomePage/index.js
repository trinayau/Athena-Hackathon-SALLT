import { Col, Row } from "react-bootstrap";
import "./styles.css";

const HomePage = () => {
    return ( <>
       <div className="Container-1-homepage">
        <Row >
          <Col xl={6}><div className="container-1-text">
            <h1>Appli.yes</h1>
            <br />
            <p>
              Appli.yes is a tool that allows you say yes to your appliances by comparing the prices and energy efficiency of appliances and electronics.
            </p>
            <br />
           
            <button className="locateBtn">Compare Now</button>
            <br/>
          </div>
          </Col>

          <Col xl={6}> <div className="container-1-text">

         
            <img role='homePageImg' className="img-fluid"
              src="https://images.pexels.com/photos/5418581/pexels-photo-5418581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
              </div>
              </Col>
              </Row>
      </div>
    </> );
}
 
export default HomePage;
