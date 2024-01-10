import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import { EmployeeForm, FormAction } from "../component/CustomerForm";
import { useParams } from "react-router";
import { Department, Employee } from "../model/Model";

function EditEmployee() {

    const { employeeId } = useParams()

    const emp1 = new Employee(1, 'Kushan', 'Eman', 'eman@gmail.com', new Date("2019-01-16"), 20, 100000, new Department(22, 'Dep00001', 'finance'));

    useEffect(() => {
        //Api Call
    },[])

    return (
        <EmployeeForm action={FormAction.EDIT} employeeDate={emp1}/>
    )
}

export default Layout(EditEmployee)