
import { useEffect, useState } from 'react';
import  {CustomTable}  from '../component/Table'
import Layout from '../layout/Layout';
import { Department } from '../model/Model';


interface departmentAPIResponse {
    DepartmentId: number,
    DepartmentCode: string,
    DepartmentName: string
}

function Departments() {

    const [department, setDepartment] = useState<Department[]>([]);

    const setInitDepartment = async () => {
        const initialDepartments = await sendRequest();
        let response = await initialDepartments.json();
        console.log("response", response)
        let departmentData = response as departmentAPIResponse[];
        const departmentList = departmentData.map(dep => new Department(dep.DepartmentId, dep.DepartmentCode, dep.DepartmentName))

        setDepartment(departmentList);
    }


    const sendRequest = async (): Promise<Response> => {

        const response = await fetch("https://localhost:7092/GetAllDepartments");

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response;
    }



    useEffect(() => {
        try {
            setInitDepartment()
        } catch (e: any) {
            console.error("API NOT FOUND")
        }

      }, [])

    return (
             <CustomTable props={{department: department}}/>   
    )
}

export default Layout(Departments);
