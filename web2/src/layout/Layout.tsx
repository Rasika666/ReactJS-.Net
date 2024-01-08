import { FC } from "react";
import { Container, Row, Col} from "react-bootstrap";
import SideBar from "./SideBar";


const Layout = (Component: FC) => ({ ...props }) => (
        <Container fluid className="mt-5">
            <Row>
                <Col md={2} ><SideBar/></Col>
                <Col md={8}>
                    <Component {...props} />

                </Col>
            </Row>
        </Container>


);

export default Layout;