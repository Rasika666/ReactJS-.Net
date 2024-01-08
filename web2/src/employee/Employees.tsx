import React from 'react'
import { CustomTable } from '../component/Table'
import Layout from '../layout/Layout';

function Employees() {
  return (
    <CustomTable />
  )
}

export default Layout(Employees);