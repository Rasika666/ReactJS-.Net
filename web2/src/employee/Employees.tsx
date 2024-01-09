import React, { FC, useEffect, useState } from 'react'
import { CustomTable } from '../component/Table'
import Layout from '../layout/Layout';
import { Department, Employee } from '../model/Model';

const Employees: FC = () => {

  const [employee, setEmployee] = useState<Employee[]>([]);

  const setInitEmployee = () => {
    const employee1 = new Employee( 1, 
      'Kushan', 
      'Eman', 
      'eman@gmail.com', 
      new Date("2019-01-16"), 
      20,
      100000,new Department(22, 'Dep00001', 'finance'))

      setEmployee([...employee, employee1]);
  }

  useEffect(() => {
    setInitEmployee()



  }, [])


  return (
    <CustomTable props={{employee: employee}}/>
  )
}

export default Layout(Employees);