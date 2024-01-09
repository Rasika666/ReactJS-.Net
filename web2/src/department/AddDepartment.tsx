import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Layout from '../layout/Layout';

function AddDepartment() {
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

export default Layout(AddDepartment);