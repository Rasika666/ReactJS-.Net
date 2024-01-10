import React, { FC, useEffect, useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { Department, Employee } from '../model/Model';

enum FormAction {
    EDIT,
    SAVE,
}

interface SaveDepartment {
    DepartmentCode: string,
    DepartmentName: string
}

interface updateDepatement extends SaveDepartment{
    DepartmentId: number,
}

const DepartmentForm: FC<{ action: FormAction, departmentDate?: Department }> = ({ action, departmentDate }) => {
    const [departmentCode, setDepartmentCode] = useState<string>('')
    const [departmentName, setDepartmentName] = useState<string>('')
    const navigate = useNavigate();



    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let data: Promise<Response>;
        try {
            if (action === FormAction.SAVE) {
                data = sendRequest(createDepatement())
            } else if (action === FormAction.EDIT && !!departmentDate) {
                data = sendRequest(updateDepatement(departmentDate))
            } else {
                throw Error("unknown action")
            }
            data.then(result => {
                navigate('/departments')
            }).catch(err => {
                console.error((err as Error).message);  
            })
            
        } catch (e: any) {
            console.error('Error:', e.message);
        }
    };


    const sendRequest = async (params: SaveDepartment): Promise<Response> => {
        const response = await fetch('https://localhost:7092/CreateDepartment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response;

    }


    const createDepatement = (): SaveDepartment => {
        const newDepartment = {
            DepartmentCode: departmentCode,
            DepartmentName: departmentName
        }

        return newDepartment;
    }

    const updateDepatement = (departmentDate: Department) => {
        const updateDepatementData = {
            DepartmentId: departmentDate.id,
            DepartmentCode: departmentCode,
            DepartmentName: departmentName
        }

        return updateDepatementData;
    }


    useEffect(() => {
        if (action === FormAction.EDIT && !!departmentDate) {
            setDepartmentCode(departmentDate.code);
            setDepartmentName(departmentDate.name);
        }
    }, [])

    const formTitle = action === FormAction.EDIT ? 'Edit' : 'Add';

    return (
        <div className="d-flex justify-content-center ">
            <Row>
                <Col className='text-center' md={15}>
                    <h2 className="mb-3">{formTitle} Deparment Details</h2>
                    <Form onSubmit={handleSubmit} >
                        <Form.Group className="mb-3">
                            <Form.Label>Department Code</Form.Label>
                            <Form.Control type="text" placeholder="Department code" onChange={e => setDepartmentCode(e.target.value)} value={departmentCode} required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Department Name</Form.Label>
                            <Form.Control type="text" placeholder="Department Name" onChange={e => setDepartmentName(e.target.value)} value={departmentName} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

interface SaveEmployee {
    EmployeeFirstName: string,
    EmployeeLastName: string,
    EmployeeEmail: string,
    EmployeeDOB: Date | undefined,
    EmployeeSalary: Number | undefined,
    EmployeeDepartment: string

}

interface updateEmployee extends SaveEmployee{
    EmployeeId: number,
}

const EmployeeForm: FC<{ action: FormAction, employeeDate?: Employee }>  = ({ action, employeeDate}) => {
    const [employeeFirstName, setEmployeeFirstName] = useState<string>('')
    const [employeeLastName, setEmployeeLastName] = useState<string>('')
    const [employeeEmail, setEmployeeEmail] =useState<string>('')
    const [employeeDOB, setEmployeeDOB] =useState<Date | undefined>()
    const [employeeSalary, setEmployeeSalary] =useState<Number| undefined>()
    const [employeeDepartment, setEmployeeDepartment] =useState<string>('')
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let data: Promise<Response>;
        try {
            if (action === FormAction.SAVE) {
                data = sendRequest(createEmployee())
            } else if (action === FormAction.EDIT && !!employeeDate) {
                data = sendRequest(updateEmployee(employeeDate))
            } else {
                throw Error("unknown action")
            }
            data.then(result => {
                navigate('/employees')
            }).catch(err => {
                console.error((err as Error).message);  
            })
            
        } catch (e: any) {
            console.error('Error:', e.message);
        }
    };

    const sendRequest = async (params: SaveEmployee): Promise<Response> => {
        const response = await fetch('https://localhost:7092/CreateEmployee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response;

    }

    const createEmployee = (): SaveEmployee => {
        const newEmployee = {
            EmployeeFirstName: employeeFirstName,
            EmployeeLastName: employeeLastName,
            EmployeeEmail: employeeEmail,
            EmployeeDOB: employeeDOB,
            EmployeeSalary: employeeSalary,
            EmployeeDepartment: employeeDepartment

        }

        return newEmployee;
    }

    const updateEmployee = (employeeDate: Employee) => {
        const updateEmployeeData = {
            EmployeeId: employeeDate.id,
            EmployeeFirstName: employeeFirstName,
            EmployeeLastName: employeeLastName,
            EmployeeEmail: employeeEmail,
            EmployeeDOB: employeeDOB,
            EmployeeSalary: employeeSalary,
            EmployeeDepartment: employeeDepartment
        }

        return updateEmployeeData;
    }

    useEffect(() => {
        if (action === FormAction.EDIT && !!employeeDate) {
            setEmployeeFirstName(employeeDate.firstName);
            setEmployeeLastName(employeeDate.lastName);
            setEmployeeEmail(employeeDate.email);
            setEmployeeDOB(employeeDate.dob);
            setEmployeeSalary(employeeDate.salary);
            setEmployeeDepartment(employeeDate.department.name)
        }
    }, [])

    const formTitle = action === FormAction.EDIT ? 'Edit' : 'Add';

    return (
        <div className="d-flex justify-content-center ">
            
        <Row>
            <Col className='text-center' md={15}>
                <h2 className="mb-3">{formTitle} Employee Details</h2>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" onChange={e => setEmployeeFirstName(e.target.value)} value={employeeFirstName} required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" onChange={e => setEmployeeLastName(e.target.value)} value={employeeLastName} required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" onChange={e => setEmployeeEmail(e.target.value)} value={employeeEmail} required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" placeholder="dob" onChange={e => setEmployeeDOB(new Date(e.target.value))} value={employeeDOB?.toISOString().split('T')[0]} required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control type="number" placeholder="salary" onChange={e => setEmployeeSalary(Number(e.target.value))} value={employeeSalary?.toString()} required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Department</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={e => setEmployeeDepartment(e.target.value)} value={employeeDepartment} required>
                            <option>Department</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>



                    <Button variant="primary" type="submit" className="mb-3">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
        </div>
    )
}

export { DepartmentForm, EmployeeForm, FormAction }