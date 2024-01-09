import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Department } from '../model/Model'
import { DepartmentForm, FormAction } from '../component/CustomerForm';
import Layout from '../layout/Layout';

function EditDepartment() {
  
  const { department } = useParams()

  const dep1 = new Department(12, 'dep0001', 'Finance');

  useEffect(() => {
      //API call
  },[])

  return (
    <DepartmentForm action={FormAction.Edit} depatmentDate={dep1}/>
  )
}

export default Layout(EditDepartment)