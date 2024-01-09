import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Layout from '../layout/Layout';
import { DepartmentForm } from '../component/CustomerForm';

function AddDepartment() {
  return (
    <DepartmentForm />
  )
}

export default Layout(AddDepartment);