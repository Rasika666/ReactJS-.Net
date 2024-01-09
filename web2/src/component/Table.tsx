
import React, { FC } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap';
import { Department, Employee } from '../model/Model';
import { Link } from 'react-router-dom';


interface TableProps {
    department?: Department[],
    employee?: Employee[],

}


const DepartmentHeader: FC<{ showDepartmentHeader: Boolean }> = ({ showDepartmentHeader }) => (
    <>
        {showDepartmentHeader && (
            <>
                <th>department id</th>
                <th>department code</th>
                <th>department name</th>
            </>

        )}

    </>
)


const EmployeeHeader: FC<{ showEmployeeHeader: Boolean }> = ({ showEmployeeHeader }) => (
    <>
        {showEmployeeHeader && (
            <>
                <th>employee id</th>
                <th>first name</th>
                <th>last name</th>
                <th>email</th>
                <th>dob</th>
                <th>age</th>
                <th>salary</th>
                <th>department</th>
            </>

        )}

    </>
)

const DepartmentData: FC<{ department?: Department }> = ({ department }) => (
    <>
        {!!department && (
            <>
                <td>{department.id?.toString()}</td>
                <td>{department.code}</td>
                <td>{department.name}</td>
            </>

        )}
    </>
)

const EmployeeData: FC<{ employee?: Employee }> = ({ employee }) => (
    <>
        {!!employee && (
            <>
                <td>{employee.id?.toString()}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.dob.toDateString()}</td>
                <td>{employee.age?.toString()}</td>
                <td>{employee.salary.toString()}</td>
                <td>{employee.department.name}</td>

            </>

        )}
    </>
)

const Operation: FC<{id: Number}> = ({id}) => (
    <th>
        <div className='d-flex justify-content-around'>
            <div>
                <Link to={`/department/${id}`}><i className="fa fa-eye"></i></Link>
            </div>
            <div>
                <Button variant="warning"><i className="fa fa-pencil-square-o"></i></Button>
            </div>
            <div>
                <Button variant="danger"><i className="fa fa-close"></i></Button>
            </div>
        </div>
    </th>
)


const CustomTable: FC<{ props: TableProps }> = ({ props }) => {
    const { department, employee } = props;
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <DepartmentHeader showDepartmentHeader={!!department} />
                    <EmployeeHeader showEmployeeHeader={!!employee} />
                    <th>opertions</th>
                </tr>
            </thead>
            <tbody>
                {
                    !!department && department.map(dep => (
                        <tr key={dep.id.toString()}>  
                            <DepartmentData department={dep} />
                            <Operation id={dep.id}/>
                        </tr>
                    ))
                }

                {
                    !!employee && employee.map(emp => (
                        <tr key={emp.id.toString()}>
                            <EmployeeData employee={emp} />
                            <Operation id={emp.id}/>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
};

export { CustomTable };

