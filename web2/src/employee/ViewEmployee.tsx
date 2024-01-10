import React, {FC , useEffect, useState} from "react";
import { Card, ListGroup } from 'react-bootstrap';
import { Department, Employee } from '../model/Model';
import Layout from "../layout/Layout";
import { useParams } from "react-router-dom";

interface EmployeeProps {
    employee: Employee,
}

const ViewEmployee: FC = () => {

    const { employeeId } = useParams();
    const [employee, setEmployee] = useState<Employee>(new Employee(0, '', '', '', new Date(), 0, 0, new Department(0,'','')));

    const initEmployees = (): Employee[] => [new Employee(1, 'Kushan', 'Eman', 'eman@gmail.com', new Date("2019-01-16"), 20, 100000, new Department(22, 'Dep00001', 'finance'))];

    useEffect(() => {
        const employeeFound = initEmployees().find(emp => emp.id === Number(employeeId))
        if(employeeFound) {
            setEmployee(employeeFound)
        }else {
            throw Error ('Employee Not Found')
        }
    }, [employeeId])

    return (
        <View employeeProps= {{ employee: employee }} />
    )
}

const View: FC<{ employeeProps: EmployeeProps }> = ({ employeeProps }) => {
    return(
        <div className="d-flex justify-content-center ">
            <Card style={{ width: '35rem'}}>
                <Card.Body>
                    <Card.Title className='text-center'>{employeeProps.employee.firstName} {employeeProps.employee.lastName}</Card.Title>

                    <ListGroup>
                        <ListGroup.Item>Employee Id: {employeeProps.employee.id?.toString()}</ListGroup.Item>
                        <ListGroup.Item>Employee First Name: {employeeProps.employee.firstName}</ListGroup.Item>
                        <ListGroup.Item>Employee Last Name: {employeeProps.employee.lastName}</ListGroup.Item>
                        <ListGroup.Item>Employee Email: {employeeProps.employee.email}</ListGroup.Item>
                        <ListGroup.Item>Employee Date of Birth: {employeeProps.employee.dob.toDateString()}</ListGroup.Item>
                        <ListGroup.Item>Employee Age: {employeeProps.employee.age?.toString()}</ListGroup.Item>
                        <ListGroup.Item>Employee Salary: {employeeProps.employee.salary.toString()}</ListGroup.Item>
                        <ListGroup.Item>Employee Department: {employeeProps.employee.department.name}</ListGroup.Item>
                    </ListGroup>

                </Card.Body>
            </Card>
        </div>
    )
}


export default Layout(ViewEmployee)