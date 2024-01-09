import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DepartmentForm, FormAction } from '../component/CustomerForm'
import { Department } from '../model/Model';
import Layout from '../layout/Layout';

function EditDepartment() {

  const { departmentId } = useParams()

  const dep1 = new Department(12, 'dep0001', 'Finance');

  useEffect(() => {
    // make the api call and get department details usging departmentId
  }, [])

  return (
    <DepartmentForm action={FormAction.EDIT} departmentDate={dep1}/>
  )
}

export default Layout(EditDepartment)