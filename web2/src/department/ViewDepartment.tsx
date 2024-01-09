import React, { FC, useEffect, useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { Department } from '../model/Model'
import Layout from '../layout/Layout'
import { useParams } from 'react-router-dom'


interface DepartmentProps {
    department: Department,
}

const ViewDepartment: FC = () => {

    const { departmentId } = useParams();
    const [department, setDepartment] = useState<Department>(new Department(0, '', ''));

    const initDepartments = (): Department[] => [new Department(12, 'dep0001', 'Finance'), new Department(13, 'dep0002', 'IT')];


    useEffect(() => {
        const departmentFound = initDepartments().find(dep => dep.id == Number(departmentId))
        if (departmentFound) {
            setDepartment(departmentFound)
        } else {
            throw Error("Department Not Found")
        }

    }, [departmentId])



    return (
        <View departmentProps={{ department: department }} />
    )
}


const View: FC<{ departmentProps: DepartmentProps }> = ({ departmentProps }) => {
    return (
        <Card style={{ width: '50rem' }}>
            <Card.Body>
                <Card.Title>{departmentProps.department.name} Department</Card.Title>

                <ListGroup>
                    <ListGroup.Item>Department Id: {departmentProps.department.id.toString()}</ListGroup.Item>
                    <ListGroup.Item>Department Code: {departmentProps.department.code}</ListGroup.Item>
                    <ListGroup.Item>Department Name: {departmentProps.department.name}</ListGroup.Item>
                </ListGroup>


            </Card.Body>
        </Card>

    )
}

export default Layout(ViewDepartment)