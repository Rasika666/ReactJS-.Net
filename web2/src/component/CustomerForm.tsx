import React, { FC } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'


const DepartmentForm: FC = () => {
    return (
        <Row>
            <Col md={6}>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Department Code</Form.Label>
                        <Form.Control type="text" placeholder="Department code" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Department Name</Form.Label>
                        <Form.Control type="text" placeholder="Department Name" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}


const EmployeeForm: FC = () => {
    return (
        <Row>
            <Col md={6}>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="email" placeholder="dob" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" placeholder="dob" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control type="number" placeholder="salary" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Department</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Department</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>



                    <Button variant="primary" type="submit" className="mb-3">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>

    )
}

export { DepartmentForm, EmployeeForm }