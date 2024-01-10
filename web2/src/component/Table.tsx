
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
                <th>Department Id</th>
                <th>Department Code</th>
                <th>Department Name</th>
            </>

        )}

    </>
)


const EmployeeHeader: FC<{ showEmployeeHeader: Boolean }> = ({ showEmployeeHeader }) => (
    <>
        {showEmployeeHeader && (
            <>
                <th>Employee Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Date of birth</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Department</th>
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

const Operation: FC<{id: Number, type: string}> = ({id, type}) => (
    <th>
        <div className='d-flex justify-content-around'>
            <div>
                <Link to={`/${type}/${id}`}><i className="fa fa-eye"></i></Link>
            </div>
            <div>
                <Link to={`/${type}/edit/${id}`}><i className="fa fa-pencil-square-o"></i></Link>
            </div>
            <div>
                <Button variant="danger"><i className="fa fa-close"></i></Button>
            </div>
        </div>
    </th>
)


const CustomTable: FC<{ props: TableProps }> = ({ props }) => {
    const { department, employee } = props;
    const isDepartment = !!department;
    

    return (
        <div>
            <h2 className='text-center mb-3'> {isDepartment ? 'Department' : 'Employee'} Details </h2>
        <Table striped bordered hover >
            <thead>
                <tr>
                    <DepartmentHeader showDepartmentHeader={!!department} />
                    <EmployeeHeader showEmployeeHeader={!!employee} />
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
                {
                    !!department && department.map(dep => (
                        <tr key={dep.id.toString()}>  
                            <DepartmentData department={dep} />
                            <Operation id={dep.id} type= 'department'/>
                        </tr>
                    ))
                }

                {
                    !!employee && employee.map(emp => (
                        <tr key={emp.id.toString()}>
                            <EmployeeData employee={emp} />
                            <Operation id={emp.id} type='employee'/>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
        </div>
    )
};

export { CustomTable };

