import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Layout from '../layout/Layout';
import { DepartmentForm, FormAction } from '../component/CustomerForm';

function AddDepartment() {
  return (
    <DepartmentForm action={FormAction.SAVE}/>
  )
}

export default Layout(AddDepartment);