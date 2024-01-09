import React, { FC, useEffect, useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { Department } from '../model/Model';

enum FormAction {
    EDIT,
    SAVE
}

interface SaveEmployee {
    DepartmentCode: string,
    DepartmentName: string
}

interface UpdateEmployee extends SaveEmployee {
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


    const sendRequest = async (params: SaveEmployee): Promise<Response> => {
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


    const createDepatement = (): SaveEmployee => {
        const newDepartment = {
            DepartmentCode: departmentCode,
            DepartmentName: departmentName
        }

        return newDepartment;
    }

    const updateDepatement = (departmentDate: Department) => {
        const updateEmployee = {
            DepartmentId: departmentDate.id,
            DepartmentCode: departmentCode,
            DepartmentName: departmentName
        }

        return updateEmployee;
    }


    useEffect(() => {
        if (action === FormAction.EDIT && !!departmentDate) {
            setDepartmentCode(departmentDate.code);
            setDepartmentName(departmentDate.name);
        }
    }, [])



    return (
        <Row>
            <Col md={6}>
                <Form onSubmit={handleSubmit}>
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
    )
}


const EmployeeForm: FC = () => {
    return (
        <Row>
            <Col md={6}>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="email" placeholder="dob" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" placeholder="dob" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="age" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control type="number" placeholder="salary" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Department</Form.Label>
                        <Form.Select aria-label="Default select example">
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

    )
}

export { DepartmentForm, EmployeeForm, FormAction }