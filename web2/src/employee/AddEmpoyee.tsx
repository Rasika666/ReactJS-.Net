import React from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import Layout from '../layout/Layout'
import { EmployeeForm } from '../component/CustomerForm'

function AddEmpoyee() {
  return (
    <EmployeeForm />
  )
}

export default Layout(AddEmpoyee)